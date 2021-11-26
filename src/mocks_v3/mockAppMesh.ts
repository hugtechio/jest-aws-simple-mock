
/**
* @description mocks_v3:mockAppMesh module is mocks for AWS-SDK V3
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

  export const mockAppMesh = {
  createGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  createMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  createRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'createVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'deleteVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'describeVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'destroy', 'AppMesh', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'destroy', 'AppMesh', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'destroy', 'AppMesh', Promise.reject(result), true, mock)
  },
  listGatewayRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listGatewayRoutes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listGatewayRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listGatewayRoutes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listGatewayRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listGatewayRoutes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listMeshes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listMeshes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listMeshesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listMeshes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listMeshesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listMeshes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listRoutes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listRoutes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listRoutes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listTagsForResource', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listTagsForResource', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listTagsForResource', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualGateways', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualGateways', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualGateways', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualNodes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualNodes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualNodes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualRouters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualRouters', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualRoutersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualRouters', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualRoutersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualRouters', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualServices', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualServices', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'listVirtualServices', 'AppMesh', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'tagResource', 'AppMesh', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'tagResource', 'AppMesh', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'tagResource', 'AppMesh', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'untagResource', 'AppMesh', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'untagResource', 'AppMesh', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'untagResource', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'updateVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'send', 'AppMeshClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'send', 'AppMeshClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-app-mesh', 'send', 'AppMeshClient', Promise.reject(result), true, mock)
  }
}