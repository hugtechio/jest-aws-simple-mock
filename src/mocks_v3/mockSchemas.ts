
/**
* @description mocks_v3:mockSchemas module is mocks for AWS-SDK V3
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

  export const mockSchemas = {
  createDiscoverer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createDiscoverer', 'Schemas', Promise.resolve(result), true, mock)
  },
  createDiscovererAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createDiscoverer', 'Schemas', Promise.resolve(result), false, mock)
  },
  createDiscovererThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createDiscoverer', 'Schemas', Promise.reject(result), true, mock)
  },
  createRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createRegistry', 'Schemas', Promise.resolve(result), true, mock)
  },
  createRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createRegistry', 'Schemas', Promise.resolve(result), false, mock)
  },
  createRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createRegistry', 'Schemas', Promise.reject(result), true, mock)
  },
  createSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createSchema', 'Schemas', Promise.resolve(result), true, mock)
  },
  createSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createSchema', 'Schemas', Promise.resolve(result), false, mock)
  },
  createSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'createSchema', 'Schemas', Promise.reject(result), true, mock)
  },
  deleteDiscoverer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteDiscoverer', 'Schemas', Promise.resolve(result), true, mock)
  },
  deleteDiscovererAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteDiscoverer', 'Schemas', Promise.resolve(result), false, mock)
  },
  deleteDiscovererThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteDiscoverer', 'Schemas', Promise.reject(result), true, mock)
  },
  deleteRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteRegistry', 'Schemas', Promise.resolve(result), true, mock)
  },
  deleteRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteRegistry', 'Schemas', Promise.resolve(result), false, mock)
  },
  deleteRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteRegistry', 'Schemas', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteResourcePolicy', 'Schemas', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteResourcePolicy', 'Schemas', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteResourcePolicy', 'Schemas', Promise.reject(result), true, mock)
  },
  deleteSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteSchema', 'Schemas', Promise.resolve(result), true, mock)
  },
  deleteSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteSchema', 'Schemas', Promise.resolve(result), false, mock)
  },
  deleteSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteSchema', 'Schemas', Promise.reject(result), true, mock)
  },
  deleteSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteSchemaVersion', 'Schemas', Promise.resolve(result), true, mock)
  },
  deleteSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteSchemaVersion', 'Schemas', Promise.resolve(result), false, mock)
  },
  deleteSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'deleteSchemaVersion', 'Schemas', Promise.reject(result), true, mock)
  },
  describeCodeBinding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeCodeBinding', 'Schemas', Promise.resolve(result), true, mock)
  },
  describeCodeBindingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeCodeBinding', 'Schemas', Promise.resolve(result), false, mock)
  },
  describeCodeBindingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeCodeBinding', 'Schemas', Promise.reject(result), true, mock)
  },
  describeDiscoverer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeDiscoverer', 'Schemas', Promise.resolve(result), true, mock)
  },
  describeDiscovererAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeDiscoverer', 'Schemas', Promise.resolve(result), false, mock)
  },
  describeDiscovererThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeDiscoverer', 'Schemas', Promise.reject(result), true, mock)
  },
  describeRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeRegistry', 'Schemas', Promise.resolve(result), true, mock)
  },
  describeRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeRegistry', 'Schemas', Promise.resolve(result), false, mock)
  },
  describeRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeRegistry', 'Schemas', Promise.reject(result), true, mock)
  },
  describeSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeSchema', 'Schemas', Promise.resolve(result), true, mock)
  },
  describeSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeSchema', 'Schemas', Promise.resolve(result), false, mock)
  },
  describeSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'describeSchema', 'Schemas', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'destroy', 'Schemas', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'destroy', 'Schemas', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'destroy', 'Schemas', Promise.reject(result), true, mock)
  },
  exportSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'exportSchema', 'Schemas', Promise.resolve(result), true, mock)
  },
  exportSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'exportSchema', 'Schemas', Promise.resolve(result), false, mock)
  },
  exportSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'exportSchema', 'Schemas', Promise.reject(result), true, mock)
  },
  getCodeBindingSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getCodeBindingSource', 'Schemas', Promise.resolve(result), true, mock)
  },
  getCodeBindingSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getCodeBindingSource', 'Schemas', Promise.resolve(result), false, mock)
  },
  getCodeBindingSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getCodeBindingSource', 'Schemas', Promise.reject(result), true, mock)
  },
  getDiscoveredSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getDiscoveredSchema', 'Schemas', Promise.resolve(result), true, mock)
  },
  getDiscoveredSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getDiscoveredSchema', 'Schemas', Promise.resolve(result), false, mock)
  },
  getDiscoveredSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getDiscoveredSchema', 'Schemas', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getResourcePolicy', 'Schemas', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getResourcePolicy', 'Schemas', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'getResourcePolicy', 'Schemas', Promise.reject(result), true, mock)
  },
  listDiscoverers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listDiscoverers', 'Schemas', Promise.resolve(result), true, mock)
  },
  listDiscoverersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listDiscoverers', 'Schemas', Promise.resolve(result), false, mock)
  },
  listDiscoverersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listDiscoverers', 'Schemas', Promise.reject(result), true, mock)
  },
  listRegistries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listRegistries', 'Schemas', Promise.resolve(result), true, mock)
  },
  listRegistriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listRegistries', 'Schemas', Promise.resolve(result), false, mock)
  },
  listRegistriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listRegistries', 'Schemas', Promise.reject(result), true, mock)
  },
  listSchemaVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listSchemaVersions', 'Schemas', Promise.resolve(result), true, mock)
  },
  listSchemaVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listSchemaVersions', 'Schemas', Promise.resolve(result), false, mock)
  },
  listSchemaVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listSchemaVersions', 'Schemas', Promise.reject(result), true, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listSchemas', 'Schemas', Promise.resolve(result), true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listSchemas', 'Schemas', Promise.resolve(result), false, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listSchemas', 'Schemas', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listTagsForResource', 'Schemas', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listTagsForResource', 'Schemas', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'listTagsForResource', 'Schemas', Promise.reject(result), true, mock)
  },
  putCodeBinding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'putCodeBinding', 'Schemas', Promise.resolve(result), true, mock)
  },
  putCodeBindingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'putCodeBinding', 'Schemas', Promise.resolve(result), false, mock)
  },
  putCodeBindingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'putCodeBinding', 'Schemas', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'putResourcePolicy', 'Schemas', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'putResourcePolicy', 'Schemas', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'putResourcePolicy', 'Schemas', Promise.reject(result), true, mock)
  },
  searchSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'searchSchemas', 'Schemas', Promise.resolve(result), true, mock)
  },
  searchSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'searchSchemas', 'Schemas', Promise.resolve(result), false, mock)
  },
  searchSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'searchSchemas', 'Schemas', Promise.reject(result), true, mock)
  },
  startDiscoverer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'startDiscoverer', 'Schemas', Promise.resolve(result), true, mock)
  },
  startDiscovererAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'startDiscoverer', 'Schemas', Promise.resolve(result), false, mock)
  },
  startDiscovererThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'startDiscoverer', 'Schemas', Promise.reject(result), true, mock)
  },
  stopDiscoverer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'stopDiscoverer', 'Schemas', Promise.resolve(result), true, mock)
  },
  stopDiscovererAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'stopDiscoverer', 'Schemas', Promise.resolve(result), false, mock)
  },
  stopDiscovererThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'stopDiscoverer', 'Schemas', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'tagResource', 'Schemas', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'tagResource', 'Schemas', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'tagResource', 'Schemas', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'untagResource', 'Schemas', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'untagResource', 'Schemas', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'untagResource', 'Schemas', Promise.reject(result), true, mock)
  },
  updateDiscoverer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateDiscoverer', 'Schemas', Promise.resolve(result), true, mock)
  },
  updateDiscovererAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateDiscoverer', 'Schemas', Promise.resolve(result), false, mock)
  },
  updateDiscovererThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateDiscoverer', 'Schemas', Promise.reject(result), true, mock)
  },
  updateRegistry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateRegistry', 'Schemas', Promise.resolve(result), true, mock)
  },
  updateRegistryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateRegistry', 'Schemas', Promise.resolve(result), false, mock)
  },
  updateRegistryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateRegistry', 'Schemas', Promise.reject(result), true, mock)
  },
  updateSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateSchema', 'Schemas', Promise.resolve(result), true, mock)
  },
  updateSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateSchema', 'Schemas', Promise.resolve(result), false, mock)
  },
  updateSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'updateSchema', 'Schemas', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'send', 'SchemasClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'send', 'SchemasClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-schemas', 'send', 'SchemasClient', Promise.reject(result), true, mock)
  }
}