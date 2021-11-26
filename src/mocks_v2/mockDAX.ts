
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
  export const mockDAX = {
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'DAX', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'DAX', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'DAX', Promise.reject(result), true, mock)
  },
  createParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParameterGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  createParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParameterGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  createParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParameterGroup', 'DAX', Promise.reject(result), true, mock)
  },
  createSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubnetGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  createSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubnetGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  createSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubnetGroup', 'DAX', Promise.reject(result), true, mock)
  },
  decreaseReplicationFactor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseReplicationFactor', 'DAX', Promise.resolve(result), true, mock)
  },
  decreaseReplicationFactorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseReplicationFactor', 'DAX', Promise.resolve(result), false, mock)
  },
  decreaseReplicationFactorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decreaseReplicationFactor', 'DAX', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'DAX', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'DAX', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'DAX', Promise.reject(result), true, mock)
  },
  deleteParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameterGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  deleteParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameterGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  deleteParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameterGroup', 'DAX', Promise.reject(result), true, mock)
  },
  deleteSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubnetGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  deleteSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubnetGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  deleteSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubnetGroup', 'DAX', Promise.reject(result), true, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'DAX', Promise.resolve(result), true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'DAX', Promise.resolve(result), false, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'DAX', Promise.reject(result), true, mock)
  },
  describeDefaultParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultParameters', 'DAX', Promise.resolve(result), true, mock)
  },
  describeDefaultParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultParameters', 'DAX', Promise.resolve(result), false, mock)
  },
  describeDefaultParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultParameters', 'DAX', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DAX', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DAX', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DAX', Promise.reject(result), true, mock)
  },
  describeParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameterGroups', 'DAX', Promise.resolve(result), true, mock)
  },
  describeParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameterGroups', 'DAX', Promise.resolve(result), false, mock)
  },
  describeParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameterGroups', 'DAX', Promise.reject(result), true, mock)
  },
  describeParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'DAX', Promise.resolve(result), true, mock)
  },
  describeParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'DAX', Promise.resolve(result), false, mock)
  },
  describeParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'DAX', Promise.reject(result), true, mock)
  },
  describeSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubnetGroups', 'DAX', Promise.resolve(result), true, mock)
  },
  describeSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubnetGroups', 'DAX', Promise.resolve(result), false, mock)
  },
  describeSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubnetGroups', 'DAX', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DAX', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DAX', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DAX', Promise.reject(result), true, mock)
  },
  increaseReplicationFactor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseReplicationFactor', 'DAX', Promise.resolve(result), true, mock)
  },
  increaseReplicationFactorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseReplicationFactor', 'DAX', Promise.resolve(result), false, mock)
  },
  increaseReplicationFactorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('increaseReplicationFactor', 'DAX', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'DAX', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'DAX', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'DAX', Promise.reject(result), true, mock)
  },
  rebootNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootNode', 'DAX', Promise.resolve(result), true, mock)
  },
  rebootNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootNode', 'DAX', Promise.resolve(result), false, mock)
  },
  rebootNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootNode', 'DAX', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DAX', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DAX', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DAX', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DAX', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DAX', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DAX', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'DAX', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'DAX', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'DAX', Promise.reject(result), true, mock)
  },
  updateParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParameterGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  updateParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParameterGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  updateParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateParameterGroup', 'DAX', Promise.reject(result), true, mock)
  },
  updateSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubnetGroup', 'DAX', Promise.resolve(result), true, mock)
  },
  updateSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubnetGroup', 'DAX', Promise.resolve(result), false, mock)
  },
  updateSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubnetGroup', 'DAX', Promise.reject(result), true, mock)
  },
}
