
/**
* @description mocks_v3:mockACM module is mocks for AWS-SDK V3
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
export const mockACM = {
  addTagsToCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'addTagsToCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  addTagsToCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'addTagsToCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  addTagsToCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'addTagsToCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'deleteCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'deleteCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'deleteCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  describeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'describeCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  describeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'describeCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  describeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'describeCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  exportCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'exportCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  exportCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'exportCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  exportCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'exportCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  getAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'getAccountConfiguration', 'ACM', Promise.resolve(result), true, mock)
  },
  getAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'getAccountConfiguration', 'ACM', Promise.resolve(result), false, mock)
  },
  getAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'getAccountConfiguration', 'ACM', Promise.reject(result), true, mock)
  },
  getCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'getCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  getCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'getCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  getCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'getCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  importCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'importCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  importCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'importCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  importCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'importCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  listCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'listCertificates', 'ACM', Promise.resolve(result), true, mock)
  },
  listCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'listCertificates', 'ACM', Promise.resolve(result), false, mock)
  },
  listCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'listCertificates', 'ACM', Promise.reject(result), true, mock)
  },
  listTagsForCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'listTagsForCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  listTagsForCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'listTagsForCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  listTagsForCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'listTagsForCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  putAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'putAccountConfiguration', 'ACM', Promise.resolve(result), true, mock)
  },
  putAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'putAccountConfiguration', 'ACM', Promise.resolve(result), false, mock)
  },
  putAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'putAccountConfiguration', 'ACM', Promise.reject(result), true, mock)
  },
  removeTagsFromCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'removeTagsFromCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  removeTagsFromCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'removeTagsFromCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  removeTagsFromCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'removeTagsFromCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  renewCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'renewCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  renewCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'renewCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  renewCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'renewCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  requestCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'requestCertificate', 'ACM', Promise.resolve(result), true, mock)
  },
  requestCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'requestCertificate', 'ACM', Promise.resolve(result), false, mock)
  },
  requestCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'requestCertificate', 'ACM', Promise.reject(result), true, mock)
  },
  resendValidationEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'resendValidationEmail', 'ACM', Promise.resolve(result), true, mock)
  },
  resendValidationEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'resendValidationEmail', 'ACM', Promise.resolve(result), false, mock)
  },
  resendValidationEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'resendValidationEmail', 'ACM', Promise.reject(result), true, mock)
  },
  updateCertificateOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'updateCertificateOptions', 'ACM', Promise.resolve(result), true, mock)
  },
  updateCertificateOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'updateCertificateOptions', 'ACM', Promise.resolve(result), false, mock)
  },
  updateCertificateOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'updateCertificateOptions', 'ACM', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'send', 'ACMClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'send', 'ACMClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-acm', 'send', 'ACMClient', Promise.reject(result), true, mock)
  }
}
