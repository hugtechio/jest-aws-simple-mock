
/**
* @description mocks_v3:mockSupplyChain module is mocks for AWS-SDK V3
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
export const mockSupplyChain = {
  createBillOfMaterialsImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'createBillOfMaterialsImportJob', 'SupplyChain', Promise.resolve(result), true, mock)
  },
  createBillOfMaterialsImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'createBillOfMaterialsImportJob', 'SupplyChain', Promise.resolve(result), false, mock)
  },
  createBillOfMaterialsImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'createBillOfMaterialsImportJob', 'SupplyChain', Promise.reject(result), true, mock)
  },
  getBillOfMaterialsImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'getBillOfMaterialsImportJob', 'SupplyChain', Promise.resolve(result), true, mock)
  },
  getBillOfMaterialsImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'getBillOfMaterialsImportJob', 'SupplyChain', Promise.resolve(result), false, mock)
  },
  getBillOfMaterialsImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'getBillOfMaterialsImportJob', 'SupplyChain', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'send', 'SupplyChainClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'send', 'SupplyChainClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-supplychain', 'send', 'SupplyChainClient', Promise.reject(result), true, mock)
  }
}
