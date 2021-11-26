
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockHealthLake = {
  createFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'createFHIRDatastore', 'HealthLake', Promise.resolve(result), true, mock)
  },
  createFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'createFHIRDatastore', 'HealthLake', Promise.resolve(result), false, mock)
  },
  createFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'createFHIRDatastore', 'HealthLake', Promise.reject(result), true, mock)
  },
  deleteFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'deleteFHIRDatastore', 'HealthLake', Promise.resolve(result), true, mock)
  },
  deleteFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'deleteFHIRDatastore', 'HealthLake', Promise.resolve(result), false, mock)
  },
  deleteFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'deleteFHIRDatastore', 'HealthLake', Promise.reject(result), true, mock)
  },
  describeFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRDatastore', 'HealthLake', Promise.resolve(result), true, mock)
  },
  describeFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRDatastore', 'HealthLake', Promise.resolve(result), false, mock)
  },
  describeFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRDatastore', 'HealthLake', Promise.reject(result), true, mock)
  },
  describeFHIRExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRExportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  describeFHIRExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRExportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  describeFHIRExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRExportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  describeFHIRImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRImportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  describeFHIRImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRImportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  describeFHIRImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'describeFHIRImportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'destroy', 'HealthLake', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'destroy', 'HealthLake', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'destroy', 'HealthLake', Promise.reject(result), true, mock)
  },
  listFHIRDatastores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRDatastores', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listFHIRDatastoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRDatastores', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listFHIRDatastoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRDatastores', 'HealthLake', Promise.reject(result), true, mock)
  },
  listFHIRExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRExportJobs', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listFHIRExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRExportJobs', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listFHIRExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRExportJobs', 'HealthLake', Promise.reject(result), true, mock)
  },
  listFHIRImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRImportJobs', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listFHIRImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRImportJobs', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listFHIRImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listFHIRImportJobs', 'HealthLake', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listTagsForResource', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listTagsForResource', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'listTagsForResource', 'HealthLake', Promise.reject(result), true, mock)
  },
  startFHIRExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'startFHIRExportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  startFHIRExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'startFHIRExportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  startFHIRExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'startFHIRExportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  startFHIRImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'startFHIRImportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  startFHIRImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'startFHIRImportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  startFHIRImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'startFHIRImportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'tagResource', 'HealthLake', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'tagResource', 'HealthLake', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'tagResource', 'HealthLake', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'untagResource', 'HealthLake', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'untagResource', 'HealthLake', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'untagResource', 'HealthLake', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'send', 'HealthLakeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'send', 'HealthLakeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-healthlake', 'send', 'HealthLakeClient', Promise.reject(result), true, mock)
  }
}