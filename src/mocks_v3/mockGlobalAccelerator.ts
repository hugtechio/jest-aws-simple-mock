
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockGlobalAccelerator = {
  addCustomRoutingEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'addCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  addCustomRoutingEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'addCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  addCustomRoutingEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'addCustomRoutingEndpoints', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  advertiseByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'advertiseByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  advertiseByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'advertiseByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  advertiseByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'advertiseByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  allowCustomRoutingTraffic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'allowCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  allowCustomRoutingTrafficAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'allowCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  allowCustomRoutingTrafficThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'allowCustomRoutingTraffic', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createCustomRoutingEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createCustomRoutingEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createCustomRoutingEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  createListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  createListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  createListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'createListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteCustomRoutingEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteCustomRoutingEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteCustomRoutingEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deleteListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deleteListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deleteListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deleteListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  denyCustomRoutingTraffic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'denyCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  denyCustomRoutingTrafficAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'denyCustomRoutingTraffic', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  denyCustomRoutingTrafficThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'denyCustomRoutingTraffic', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  deprovisionByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deprovisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  deprovisionByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deprovisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  deprovisionByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'deprovisionByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  describeListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  describeListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  describeListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'describeListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'destroy', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'destroy', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'destroy', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listAccelerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listAccelerators', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listAcceleratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listAccelerators', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listAcceleratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listAccelerators', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listByoipCidrs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listByoipCidrs', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listByoipCidrsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listByoipCidrs', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listByoipCidrsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listByoipCidrs', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingAccelerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingAccelerators', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingAcceleratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingAccelerators', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingAcceleratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingAccelerators', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingEndpointGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingEndpointGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingEndpointGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingEndpointGroups', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingListeners', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingListeners', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingListeners', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingPortMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingPortMappings', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingPortMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingPortMappings', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingPortMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingPortMappings', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listCustomRoutingPortMappingsByDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingPortMappingsByDestination', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listCustomRoutingPortMappingsByDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingPortMappingsByDestination', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listCustomRoutingPortMappingsByDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listCustomRoutingPortMappingsByDestination', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listEndpointGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listEndpointGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listEndpointGroups', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listEndpointGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listEndpointGroups', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listListeners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listListeners', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listListenersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listListeners', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listListenersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listListeners', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listTagsForResource', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listTagsForResource', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'listTagsForResource', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  provisionByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'provisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  provisionByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'provisionByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  provisionByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'provisionByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  removeCustomRoutingEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'removeCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  removeCustomRoutingEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'removeCustomRoutingEndpoints', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  removeCustomRoutingEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'removeCustomRoutingEndpoints', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'tagResource', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'tagResource', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'tagResource', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'untagResource', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'untagResource', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'untagResource', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateCustomRoutingAccelerator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateCustomRoutingAcceleratorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingAccelerator', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateCustomRoutingAcceleratorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingAccelerator', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateCustomRoutingAcceleratorAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateCustomRoutingAcceleratorAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateCustomRoutingAcceleratorAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingAcceleratorAttributes', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateCustomRoutingListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateCustomRoutingListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateCustomRoutingListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateCustomRoutingListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateEndpointGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateEndpointGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateEndpointGroup', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateEndpointGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateEndpointGroup', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  updateListener: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateListener', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  updateListenerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateListener', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  updateListenerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'updateListener', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  withdrawByoipCidr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'withdrawByoipCidr', 'GlobalAccelerator', Promise.resolve(result), true, mock)
  },
  withdrawByoipCidrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'withdrawByoipCidr', 'GlobalAccelerator', Promise.resolve(result), false, mock)
  },
  withdrawByoipCidrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'withdrawByoipCidr', 'GlobalAccelerator', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'send', 'GlobalAcceleratorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'send', 'GlobalAcceleratorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-global-accelerator', 'send', 'GlobalAcceleratorClient', Promise.reject(result), true, mock)
  }
}