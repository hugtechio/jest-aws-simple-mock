
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'destroy', 'Textract', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'destroy', 'Textract', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-textract', 'destroy', 'Textract', Promise.reject(result), true, mock)
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