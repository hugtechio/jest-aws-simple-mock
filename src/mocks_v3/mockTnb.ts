
/**
* @description mocks_v3:mockTnb module is mocks for AWS-SDK V3
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
export const mockTnb = {
  cancelSolNetworkOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'cancelSolNetworkOperation', 'Tnb', Promise.resolve(result), true, mock)
  },
  cancelSolNetworkOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'cancelSolNetworkOperation', 'Tnb', Promise.resolve(result), false, mock)
  },
  cancelSolNetworkOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'cancelSolNetworkOperation', 'Tnb', Promise.reject(result), true, mock)
  },
  createSolFunctionPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolFunctionPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  createSolFunctionPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolFunctionPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  createSolFunctionPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolFunctionPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  createSolNetworkInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolNetworkInstance', 'Tnb', Promise.resolve(result), true, mock)
  },
  createSolNetworkInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolNetworkInstance', 'Tnb', Promise.resolve(result), false, mock)
  },
  createSolNetworkInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolNetworkInstance', 'Tnb', Promise.reject(result), true, mock)
  },
  createSolNetworkPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolNetworkPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  createSolNetworkPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolNetworkPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  createSolNetworkPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'createSolNetworkPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  deleteSolFunctionPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolFunctionPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  deleteSolFunctionPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolFunctionPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  deleteSolFunctionPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolFunctionPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  deleteSolNetworkInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolNetworkInstance', 'Tnb', Promise.resolve(result), true, mock)
  },
  deleteSolNetworkInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolNetworkInstance', 'Tnb', Promise.resolve(result), false, mock)
  },
  deleteSolNetworkInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolNetworkInstance', 'Tnb', Promise.reject(result), true, mock)
  },
  deleteSolNetworkPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolNetworkPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  deleteSolNetworkPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolNetworkPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  deleteSolNetworkPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'deleteSolNetworkPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolFunctionInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionInstance', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolFunctionInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionInstance', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolFunctionInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionInstance', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolFunctionPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolFunctionPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolFunctionPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolFunctionPackageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackageContent', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolFunctionPackageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackageContent', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolFunctionPackageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackageContent', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolFunctionPackageDescriptor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackageDescriptor', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolFunctionPackageDescriptorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackageDescriptor', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolFunctionPackageDescriptorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolFunctionPackageDescriptor', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolNetworkInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkInstance', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolNetworkInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkInstance', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolNetworkInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkInstance', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolNetworkOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkOperation', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolNetworkOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkOperation', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolNetworkOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkOperation', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolNetworkPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolNetworkPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolNetworkPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolNetworkPackageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackageContent', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolNetworkPackageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackageContent', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolNetworkPackageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackageContent', 'Tnb', Promise.reject(result), true, mock)
  },
  getSolNetworkPackageDescriptor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackageDescriptor', 'Tnb', Promise.resolve(result), true, mock)
  },
  getSolNetworkPackageDescriptorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackageDescriptor', 'Tnb', Promise.resolve(result), false, mock)
  },
  getSolNetworkPackageDescriptorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'getSolNetworkPackageDescriptor', 'Tnb', Promise.reject(result), true, mock)
  },
  instantiateSolNetworkInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'instantiateSolNetworkInstance', 'Tnb', Promise.resolve(result), true, mock)
  },
  instantiateSolNetworkInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'instantiateSolNetworkInstance', 'Tnb', Promise.resolve(result), false, mock)
  },
  instantiateSolNetworkInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'instantiateSolNetworkInstance', 'Tnb', Promise.reject(result), true, mock)
  },
  listSolFunctionInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolFunctionInstances', 'Tnb', Promise.resolve(result), true, mock)
  },
  listSolFunctionInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolFunctionInstances', 'Tnb', Promise.resolve(result), false, mock)
  },
  listSolFunctionInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolFunctionInstances', 'Tnb', Promise.reject(result), true, mock)
  },
  listSolFunctionPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolFunctionPackages', 'Tnb', Promise.resolve(result), true, mock)
  },
  listSolFunctionPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolFunctionPackages', 'Tnb', Promise.resolve(result), false, mock)
  },
  listSolFunctionPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolFunctionPackages', 'Tnb', Promise.reject(result), true, mock)
  },
  listSolNetworkInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkInstances', 'Tnb', Promise.resolve(result), true, mock)
  },
  listSolNetworkInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkInstances', 'Tnb', Promise.resolve(result), false, mock)
  },
  listSolNetworkInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkInstances', 'Tnb', Promise.reject(result), true, mock)
  },
  listSolNetworkOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkOperations', 'Tnb', Promise.resolve(result), true, mock)
  },
  listSolNetworkOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkOperations', 'Tnb', Promise.resolve(result), false, mock)
  },
  listSolNetworkOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkOperations', 'Tnb', Promise.reject(result), true, mock)
  },
  listSolNetworkPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkPackages', 'Tnb', Promise.resolve(result), true, mock)
  },
  listSolNetworkPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkPackages', 'Tnb', Promise.resolve(result), false, mock)
  },
  listSolNetworkPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listSolNetworkPackages', 'Tnb', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listTagsForResource', 'Tnb', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listTagsForResource', 'Tnb', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'listTagsForResource', 'Tnb', Promise.reject(result), true, mock)
  },
  putSolFunctionPackageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'putSolFunctionPackageContent', 'Tnb', Promise.resolve(result), true, mock)
  },
  putSolFunctionPackageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'putSolFunctionPackageContent', 'Tnb', Promise.resolve(result), false, mock)
  },
  putSolFunctionPackageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'putSolFunctionPackageContent', 'Tnb', Promise.reject(result), true, mock)
  },
  putSolNetworkPackageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'putSolNetworkPackageContent', 'Tnb', Promise.resolve(result), true, mock)
  },
  putSolNetworkPackageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'putSolNetworkPackageContent', 'Tnb', Promise.resolve(result), false, mock)
  },
  putSolNetworkPackageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'putSolNetworkPackageContent', 'Tnb', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'tagResource', 'Tnb', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'tagResource', 'Tnb', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'tagResource', 'Tnb', Promise.reject(result), true, mock)
  },
  terminateSolNetworkInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'terminateSolNetworkInstance', 'Tnb', Promise.resolve(result), true, mock)
  },
  terminateSolNetworkInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'terminateSolNetworkInstance', 'Tnb', Promise.resolve(result), false, mock)
  },
  terminateSolNetworkInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'terminateSolNetworkInstance', 'Tnb', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'untagResource', 'Tnb', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'untagResource', 'Tnb', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'untagResource', 'Tnb', Promise.reject(result), true, mock)
  },
  updateSolFunctionPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolFunctionPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  updateSolFunctionPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolFunctionPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  updateSolFunctionPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolFunctionPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  updateSolNetworkInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolNetworkInstance', 'Tnb', Promise.resolve(result), true, mock)
  },
  updateSolNetworkInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolNetworkInstance', 'Tnb', Promise.resolve(result), false, mock)
  },
  updateSolNetworkInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolNetworkInstance', 'Tnb', Promise.reject(result), true, mock)
  },
  updateSolNetworkPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolNetworkPackage', 'Tnb', Promise.resolve(result), true, mock)
  },
  updateSolNetworkPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolNetworkPackage', 'Tnb', Promise.resolve(result), false, mock)
  },
  updateSolNetworkPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'updateSolNetworkPackage', 'Tnb', Promise.reject(result), true, mock)
  },
  validateSolFunctionPackageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'validateSolFunctionPackageContent', 'Tnb', Promise.resolve(result), true, mock)
  },
  validateSolFunctionPackageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'validateSolFunctionPackageContent', 'Tnb', Promise.resolve(result), false, mock)
  },
  validateSolFunctionPackageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'validateSolFunctionPackageContent', 'Tnb', Promise.reject(result), true, mock)
  },
  validateSolNetworkPackageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'validateSolNetworkPackageContent', 'Tnb', Promise.resolve(result), true, mock)
  },
  validateSolNetworkPackageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'validateSolNetworkPackageContent', 'Tnb', Promise.resolve(result), false, mock)
  },
  validateSolNetworkPackageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'validateSolNetworkPackageContent', 'Tnb', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'send', 'TnbClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'send', 'TnbClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-tnb', 'send', 'TnbClient', Promise.reject(result), true, mock)
  }
}
