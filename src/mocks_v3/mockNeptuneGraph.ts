
/**
* @description mocks_v3:mockNeptuneGraph module is mocks for AWS-SDK V3
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
export const mockNeptuneGraph = {
  cancelImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'cancelImportTask', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  cancelImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'cancelImportTask', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  cancelImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'cancelImportTask', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  cancelQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'cancelQuery', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  cancelQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'cancelQuery', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  cancelQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'cancelQuery', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  createGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraph', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  createGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraph', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  createGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraph', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  createGraphSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraphSnapshot', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  createGraphSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraphSnapshot', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  createGraphSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraphSnapshot', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  createGraphUsingImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraphUsingImportTask', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  createGraphUsingImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraphUsingImportTask', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  createGraphUsingImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createGraphUsingImportTask', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  createPrivateGraphEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createPrivateGraphEndpoint', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  createPrivateGraphEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createPrivateGraphEndpoint', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  createPrivateGraphEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'createPrivateGraphEndpoint', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  deleteGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deleteGraph', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  deleteGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deleteGraph', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  deleteGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deleteGraph', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  deleteGraphSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deleteGraphSnapshot', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  deleteGraphSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deleteGraphSnapshot', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  deleteGraphSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deleteGraphSnapshot', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  deletePrivateGraphEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deletePrivateGraphEndpoint', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  deletePrivateGraphEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deletePrivateGraphEndpoint', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  deletePrivateGraphEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'deletePrivateGraphEndpoint', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  executeQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'executeQuery', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  executeQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'executeQuery', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  executeQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'executeQuery', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  getGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraph', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  getGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraph', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  getGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraph', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  getGraphSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraphSnapshot', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  getGraphSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraphSnapshot', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  getGraphSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraphSnapshot', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  getGraphSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraphSummary', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  getGraphSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraphSummary', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  getGraphSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getGraphSummary', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  getImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getImportTask', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  getImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getImportTask', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  getImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getImportTask', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  getPrivateGraphEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getPrivateGraphEndpoint', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  getPrivateGraphEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getPrivateGraphEndpoint', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  getPrivateGraphEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getPrivateGraphEndpoint', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  getQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getQuery', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  getQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getQuery', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  getQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'getQuery', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  listGraphSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listGraphSnapshots', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  listGraphSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listGraphSnapshots', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  listGraphSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listGraphSnapshots', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  listGraphs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listGraphs', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  listGraphsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listGraphs', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  listGraphsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listGraphs', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  listImportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listImportTasks', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  listImportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listImportTasks', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  listImportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listImportTasks', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  listPrivateGraphEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listPrivateGraphEndpoints', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  listPrivateGraphEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listPrivateGraphEndpoints', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  listPrivateGraphEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listPrivateGraphEndpoints', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  listQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listQueries', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  listQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listQueries', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  listQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listQueries', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listTagsForResource', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listTagsForResource', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'listTagsForResource', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  resetGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'resetGraph', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  resetGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'resetGraph', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  resetGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'resetGraph', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  restoreGraphFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'restoreGraphFromSnapshot', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  restoreGraphFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'restoreGraphFromSnapshot', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  restoreGraphFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'restoreGraphFromSnapshot', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'tagResource', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'tagResource', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'tagResource', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'untagResource', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'untagResource', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'untagResource', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  updateGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'updateGraph', 'NeptuneGraph', Promise.resolve(result), true, mock)
  },
  updateGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'updateGraph', 'NeptuneGraph', Promise.resolve(result), false, mock)
  },
  updateGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'updateGraph', 'NeptuneGraph', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'send', 'NeptuneGraphClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'send', 'NeptuneGraphClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune-graph', 'send', 'NeptuneGraphClient', Promise.reject(result), true, mock)
  }
}
