
/**
* @description mocks_v3:mockManagedBlockchainQuery module is mocks for AWS-SDK V3
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
export const mockManagedBlockchainQuery = {
  batchGetTokenBalance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'batchGetTokenBalance', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  batchGetTokenBalanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'batchGetTokenBalance', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  batchGetTokenBalanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'batchGetTokenBalance', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  getAssetContract: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getAssetContract', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  getAssetContractAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getAssetContract', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  getAssetContractThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getAssetContract', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  getTokenBalance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getTokenBalance', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  getTokenBalanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getTokenBalance', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  getTokenBalanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getTokenBalance', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  getTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getTransaction', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  getTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getTransaction', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  getTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'getTransaction', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  listAssetContracts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listAssetContracts', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  listAssetContractsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listAssetContracts', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  listAssetContractsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listAssetContracts', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  listTokenBalances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTokenBalances', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  listTokenBalancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTokenBalances', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  listTokenBalancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTokenBalances', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  listTransactionEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTransactionEvents', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  listTransactionEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTransactionEvents', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  listTransactionEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTransactionEvents', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  listTransactions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTransactions', 'ManagedBlockchainQuery', Promise.resolve(result), true, mock)
  },
  listTransactionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTransactions', 'ManagedBlockchainQuery', Promise.resolve(result), false, mock)
  },
  listTransactionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'listTransactions', 'ManagedBlockchainQuery', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'send', 'ManagedBlockchainQueryClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'send', 'ManagedBlockchainQueryClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-managedblockchain-query', 'send', 'ManagedBlockchainQueryClient', Promise.reject(result), true, mock)
  }
}
