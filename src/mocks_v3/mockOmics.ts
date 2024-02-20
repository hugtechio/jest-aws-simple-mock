
/**
* @description mocks_v3:mockOmics module is mocks for AWS-SDK V3
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
export const mockOmics = {
  abortMultipartReadSetUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'abortMultipartReadSetUpload', 'Omics', Promise.resolve(result), true, mock)
  },
  abortMultipartReadSetUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'abortMultipartReadSetUpload', 'Omics', Promise.resolve(result), false, mock)
  },
  abortMultipartReadSetUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'abortMultipartReadSetUpload', 'Omics', Promise.reject(result), true, mock)
  },
  acceptShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'acceptShare', 'Omics', Promise.resolve(result), true, mock)
  },
  acceptShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'acceptShare', 'Omics', Promise.resolve(result), false, mock)
  },
  acceptShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'acceptShare', 'Omics', Promise.reject(result), true, mock)
  },
  batchDeleteReadSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'batchDeleteReadSet', 'Omics', Promise.resolve(result), true, mock)
  },
  batchDeleteReadSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'batchDeleteReadSet', 'Omics', Promise.resolve(result), false, mock)
  },
  batchDeleteReadSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'batchDeleteReadSet', 'Omics', Promise.reject(result), true, mock)
  },
  cancelAnnotationImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelAnnotationImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  cancelAnnotationImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelAnnotationImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  cancelAnnotationImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelAnnotationImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  cancelRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelRun', 'Omics', Promise.resolve(result), true, mock)
  },
  cancelRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelRun', 'Omics', Promise.resolve(result), false, mock)
  },
  cancelRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelRun', 'Omics', Promise.reject(result), true, mock)
  },
  cancelVariantImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelVariantImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  cancelVariantImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelVariantImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  cancelVariantImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'cancelVariantImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  completeMultipartReadSetUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'completeMultipartReadSetUpload', 'Omics', Promise.resolve(result), true, mock)
  },
  completeMultipartReadSetUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'completeMultipartReadSetUpload', 'Omics', Promise.resolve(result), false, mock)
  },
  completeMultipartReadSetUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'completeMultipartReadSetUpload', 'Omics', Promise.reject(result), true, mock)
  },
  createAnnotationStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createAnnotationStore', 'Omics', Promise.resolve(result), true, mock)
  },
  createAnnotationStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createAnnotationStore', 'Omics', Promise.resolve(result), false, mock)
  },
  createAnnotationStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createAnnotationStore', 'Omics', Promise.reject(result), true, mock)
  },
  createAnnotationStoreVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createAnnotationStoreVersion', 'Omics', Promise.resolve(result), true, mock)
  },
  createAnnotationStoreVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createAnnotationStoreVersion', 'Omics', Promise.resolve(result), false, mock)
  },
  createAnnotationStoreVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createAnnotationStoreVersion', 'Omics', Promise.reject(result), true, mock)
  },
  createMultipartReadSetUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createMultipartReadSetUpload', 'Omics', Promise.resolve(result), true, mock)
  },
  createMultipartReadSetUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createMultipartReadSetUpload', 'Omics', Promise.resolve(result), false, mock)
  },
  createMultipartReadSetUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createMultipartReadSetUpload', 'Omics', Promise.reject(result), true, mock)
  },
  createReferenceStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createReferenceStore', 'Omics', Promise.resolve(result), true, mock)
  },
  createReferenceStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createReferenceStore', 'Omics', Promise.resolve(result), false, mock)
  },
  createReferenceStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createReferenceStore', 'Omics', Promise.reject(result), true, mock)
  },
  createRunGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createRunGroup', 'Omics', Promise.resolve(result), true, mock)
  },
  createRunGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createRunGroup', 'Omics', Promise.resolve(result), false, mock)
  },
  createRunGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createRunGroup', 'Omics', Promise.reject(result), true, mock)
  },
  createSequenceStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createSequenceStore', 'Omics', Promise.resolve(result), true, mock)
  },
  createSequenceStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createSequenceStore', 'Omics', Promise.resolve(result), false, mock)
  },
  createSequenceStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createSequenceStore', 'Omics', Promise.reject(result), true, mock)
  },
  createShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createShare', 'Omics', Promise.resolve(result), true, mock)
  },
  createShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createShare', 'Omics', Promise.resolve(result), false, mock)
  },
  createShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createShare', 'Omics', Promise.reject(result), true, mock)
  },
  createVariantStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createVariantStore', 'Omics', Promise.resolve(result), true, mock)
  },
  createVariantStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createVariantStore', 'Omics', Promise.resolve(result), false, mock)
  },
  createVariantStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createVariantStore', 'Omics', Promise.reject(result), true, mock)
  },
  createWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createWorkflow', 'Omics', Promise.resolve(result), true, mock)
  },
  createWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createWorkflow', 'Omics', Promise.resolve(result), false, mock)
  },
  createWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'createWorkflow', 'Omics', Promise.reject(result), true, mock)
  },
  deleteAnnotationStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteAnnotationStore', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteAnnotationStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteAnnotationStore', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteAnnotationStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteAnnotationStore', 'Omics', Promise.reject(result), true, mock)
  },
  deleteAnnotationStoreVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteAnnotationStoreVersions', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteAnnotationStoreVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteAnnotationStoreVersions', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteAnnotationStoreVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteAnnotationStoreVersions', 'Omics', Promise.reject(result), true, mock)
  },
  deleteReference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteReference', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteReferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteReference', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteReferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteReference', 'Omics', Promise.reject(result), true, mock)
  },
  deleteReferenceStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteReferenceStore', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteReferenceStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteReferenceStore', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteReferenceStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteReferenceStore', 'Omics', Promise.reject(result), true, mock)
  },
  deleteRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteRun', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteRun', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteRun', 'Omics', Promise.reject(result), true, mock)
  },
  deleteRunGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteRunGroup', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteRunGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteRunGroup', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteRunGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteRunGroup', 'Omics', Promise.reject(result), true, mock)
  },
  deleteSequenceStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteSequenceStore', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteSequenceStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteSequenceStore', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteSequenceStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteSequenceStore', 'Omics', Promise.reject(result), true, mock)
  },
  deleteShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteShare', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteShare', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteShare', 'Omics', Promise.reject(result), true, mock)
  },
  deleteVariantStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteVariantStore', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteVariantStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteVariantStore', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteVariantStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteVariantStore', 'Omics', Promise.reject(result), true, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteWorkflow', 'Omics', Promise.resolve(result), true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteWorkflow', 'Omics', Promise.resolve(result), false, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'deleteWorkflow', 'Omics', Promise.reject(result), true, mock)
  },
  getAnnotationImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  getAnnotationImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  getAnnotationImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  getAnnotationStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationStore', 'Omics', Promise.resolve(result), true, mock)
  },
  getAnnotationStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationStore', 'Omics', Promise.resolve(result), false, mock)
  },
  getAnnotationStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationStore', 'Omics', Promise.reject(result), true, mock)
  },
  getAnnotationStoreVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationStoreVersion', 'Omics', Promise.resolve(result), true, mock)
  },
  getAnnotationStoreVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationStoreVersion', 'Omics', Promise.resolve(result), false, mock)
  },
  getAnnotationStoreVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getAnnotationStoreVersion', 'Omics', Promise.reject(result), true, mock)
  },
  getReadSetActivationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetActivationJob', 'Omics', Promise.resolve(result), true, mock)
  },
  getReadSetActivationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetActivationJob', 'Omics', Promise.resolve(result), false, mock)
  },
  getReadSetActivationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetActivationJob', 'Omics', Promise.reject(result), true, mock)
  },
  getReadSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSet', 'Omics', Promise.resolve(result), true, mock)
  },
  getReadSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSet', 'Omics', Promise.resolve(result), false, mock)
  },
  getReadSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSet', 'Omics', Promise.reject(result), true, mock)
  },
  getReadSetExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetExportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  getReadSetExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetExportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  getReadSetExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetExportJob', 'Omics', Promise.reject(result), true, mock)
  },
  getReadSetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  getReadSetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  getReadSetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  getReadSetMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetMetadata', 'Omics', Promise.resolve(result), true, mock)
  },
  getReadSetMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetMetadata', 'Omics', Promise.resolve(result), false, mock)
  },
  getReadSetMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReadSetMetadata', 'Omics', Promise.reject(result), true, mock)
  },
  getReference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReference', 'Omics', Promise.resolve(result), true, mock)
  },
  getReferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReference', 'Omics', Promise.resolve(result), false, mock)
  },
  getReferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReference', 'Omics', Promise.reject(result), true, mock)
  },
  getReferenceImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  getReferenceImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  getReferenceImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  getReferenceMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceMetadata', 'Omics', Promise.resolve(result), true, mock)
  },
  getReferenceMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceMetadata', 'Omics', Promise.resolve(result), false, mock)
  },
  getReferenceMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceMetadata', 'Omics', Promise.reject(result), true, mock)
  },
  getReferenceStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceStore', 'Omics', Promise.resolve(result), true, mock)
  },
  getReferenceStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceStore', 'Omics', Promise.resolve(result), false, mock)
  },
  getReferenceStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getReferenceStore', 'Omics', Promise.reject(result), true, mock)
  },
  getRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRun', 'Omics', Promise.resolve(result), true, mock)
  },
  getRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRun', 'Omics', Promise.resolve(result), false, mock)
  },
  getRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRun', 'Omics', Promise.reject(result), true, mock)
  },
  getRunGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRunGroup', 'Omics', Promise.resolve(result), true, mock)
  },
  getRunGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRunGroup', 'Omics', Promise.resolve(result), false, mock)
  },
  getRunGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRunGroup', 'Omics', Promise.reject(result), true, mock)
  },
  getRunTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRunTask', 'Omics', Promise.resolve(result), true, mock)
  },
  getRunTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRunTask', 'Omics', Promise.resolve(result), false, mock)
  },
  getRunTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getRunTask', 'Omics', Promise.reject(result), true, mock)
  },
  getSequenceStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getSequenceStore', 'Omics', Promise.resolve(result), true, mock)
  },
  getSequenceStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getSequenceStore', 'Omics', Promise.resolve(result), false, mock)
  },
  getSequenceStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getSequenceStore', 'Omics', Promise.reject(result), true, mock)
  },
  getShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getShare', 'Omics', Promise.resolve(result), true, mock)
  },
  getShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getShare', 'Omics', Promise.resolve(result), false, mock)
  },
  getShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getShare', 'Omics', Promise.reject(result), true, mock)
  },
  getVariantImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getVariantImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  getVariantImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getVariantImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  getVariantImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getVariantImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  getVariantStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getVariantStore', 'Omics', Promise.resolve(result), true, mock)
  },
  getVariantStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getVariantStore', 'Omics', Promise.resolve(result), false, mock)
  },
  getVariantStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getVariantStore', 'Omics', Promise.reject(result), true, mock)
  },
  getWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getWorkflow', 'Omics', Promise.resolve(result), true, mock)
  },
  getWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getWorkflow', 'Omics', Promise.resolve(result), false, mock)
  },
  getWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'getWorkflow', 'Omics', Promise.reject(result), true, mock)
  },
  listAnnotationImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationImportJobs', 'Omics', Promise.resolve(result), true, mock)
  },
  listAnnotationImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationImportJobs', 'Omics', Promise.resolve(result), false, mock)
  },
  listAnnotationImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationImportJobs', 'Omics', Promise.reject(result), true, mock)
  },
  listAnnotationStoreVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationStoreVersions', 'Omics', Promise.resolve(result), true, mock)
  },
  listAnnotationStoreVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationStoreVersions', 'Omics', Promise.resolve(result), false, mock)
  },
  listAnnotationStoreVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationStoreVersions', 'Omics', Promise.reject(result), true, mock)
  },
  listAnnotationStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationStores', 'Omics', Promise.resolve(result), true, mock)
  },
  listAnnotationStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationStores', 'Omics', Promise.resolve(result), false, mock)
  },
  listAnnotationStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listAnnotationStores', 'Omics', Promise.reject(result), true, mock)
  },
  listMultipartReadSetUploads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listMultipartReadSetUploads', 'Omics', Promise.resolve(result), true, mock)
  },
  listMultipartReadSetUploadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listMultipartReadSetUploads', 'Omics', Promise.resolve(result), false, mock)
  },
  listMultipartReadSetUploadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listMultipartReadSetUploads', 'Omics', Promise.reject(result), true, mock)
  },
  listReadSetActivationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetActivationJobs', 'Omics', Promise.resolve(result), true, mock)
  },
  listReadSetActivationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetActivationJobs', 'Omics', Promise.resolve(result), false, mock)
  },
  listReadSetActivationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetActivationJobs', 'Omics', Promise.reject(result), true, mock)
  },
  listReadSetExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetExportJobs', 'Omics', Promise.resolve(result), true, mock)
  },
  listReadSetExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetExportJobs', 'Omics', Promise.resolve(result), false, mock)
  },
  listReadSetExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetExportJobs', 'Omics', Promise.reject(result), true, mock)
  },
  listReadSetImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetImportJobs', 'Omics', Promise.resolve(result), true, mock)
  },
  listReadSetImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetImportJobs', 'Omics', Promise.resolve(result), false, mock)
  },
  listReadSetImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetImportJobs', 'Omics', Promise.reject(result), true, mock)
  },
  listReadSetUploadParts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetUploadParts', 'Omics', Promise.resolve(result), true, mock)
  },
  listReadSetUploadPartsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetUploadParts', 'Omics', Promise.resolve(result), false, mock)
  },
  listReadSetUploadPartsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSetUploadParts', 'Omics', Promise.reject(result), true, mock)
  },
  listReadSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSets', 'Omics', Promise.resolve(result), true, mock)
  },
  listReadSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSets', 'Omics', Promise.resolve(result), false, mock)
  },
  listReadSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReadSets', 'Omics', Promise.reject(result), true, mock)
  },
  listReferenceImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferenceImportJobs', 'Omics', Promise.resolve(result), true, mock)
  },
  listReferenceImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferenceImportJobs', 'Omics', Promise.resolve(result), false, mock)
  },
  listReferenceImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferenceImportJobs', 'Omics', Promise.reject(result), true, mock)
  },
  listReferenceStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferenceStores', 'Omics', Promise.resolve(result), true, mock)
  },
  listReferenceStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferenceStores', 'Omics', Promise.resolve(result), false, mock)
  },
  listReferenceStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferenceStores', 'Omics', Promise.reject(result), true, mock)
  },
  listReferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferences', 'Omics', Promise.resolve(result), true, mock)
  },
  listReferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferences', 'Omics', Promise.resolve(result), false, mock)
  },
  listReferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listReferences', 'Omics', Promise.reject(result), true, mock)
  },
  listRunGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRunGroups', 'Omics', Promise.resolve(result), true, mock)
  },
  listRunGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRunGroups', 'Omics', Promise.resolve(result), false, mock)
  },
  listRunGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRunGroups', 'Omics', Promise.reject(result), true, mock)
  },
  listRunTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRunTasks', 'Omics', Promise.resolve(result), true, mock)
  },
  listRunTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRunTasks', 'Omics', Promise.resolve(result), false, mock)
  },
  listRunTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRunTasks', 'Omics', Promise.reject(result), true, mock)
  },
  listRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRuns', 'Omics', Promise.resolve(result), true, mock)
  },
  listRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRuns', 'Omics', Promise.resolve(result), false, mock)
  },
  listRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listRuns', 'Omics', Promise.reject(result), true, mock)
  },
  listSequenceStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listSequenceStores', 'Omics', Promise.resolve(result), true, mock)
  },
  listSequenceStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listSequenceStores', 'Omics', Promise.resolve(result), false, mock)
  },
  listSequenceStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listSequenceStores', 'Omics', Promise.reject(result), true, mock)
  },
  listShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listShares', 'Omics', Promise.resolve(result), true, mock)
  },
  listSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listShares', 'Omics', Promise.resolve(result), false, mock)
  },
  listSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listShares', 'Omics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listTagsForResource', 'Omics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listTagsForResource', 'Omics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listTagsForResource', 'Omics', Promise.reject(result), true, mock)
  },
  listVariantImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listVariantImportJobs', 'Omics', Promise.resolve(result), true, mock)
  },
  listVariantImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listVariantImportJobs', 'Omics', Promise.resolve(result), false, mock)
  },
  listVariantImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listVariantImportJobs', 'Omics', Promise.reject(result), true, mock)
  },
  listVariantStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listVariantStores', 'Omics', Promise.resolve(result), true, mock)
  },
  listVariantStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listVariantStores', 'Omics', Promise.resolve(result), false, mock)
  },
  listVariantStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listVariantStores', 'Omics', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listWorkflows', 'Omics', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listWorkflows', 'Omics', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'listWorkflows', 'Omics', Promise.reject(result), true, mock)
  },
  startAnnotationImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startAnnotationImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  startAnnotationImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startAnnotationImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  startAnnotationImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startAnnotationImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  startReadSetActivationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetActivationJob', 'Omics', Promise.resolve(result), true, mock)
  },
  startReadSetActivationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetActivationJob', 'Omics', Promise.resolve(result), false, mock)
  },
  startReadSetActivationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetActivationJob', 'Omics', Promise.reject(result), true, mock)
  },
  startReadSetExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetExportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  startReadSetExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetExportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  startReadSetExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetExportJob', 'Omics', Promise.reject(result), true, mock)
  },
  startReadSetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  startReadSetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  startReadSetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReadSetImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  startReferenceImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReferenceImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  startReferenceImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReferenceImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  startReferenceImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startReferenceImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  startRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startRun', 'Omics', Promise.resolve(result), true, mock)
  },
  startRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startRun', 'Omics', Promise.resolve(result), false, mock)
  },
  startRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startRun', 'Omics', Promise.reject(result), true, mock)
  },
  startVariantImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startVariantImportJob', 'Omics', Promise.resolve(result), true, mock)
  },
  startVariantImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startVariantImportJob', 'Omics', Promise.resolve(result), false, mock)
  },
  startVariantImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'startVariantImportJob', 'Omics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'tagResource', 'Omics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'tagResource', 'Omics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'tagResource', 'Omics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'untagResource', 'Omics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'untagResource', 'Omics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'untagResource', 'Omics', Promise.reject(result), true, mock)
  },
  updateAnnotationStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateAnnotationStore', 'Omics', Promise.resolve(result), true, mock)
  },
  updateAnnotationStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateAnnotationStore', 'Omics', Promise.resolve(result), false, mock)
  },
  updateAnnotationStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateAnnotationStore', 'Omics', Promise.reject(result), true, mock)
  },
  updateAnnotationStoreVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateAnnotationStoreVersion', 'Omics', Promise.resolve(result), true, mock)
  },
  updateAnnotationStoreVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateAnnotationStoreVersion', 'Omics', Promise.resolve(result), false, mock)
  },
  updateAnnotationStoreVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateAnnotationStoreVersion', 'Omics', Promise.reject(result), true, mock)
  },
  updateRunGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateRunGroup', 'Omics', Promise.resolve(result), true, mock)
  },
  updateRunGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateRunGroup', 'Omics', Promise.resolve(result), false, mock)
  },
  updateRunGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateRunGroup', 'Omics', Promise.reject(result), true, mock)
  },
  updateVariantStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateVariantStore', 'Omics', Promise.resolve(result), true, mock)
  },
  updateVariantStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateVariantStore', 'Omics', Promise.resolve(result), false, mock)
  },
  updateVariantStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateVariantStore', 'Omics', Promise.reject(result), true, mock)
  },
  updateWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateWorkflow', 'Omics', Promise.resolve(result), true, mock)
  },
  updateWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateWorkflow', 'Omics', Promise.resolve(result), false, mock)
  },
  updateWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'updateWorkflow', 'Omics', Promise.reject(result), true, mock)
  },
  uploadReadSetPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'uploadReadSetPart', 'Omics', Promise.resolve(result), true, mock)
  },
  uploadReadSetPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'uploadReadSetPart', 'Omics', Promise.resolve(result), false, mock)
  },
  uploadReadSetPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'uploadReadSetPart', 'Omics', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'send', 'OmicsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'send', 'OmicsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-omics', 'send', 'OmicsClient', Promise.reject(result), true, mock)
  }
}
