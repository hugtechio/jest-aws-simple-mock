
/**
* @description mocks_v3:mockFinspace module is mocks for AWS-SDK V3
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
export const mockFinspace = {
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxChangeset', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxChangeset', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxChangeset', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxCluster', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxCluster', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxCluster', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxDatabase', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxDatabase', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxDatabase', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxDataview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxDataview', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxDataviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxDataview', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxDataviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxDataview', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxScalingGroup', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxScalingGroup', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxScalingGroup', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxUser', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxUser', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxUser', 'Finspace', Promise.reject(result), true, mock)
  },
  createKxVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxVolume', 'Finspace', Promise.resolve(result), true, mock)
  },
  createKxVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxVolume', 'Finspace', Promise.resolve(result), false, mock)
  },
  createKxVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'createKxVolume', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteKxCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxCluster', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteKxClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxCluster', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteKxClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxCluster', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteKxDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxDatabase', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteKxDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxDatabase', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteKxDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxDatabase', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteKxDataview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxDataview', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteKxDataviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxDataview', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteKxDataviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxDataview', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteKxEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteKxEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteKxEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteKxScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxScalingGroup', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteKxScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxScalingGroup', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteKxScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxScalingGroup', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteKxUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxUser', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteKxUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxUser', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteKxUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxUser', 'Finspace', Promise.reject(result), true, mock)
  },
  deleteKxVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxVolume', 'Finspace', Promise.resolve(result), true, mock)
  },
  deleteKxVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxVolume', 'Finspace', Promise.resolve(result), false, mock)
  },
  deleteKxVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'deleteKxVolume', 'Finspace', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxChangeset', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxChangeset', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxChangeset', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxCluster', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxCluster', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxCluster', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxConnectionString: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxConnectionString', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxConnectionStringAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxConnectionString', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxConnectionStringThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxConnectionString', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxDatabase', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxDatabase', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxDatabase', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxDataview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxDataview', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxDataviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxDataview', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxDataviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxDataview', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxScalingGroup', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxScalingGroup', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxScalingGroup', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxUser', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxUser', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxUser', 'Finspace', Promise.reject(result), true, mock)
  },
  getKxVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxVolume', 'Finspace', Promise.resolve(result), true, mock)
  },
  getKxVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxVolume', 'Finspace', Promise.resolve(result), false, mock)
  },
  getKxVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'getKxVolume', 'Finspace', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listEnvironments', 'Finspace', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listEnvironments', 'Finspace', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listEnvironments', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxChangesets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxChangesets', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxChangesetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxChangesets', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxChangesetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxChangesets', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxClusterNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxClusterNodes', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxClusterNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxClusterNodes', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxClusterNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxClusterNodes', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxClusters', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxClusters', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxClusters', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxDatabases', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxDatabases', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxDatabases', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxDataviews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxDataviews', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxDataviewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxDataviews', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxDataviewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxDataviews', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxEnvironments', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxEnvironments', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxEnvironments', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxScalingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxScalingGroups', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxScalingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxScalingGroups', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxScalingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxScalingGroups', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxUsers', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxUsers', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxUsers', 'Finspace', Promise.reject(result), true, mock)
  },
  listKxVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxVolumes', 'Finspace', Promise.resolve(result), true, mock)
  },
  listKxVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxVolumes', 'Finspace', Promise.resolve(result), false, mock)
  },
  listKxVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listKxVolumes', 'Finspace', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listTagsForResource', 'Finspace', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listTagsForResource', 'Finspace', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'listTagsForResource', 'Finspace', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'tagResource', 'Finspace', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'tagResource', 'Finspace', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'tagResource', 'Finspace', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'untagResource', 'Finspace', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'untagResource', 'Finspace', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'untagResource', 'Finspace', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxClusterCodeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxClusterCodeConfiguration', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxClusterCodeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxClusterCodeConfiguration', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxClusterCodeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxClusterCodeConfiguration', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxClusterDatabases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxClusterDatabases', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxClusterDatabasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxClusterDatabases', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxClusterDatabasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxClusterDatabases', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxDatabase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxDatabase', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxDatabaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxDatabase', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxDatabaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxDatabase', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxDataview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxDataview', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxDataviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxDataview', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxDataviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxDataview', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxEnvironment', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxEnvironment', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxEnvironment', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxEnvironmentNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxEnvironmentNetwork', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxEnvironmentNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxEnvironmentNetwork', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxEnvironmentNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxEnvironmentNetwork', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxUser', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxUser', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxUser', 'Finspace', Promise.reject(result), true, mock)
  },
  updateKxVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxVolume', 'Finspace', Promise.resolve(result), true, mock)
  },
  updateKxVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxVolume', 'Finspace', Promise.resolve(result), false, mock)
  },
  updateKxVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'updateKxVolume', 'Finspace', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'send', 'FinspaceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'send', 'FinspaceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace', 'send', 'FinspaceClient', Promise.reject(result), true, mock)
  }
}
