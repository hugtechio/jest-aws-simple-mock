
/**
* @description mocks_v3:mockLightsail module is mocks for AWS-SDK V3
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
export const mockLightsail = {
  allocateStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'allocateStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  allocateStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'allocateStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  allocateStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'allocateStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachCertificateToDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachCertificateToDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachCertificateToDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachCertificateToDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachCertificateToDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachCertificateToDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachInstancesToLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachInstancesToLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachInstancesToLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachInstancesToLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachInstancesToLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachInstancesToLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachLoadBalancerTlsCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachLoadBalancerTlsCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachLoadBalancerTlsCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachLoadBalancerTlsCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'attachStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  closeInstancePublicPorts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'closeInstancePublicPorts', 'Lightsail', Promise.resolve(result), true, mock)
  },
  closeInstancePublicPortsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'closeInstancePublicPorts', 'Lightsail', Promise.resolve(result), false, mock)
  },
  closeInstancePublicPortsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'closeInstancePublicPorts', 'Lightsail', Promise.reject(result), true, mock)
  },
  copySnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'copySnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  copySnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'copySnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  copySnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'copySnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createBucketAccessKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createBucketAccessKey', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createBucketAccessKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createBucketAccessKey', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createBucketAccessKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createBucketAccessKey', 'Lightsail', Promise.reject(result), true, mock)
  },
  createBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  createCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  createCloudFormationStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createCloudFormationStack', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createCloudFormationStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createCloudFormationStack', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createCloudFormationStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createCloudFormationStack', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContactMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContactMethod', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContactMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContactMethod', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContactMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContactMethod', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContainerService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerService', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContainerServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerService', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContainerServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerService', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContainerServiceDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerServiceDeployment', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContainerServiceDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerServiceDeployment', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContainerServiceDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerServiceDeployment', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContainerServiceRegistryLogin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerServiceRegistryLogin', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContainerServiceRegistryLoginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerServiceRegistryLogin', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContainerServiceRegistryLoginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createContainerServiceRegistryLogin', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDiskFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDiskFromSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDiskFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDiskFromSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDiskFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDiskFromSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDiskSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDiskSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDiskSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDiskSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDiskSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDiskSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDomain', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDomain', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDomain', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDomainEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDomainEntry', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDomainEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDomainEntry', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDomainEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createDomainEntry', 'Lightsail', Promise.reject(result), true, mock)
  },
  createGUISessionAccessDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createGUISessionAccessDetails', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createGUISessionAccessDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createGUISessionAccessDetails', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createGUISessionAccessDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createGUISessionAccessDetails', 'Lightsail', Promise.reject(result), true, mock)
  },
  createInstanceSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstanceSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createInstanceSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstanceSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createInstanceSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstanceSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstances', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstances', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstances', 'Lightsail', Promise.reject(result), true, mock)
  },
  createInstancesFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstancesFromSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createInstancesFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstancesFromSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createInstancesFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createInstancesFromSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  createLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  createLoadBalancerTlsCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createLoadBalancerTlsCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createLoadBalancerTlsCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createLoadBalancerTlsCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  createRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  createRelationalDatabaseFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabaseFromSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createRelationalDatabaseFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabaseFromSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createRelationalDatabaseFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabaseFromSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createRelationalDatabaseSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createRelationalDatabaseSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createRelationalDatabaseSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'createRelationalDatabaseSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteAlarm', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteAlarm', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteAlarm', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteAutoSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteAutoSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteAutoSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteAutoSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteAutoSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteAutoSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteBucketAccessKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteBucketAccessKey', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteBucketAccessKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteBucketAccessKey', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteBucketAccessKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteBucketAccessKey', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteContactMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContactMethod', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteContactMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContactMethod', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteContactMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContactMethod', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteContainerImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContainerImage', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteContainerImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContainerImage', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteContainerImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContainerImage', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteContainerService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContainerService', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteContainerServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContainerService', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteContainerServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteContainerService', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDiskSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDiskSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDiskSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDiskSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDiskSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDiskSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDomain', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDomain', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDomain', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDomainEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDomainEntry', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDomainEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDomainEntry', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDomainEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteDomainEntry', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteInstanceSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteInstanceSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteInstanceSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteInstanceSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteInstanceSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteInstanceSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteKnownHostKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteKnownHostKeys', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteKnownHostKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteKnownHostKeys', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteKnownHostKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteKnownHostKeys', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteLoadBalancerTlsCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerTlsCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerTlsCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteLoadBalancerTlsCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteRelationalDatabaseSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteRelationalDatabaseSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteRelationalDatabaseSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'deleteRelationalDatabaseSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachCertificateFromDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachCertificateFromDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachCertificateFromDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachCertificateFromDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachCertificateFromDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachCertificateFromDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachInstancesFromLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachInstancesFromLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachInstancesFromLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachInstancesFromLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachInstancesFromLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachInstancesFromLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'detachStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  disableAddOn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'disableAddOn', 'Lightsail', Promise.resolve(result), true, mock)
  },
  disableAddOnAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'disableAddOn', 'Lightsail', Promise.resolve(result), false, mock)
  },
  disableAddOnThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'disableAddOn', 'Lightsail', Promise.reject(result), true, mock)
  },
  downloadDefaultKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'downloadDefaultKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  downloadDefaultKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'downloadDefaultKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  downloadDefaultKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'downloadDefaultKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  enableAddOn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'enableAddOn', 'Lightsail', Promise.resolve(result), true, mock)
  },
  enableAddOnAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'enableAddOn', 'Lightsail', Promise.resolve(result), false, mock)
  },
  enableAddOnThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'enableAddOn', 'Lightsail', Promise.reject(result), true, mock)
  },
  exportSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'exportSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  exportSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'exportSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  exportSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'exportSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getActiveNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getActiveNames', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getActiveNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getActiveNames', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getActiveNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getActiveNames', 'Lightsail', Promise.reject(result), true, mock)
  },
  getAlarms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getAlarms', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getAlarmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getAlarms', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getAlarmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getAlarms', 'Lightsail', Promise.reject(result), true, mock)
  },
  getAutoSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getAutoSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getAutoSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getAutoSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getAutoSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getAutoSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBlueprints', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBlueprints', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBlueprints', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBucketAccessKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketAccessKeys', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketAccessKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketAccessKeys', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketAccessKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketAccessKeys', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBucketBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBucketMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBucketMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBuckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBuckets', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBuckets', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBuckets', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCertificates', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCertificates', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCertificates', 'Lightsail', Promise.reject(result), true, mock)
  },
  getCloudFormationStackRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCloudFormationStackRecords', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getCloudFormationStackRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCloudFormationStackRecords', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getCloudFormationStackRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCloudFormationStackRecords', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContactMethods: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContactMethods', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContactMethodsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContactMethods', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContactMethodsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContactMethods', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerAPIMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerAPIMetadata', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerAPIMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerAPIMetadata', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerAPIMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerAPIMetadata', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerImages', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerImages', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerImages', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerLog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerLog', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerLogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerLog', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerLogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerLog', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServiceDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServiceDeployments', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServiceDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServiceDeployments', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServiceDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServiceDeployments', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServiceMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServiceMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServiceMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServiceMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServiceMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServiceMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServicePowers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServicePowers', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServicePowersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServicePowers', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServicePowersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServicePowers', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServices', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServices', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getContainerServices', 'Lightsail', Promise.reject(result), true, mock)
  },
  getCostEstimate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCostEstimate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getCostEstimateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCostEstimate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getCostEstimateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getCostEstimate', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDiskSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDiskSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDiskSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDiskSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDiskSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDiskSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDiskSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDiskSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDiskSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDiskSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDiskSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDiskSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDisks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDisks', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDisksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDisks', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDisksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDisks', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributionBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributionLatestCacheReset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionLatestCacheReset', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionLatestCacheResetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionLatestCacheReset', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionLatestCacheResetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionLatestCacheReset', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributionMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributionMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributions', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributions', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDistributions', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDomain', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDomain', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDomain', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDomains', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDomains', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getDomains', 'Lightsail', Promise.reject(result), true, mock)
  },
  getExportSnapshotRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getExportSnapshotRecords', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getExportSnapshotRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getExportSnapshotRecords', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getExportSnapshotRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getExportSnapshotRecords', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceAccessDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceAccessDetails', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceAccessDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceAccessDetails', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceAccessDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceAccessDetails', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstancePortStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstancePortStates', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstancePortStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstancePortStates', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstancePortStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstancePortStates', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceState', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceState', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstanceState', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstances', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstances', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getInstances', 'Lightsail', Promise.reject(result), true, mock)
  },
  getKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  getKeyPairs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getKeyPairs', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getKeyPairsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getKeyPairs', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getKeyPairsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getKeyPairs', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancerMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancerMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancerMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancerTlsCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerTlsCertificates', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancerTlsCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerTlsCertificates', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancerTlsCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerTlsCertificates', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancerTlsPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerTlsPolicies', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancerTlsPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerTlsPolicies', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancerTlsPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancerTlsPolicies', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancers', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancers', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getLoadBalancers', 'Lightsail', Promise.reject(result), true, mock)
  },
  getOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperation', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperation', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperation', 'Lightsail', Promise.reject(result), true, mock)
  },
  getOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperations', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperations', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperations', 'Lightsail', Promise.reject(result), true, mock)
  },
  getOperationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperationsForResource', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getOperationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperationsForResource', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getOperationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getOperationsForResource', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRegions', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRegions', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRegions', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseBlueprints', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseBlueprints', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseBlueprints', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseEvents', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseEvents', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseEvents', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseLogEvents', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseLogEvents', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseLogEvents', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseLogStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseLogStreams', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseLogStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseLogStreams', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseLogStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseLogStreams', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseMasterUserPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseMasterUserPassword', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseMasterUserPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseMasterUserPassword', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseMasterUserPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseMasterUserPassword', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseParameters', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabaseSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabases', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabases', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getRelationalDatabases', 'Lightsail', Promise.reject(result), true, mock)
  },
  getSetupHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getSetupHistory', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getSetupHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getSetupHistory', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getSetupHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getSetupHistory', 'Lightsail', Promise.reject(result), true, mock)
  },
  getStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  getStaticIps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getStaticIps', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getStaticIpsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getStaticIps', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getStaticIpsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'getStaticIps', 'Lightsail', Promise.reject(result), true, mock)
  },
  importKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'importKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  importKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'importKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  importKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'importKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  isVpcPeered: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'isVpcPeered', 'Lightsail', Promise.resolve(result), true, mock)
  },
  isVpcPeeredAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'isVpcPeered', 'Lightsail', Promise.resolve(result), false, mock)
  },
  isVpcPeeredThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'isVpcPeered', 'Lightsail', Promise.reject(result), true, mock)
  },
  openInstancePublicPorts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'openInstancePublicPorts', 'Lightsail', Promise.resolve(result), true, mock)
  },
  openInstancePublicPortsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'openInstancePublicPorts', 'Lightsail', Promise.resolve(result), false, mock)
  },
  openInstancePublicPortsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'openInstancePublicPorts', 'Lightsail', Promise.reject(result), true, mock)
  },
  peerVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'peerVpc', 'Lightsail', Promise.resolve(result), true, mock)
  },
  peerVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'peerVpc', 'Lightsail', Promise.resolve(result), false, mock)
  },
  peerVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'peerVpc', 'Lightsail', Promise.reject(result), true, mock)
  },
  putAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'putAlarm', 'Lightsail', Promise.resolve(result), true, mock)
  },
  putAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'putAlarm', 'Lightsail', Promise.resolve(result), false, mock)
  },
  putAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'putAlarm', 'Lightsail', Promise.reject(result), true, mock)
  },
  putInstancePublicPorts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'putInstancePublicPorts', 'Lightsail', Promise.resolve(result), true, mock)
  },
  putInstancePublicPortsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'putInstancePublicPorts', 'Lightsail', Promise.resolve(result), false, mock)
  },
  putInstancePublicPortsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'putInstancePublicPorts', 'Lightsail', Promise.reject(result), true, mock)
  },
  rebootInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'rebootInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  rebootInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'rebootInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  rebootInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'rebootInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  rebootRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'rebootRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  rebootRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'rebootRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  rebootRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'rebootRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  registerContainerImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'registerContainerImage', 'Lightsail', Promise.resolve(result), true, mock)
  },
  registerContainerImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'registerContainerImage', 'Lightsail', Promise.resolve(result), false, mock)
  },
  registerContainerImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'registerContainerImage', 'Lightsail', Promise.reject(result), true, mock)
  },
  releaseStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'releaseStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  releaseStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'releaseStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  releaseStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'releaseStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  resetDistributionCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'resetDistributionCache', 'Lightsail', Promise.resolve(result), true, mock)
  },
  resetDistributionCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'resetDistributionCache', 'Lightsail', Promise.resolve(result), false, mock)
  },
  resetDistributionCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'resetDistributionCache', 'Lightsail', Promise.reject(result), true, mock)
  },
  sendContactMethodVerification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'sendContactMethodVerification', 'Lightsail', Promise.resolve(result), true, mock)
  },
  sendContactMethodVerificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'sendContactMethodVerification', 'Lightsail', Promise.resolve(result), false, mock)
  },
  sendContactMethodVerificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'sendContactMethodVerification', 'Lightsail', Promise.reject(result), true, mock)
  },
  setIpAddressType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setIpAddressType', 'Lightsail', Promise.resolve(result), true, mock)
  },
  setIpAddressTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setIpAddressType', 'Lightsail', Promise.resolve(result), false, mock)
  },
  setIpAddressTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setIpAddressType', 'Lightsail', Promise.reject(result), true, mock)
  },
  setResourceAccessForBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setResourceAccessForBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  setResourceAccessForBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setResourceAccessForBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  setResourceAccessForBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setResourceAccessForBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  setupInstanceHttps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setupInstanceHttps', 'Lightsail', Promise.resolve(result), true, mock)
  },
  setupInstanceHttpsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setupInstanceHttps', 'Lightsail', Promise.resolve(result), false, mock)
  },
  setupInstanceHttpsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'setupInstanceHttps', 'Lightsail', Promise.reject(result), true, mock)
  },
  startGUISession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startGUISession', 'Lightsail', Promise.resolve(result), true, mock)
  },
  startGUISessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startGUISession', 'Lightsail', Promise.resolve(result), false, mock)
  },
  startGUISessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startGUISession', 'Lightsail', Promise.reject(result), true, mock)
  },
  startInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  startInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  startInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  startRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  startRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  startRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'startRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  stopGUISession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopGUISession', 'Lightsail', Promise.resolve(result), true, mock)
  },
  stopGUISessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopGUISession', 'Lightsail', Promise.resolve(result), false, mock)
  },
  stopGUISessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopGUISession', 'Lightsail', Promise.reject(result), true, mock)
  },
  stopInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  stopInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  stopInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  stopRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  stopRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  stopRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'stopRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'tagResource', 'Lightsail', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'tagResource', 'Lightsail', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'tagResource', 'Lightsail', Promise.reject(result), true, mock)
  },
  testAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'testAlarm', 'Lightsail', Promise.resolve(result), true, mock)
  },
  testAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'testAlarm', 'Lightsail', Promise.resolve(result), false, mock)
  },
  testAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'testAlarm', 'Lightsail', Promise.reject(result), true, mock)
  },
  unpeerVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'unpeerVpc', 'Lightsail', Promise.resolve(result), true, mock)
  },
  unpeerVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'unpeerVpc', 'Lightsail', Promise.resolve(result), false, mock)
  },
  unpeerVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'unpeerVpc', 'Lightsail', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'untagResource', 'Lightsail', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'untagResource', 'Lightsail', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'untagResource', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateBucketBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateBucketBundle', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateBucketBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateBucketBundle', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateBucketBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateBucketBundle', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateContainerService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateContainerService', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateContainerServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateContainerService', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateContainerServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateContainerService', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateDistributionBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDistributionBundle', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateDistributionBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDistributionBundle', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateDistributionBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDistributionBundle', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateDomainEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDomainEntry', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateDomainEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDomainEntry', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateDomainEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateDomainEntry', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateInstanceMetadataOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateInstanceMetadataOptions', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateInstanceMetadataOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateInstanceMetadataOptions', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateInstanceMetadataOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateInstanceMetadataOptions', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateLoadBalancerAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateLoadBalancerAttribute', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateLoadBalancerAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateLoadBalancerAttribute', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateLoadBalancerAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateLoadBalancerAttribute', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateRelationalDatabaseParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateRelationalDatabaseParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateRelationalDatabaseParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'updateRelationalDatabaseParameters', 'Lightsail', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'send', 'LightsailClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'send', 'LightsailClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lightsail', 'send', 'LightsailClient', Promise.reject(result), true, mock)
  }
}
