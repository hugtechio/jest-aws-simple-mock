
/**
* @description mocks_v3:mockMedicalImaging module is mocks for AWS-SDK V3
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
export const mockMedicalImaging = {
  copyImageSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'copyImageSet', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  copyImageSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'copyImageSet', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  copyImageSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'copyImageSet', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  createDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'createDatastore', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  createDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'createDatastore', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  createDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'createDatastore', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  deleteDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'deleteDatastore', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  deleteDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'deleteDatastore', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  deleteDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'deleteDatastore', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  deleteImageSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'deleteImageSet', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  deleteImageSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'deleteImageSet', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  deleteImageSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'deleteImageSet', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  getDICOMImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getDICOMImportJob', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  getDICOMImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getDICOMImportJob', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  getDICOMImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getDICOMImportJob', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  getDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getDatastore', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  getDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getDatastore', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  getDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getDatastore', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  getImageFrame: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageFrame', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  getImageFrameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageFrame', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  getImageFrameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageFrame', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  getImageSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageSet', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  getImageSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageSet', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  getImageSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageSet', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  getImageSetMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageSetMetadata', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  getImageSetMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageSetMetadata', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  getImageSetMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'getImageSetMetadata', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  listDICOMImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listDICOMImportJobs', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  listDICOMImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listDICOMImportJobs', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  listDICOMImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listDICOMImportJobs', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  listDatastores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listDatastores', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  listDatastoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listDatastores', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  listDatastoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listDatastores', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  listImageSetVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listImageSetVersions', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  listImageSetVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listImageSetVersions', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  listImageSetVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listImageSetVersions', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listTagsForResource', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listTagsForResource', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'listTagsForResource', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  searchImageSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'searchImageSets', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  searchImageSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'searchImageSets', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  searchImageSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'searchImageSets', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  startDICOMImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'startDICOMImportJob', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  startDICOMImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'startDICOMImportJob', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  startDICOMImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'startDICOMImportJob', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'tagResource', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'tagResource', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'tagResource', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'untagResource', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'untagResource', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'untagResource', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  updateImageSetMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'updateImageSetMetadata', 'MedicalImaging', Promise.resolve(result), true, mock)
  },
  updateImageSetMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'updateImageSetMetadata', 'MedicalImaging', Promise.resolve(result), false, mock)
  },
  updateImageSetMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'updateImageSetMetadata', 'MedicalImaging', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'send', 'MedicalImagingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'send', 'MedicalImagingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medical-imaging', 'send', 'MedicalImagingClient', Promise.reject(result), true, mock)
  }
}
