
/**
* @description mocks_v3:mockConnectCases module is mocks for AWS-SDK V3
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
export const mockConnectCases = {
  batchGetField: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'batchGetField', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  batchGetFieldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'batchGetField', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  batchGetFieldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'batchGetField', 'ConnectCases', Promise.reject(result), true, mock)
  },
  batchPutFieldOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'batchPutFieldOptions', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  batchPutFieldOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'batchPutFieldOptions', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  batchPutFieldOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'batchPutFieldOptions', 'ConnectCases', Promise.reject(result), true, mock)
  },
  createCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createCase', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  createCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createCase', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  createCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createCase', 'ConnectCases', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createDomain', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createDomain', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createDomain', 'ConnectCases', Promise.reject(result), true, mock)
  },
  createField: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createField', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  createFieldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createField', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  createFieldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createField', 'ConnectCases', Promise.reject(result), true, mock)
  },
  createLayout: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createLayout', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  createLayoutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createLayout', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  createLayoutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createLayout', 'ConnectCases', Promise.reject(result), true, mock)
  },
  createRelatedItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createRelatedItem', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  createRelatedItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createRelatedItem', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  createRelatedItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createRelatedItem', 'ConnectCases', Promise.reject(result), true, mock)
  },
  createTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createTemplate', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  createTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createTemplate', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  createTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'createTemplate', 'ConnectCases', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'deleteDomain', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'deleteDomain', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'deleteDomain', 'ConnectCases', Promise.reject(result), true, mock)
  },
  getCaseAuditEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCaseAuditEvents', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  getCaseAuditEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCaseAuditEvents', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  getCaseAuditEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCaseAuditEvents', 'ConnectCases', Promise.reject(result), true, mock)
  },
  getCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCase', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  getCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCase', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  getCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCase', 'ConnectCases', Promise.reject(result), true, mock)
  },
  getCaseEventConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCaseEventConfiguration', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  getCaseEventConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCaseEventConfiguration', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  getCaseEventConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getCaseEventConfiguration', 'ConnectCases', Promise.reject(result), true, mock)
  },
  getDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getDomain', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  getDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getDomain', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  getDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getDomain', 'ConnectCases', Promise.reject(result), true, mock)
  },
  getLayout: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getLayout', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  getLayoutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getLayout', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  getLayoutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getLayout', 'ConnectCases', Promise.reject(result), true, mock)
  },
  getTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getTemplate', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  getTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getTemplate', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  getTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'getTemplate', 'ConnectCases', Promise.reject(result), true, mock)
  },
  listCasesForContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listCasesForContact', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  listCasesForContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listCasesForContact', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  listCasesForContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listCasesForContact', 'ConnectCases', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listDomains', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listDomains', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listDomains', 'ConnectCases', Promise.reject(result), true, mock)
  },
  listFieldOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listFieldOptions', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  listFieldOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listFieldOptions', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  listFieldOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listFieldOptions', 'ConnectCases', Promise.reject(result), true, mock)
  },
  listFields: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listFields', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  listFieldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listFields', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  listFieldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listFields', 'ConnectCases', Promise.reject(result), true, mock)
  },
  listLayouts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listLayouts', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  listLayoutsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listLayouts', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  listLayoutsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listLayouts', 'ConnectCases', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listTagsForResource', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listTagsForResource', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listTagsForResource', 'ConnectCases', Promise.reject(result), true, mock)
  },
  listTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listTemplates', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  listTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listTemplates', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  listTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'listTemplates', 'ConnectCases', Promise.reject(result), true, mock)
  },
  putCaseEventConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'putCaseEventConfiguration', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  putCaseEventConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'putCaseEventConfiguration', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  putCaseEventConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'putCaseEventConfiguration', 'ConnectCases', Promise.reject(result), true, mock)
  },
  searchCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'searchCases', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  searchCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'searchCases', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  searchCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'searchCases', 'ConnectCases', Promise.reject(result), true, mock)
  },
  searchRelatedItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'searchRelatedItems', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  searchRelatedItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'searchRelatedItems', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  searchRelatedItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'searchRelatedItems', 'ConnectCases', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'tagResource', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'tagResource', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'tagResource', 'ConnectCases', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'untagResource', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'untagResource', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'untagResource', 'ConnectCases', Promise.reject(result), true, mock)
  },
  updateCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateCase', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  updateCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateCase', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  updateCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateCase', 'ConnectCases', Promise.reject(result), true, mock)
  },
  updateField: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateField', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  updateFieldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateField', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  updateFieldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateField', 'ConnectCases', Promise.reject(result), true, mock)
  },
  updateLayout: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateLayout', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  updateLayoutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateLayout', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  updateLayoutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateLayout', 'ConnectCases', Promise.reject(result), true, mock)
  },
  updateTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateTemplate', 'ConnectCases', Promise.resolve(result), true, mock)
  },
  updateTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateTemplate', 'ConnectCases', Promise.resolve(result), false, mock)
  },
  updateTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'updateTemplate', 'ConnectCases', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'send', 'ConnectCasesClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'send', 'ConnectCasesClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectcases', 'send', 'ConnectCasesClient', Promise.reject(result), true, mock)
  }
}
