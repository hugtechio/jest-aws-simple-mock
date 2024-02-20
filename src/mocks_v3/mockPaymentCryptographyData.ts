
/**
* @description mocks_v3:mockPaymentCryptographyData module is mocks for AWS-SDK V3
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
export const mockPaymentCryptographyData = {
  decryptData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'decryptData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  decryptDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'decryptData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  decryptDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'decryptData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  encryptData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'encryptData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  encryptDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'encryptData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  encryptDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'encryptData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  generateCardValidationData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generateCardValidationData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  generateCardValidationDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generateCardValidationData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  generateCardValidationDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generateCardValidationData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  generateMac: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generateMac', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  generateMacAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generateMac', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  generateMacThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generateMac', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  generatePinData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generatePinData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  generatePinDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generatePinData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  generatePinDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'generatePinData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  reEncryptData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'reEncryptData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  reEncryptDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'reEncryptData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  reEncryptDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'reEncryptData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  translatePinData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'translatePinData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  translatePinDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'translatePinData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  translatePinDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'translatePinData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  verifyAuthRequestCryptogram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyAuthRequestCryptogram', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  verifyAuthRequestCryptogramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyAuthRequestCryptogram', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  verifyAuthRequestCryptogramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyAuthRequestCryptogram', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  verifyCardValidationData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyCardValidationData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  verifyCardValidationDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyCardValidationData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  verifyCardValidationDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyCardValidationData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  verifyMac: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyMac', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  verifyMacAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyMac', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  verifyMacThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyMac', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  verifyPinData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyPinData', 'PaymentCryptographyData', Promise.resolve(result), true, mock)
  },
  verifyPinDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyPinData', 'PaymentCryptographyData', Promise.resolve(result), false, mock)
  },
  verifyPinDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'verifyPinData', 'PaymentCryptographyData', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'send', 'PaymentCryptographyDataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'send', 'PaymentCryptographyDataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-payment-cryptography-data', 'send', 'PaymentCryptographyDataClient', Promise.reject(result), true, mock)
  }
}
