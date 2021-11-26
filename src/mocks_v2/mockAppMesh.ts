
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
  export const mockAppMesh = {
  createGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  createMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  createRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  createVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  createVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  createVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  deleteVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  deleteVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  deleteVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  describeVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  describeVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  describeVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppMesh', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppMesh', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppMesh', Promise.reject(result), true, mock)
  },
  listGatewayRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGatewayRoutes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listGatewayRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGatewayRoutes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listGatewayRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGatewayRoutes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listMeshes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMeshes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listMeshesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMeshes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listMeshesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMeshes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualGateways', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualGateways', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualGateways', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualNodes', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualNodes', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualNodes', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualRouters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualRouters', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualRoutersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualRouters', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualRoutersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualRouters', 'AppMesh', Promise.reject(result), true, mock)
  },
  listVirtualServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualServices', 'AppMesh', Promise.resolve(result), true, mock)
  },
  listVirtualServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualServices', 'AppMesh', Promise.resolve(result), false, mock)
  },
  listVirtualServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualServices', 'AppMesh', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppMesh', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppMesh', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppMesh', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppMesh', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppMesh', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateGatewayRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateGatewayRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateGatewayRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateMesh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMesh', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateMeshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMesh', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateMeshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMesh', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateRoute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoute', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateRouteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoute', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateRouteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoute', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualGateway', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualGateway', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualGateway', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualNode', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualNode', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualNode', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualRouter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualRouter', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualRouterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualRouter', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualRouterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualRouter', 'AppMesh', Promise.reject(result), true, mock)
  },
  updateVirtualService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualService', 'AppMesh', Promise.resolve(result), true, mock)
  },
  updateVirtualServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualService', 'AppMesh', Promise.resolve(result), false, mock)
  },
  updateVirtualServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVirtualService', 'AppMesh', Promise.reject(result), true, mock)
  },
}
