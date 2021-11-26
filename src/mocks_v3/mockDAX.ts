
/**
* @description mocks_v3:mockDAX module is mocks for AWS-SDK V3
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

  export const mockDAX = {
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createCluster', 'DAX', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createCluster', 'DAX', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createCluster', 'DAX', Promise.reject(result), true, mock)
  },
  createParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createParameterGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  createParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createParameterGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  createParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createParameterGroup', 'DAX', Promise.reject(result), true, mock)
  },
  createSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createSubnetGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  createSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createSubnetGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  createSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'createSubnetGroup', 'DAX', Promise.reject(result), true, mock)
  },
  decreaseReplicationFactor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'decreaseReplicationFactor', 'DAX', Promise.resolve(result), true, mock)
  },
  decreaseReplicationFactorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'decreaseReplicationFactor', 'DAX', Promise.resolve(result), false, mock)
  },
  decreaseReplicationFactorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'decreaseReplicationFactor', 'DAX', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteCluster', 'DAX', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteCluster', 'DAX', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteCluster', 'DAX', Promise.reject(result), true, mock)
  },
  deleteParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteParameterGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  deleteParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteParameterGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  deleteParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteParameterGroup', 'DAX', Promise.reject(result), true, mock)
  },
  deleteSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteSubnetGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  deleteSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteSubnetGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  deleteSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'deleteSubnetGroup', 'DAX', Promise.reject(result), true, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeClusters', 'DAX', Promise.resolve(result), true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeClusters', 'DAX', Promise.resolve(result), false, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeClusters', 'DAX', Promise.reject(result), true, mock)
  },
  describeDefaultParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeDefaultParameters', 'DAX', Promise.resolve(result), true, mock)
  },
  describeDefaultParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeDefaultParameters', 'DAX', Promise.resolve(result), false, mock)
  },
  describeDefaultParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeDefaultParameters', 'DAX', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeEvents', 'DAX', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeEvents', 'DAX', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeEvents', 'DAX', Promise.reject(result), true, mock)
  },
  describeParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeParameterGroups', 'DAX', Promise.resolve(result), true, mock)
  },
  describeParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeParameterGroups', 'DAX', Promise.resolve(result), false, mock)
  },
  describeParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeParameterGroups', 'DAX', Promise.reject(result), true, mock)
  },
  describeParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeParameters', 'DAX', Promise.resolve(result), true, mock)
  },
  describeParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeParameters', 'DAX', Promise.resolve(result), false, mock)
  },
  describeParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeParameters', 'DAX', Promise.reject(result), true, mock)
  },
  describeSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeSubnetGroups', 'DAX', Promise.resolve(result), true, mock)
  },
  describeSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeSubnetGroups', 'DAX', Promise.resolve(result), false, mock)
  },
  describeSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'describeSubnetGroups', 'DAX', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'destroy', 'DAX', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'destroy', 'DAX', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'destroy', 'DAX', Promise.reject(result), true, mock)
  },
  increaseReplicationFactor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'increaseReplicationFactor', 'DAX', Promise.resolve(result), true, mock)
  },
  increaseReplicationFactorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'increaseReplicationFactor', 'DAX', Promise.resolve(result), false, mock)
  },
  increaseReplicationFactorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'increaseReplicationFactor', 'DAX', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'listTags', 'DAX', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'listTags', 'DAX', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'listTags', 'DAX', Promise.reject(result), true, mock)
  },
  rebootNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'rebootNode', 'DAX', Promise.resolve(result), true, mock)
  },
  rebootNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'rebootNode', 'DAX', Promise.resolve(result), false, mock)
  },
  rebootNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'rebootNode', 'DAX', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'tagResource', 'DAX', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'tagResource', 'DAX', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'tagResource', 'DAX', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'untagResource', 'DAX', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'untagResource', 'DAX', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'untagResource', 'DAX', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateCluster', 'DAX', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateCluster', 'DAX', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateCluster', 'DAX', Promise.reject(result), true, mock)
  },
  updateParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateParameterGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  updateParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateParameterGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  updateParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateParameterGroup', 'DAX', Promise.reject(result), true, mock)
  },
  updateSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateSubnetGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  updateSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateSubnetGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  updateSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'updateSubnetGroup', 'DAX', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'send', 'DAXClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'send', 'DAXClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-dax', 'send', 'DAXClient', Promise.reject(result), true, mock)
  }
}