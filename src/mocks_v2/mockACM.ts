
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
  export const mockACM = {
  addTagsToCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  addTagsToCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  addTagsToCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  describeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  describeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  describeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACM', Promise.reject(result), true, mock)
  },
  exportCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  exportCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  exportCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  getAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountConfiguration', 'ACM', Promise.resolve(result), true, mock)
  },
  getAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountConfiguration', 'ACM', Promise.resolve(result), false, mock)
  },
  getAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountConfiguration', 'ACM', Promise.reject(result), true, mock)
  },
  getCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  getCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  getCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  importCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  importCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  importCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  listCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'ACM', Promise.resolve(result), true, mock)
  },
  listCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'ACM', Promise.resolve(result), false, mock)
  },
  listCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'ACM', Promise.reject(result), true, mock)
  },
  listTagsForCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  listTagsForCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  listTagsForCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  putAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountConfiguration', 'ACM', Promise.resolve(result), true, mock)
  },
  putAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountConfiguration', 'ACM', Promise.resolve(result), false, mock)
  },
  putAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountConfiguration', 'ACM', Promise.reject(result), true, mock)
  },
  removeTagsFromCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  removeTagsFromCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  removeTagsFromCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  renewCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  renewCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  renewCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  requestCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  requestCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  requestCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  resendValidationEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendValidationEmail', 'ACM', Promise.resolve(result), true, mock)
  },
  resendValidationEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendValidationEmail', 'ACM', Promise.resolve(result), false, mock)
  },
  resendValidationEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendValidationEmail', 'ACM', Promise.reject(result), true, mock)
  },
  updateCertificateOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateOptions', 'ACM', Promise.resolve(result), true, mock)
  },
  updateCertificateOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateOptions', 'ACM', Promise.resolve(result), false, mock)
  },
  updateCertificateOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateOptions', 'ACM', Promise.reject(result), true, mock)
  },
}
