
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
  export const mockGlobalAccelerator = {
  addCustomRoutingEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  addCustomRoutingEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  addCustomRoutingEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCustomRoutingEndpoints', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  advertiseByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('advertiseByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  advertiseByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('advertiseByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  advertiseByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('advertiseByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  allowCustomRoutingTraffic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allowCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  allowCustomRoutingTrafficAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allowCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  allowCustomRoutingTrafficThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('allowCustomRoutingTraffic', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createCustomRoutingEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createCustomRoutingEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createCustomRoutingEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteCustomRoutingEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteCustomRoutingEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteCustomRoutingEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  denyCustomRoutingTraffic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('denyCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  denyCustomRoutingTrafficAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('denyCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  denyCustomRoutingTrafficThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('denyCustomRoutingTraffic', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deprovisionByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprovisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deprovisionByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprovisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deprovisionByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprovisionByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listAccelerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccelerators', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listAcceleratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccelerators', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listAcceleratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccelerators', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listByoipCidrs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listByoipCidrs', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listByoipCidrsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listByoipCidrs', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listByoipCidrsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listByoipCidrs', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingAccelerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingAccelerators', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingAcceleratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingAccelerators', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingAcceleratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingAccelerators', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingEndpointGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingEndpointGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingEndpointGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingEndpointGroups', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingListeners', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingListeners', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingListeners', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingPortMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingPortMappings', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingPortMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingPortMappings', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingPortMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingPortMappings', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingPortMappingsByDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingPortMappingsByDestination', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingPortMappingsByDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingPortMappingsByDestination', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingPortMappingsByDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomRoutingPortMappingsByDestination', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listEndpointGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listEndpointGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listEndpointGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpointGroups', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listListeners', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listListeners', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listListeners', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  provisionByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  provisionByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  provisionByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  removeCustomRoutingEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  removeCustomRoutingEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  removeCustomRoutingEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeCustomRoutingEndpoints', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateCustomRoutingAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateCustomRoutingAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateCustomRoutingAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  withdrawByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('withdrawByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  withdrawByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('withdrawByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  withdrawByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('withdrawByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
}
