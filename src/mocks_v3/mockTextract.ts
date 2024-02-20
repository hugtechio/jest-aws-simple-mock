
/**
* @description mocks_v3:mockTextract module is mocks for AWS-SDK V3
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
export const mockTextract = {
  analyzeDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeDocument', 'Textract', Promise.resolve(result), true, mock)
  },
  analyzeDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeDocument', 'Textract', Promise.resolve(result), false, mock)
  },
  analyzeDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeDocument', 'Textract', Promise.reject(result), true, mock)
  },
  analyzeExpense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeExpense', 'Textract', Promise.resolve(result), true, mock)
  },
  analyzeExpenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeExpense', 'Textract', Promise.resolve(result), false, mock)
  },
  analyzeExpenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeExpense', 'Textract', Promise.reject(result), true, mock)
  },
  analyzeID: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeID', 'Textract', Promise.resolve(result), true, mock)
  },
  analyzeIDAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeID', 'Textract', Promise.resolve(result), false, mock)
  },
  analyzeIDThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'analyzeID', 'Textract', Promise.reject(result), true, mock)
  },
  createAdapter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'createAdapter', 'Textract', Promise.resolve(result), true, mock)
  },
  createAdapterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'createAdapter', 'Textract', Promise.resolve(result), false, mock)
  },
  createAdapterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'createAdapter', 'Textract', Promise.reject(result), true, mock)
  },
  createAdapterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'createAdapterVersion', 'Textract', Promise.resolve(result), true, mock)
  },
  createAdapterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'createAdapterVersion', 'Textract', Promise.resolve(result), false, mock)
  },
  createAdapterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'createAdapterVersion', 'Textract', Promise.reject(result), true, mock)
  },
  deleteAdapter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'deleteAdapter', 'Textract', Promise.resolve(result), true, mock)
  },
  deleteAdapterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'deleteAdapter', 'Textract', Promise.resolve(result), false, mock)
  },
  deleteAdapterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'deleteAdapter', 'Textract', Promise.reject(result), true, mock)
  },
  deleteAdapterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'deleteAdapterVersion', 'Textract', Promise.resolve(result), true, mock)
  },
  deleteAdapterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'deleteAdapterVersion', 'Textract', Promise.resolve(result), false, mock)
  },
  deleteAdapterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'deleteAdapterVersion', 'Textract', Promise.reject(result), true, mock)
  },
  detectDocumentText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'detectDocumentText', 'Textract', Promise.resolve(result), true, mock)
  },
  detectDocumentTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'detectDocumentText', 'Textract', Promise.resolve(result), false, mock)
  },
  detectDocumentTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'detectDocumentText', 'Textract', Promise.reject(result), true, mock)
  },
  getAdapter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getAdapter', 'Textract', Promise.resolve(result), true, mock)
  },
  getAdapterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getAdapter', 'Textract', Promise.resolve(result), false, mock)
  },
  getAdapterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getAdapter', 'Textract', Promise.reject(result), true, mock)
  },
  getAdapterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getAdapterVersion', 'Textract', Promise.resolve(result), true, mock)
  },
  getAdapterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getAdapterVersion', 'Textract', Promise.resolve(result), false, mock)
  },
  getAdapterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getAdapterVersion', 'Textract', Promise.reject(result), true, mock)
  },
  getDocumentAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getDocumentAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  getDocumentAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getDocumentAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  getDocumentAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getDocumentAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  getDocumentTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getDocumentTextDetection', 'Textract', Promise.resolve(result), true, mock)
  },
  getDocumentTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getDocumentTextDetection', 'Textract', Promise.resolve(result), false, mock)
  },
  getDocumentTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getDocumentTextDetection', 'Textract', Promise.reject(result), true, mock)
  },
  getExpenseAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getExpenseAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  getExpenseAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getExpenseAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  getExpenseAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getExpenseAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  getLendingAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getLendingAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  getLendingAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getLendingAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  getLendingAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getLendingAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  getLendingAnalysisSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getLendingAnalysisSummary', 'Textract', Promise.resolve(result), true, mock)
  },
  getLendingAnalysisSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getLendingAnalysisSummary', 'Textract', Promise.resolve(result), false, mock)
  },
  getLendingAnalysisSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'getLendingAnalysisSummary', 'Textract', Promise.reject(result), true, mock)
  },
  listAdapterVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listAdapterVersions', 'Textract', Promise.resolve(result), true, mock)
  },
  listAdapterVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listAdapterVersions', 'Textract', Promise.resolve(result), false, mock)
  },
  listAdapterVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listAdapterVersions', 'Textract', Promise.reject(result), true, mock)
  },
  listAdapters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listAdapters', 'Textract', Promise.resolve(result), true, mock)
  },
  listAdaptersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listAdapters', 'Textract', Promise.resolve(result), false, mock)
  },
  listAdaptersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listAdapters', 'Textract', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listTagsForResource', 'Textract', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listTagsForResource', 'Textract', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'listTagsForResource', 'Textract', Promise.reject(result), true, mock)
  },
  startDocumentAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startDocumentAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  startDocumentAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startDocumentAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  startDocumentAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startDocumentAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  startDocumentTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startDocumentTextDetection', 'Textract', Promise.resolve(result), true, mock)
  },
  startDocumentTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startDocumentTextDetection', 'Textract', Promise.resolve(result), false, mock)
  },
  startDocumentTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startDocumentTextDetection', 'Textract', Promise.reject(result), true, mock)
  },
  startExpenseAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startExpenseAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  startExpenseAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startExpenseAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  startExpenseAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startExpenseAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  startLendingAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startLendingAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  startLendingAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startLendingAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  startLendingAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'startLendingAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'tagResource', 'Textract', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'tagResource', 'Textract', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'tagResource', 'Textract', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'untagResource', 'Textract', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'untagResource', 'Textract', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'untagResource', 'Textract', Promise.reject(result), true, mock)
  },
  updateAdapter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'updateAdapter', 'Textract', Promise.resolve(result), true, mock)
  },
  updateAdapterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'updateAdapter', 'Textract', Promise.resolve(result), false, mock)
  },
  updateAdapterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'updateAdapter', 'Textract', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'send', 'TextractClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'send', 'TextractClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'send', 'TextractClient', Promise.reject(result), true, mock)
  }
}
