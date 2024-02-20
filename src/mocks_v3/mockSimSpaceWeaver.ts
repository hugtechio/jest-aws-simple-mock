
/**
* @description mocks_v3:mockSimSpaceWeaver module is mocks for AWS-SDK V3
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
export const mockSimSpaceWeaver = {
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'createSnapshot', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'createSnapshot', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'createSnapshot', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'deleteApp', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'deleteApp', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'deleteApp', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  deleteSimulation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'deleteSimulation', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  deleteSimulationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'deleteSimulation', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  deleteSimulationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'deleteSimulation', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  describeApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'describeApp', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  describeAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'describeApp', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  describeAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'describeApp', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  describeSimulation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'describeSimulation', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  describeSimulationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'describeSimulation', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  describeSimulationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'describeSimulation', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  listApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listApps', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  listAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listApps', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  listAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listApps', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  listSimulations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listSimulations', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  listSimulationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listSimulations', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  listSimulationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listSimulations', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listTagsForResource', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listTagsForResource', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'listTagsForResource', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  startApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startApp', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  startAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startApp', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  startAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startApp', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  startClock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startClock', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  startClockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startClock', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  startClockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startClock', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  startSimulation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startSimulation', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  startSimulationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startSimulation', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  startSimulationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'startSimulation', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  stopApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopApp', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  stopAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopApp', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  stopAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopApp', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  stopClock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopClock', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  stopClockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopClock', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  stopClockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopClock', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  stopSimulation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopSimulation', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  stopSimulationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopSimulation', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  stopSimulationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'stopSimulation', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'tagResource', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'tagResource', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'tagResource', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'untagResource', 'SimSpaceWeaver', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'untagResource', 'SimSpaceWeaver', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'untagResource', 'SimSpaceWeaver', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'send', 'SimSpaceWeaverClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'send', 'SimSpaceWeaverClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-simspaceweaver', 'send', 'SimSpaceWeaverClient', Promise.reject(result), true, mock)
  }
}
