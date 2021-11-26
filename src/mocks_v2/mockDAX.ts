
/**
* @description mocks_v2:mockDAX.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockDAX = {
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'DAX', result, true, true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'DAX', result, false, true, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'DAX', result, true, false, mock)
  },
  createParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParameterGroup', 'DAX', result, true, true, mock)
  },
  createParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParameterGroup', 'DAX', result, false, true, mock)
  },
  createParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParameterGroup', 'DAX', result, true, false, mock)
  },
  createSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubnetGroup', 'DAX', result, true, true, mock)
  },
  createSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubnetGroup', 'DAX', result, false, true, mock)
  },
  createSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubnetGroup', 'DAX', result, true, false, mock)
  },
  decreaseReplicationFactor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseReplicationFactor', 'DAX', result, true, true, mock)
  },
  decreaseReplicationFactorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseReplicationFactor', 'DAX', result, false, true, mock)
  },
  decreaseReplicationFactorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseReplicationFactor', 'DAX', result, true, false, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'DAX', result, true, true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'DAX', result, false, true, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'DAX', result, true, false, mock)
  },
  deleteParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameterGroup', 'DAX', result, true, true, mock)
  },
  deleteParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameterGroup', 'DAX', result, false, true, mock)
  },
  deleteParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameterGroup', 'DAX', result, true, false, mock)
  },
  deleteSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubnetGroup', 'DAX', result, true, true, mock)
  },
  deleteSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubnetGroup', 'DAX', result, false, true, mock)
  },
  deleteSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubnetGroup', 'DAX', result, true, false, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'DAX', result, true, true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'DAX', result, false, true, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'DAX', result, true, false, mock)
  },
  describeDefaultParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultParameters', 'DAX', result, true, true, mock)
  },
  describeDefaultParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultParameters', 'DAX', result, false, true, mock)
  },
  describeDefaultParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultParameters', 'DAX', result, true, false, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DAX', result, true, true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DAX', result, false, true, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DAX', result, true, false, mock)
  },
  describeParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameterGroups', 'DAX', result, true, true, mock)
  },
  describeParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameterGroups', 'DAX', result, false, true, mock)
  },
  describeParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameterGroups', 'DAX', result, true, false, mock)
  },
  describeParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'DAX', result, true, true, mock)
  },
  describeParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'DAX', result, false, true, mock)
  },
  describeParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'DAX', result, true, false, mock)
  },
  describeSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubnetGroups', 'DAX', result, true, true, mock)
  },
  describeSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubnetGroups', 'DAX', result, false, true, mock)
  },
  describeSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubnetGroups', 'DAX', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DAX', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DAX', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DAX', result, true, false, mock)
  },
  increaseReplicationFactor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseReplicationFactor', 'DAX', result, true, true, mock)
  },
  increaseReplicationFactorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseReplicationFactor', 'DAX', result, false, true, mock)
  },
  increaseReplicationFactorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseReplicationFactor', 'DAX', result, true, false, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'DAX', result, true, true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'DAX', result, false, true, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'DAX', result, true, false, mock)
  },
  rebootNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootNode', 'DAX', result, true, true, mock)
  },
  rebootNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootNode', 'DAX', result, false, true, mock)
  },
  rebootNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootNode', 'DAX', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DAX', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DAX', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DAX', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DAX', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DAX', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DAX', result, true, false, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'DAX', result, true, true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'DAX', result, false, true, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'DAX', result, true, false, mock)
  },
  updateParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParameterGroup', 'DAX', result, true, true, mock)
  },
  updateParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParameterGroup', 'DAX', result, false, true, mock)
  },
  updateParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParameterGroup', 'DAX', result, true, false, mock)
  },
  updateSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubnetGroup', 'DAX', result, true, true, mock)
  },
  updateSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubnetGroup', 'DAX', result, false, true, mock)
  },
  updateSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubnetGroup', 'DAX', result, true, false, mock)
  },
}
