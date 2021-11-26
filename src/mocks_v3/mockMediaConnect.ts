
/**
* @description mocks_v3:mockMediaConnect module is mocks for AWS-SDK V3
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

  export const mockMediaConnect = {
  addFlowMediaStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowMediaStreams', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  addFlowMediaStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowMediaStreams', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  addFlowMediaStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowMediaStreams', 'MediaConnect', Promise.reject(result), true, mock)
  },
  addFlowOutputs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowOutputs', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  addFlowOutputsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowOutputs', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  addFlowOutputsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowOutputs', 'MediaConnect', Promise.reject(result), true, mock)
  },
  addFlowSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowSources', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  addFlowSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowSources', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  addFlowSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowSources', 'MediaConnect', Promise.reject(result), true, mock)
  },
  addFlowVpcInterfaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowVpcInterfaces', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  addFlowVpcInterfacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowVpcInterfaces', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  addFlowVpcInterfacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'addFlowVpcInterfaces', 'MediaConnect', Promise.reject(result), true, mock)
  },
  createFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'createFlow', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  createFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'createFlow', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  createFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'createFlow', 'MediaConnect', Promise.reject(result), true, mock)
  },
  deleteFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'deleteFlow', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  deleteFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'deleteFlow', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  deleteFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'deleteFlow', 'MediaConnect', Promise.reject(result), true, mock)
  },
  describeFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeFlow', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  describeFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeFlow', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  describeFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeFlow', 'MediaConnect', Promise.reject(result), true, mock)
  },
  describeOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeOffering', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  describeOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeOffering', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  describeOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeOffering', 'MediaConnect', Promise.reject(result), true, mock)
  },
  describeReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeReservation', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  describeReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeReservation', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  describeReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'describeReservation', 'MediaConnect', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'destroy', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'destroy', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'destroy', 'MediaConnect', Promise.reject(result), true, mock)
  },
  grantFlowEntitlements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'grantFlowEntitlements', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  grantFlowEntitlementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'grantFlowEntitlements', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  grantFlowEntitlementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'grantFlowEntitlements', 'MediaConnect', Promise.reject(result), true, mock)
  },
  listEntitlements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listEntitlements', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  listEntitlementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listEntitlements', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  listEntitlementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listEntitlements', 'MediaConnect', Promise.reject(result), true, mock)
  },
  listFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listFlows', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  listFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listFlows', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  listFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listFlows', 'MediaConnect', Promise.reject(result), true, mock)
  },
  listOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listOfferings', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  listOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listOfferings', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  listOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listOfferings', 'MediaConnect', Promise.reject(result), true, mock)
  },
  listReservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listReservations', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  listReservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listReservations', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  listReservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listReservations', 'MediaConnect', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listTagsForResource', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listTagsForResource', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'listTagsForResource', 'MediaConnect', Promise.reject(result), true, mock)
  },
  purchaseOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'purchaseOffering', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  purchaseOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'purchaseOffering', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  purchaseOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'purchaseOffering', 'MediaConnect', Promise.reject(result), true, mock)
  },
  removeFlowMediaStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowMediaStream', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  removeFlowMediaStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowMediaStream', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  removeFlowMediaStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowMediaStream', 'MediaConnect', Promise.reject(result), true, mock)
  },
  removeFlowOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowOutput', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  removeFlowOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowOutput', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  removeFlowOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowOutput', 'MediaConnect', Promise.reject(result), true, mock)
  },
  removeFlowSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowSource', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  removeFlowSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowSource', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  removeFlowSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowSource', 'MediaConnect', Promise.reject(result), true, mock)
  },
  removeFlowVpcInterface: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowVpcInterface', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  removeFlowVpcInterfaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowVpcInterface', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  removeFlowVpcInterfaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'removeFlowVpcInterface', 'MediaConnect', Promise.reject(result), true, mock)
  },
  revokeFlowEntitlement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'revokeFlowEntitlement', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  revokeFlowEntitlementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'revokeFlowEntitlement', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  revokeFlowEntitlementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'revokeFlowEntitlement', 'MediaConnect', Promise.reject(result), true, mock)
  },
  startFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'startFlow', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  startFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'startFlow', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  startFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'startFlow', 'MediaConnect', Promise.reject(result), true, mock)
  },
  stopFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'stopFlow', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  stopFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'stopFlow', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  stopFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'stopFlow', 'MediaConnect', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'tagResource', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'tagResource', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'tagResource', 'MediaConnect', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'untagResource', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'untagResource', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'untagResource', 'MediaConnect', Promise.reject(result), true, mock)
  },
  updateFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlow', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  updateFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlow', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  updateFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlow', 'MediaConnect', Promise.reject(result), true, mock)
  },
  updateFlowEntitlement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowEntitlement', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  updateFlowEntitlementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowEntitlement', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  updateFlowEntitlementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowEntitlement', 'MediaConnect', Promise.reject(result), true, mock)
  },
  updateFlowMediaStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowMediaStream', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  updateFlowMediaStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowMediaStream', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  updateFlowMediaStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowMediaStream', 'MediaConnect', Promise.reject(result), true, mock)
  },
  updateFlowOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowOutput', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  updateFlowOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowOutput', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  updateFlowOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowOutput', 'MediaConnect', Promise.reject(result), true, mock)
  },
  updateFlowSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowSource', 'MediaConnect', Promise.resolve(result), true, mock)
  },
  updateFlowSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowSource', 'MediaConnect', Promise.resolve(result), false, mock)
  },
  updateFlowSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'updateFlowSource', 'MediaConnect', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'send', 'MediaConnectClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'send', 'MediaConnectClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediaconnect', 'send', 'MediaConnectClient', Promise.reject(result), true, mock)
  }
}