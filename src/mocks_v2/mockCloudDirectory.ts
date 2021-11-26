
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
  export const mockCloudDirectory = {
  addFacetToObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addFacetToObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  addFacetToObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addFacetToObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  addFacetToObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addFacetToObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  applySchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applySchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  applySchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applySchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  applySchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applySchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachPolicy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachPolicy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachPolicy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachToIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachToIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachToIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachToIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachToIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachToIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  attachTypedLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachTypedLink', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  attachTypedLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachTypedLink', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  attachTypedLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachTypedLink', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  batchRead: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchRead', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  batchReadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchRead', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  batchReadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchRead', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  batchWrite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWrite', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  batchWriteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWrite', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  batchWriteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchWrite', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  createTypedLinkFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  createTypedLinkFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  createTypedLinkFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTypedLinkFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  deleteTypedLinkFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  deleteTypedLinkFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  deleteTypedLinkFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTypedLinkFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachFromIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachFromIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachFromIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachFromIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachFromIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachFromIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachPolicy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachPolicy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachPolicy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  detachTypedLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachTypedLink', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  detachTypedLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachTypedLink', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  detachTypedLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachTypedLink', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  disableDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  disableDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  disableDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  enableDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  enableDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  enableDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getAppliedSchemaVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppliedSchemaVersion', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getAppliedSchemaVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppliedSchemaVersion', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getAppliedSchemaVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppliedSchemaVersion', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDirectory', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDirectory', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDirectory', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getLinkAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinkAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getLinkAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinkAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getLinkAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLinkAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getObjectAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getObjectAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getObjectAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getObjectInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectInformation', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getObjectInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectInformation', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getObjectInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObjectInformation', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getSchemaAsJson: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaAsJson', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getSchemaAsJsonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaAsJson', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getSchemaAsJsonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSchemaAsJson', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  getTypedLinkFacetInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTypedLinkFacetInformation', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  getTypedLinkFacetInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTypedLinkFacetInformation', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  getTypedLinkFacetInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTypedLinkFacetInformation', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listAppliedSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppliedSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listAppliedSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppliedSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listAppliedSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppliedSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listAttachedIndices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttachedIndices', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listAttachedIndicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttachedIndices', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listAttachedIndicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttachedIndices', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listDevelopmentSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevelopmentSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listDevelopmentSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevelopmentSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listDevelopmentSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevelopmentSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDirectories', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDirectories', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDirectories', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listFacetAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFacetAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listFacetAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFacetAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listFacetAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFacetAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listFacetNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFacetNames', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listFacetNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFacetNames', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listFacetNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFacetNames', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listIncomingTypedLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIncomingTypedLinks', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listIncomingTypedLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIncomingTypedLinks', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listIncomingTypedLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIncomingTypedLinks', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIndex', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIndex', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIndex', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listManagedSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listManagedSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listManagedSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectChildren: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectChildren', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectChildrenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectChildren', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectChildrenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectChildren', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectParentPaths: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectParentPaths', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectParentPathsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectParentPaths', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectParentPathsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectParentPaths', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectParents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectParents', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectParentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectParents', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectParentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectParents', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listObjectPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectPolicies', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listObjectPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectPolicies', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listObjectPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listObjectPolicies', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listOutgoingTypedLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOutgoingTypedLinks', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listOutgoingTypedLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOutgoingTypedLinks', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listOutgoingTypedLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOutgoingTypedLinks', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listPolicyAttachments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicyAttachments', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listPolicyAttachmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicyAttachments', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listPolicyAttachmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicyAttachments', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listPublishedSchemaArns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublishedSchemaArns', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listPublishedSchemaArnsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublishedSchemaArns', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listPublishedSchemaArnsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublishedSchemaArns', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listTypedLinkFacetAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTypedLinkFacetAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listTypedLinkFacetAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTypedLinkFacetAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listTypedLinkFacetAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTypedLinkFacetAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  listTypedLinkFacetNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTypedLinkFacetNames', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  listTypedLinkFacetNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTypedLinkFacetNames', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  listTypedLinkFacetNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTypedLinkFacetNames', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  lookupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupPolicy', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  lookupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupPolicy', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  lookupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupPolicy', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  publishSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  publishSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  publishSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  putSchemaFromJson: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaFromJson', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  putSchemaFromJsonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaFromJson', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  putSchemaFromJsonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSchemaFromJson', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  removeFacetFromObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeFacetFromObject', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  removeFacetFromObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeFacetFromObject', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  removeFacetFromObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeFacetFromObject', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateLinkAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLinkAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateLinkAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLinkAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateLinkAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLinkAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateObjectAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateObjectAttributes', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateObjectAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateObjectAttributes', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateObjectAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateObjectAttributes', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  updateTypedLinkFacet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  updateTypedLinkFacetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTypedLinkFacet', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  updateTypedLinkFacetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTypedLinkFacet', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  upgradeAppliedSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeAppliedSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  upgradeAppliedSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeAppliedSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  upgradeAppliedSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeAppliedSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
  upgradePublishedSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradePublishedSchema', 'CloudDirectory', Promise.resolve(result), true, mock)
  },
  upgradePublishedSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradePublishedSchema', 'CloudDirectory', Promise.resolve(result), false, mock)
  },
  upgradePublishedSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradePublishedSchema', 'CloudDirectory', Promise.reject(result), true, mock)
  },
}
