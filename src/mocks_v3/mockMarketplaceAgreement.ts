
/**
* @description mocks_v3:mockMarketplaceAgreement module is mocks for AWS-SDK V3
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
export const mockMarketplaceAgreement = {
  describeAgreement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'describeAgreement', 'MarketplaceAgreement', Promise.resolve(result), true, mock)
  },
  describeAgreementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'describeAgreement', 'MarketplaceAgreement', Promise.resolve(result), false, mock)
  },
  describeAgreementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'describeAgreement', 'MarketplaceAgreement', Promise.reject(result), true, mock)
  },
  getAgreementTerms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'getAgreementTerms', 'MarketplaceAgreement', Promise.resolve(result), true, mock)
  },
  getAgreementTermsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'getAgreementTerms', 'MarketplaceAgreement', Promise.resolve(result), false, mock)
  },
  getAgreementTermsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'getAgreementTerms', 'MarketplaceAgreement', Promise.reject(result), true, mock)
  },
  searchAgreements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'searchAgreements', 'MarketplaceAgreement', Promise.resolve(result), true, mock)
  },
  searchAgreementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'searchAgreements', 'MarketplaceAgreement', Promise.resolve(result), false, mock)
  },
  searchAgreementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'searchAgreements', 'MarketplaceAgreement', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'send', 'MarketplaceAgreementClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'send', 'MarketplaceAgreementClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-agreement', 'send', 'MarketplaceAgreementClient', Promise.reject(result), true, mock)
  }
}
