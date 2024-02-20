
/**
* @description mocks_v3:mockDocDBElastic module is mocks for AWS-SDK V3
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
export const mockDocDBElastic = {
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'createCluster', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'createCluster', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'createCluster', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  createClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'createClusterSnapshot', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  createClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'createClusterSnapshot', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  createClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'createClusterSnapshot', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'deleteCluster', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'deleteCluster', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'deleteCluster', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  deleteClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'deleteClusterSnapshot', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  deleteClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'deleteClusterSnapshot', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  deleteClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'deleteClusterSnapshot', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  getCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'getCluster', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  getClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'getCluster', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  getClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'getCluster', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  getClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'getClusterSnapshot', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  getClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'getClusterSnapshot', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  getClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'getClusterSnapshot', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  listClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listClusterSnapshots', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  listClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listClusterSnapshots', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  listClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listClusterSnapshots', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listClusters', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listClusters', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listClusters', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listTagsForResource', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listTagsForResource', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'listTagsForResource', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  restoreClusterFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'restoreClusterFromSnapshot', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  restoreClusterFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'restoreClusterFromSnapshot', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  restoreClusterFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'restoreClusterFromSnapshot', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'tagResource', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'tagResource', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'tagResource', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'untagResource', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'untagResource', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'untagResource', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'updateCluster', 'DocDBElastic', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'updateCluster', 'DocDBElastic', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'updateCluster', 'DocDBElastic', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'send', 'DocDBElasticClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'send', 'DocDBElasticClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-docdb-elastic', 'send', 'DocDBElasticClient', Promise.reject(result), true, mock)
  }
}
