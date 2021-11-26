
/**
* @description mocks_v3:mockCloudDirectory module is mocks for AWS-SDK V3
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

  export const mockCloudDirectory = {
  addFacetToObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'addFacetToObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  addFacetToObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'addFacetToObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  addFacetToObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'addFacetToObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  applySchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'applySchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  applySchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'applySchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  applySchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'applySchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachPolicy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachPolicy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachPolicy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachToIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachToIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachToIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachToIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachToIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachToIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachTypedLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachTypedLink', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachTypedLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachTypedLink', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachTypedLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'attachTypedLink', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  batchRead: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'batchRead', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  batchReadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'batchRead', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  batchReadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'batchRead', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  batchWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'batchWrite', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  batchWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'batchWrite', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  batchWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'batchWrite', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createTypedLinkFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createTypedLinkFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createTypedLinkFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'createTypedLinkFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteTypedLinkFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteTypedLinkFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteTypedLinkFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'deleteTypedLinkFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'destroy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'destroy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'destroy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachFromIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachFromIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachFromIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachFromIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachFromIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachFromIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachPolicy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachPolicy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachPolicy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachTypedLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachTypedLink', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachTypedLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachTypedLink', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachTypedLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'detachTypedLink', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  disableDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'disableDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  disableDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'disableDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  disableDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'disableDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  enableDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'enableDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  enableDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'enableDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  enableDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'enableDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getAppliedSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getAppliedSchemaVersion', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getAppliedSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getAppliedSchemaVersion', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getAppliedSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getAppliedSchemaVersion', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getLinkAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getLinkAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getLinkAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getLinkAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getLinkAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getLinkAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getObjectAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getObjectAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getObjectAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getObjectAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getObjectAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getObjectAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getObjectInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getObjectInformation', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getObjectInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getObjectInformation', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getObjectInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getObjectInformation', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getSchemaAsJson: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getSchemaAsJson', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getSchemaAsJsonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getSchemaAsJson', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getSchemaAsJsonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getSchemaAsJson', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getTypedLinkFacetInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getTypedLinkFacetInformation', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getTypedLinkFacetInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getTypedLinkFacetInformation', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getTypedLinkFacetInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'getTypedLinkFacetInformation', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listAppliedSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listAppliedSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listAppliedSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listAppliedSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listAppliedSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listAppliedSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listAttachedIndices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listAttachedIndices', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listAttachedIndicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listAttachedIndices', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listAttachedIndicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listAttachedIndices', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listDevelopmentSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listDevelopmentSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listDevelopmentSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listDevelopmentSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listDevelopmentSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listDevelopmentSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listDirectories', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listDirectories', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listDirectories', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listFacetAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listFacetAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listFacetAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listFacetAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listFacetAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listFacetAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listFacetNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listFacetNames', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listFacetNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listFacetNames', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listFacetNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listFacetNames', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listIncomingTypedLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listIncomingTypedLinks', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listIncomingTypedLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listIncomingTypedLinks', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listIncomingTypedLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listIncomingTypedLinks', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listManagedSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listManagedSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listManagedSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listManagedSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listManagedSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listManagedSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectChildren: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectChildren', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectChildrenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectChildren', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectChildrenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectChildren', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectParentPaths: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectParentPaths', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectParentPathsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectParentPaths', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectParentPathsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectParentPaths', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectParents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectParents', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectParentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectParents', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectParentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectParents', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectPolicies', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectPolicies', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listObjectPolicies', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listOutgoingTypedLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listOutgoingTypedLinks', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listOutgoingTypedLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listOutgoingTypedLinks', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listOutgoingTypedLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listOutgoingTypedLinks', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listPolicyAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listPolicyAttachments', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listPolicyAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listPolicyAttachments', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listPolicyAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listPolicyAttachments', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listPublishedSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listPublishedSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listPublishedSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listPublishedSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listPublishedSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listPublishedSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTagsForResource', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTagsForResource', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTagsForResource', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listTypedLinkFacetAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTypedLinkFacetAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listTypedLinkFacetAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTypedLinkFacetAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listTypedLinkFacetAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTypedLinkFacetAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listTypedLinkFacetNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTypedLinkFacetNames', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listTypedLinkFacetNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTypedLinkFacetNames', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listTypedLinkFacetNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'listTypedLinkFacetNames', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  lookupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'lookupPolicy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  lookupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'lookupPolicy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  lookupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'lookupPolicy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  publishSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'publishSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  publishSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'publishSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  publishSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'publishSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  putSchemaFromJson: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'putSchemaFromJson', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  putSchemaFromJsonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'putSchemaFromJson', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  putSchemaFromJsonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'putSchemaFromJson', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  removeFacetFromObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'removeFacetFromObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  removeFacetFromObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'removeFacetFromObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  removeFacetFromObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'removeFacetFromObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'tagResource', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'tagResource', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'tagResource', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'untagResource', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'untagResource', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'untagResource', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateLinkAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateLinkAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateLinkAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateLinkAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateLinkAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateLinkAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateObjectAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateObjectAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateObjectAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateObjectAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateObjectAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateObjectAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateTypedLinkFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateTypedLinkFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateTypedLinkFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'updateTypedLinkFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  upgradeAppliedSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'upgradeAppliedSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  upgradeAppliedSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'upgradeAppliedSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  upgradeAppliedSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'upgradeAppliedSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  upgradePublishedSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'upgradePublishedSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  upgradePublishedSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'upgradePublishedSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  upgradePublishedSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'upgradePublishedSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'send', 'CloudDirectoryClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'send', 'CloudDirectoryClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-clouddirectory', 'send', 'CloudDirectoryClient', Promise.reject(result), true, mock)
  }
}