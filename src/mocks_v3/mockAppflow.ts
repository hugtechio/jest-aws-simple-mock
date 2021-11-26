
/**
* @description mocks_v3:mockAppflow module is mocks for AWS-SDK V3
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

  export const mockAppflow = {
  createConnectorProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'createConnectorProfile', 'Appflow', Promise.resolve(result), true, mock)
  },
  createConnectorProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'createConnectorProfile', 'Appflow', Promise.resolve(result), false, mock)
  },
  createConnectorProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'createConnectorProfile', 'Appflow', Promise.reject(result), true, mock)
  },
  createFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'createFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  createFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'createFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  createFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'createFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  deleteConnectorProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'deleteConnectorProfile', 'Appflow', Promise.resolve(result), true, mock)
  },
  deleteConnectorProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'deleteConnectorProfile', 'Appflow', Promise.resolve(result), false, mock)
  },
  deleteConnectorProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'deleteConnectorProfile', 'Appflow', Promise.reject(result), true, mock)
  },
  deleteFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'deleteFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  deleteFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'deleteFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  deleteFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'deleteFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  describeConnectorEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectorEntity', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeConnectorEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectorEntity', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeConnectorEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectorEntity', 'Appflow', Promise.reject(result), true, mock)
  },
  describeConnectorProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectorProfiles', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeConnectorProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectorProfiles', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeConnectorProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectorProfiles', 'Appflow', Promise.reject(result), true, mock)
  },
  describeConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectors', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectors', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeConnectors', 'Appflow', Promise.reject(result), true, mock)
  },
  describeFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  describeFlowExecutionRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeFlowExecutionRecords', 'Appflow', Promise.resolve(result), true, mock)
  },
  describeFlowExecutionRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeFlowExecutionRecords', 'Appflow', Promise.resolve(result), false, mock)
  },
  describeFlowExecutionRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'describeFlowExecutionRecords', 'Appflow', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'destroy', 'Appflow', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'destroy', 'Appflow', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'destroy', 'Appflow', Promise.reject(result), true, mock)
  },
  listConnectorEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listConnectorEntities', 'Appflow', Promise.resolve(result), true, mock)
  },
  listConnectorEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listConnectorEntities', 'Appflow', Promise.resolve(result), false, mock)
  },
  listConnectorEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listConnectorEntities', 'Appflow', Promise.reject(result), true, mock)
  },
  listFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listFlows', 'Appflow', Promise.resolve(result), true, mock)
  },
  listFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listFlows', 'Appflow', Promise.resolve(result), false, mock)
  },
  listFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listFlows', 'Appflow', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listTagsForResource', 'Appflow', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listTagsForResource', 'Appflow', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'listTagsForResource', 'Appflow', Promise.reject(result), true, mock)
  },
  startFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'startFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  startFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'startFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  startFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'startFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  stopFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'stopFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  stopFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'stopFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  stopFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'stopFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'tagResource', 'Appflow', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'tagResource', 'Appflow', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'tagResource', 'Appflow', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'untagResource', 'Appflow', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'untagResource', 'Appflow', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'untagResource', 'Appflow', Promise.reject(result), true, mock)
  },
  updateConnectorProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'updateConnectorProfile', 'Appflow', Promise.resolve(result), true, mock)
  },
  updateConnectorProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'updateConnectorProfile', 'Appflow', Promise.resolve(result), false, mock)
  },
  updateConnectorProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'updateConnectorProfile', 'Appflow', Promise.reject(result), true, mock)
  },
  updateFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'updateFlow', 'Appflow', Promise.resolve(result), true, mock)
  },
  updateFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'updateFlow', 'Appflow', Promise.resolve(result), false, mock)
  },
  updateFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'updateFlow', 'Appflow', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'send', 'AppflowClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'send', 'AppflowClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appflow', 'send', 'AppflowClient', Promise.reject(result), true, mock)
  }
}