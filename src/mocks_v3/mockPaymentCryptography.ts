
/**
* @description mocks_v3:mockPaymentCryptography module is mocks for AWS-SDK V3
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
export const mockPaymentCryptography = {
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'createAlias', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'createAlias', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'createAlias', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  createKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'createKey', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  createKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'createKey', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  createKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'createKey', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  deleteAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'deleteAlias', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  deleteAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'deleteAlias', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  deleteAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'deleteAlias', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  deleteKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'deleteKey', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  deleteKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'deleteKey', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  deleteKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'deleteKey', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  exportKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'exportKey', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  exportKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'exportKey', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  exportKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'exportKey', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  getAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getAlias', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  getAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getAlias', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  getAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getAlias', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  getKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getKey', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  getKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getKey', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  getKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getKey', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  getParametersForExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getParametersForExport', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  getParametersForExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getParametersForExport', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  getParametersForExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getParametersForExport', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  getParametersForImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getParametersForImport', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  getParametersForImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getParametersForImport', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  getParametersForImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getParametersForImport', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  getPublicKeyCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getPublicKeyCertificate', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  getPublicKeyCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getPublicKeyCertificate', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  getPublicKeyCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'getPublicKeyCertificate', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  importKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'importKey', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  importKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'importKey', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  importKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'importKey', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  listAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listAliases', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  listAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listAliases', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  listAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listAliases', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  listKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listKeys', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  listKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listKeys', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  listKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listKeys', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listTagsForResource', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listTagsForResource', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'listTagsForResource', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  restoreKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'restoreKey', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  restoreKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'restoreKey', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  restoreKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'restoreKey', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  startKeyUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'startKeyUsage', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  startKeyUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'startKeyUsage', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  startKeyUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'startKeyUsage', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  stopKeyUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'stopKeyUsage', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  stopKeyUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'stopKeyUsage', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  stopKeyUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'stopKeyUsage', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'tagResource', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'tagResource', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'tagResource', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'untagResource', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'untagResource', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'untagResource', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  updateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'updateAlias', 'PaymentCryptography', Promise.resolve(result), true, mock)
  },
  updateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'updateAlias', 'PaymentCryptography', Promise.resolve(result), false, mock)
  },
  updateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'updateAlias', 'PaymentCryptography', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'send', 'PaymentCryptographyClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'send', 'PaymentCryptographyClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography', 'send', 'PaymentCryptographyClient', Promise.reject(result), true, mock)
  }
}
