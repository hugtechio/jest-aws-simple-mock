
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
  export const mockMacie = {
  associateMemberAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberAccount', 'Macie', Promise.resolve(result), true, mock)
  },
  associateMemberAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberAccount', 'Macie', Promise.resolve(result), false, mock)
  },
  associateMemberAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateMemberAccount', 'Macie', Promise.reject(result), true, mock)
  },
  associateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  associateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  associateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie', Promise.reject(result), true, mock)
  },
  disassociateMemberAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberAccount', 'Macie', Promise.resolve(result), true, mock)
  },
  disassociateMemberAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberAccount', 'Macie', Promise.resolve(result), false, mock)
  },
  disassociateMemberAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMemberAccount', 'Macie', Promise.reject(result), true, mock)
  },
  disassociateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  disassociateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  disassociateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
  listMemberAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'Macie', Promise.resolve(result), true, mock)
  },
  listMemberAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'Macie', Promise.resolve(result), false, mock)
  },
  listMemberAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'Macie', Promise.reject(result), true, mock)
  },
  listS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  listS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  listS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
  updateS3Resources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateS3Resources', 'Macie', Promise.resolve(result), true, mock)
  },
  updateS3ResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateS3Resources', 'Macie', Promise.resolve(result), false, mock)
  },
  updateS3ResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateS3Resources', 'Macie', Promise.reject(result), true, mock)
  },
}
