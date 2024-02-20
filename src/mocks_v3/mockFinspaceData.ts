
/**
* @description mocks_v3:mockFinspaceData module is mocks for AWS-SDK V3
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
export const mockFinspaceData = {
  associateUserToPermissionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'associateUserToPermissionGroup', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  associateUserToPermissionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'associateUserToPermissionGroup', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  associateUserToPermissionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'associateUserToPermissionGroup', 'FinspaceData', Promise.reject(result), true, mock)
  },
  createChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createChangeset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  createChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createChangeset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  createChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createChangeset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  createDataView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createDataView', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  createDataViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createDataView', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  createDataViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createDataView', 'FinspaceData', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createDataset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createDataset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createDataset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  createPermissionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createPermissionGroup', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  createPermissionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createPermissionGroup', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  createPermissionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createPermissionGroup', 'FinspaceData', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createUser', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createUser', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'createUser', 'FinspaceData', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'deleteDataset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'deleteDataset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'deleteDataset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  deletePermissionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'deletePermissionGroup', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  deletePermissionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'deletePermissionGroup', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  deletePermissionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'deletePermissionGroup', 'FinspaceData', Promise.reject(result), true, mock)
  },
  disableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'disableUser', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  disableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'disableUser', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  disableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'disableUser', 'FinspaceData', Promise.reject(result), true, mock)
  },
  disassociateUserFromPermissionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'disassociateUserFromPermissionGroup', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  disassociateUserFromPermissionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'disassociateUserFromPermissionGroup', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  disassociateUserFromPermissionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'disassociateUserFromPermissionGroup', 'FinspaceData', Promise.reject(result), true, mock)
  },
  enableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'enableUser', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  enableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'enableUser', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  enableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'enableUser', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getChangeset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getChangeset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getChangeset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getDataView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getDataView', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getDataViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getDataView', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getDataViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getDataView', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getDataset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getDataset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getDataset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getExternalDataViewAccessDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getExternalDataViewAccessDetails', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getExternalDataViewAccessDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getExternalDataViewAccessDetails', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getExternalDataViewAccessDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getExternalDataViewAccessDetails', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getPermissionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getPermissionGroup', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getPermissionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getPermissionGroup', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getPermissionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getPermissionGroup', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getProgrammaticAccessCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getProgrammaticAccessCredentials', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getProgrammaticAccessCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getProgrammaticAccessCredentials', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getProgrammaticAccessCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getProgrammaticAccessCredentials', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getUser', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getUser', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getUser', 'FinspaceData', Promise.reject(result), true, mock)
  },
  getWorkingLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getWorkingLocation', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  getWorkingLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getWorkingLocation', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  getWorkingLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'getWorkingLocation', 'FinspaceData', Promise.reject(result), true, mock)
  },
  listChangesets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listChangesets', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  listChangesetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listChangesets', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  listChangesetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listChangesets', 'FinspaceData', Promise.reject(result), true, mock)
  },
  listDataViews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listDataViews', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  listDataViewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listDataViews', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  listDataViewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listDataViews', 'FinspaceData', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listDatasets', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listDatasets', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listDatasets', 'FinspaceData', Promise.reject(result), true, mock)
  },
  listPermissionGroupsByUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listPermissionGroupsByUser', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  listPermissionGroupsByUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listPermissionGroupsByUser', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  listPermissionGroupsByUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listPermissionGroupsByUser', 'FinspaceData', Promise.reject(result), true, mock)
  },
  listPermissionGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listPermissionGroups', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  listPermissionGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listPermissionGroups', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  listPermissionGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listPermissionGroups', 'FinspaceData', Promise.reject(result), true, mock)
  },
  listUsersByPermissionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listUsersByPermissionGroup', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  listUsersByPermissionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listUsersByPermissionGroup', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  listUsersByPermissionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listUsersByPermissionGroup', 'FinspaceData', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listUsers', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listUsers', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'listUsers', 'FinspaceData', Promise.reject(result), true, mock)
  },
  resetUserPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'resetUserPassword', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  resetUserPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'resetUserPassword', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  resetUserPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'resetUserPassword', 'FinspaceData', Promise.reject(result), true, mock)
  },
  updateChangeset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateChangeset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  updateChangesetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateChangeset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  updateChangesetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateChangeset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  updateDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateDataset', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  updateDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateDataset', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  updateDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateDataset', 'FinspaceData', Promise.reject(result), true, mock)
  },
  updatePermissionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updatePermissionGroup', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  updatePermissionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updatePermissionGroup', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  updatePermissionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updatePermissionGroup', 'FinspaceData', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateUser', 'FinspaceData', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateUser', 'FinspaceData', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'updateUser', 'FinspaceData', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'send', 'FinspaceDataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'send', 'FinspaceDataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-finspace-data', 'send', 'FinspaceDataClient', Promise.reject(result), true, mock)
  }
}
