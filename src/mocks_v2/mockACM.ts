
/**
* @description mocks_v2:mockACM.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockACM = {
  addTagsToCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToCertificate', 'ACM', result, true, true, mock)
  },
  addTagsToCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToCertificate', 'ACM', result, false, true, mock)
  },
  addTagsToCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToCertificate', 'ACM', result, true, false, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'ACM', result, true, true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'ACM', result, false, true, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificate', 'ACM', result, true, false, mock)
  },
  describeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'ACM', result, true, true, mock)
  },
  describeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'ACM', result, false, true, mock)
  },
  describeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'ACM', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACM', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACM', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACM', result, true, false, mock)
  },
  exportCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportCertificate', 'ACM', result, true, true, mock)
  },
  exportCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportCertificate', 'ACM', result, false, true, mock)
  },
  exportCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportCertificate', 'ACM', result, true, false, mock)
  },
  getAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountConfiguration', 'ACM', result, true, true, mock)
  },
  getAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountConfiguration', 'ACM', result, false, true, mock)
  },
  getAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountConfiguration', 'ACM', result, true, false, mock)
  },
  getCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACM', result, true, true, mock)
  },
  getCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACM', result, false, true, mock)
  },
  getCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACM', result, true, false, mock)
  },
  importCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'ACM', result, true, true, mock)
  },
  importCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'ACM', result, false, true, mock)
  },
  importCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificate', 'ACM', result, true, false, mock)
  },
  listCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'ACM', result, true, true, mock)
  },
  listCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'ACM', result, false, true, mock)
  },
  listCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'ACM', result, true, false, mock)
  },
  listTagsForCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForCertificate', 'ACM', result, true, true, mock)
  },
  listTagsForCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForCertificate', 'ACM', result, false, true, mock)
  },
  listTagsForCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForCertificate', 'ACM', result, true, false, mock)
  },
  putAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountConfiguration', 'ACM', result, true, true, mock)
  },
  putAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountConfiguration', 'ACM', result, false, true, mock)
  },
  putAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountConfiguration', 'ACM', result, true, false, mock)
  },
  removeTagsFromCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromCertificate', 'ACM', result, true, true, mock)
  },
  removeTagsFromCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromCertificate', 'ACM', result, false, true, mock)
  },
  removeTagsFromCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromCertificate', 'ACM', result, true, false, mock)
  },
  renewCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewCertificate', 'ACM', result, true, true, mock)
  },
  renewCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewCertificate', 'ACM', result, false, true, mock)
  },
  renewCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewCertificate', 'ACM', result, true, false, mock)
  },
  requestCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCertificate', 'ACM', result, true, true, mock)
  },
  requestCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCertificate', 'ACM', result, false, true, mock)
  },
  requestCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('requestCertificate', 'ACM', result, true, false, mock)
  },
  resendValidationEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendValidationEmail', 'ACM', result, true, true, mock)
  },
  resendValidationEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendValidationEmail', 'ACM', result, false, true, mock)
  },
  resendValidationEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resendValidationEmail', 'ACM', result, true, false, mock)
  },
  updateCertificateOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateOptions', 'ACM', result, true, true, mock)
  },
  updateCertificateOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateOptions', 'ACM', result, false, true, mock)
  },
  updateCertificateOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateOptions', 'ACM', result, true, false, mock)
  },
}
