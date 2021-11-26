
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
  export const mockACMPCA = {
  createCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificateAuthority', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  createCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificateAuthority', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  createCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificateAuthority', 'ACMPCA', Promise.reject(result), true, mock)
  },
  createCertificateAuthorityAuditReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificateAuthorityAuditReport', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  createCertificateAuthorityAuditReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificateAuthorityAuditReport', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  createCertificateAuthorityAuditReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCertificateAuthorityAuditReport', 'ACMPCA', Promise.reject(result), true, mock)
  },
  createPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPermission', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  createPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPermission', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  createPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPermission', 'ACMPCA', Promise.reject(result), true, mock)
  },
  deleteCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificateAuthority', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  deleteCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificateAuthority', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  deleteCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCertificateAuthority', 'ACMPCA', Promise.reject(result), true, mock)
  },
  deletePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermission', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  deletePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermission', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  deletePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermission', 'ACMPCA', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'ACMPCA', Promise.reject(result), true, mock)
  },
  describeCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificateAuthority', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  describeCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificateAuthority', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  describeCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificateAuthority', 'ACMPCA', Promise.reject(result), true, mock)
  },
  describeCertificateAuthorityAuditReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificateAuthorityAuditReport', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  describeCertificateAuthorityAuditReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificateAuthorityAuditReport', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  describeCertificateAuthorityAuditReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificateAuthorityAuditReport', 'ACMPCA', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ACMPCA', Promise.reject(result), true, mock)
  },
  getCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  getCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  getCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificate', 'ACMPCA', Promise.reject(result), true, mock)
  },
  getCertificateAuthorityCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificateAuthorityCertificate', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  getCertificateAuthorityCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificateAuthorityCertificate', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  getCertificateAuthorityCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificateAuthorityCertificate', 'ACMPCA', Promise.reject(result), true, mock)
  },
  getCertificateAuthorityCsr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificateAuthorityCsr', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  getCertificateAuthorityCsrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificateAuthorityCsr', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  getCertificateAuthorityCsrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCertificateAuthorityCsr', 'ACMPCA', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'ACMPCA', Promise.reject(result), true, mock)
  },
  importCertificateAuthorityCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificateAuthorityCertificate', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  importCertificateAuthorityCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificateAuthorityCertificate', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  importCertificateAuthorityCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importCertificateAuthorityCertificate', 'ACMPCA', Promise.reject(result), true, mock)
  },
  issueCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('issueCertificate', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  issueCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('issueCertificate', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  issueCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('issueCertificate', 'ACMPCA', Promise.reject(result), true, mock)
  },
  listCertificateAuthorities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificateAuthorities', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  listCertificateAuthoritiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificateAuthorities', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  listCertificateAuthoritiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificateAuthorities', 'ACMPCA', Promise.reject(result), true, mock)
  },
  listPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  listPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  listPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'ACMPCA', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'ACMPCA', Promise.reject(result), true, mock)
  },
  putPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  putPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  putPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'ACMPCA', Promise.reject(result), true, mock)
  },
  restoreCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreCertificateAuthority', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  restoreCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreCertificateAuthority', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  restoreCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreCertificateAuthority', 'ACMPCA', Promise.reject(result), true, mock)
  },
  revokeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeCertificate', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  revokeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeCertificate', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  revokeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeCertificate', 'ACMPCA', Promise.reject(result), true, mock)
  },
  tagCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagCertificateAuthority', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  tagCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagCertificateAuthority', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  tagCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagCertificateAuthority', 'ACMPCA', Promise.reject(result), true, mock)
  },
  untagCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagCertificateAuthority', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  untagCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagCertificateAuthority', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  untagCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagCertificateAuthority', 'ACMPCA', Promise.reject(result), true, mock)
  },
  updateCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateAuthority', 'ACMPCA', Promise.resolve(result), true, mock)
  },
  updateCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateAuthority', 'ACMPCA', Promise.resolve(result), false, mock)
  },
  updateCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCertificateAuthority', 'ACMPCA', Promise.reject(result), true, mock)
  },
}
