
/**
* @description mocks_v2:mockMacie.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockMacie = {
  associateMemberAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberAccount', 'Macie', result, true, true, mock)
  },
  associateMemberAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberAccount', 'Macie', result, false, true, mock)
  },
  associateMemberAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberAccount', 'Macie', result, true, false, mock)
  },
  associateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateS3Resources', 'Macie', result, true, true, mock)
  },
  associateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateS3Resources', 'Macie', result, false, true, mock)
  },
  associateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateS3Resources', 'Macie', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie', result, true, false, mock)
  },
  disassociateMemberAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberAccount', 'Macie', result, true, true, mock)
  },
  disassociateMemberAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberAccount', 'Macie', result, false, true, mock)
  },
  disassociateMemberAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberAccount', 'Macie', result, true, false, mock)
  },
  disassociateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateS3Resources', 'Macie', result, true, true, mock)
  },
  disassociateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateS3Resources', 'Macie', result, false, true, mock)
  },
  disassociateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateS3Resources', 'Macie', result, true, false, mock)
  },
  listMemberAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'Macie', result, true, true, mock)
  },
  listMemberAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'Macie', result, false, true, mock)
  },
  listMemberAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'Macie', result, true, false, mock)
  },
  listS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listS3Resources', 'Macie', result, true, true, mock)
  },
  listS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listS3Resources', 'Macie', result, false, true, mock)
  },
  listS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listS3Resources', 'Macie', result, true, false, mock)
  },
  updateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateS3Resources', 'Macie', result, true, true, mock)
  },
  updateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateS3Resources', 'Macie', result, false, true, mock)
  },
  updateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateS3Resources', 'Macie', result, true, false, mock)
  },
}
