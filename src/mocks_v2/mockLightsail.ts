
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
  export const mockLightsail = {
  allocateStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  allocateStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  allocateStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allocateStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachCertificateToDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachCertificateToDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachCertificateToDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachCertificateToDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachCertificateToDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachCertificateToDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachInstancesToLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachInstancesToLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachInstancesToLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachInstancesToLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachInstancesToLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachInstancesToLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachLoadBalancerTlsCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachLoadBalancerTlsCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachLoadBalancerTlsCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancerTlsCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  attachStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  attachStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  attachStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  closeInstancePublicPorts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeInstancePublicPorts', 'Lightsail', Promise.resolve(result), true, mock)
  },
  closeInstancePublicPortsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeInstancePublicPorts', 'Lightsail', Promise.resolve(result), false, mock)
  },
  closeInstancePublicPortsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('closeInstancePublicPorts', 'Lightsail', Promise.reject(result), true, mock)
  },
  copySnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copySnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  copySnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copySnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  copySnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copySnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  createBucketAccessKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucketAccessKey', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createBucketAccessKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucketAccessKey', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createBucketAccessKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBucketAccessKey', 'Lightsail', Promise.reject(result), true, mock)
  },
  createCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  createCloudFormationStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationStack', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createCloudFormationStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationStack', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createCloudFormationStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCloudFormationStack', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContactMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactMethod', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContactMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactMethod', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContactMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactMethod', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContainerService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerService', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContainerServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerService', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContainerServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerService', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContainerServiceDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerServiceDeployment', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContainerServiceDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerServiceDeployment', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContainerServiceDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerServiceDeployment', 'Lightsail', Promise.reject(result), true, mock)
  },
  createContainerServiceRegistryLogin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerServiceRegistryLogin', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createContainerServiceRegistryLoginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerServiceRegistryLogin', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createContainerServiceRegistryLoginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContainerServiceRegistryLogin', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDiskFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDiskFromSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDiskFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDiskFromSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDiskFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDiskFromSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDiskSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDiskSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDiskSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDiskSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDiskSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDiskSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'Lightsail', Promise.reject(result), true, mock)
  },
  createDomainEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainEntry', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createDomainEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainEntry', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createDomainEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainEntry', 'Lightsail', Promise.reject(result), true, mock)
  },
  createInstanceSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createInstanceSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createInstanceSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstances', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstances', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstances', 'Lightsail', Promise.reject(result), true, mock)
  },
  createInstancesFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstancesFromSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createInstancesFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstancesFromSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createInstancesFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstancesFromSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  createLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  createLoadBalancerTlsCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createLoadBalancerTlsCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createLoadBalancerTlsCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLoadBalancerTlsCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  createRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  createRelationalDatabaseFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabaseFromSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createRelationalDatabaseFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabaseFromSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createRelationalDatabaseFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabaseFromSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  createRelationalDatabaseSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  createRelationalDatabaseSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  createRelationalDatabaseSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRelationalDatabaseSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlarm', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlarm', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlarm', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteAutoSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutoSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteAutoSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutoSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteAutoSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutoSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteBucketAccessKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketAccessKey', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteBucketAccessKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketAccessKey', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteBucketAccessKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBucketAccessKey', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteContactMethod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContactMethod', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteContactMethodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContactMethod', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteContactMethodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContactMethod', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteContainerImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerImage', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteContainerImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerImage', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteContainerImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerImage', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteContainerService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerService', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteContainerServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerService', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteContainerServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteContainerService', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDiskSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDiskSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDiskSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDiskSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDiskSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDiskSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteDomainEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainEntry', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteDomainEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainEntry', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteDomainEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainEntry', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteInstanceSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteInstanceSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteInstanceSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteKnownHostKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKnownHostKeys', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteKnownHostKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKnownHostKeys', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteKnownHostKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteKnownHostKeys', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteLoadBalancerTlsCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteLoadBalancerTlsCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoadBalancerTlsCertificate', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteLoadBalancerTlsCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoadBalancerTlsCertificate', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  deleteRelationalDatabaseSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  deleteRelationalDatabaseSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  deleteRelationalDatabaseSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRelationalDatabaseSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Lightsail', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Lightsail', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachCertificateFromDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachCertificateFromDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachCertificateFromDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachCertificateFromDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachCertificateFromDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachCertificateFromDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachInstancesFromLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachInstancesFromLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachInstancesFromLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachInstancesFromLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachInstancesFromLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachInstancesFromLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  detachStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  detachStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  detachStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  disableAddOn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAddOn', 'Lightsail', Promise.resolve(result), true, mock)
  },
  disableAddOnAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAddOn', 'Lightsail', Promise.resolve(result), false, mock)
  },
  disableAddOnThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableAddOn', 'Lightsail', Promise.reject(result), true, mock)
  },
  downloadDefaultKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('downloadDefaultKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  downloadDefaultKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('downloadDefaultKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  downloadDefaultKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('downloadDefaultKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  enableAddOn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAddOn', 'Lightsail', Promise.resolve(result), true, mock)
  },
  enableAddOnAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAddOn', 'Lightsail', Promise.resolve(result), false, mock)
  },
  enableAddOnThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableAddOn', 'Lightsail', Promise.reject(result), true, mock)
  },
  exportSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  exportSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  exportSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getActiveNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActiveNames', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getActiveNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActiveNames', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getActiveNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActiveNames', 'Lightsail', Promise.reject(result), true, mock)
  },
  getAlarms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlarms', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getAlarmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlarms', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getAlarmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlarms', 'Lightsail', Promise.reject(result), true, mock)
  },
  getAutoSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getAutoSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getAutoSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprints', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprints', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlueprints', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBucketAccessKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAccessKeys', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketAccessKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAccessKeys', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketAccessKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketAccessKeys', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBucketBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBucketMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBuckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBuckets', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBuckets', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBuckets', 'Lightsail', Promise.reject(result), true, mock)
  },
  getBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificates', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificates', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificates', 'Lightsail', Promise.reject(result), true, mock)
  },
  getCloudFormationStackRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFormationStackRecords', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getCloudFormationStackRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFormationStackRecords', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getCloudFormationStackRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCloudFormationStackRecords', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContactMethods: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactMethods', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContactMethodsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactMethods', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContactMethodsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactMethods', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerAPIMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerAPIMetadata', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerAPIMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerAPIMetadata', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerAPIMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerAPIMetadata', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerImages', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerImages', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerImages', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerLog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerLog', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerLogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerLog', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerLogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerLog', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServiceDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServiceDeployments', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServiceDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServiceDeployments', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServiceDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServiceDeployments', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServiceMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServiceMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServiceMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServiceMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServiceMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServiceMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServicePowers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServicePowers', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServicePowersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServicePowers', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServicePowersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServicePowers', 'Lightsail', Promise.reject(result), true, mock)
  },
  getContainerServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServices', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getContainerServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServices', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getContainerServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContainerServices', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDisk: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDisk', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDiskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDisk', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDiskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDisk', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDiskSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiskSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDiskSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiskSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDiskSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiskSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDiskSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiskSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDiskSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiskSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDiskSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiskSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDisks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDisks', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDisksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDisks', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDisksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDisks', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributionBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributionLatestCacheReset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionLatestCacheReset', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionLatestCacheResetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionLatestCacheReset', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionLatestCacheResetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionLatestCacheReset', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributionMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributionMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDistributions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributions', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDistributionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributions', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDistributionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDistributions', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomain', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomain', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomain', 'Lightsail', Promise.reject(result), true, mock)
  },
  getDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomains', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomains', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomains', 'Lightsail', Promise.reject(result), true, mock)
  },
  getExportSnapshotRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExportSnapshotRecords', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getExportSnapshotRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExportSnapshotRecords', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getExportSnapshotRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExportSnapshotRecords', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceAccessDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceAccessDetails', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceAccessDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceAccessDetails', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceAccessDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceAccessDetails', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstancePortStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstancePortStates', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstancePortStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstancePortStates', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstancePortStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstancePortStates', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstanceState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceState', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstanceStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceState', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstanceStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceState', 'Lightsail', Promise.reject(result), true, mock)
  },
  getInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstances', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstances', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstances', 'Lightsail', Promise.reject(result), true, mock)
  },
  getKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  getKeyPairs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPairs', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getKeyPairsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPairs', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getKeyPairsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getKeyPairs', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancer', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancer', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancer', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancerMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancerMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancerMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancerMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancerMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancerMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancerTlsCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancerTlsCertificates', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancerTlsCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancerTlsCertificates', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancerTlsCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancerTlsCertificates', 'Lightsail', Promise.reject(result), true, mock)
  },
  getLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancers', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancers', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoadBalancers', 'Lightsail', Promise.reject(result), true, mock)
  },
  getOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperation', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperation', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperation', 'Lightsail', Promise.reject(result), true, mock)
  },
  getOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperations', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperations', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperations', 'Lightsail', Promise.reject(result), true, mock)
  },
  getOperationsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperationsForResource', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getOperationsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperationsForResource', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getOperationsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperationsForResource', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegions', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegions', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegions', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseBlueprints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseBlueprints', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseBlueprintsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseBlueprints', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseBlueprintsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseBlueprints', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseBundles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseBundles', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseBundlesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseBundles', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseBundlesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseBundles', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseEvents', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseEvents', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseEvents', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseLogEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseLogEvents', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseLogEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseLogEvents', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseLogEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseLogEvents', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseLogStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseLogStreams', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseLogStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseLogStreams', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseLogStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseLogStreams', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseMasterUserPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseMasterUserPassword', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseMasterUserPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseMasterUserPassword', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseMasterUserPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseMasterUserPassword', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseMetricData', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseMetricData', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseMetricData', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseParameters', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseSnapshot', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseSnapshot', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabaseSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseSnapshots', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabaseSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseSnapshots', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabaseSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabaseSnapshots', 'Lightsail', Promise.reject(result), true, mock)
  },
  getRelationalDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabases', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getRelationalDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabases', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getRelationalDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRelationalDatabases', 'Lightsail', Promise.reject(result), true, mock)
  },
  getStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  getStaticIps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStaticIps', 'Lightsail', Promise.resolve(result), true, mock)
  },
  getStaticIpsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStaticIps', 'Lightsail', Promise.resolve(result), false, mock)
  },
  getStaticIpsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStaticIps', 'Lightsail', Promise.reject(result), true, mock)
  },
  importKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importKeyPair', 'Lightsail', Promise.resolve(result), true, mock)
  },
  importKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importKeyPair', 'Lightsail', Promise.resolve(result), false, mock)
  },
  importKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importKeyPair', 'Lightsail', Promise.reject(result), true, mock)
  },
  isVpcPeered: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('isVpcPeered', 'Lightsail', Promise.resolve(result), true, mock)
  },
  isVpcPeeredAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('isVpcPeered', 'Lightsail', Promise.resolve(result), false, mock)
  },
  isVpcPeeredThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('isVpcPeered', 'Lightsail', Promise.reject(result), true, mock)
  },
  openInstancePublicPorts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openInstancePublicPorts', 'Lightsail', Promise.resolve(result), true, mock)
  },
  openInstancePublicPortsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openInstancePublicPorts', 'Lightsail', Promise.resolve(result), false, mock)
  },
  openInstancePublicPortsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('openInstancePublicPorts', 'Lightsail', Promise.reject(result), true, mock)
  },
  peerVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('peerVpc', 'Lightsail', Promise.resolve(result), true, mock)
  },
  peerVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('peerVpc', 'Lightsail', Promise.resolve(result), false, mock)
  },
  peerVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('peerVpc', 'Lightsail', Promise.reject(result), true, mock)
  },
  putAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlarm', 'Lightsail', Promise.resolve(result), true, mock)
  },
  putAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlarm', 'Lightsail', Promise.resolve(result), false, mock)
  },
  putAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlarm', 'Lightsail', Promise.reject(result), true, mock)
  },
  putInstancePublicPorts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInstancePublicPorts', 'Lightsail', Promise.resolve(result), true, mock)
  },
  putInstancePublicPortsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInstancePublicPorts', 'Lightsail', Promise.resolve(result), false, mock)
  },
  putInstancePublicPortsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInstancePublicPorts', 'Lightsail', Promise.reject(result), true, mock)
  },
  rebootInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  rebootInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  rebootInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  rebootRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  rebootRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  rebootRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  registerContainerImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerImage', 'Lightsail', Promise.resolve(result), true, mock)
  },
  registerContainerImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerImage', 'Lightsail', Promise.resolve(result), false, mock)
  },
  registerContainerImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerImage', 'Lightsail', Promise.reject(result), true, mock)
  },
  releaseStaticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('releaseStaticIp', 'Lightsail', Promise.resolve(result), true, mock)
  },
  releaseStaticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('releaseStaticIp', 'Lightsail', Promise.resolve(result), false, mock)
  },
  releaseStaticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('releaseStaticIp', 'Lightsail', Promise.reject(result), true, mock)
  },
  resetDistributionCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDistributionCache', 'Lightsail', Promise.resolve(result), true, mock)
  },
  resetDistributionCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDistributionCache', 'Lightsail', Promise.resolve(result), false, mock)
  },
  resetDistributionCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDistributionCache', 'Lightsail', Promise.reject(result), true, mock)
  },
  sendContactMethodVerification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendContactMethodVerification', 'Lightsail', Promise.resolve(result), true, mock)
  },
  sendContactMethodVerificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendContactMethodVerification', 'Lightsail', Promise.resolve(result), false, mock)
  },
  sendContactMethodVerificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendContactMethodVerification', 'Lightsail', Promise.reject(result), true, mock)
  },
  setIpAddressType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIpAddressType', 'Lightsail', Promise.resolve(result), true, mock)
  },
  setIpAddressTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIpAddressType', 'Lightsail', Promise.resolve(result), false, mock)
  },
  setIpAddressTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setIpAddressType', 'Lightsail', Promise.reject(result), true, mock)
  },
  setResourceAccessForBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setResourceAccessForBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  setResourceAccessForBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setResourceAccessForBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  setResourceAccessForBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setResourceAccessForBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  startInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  startInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  startInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  startRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  startRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  startRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  stopInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopInstance', 'Lightsail', Promise.resolve(result), true, mock)
  },
  stopInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopInstance', 'Lightsail', Promise.resolve(result), false, mock)
  },
  stopInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopInstance', 'Lightsail', Promise.reject(result), true, mock)
  },
  stopRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  stopRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  stopRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Lightsail', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Lightsail', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Lightsail', Promise.reject(result), true, mock)
  },
  testAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testAlarm', 'Lightsail', Promise.resolve(result), true, mock)
  },
  testAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testAlarm', 'Lightsail', Promise.resolve(result), false, mock)
  },
  testAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testAlarm', 'Lightsail', Promise.reject(result), true, mock)
  },
  unpeerVpc: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unpeerVpc', 'Lightsail', Promise.resolve(result), true, mock)
  },
  unpeerVpcAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unpeerVpc', 'Lightsail', Promise.resolve(result), false, mock)
  },
  unpeerVpcThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unpeerVpc', 'Lightsail', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Lightsail', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Lightsail', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBucket', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBucket', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBucket', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateBucketBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBucketBundle', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateBucketBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBucketBundle', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateBucketBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBucketBundle', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateContainerService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerService', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateContainerServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerService', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateContainerServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerService', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistribution', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistribution', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistribution', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateDistributionBundle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistributionBundle', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateDistributionBundleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistributionBundle', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateDistributionBundleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDistributionBundle', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateDomainEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainEntry', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateDomainEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainEntry', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateDomainEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainEntry', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateLoadBalancerAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLoadBalancerAttribute', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateLoadBalancerAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLoadBalancerAttribute', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateLoadBalancerAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLoadBalancerAttribute', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateRelationalDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelationalDatabase', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateRelationalDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelationalDatabase', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateRelationalDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelationalDatabase', 'Lightsail', Promise.reject(result), true, mock)
  },
  updateRelationalDatabaseParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), true, mock)
  },
  updateRelationalDatabaseParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelationalDatabaseParameters', 'Lightsail', Promise.resolve(result), false, mock)
  },
  updateRelationalDatabaseParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRelationalDatabaseParameters', 'Lightsail', Promise.reject(result), true, mock)
  },
}
