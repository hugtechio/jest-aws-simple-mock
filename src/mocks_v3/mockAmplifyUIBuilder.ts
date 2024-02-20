
/**
* @description mocks_v3:mockAmplifyUIBuilder module is mocks for AWS-SDK V3
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
export const mockAmplifyUIBuilder = {
  createComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createComponent', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  createComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createComponent', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  createComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createComponent', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  createForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createForm', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  createFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createForm', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  createFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createForm', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  createTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createTheme', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  createThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createTheme', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  createThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'createTheme', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  deleteComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteComponent', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  deleteComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteComponent', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  deleteComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteComponent', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  deleteForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteForm', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  deleteFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteForm', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  deleteFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteForm', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  deleteTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteTheme', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  deleteThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteTheme', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  deleteThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'deleteTheme', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  exchangeCodeForToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exchangeCodeForToken', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  exchangeCodeForTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exchangeCodeForToken', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  exchangeCodeForTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exchangeCodeForToken', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  exportComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportComponents', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  exportComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportComponents', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  exportComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportComponents', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  exportForms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportForms', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  exportFormsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportForms', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  exportFormsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportForms', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  exportThemes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportThemes', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  exportThemesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportThemes', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  exportThemesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'exportThemes', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  getCodegenJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getCodegenJob', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  getCodegenJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getCodegenJob', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  getCodegenJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getCodegenJob', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  getComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getComponent', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  getComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getComponent', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  getComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getComponent', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  getForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getForm', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  getFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getForm', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  getFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getForm', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  getMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getMetadata', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  getMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getMetadata', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  getMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getMetadata', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  getTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getTheme', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  getThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getTheme', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  getThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'getTheme', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  listCodegenJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listCodegenJobs', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  listCodegenJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listCodegenJobs', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  listCodegenJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listCodegenJobs', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  listComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listComponents', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  listComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listComponents', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  listComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listComponents', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  listForms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listForms', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  listFormsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listForms', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  listFormsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listForms', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  listThemes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listThemes', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  listThemesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listThemes', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  listThemesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'listThemes', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  putMetadataFlag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'putMetadataFlag', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  putMetadataFlagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'putMetadataFlag', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  putMetadataFlagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'putMetadataFlag', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  refreshToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'refreshToken', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  refreshTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'refreshToken', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  refreshTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'refreshToken', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  startCodegenJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'startCodegenJob', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  startCodegenJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'startCodegenJob', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  startCodegenJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'startCodegenJob', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  updateComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateComponent', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  updateComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateComponent', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  updateComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateComponent', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  updateForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateForm', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  updateFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateForm', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  updateFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateForm', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  updateTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateTheme', 'AmplifyUIBuilder', Promise.resolve(result), true, mock)
  },
  updateThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateTheme', 'AmplifyUIBuilder', Promise.resolve(result), false, mock)
  },
  updateThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'updateTheme', 'AmplifyUIBuilder', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'send', 'AmplifyUIBuilderClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'send', 'AmplifyUIBuilderClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplifyuibuilder', 'send', 'AmplifyUIBuilderClient', Promise.reject(result), true, mock)
  }
}
