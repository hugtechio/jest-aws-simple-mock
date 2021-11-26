
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
  export const mockHealthLake = {
  createFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFHIRDatastore', 'HealthLake', Promise.resolve(result), true, mock)
  },
  createFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFHIRDatastore', 'HealthLake', Promise.resolve(result), false, mock)
  },
  createFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFHIRDatastore', 'HealthLake', Promise.reject(result), true, mock)
  },
  deleteFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFHIRDatastore', 'HealthLake', Promise.resolve(result), true, mock)
  },
  deleteFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFHIRDatastore', 'HealthLake', Promise.resolve(result), false, mock)
  },
  deleteFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFHIRDatastore', 'HealthLake', Promise.reject(result), true, mock)
  },
  describeFHIRDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRDatastore', 'HealthLake', Promise.resolve(result), true, mock)
  },
  describeFHIRDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRDatastore', 'HealthLake', Promise.resolve(result), false, mock)
  },
  describeFHIRDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRDatastore', 'HealthLake', Promise.reject(result), true, mock)
  },
  describeFHIRExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRExportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  describeFHIRExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRExportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  describeFHIRExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRExportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  describeFHIRImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRImportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  describeFHIRImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRImportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  describeFHIRImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFHIRImportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'HealthLake', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'HealthLake', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'HealthLake', Promise.reject(result), true, mock)
  },
  listFHIRDatastores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRDatastores', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listFHIRDatastoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRDatastores', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listFHIRDatastoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRDatastores', 'HealthLake', Promise.reject(result), true, mock)
  },
  listFHIRExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRExportJobs', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listFHIRExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRExportJobs', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listFHIRExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRExportJobs', 'HealthLake', Promise.reject(result), true, mock)
  },
  listFHIRImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRImportJobs', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listFHIRImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRImportJobs', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listFHIRImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFHIRImportJobs', 'HealthLake', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'HealthLake', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'HealthLake', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'HealthLake', Promise.reject(result), true, mock)
  },
  startFHIRExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRExportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  startFHIRExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRExportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  startFHIRExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRExportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  startFHIRImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRImportJob', 'HealthLake', Promise.resolve(result), true, mock)
  },
  startFHIRImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRImportJob', 'HealthLake', Promise.resolve(result), false, mock)
  },
  startFHIRImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFHIRImportJob', 'HealthLake', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'HealthLake', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'HealthLake', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'HealthLake', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'HealthLake', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'HealthLake', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'HealthLake', Promise.reject(result), true, mock)
  },
}
