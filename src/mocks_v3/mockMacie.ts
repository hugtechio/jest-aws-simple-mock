
/**
* @description mocks_v3:mockMacie module is mocks for AWS-SDK V3
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

  export const mockMacie = {
  associateMemberAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'associateMemberAccount', 'Macie', Promise.resolve(result), true, mock)
  },
  associateMemberAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'associateMemberAccount', 'Macie', Promise.resolve(result), false, mock)
  },
  associateMemberAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'associateMemberAccount', 'Macie', Promise.reject(result), true, mock)
  },
  associateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'associateS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  associateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'associateS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  associateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'associateS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'destroy', 'Macie', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'destroy', 'Macie', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'destroy', 'Macie', Promise.reject(result), true, mock)
  },
  disassociateMemberAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'disassociateMemberAccount', 'Macie', Promise.resolve(result), true, mock)
  },
  disassociateMemberAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'disassociateMemberAccount', 'Macie', Promise.resolve(result), false, mock)
  },
  disassociateMemberAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'disassociateMemberAccount', 'Macie', Promise.reject(result), true, mock)
  },
  disassociateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'disassociateS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  disassociateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'disassociateS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  disassociateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'disassociateS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
  listMemberAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'listMemberAccounts', 'Macie', Promise.resolve(result), true, mock)
  },
  listMemberAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'listMemberAccounts', 'Macie', Promise.resolve(result), false, mock)
  },
  listMemberAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'listMemberAccounts', 'Macie', Promise.reject(result), true, mock)
  },
  listS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'listS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  listS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'listS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  listS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'listS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
  updateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'updateS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  updateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'updateS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  updateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'updateS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'send', 'MacieClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'send', 'MacieClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie', 'send', 'MacieClient', Promise.reject(result), true, mock)
  }
}