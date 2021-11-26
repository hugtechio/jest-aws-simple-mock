
/**
* @description mocks_v2:mockTextract.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockTextract = {
  analyzeDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeDocument', 'Textract', result, true, true, mock)
  },
  analyzeDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeDocument', 'Textract', result, false, true, mock)
  },
  analyzeDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeDocument', 'Textract', result, true, false, mock)
  },
  analyzeExpense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeExpense', 'Textract', result, true, true, mock)
  },
  analyzeExpenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeExpense', 'Textract', result, false, true, mock)
  },
  analyzeExpenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeExpense', 'Textract', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Textract', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Textract', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Textract', result, true, false, mock)
  },
  detectDocumentText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDocumentText', 'Textract', result, true, true, mock)
  },
  detectDocumentTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDocumentText', 'Textract', result, false, true, mock)
  },
  detectDocumentTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDocumentText', 'Textract', result, true, false, mock)
  },
  getDocumentAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentAnalysis', 'Textract', result, true, true, mock)
  },
  getDocumentAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentAnalysis', 'Textract', result, false, true, mock)
  },
  getDocumentAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentAnalysis', 'Textract', result, true, false, mock)
  },
  getDocumentTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentTextDetection', 'Textract', result, true, true, mock)
  },
  getDocumentTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentTextDetection', 'Textract', result, false, true, mock)
  },
  getDocumentTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentTextDetection', 'Textract', result, true, false, mock)
  },
  getExpenseAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExpenseAnalysis', 'Textract', result, true, true, mock)
  },
  getExpenseAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExpenseAnalysis', 'Textract', result, false, true, mock)
  },
  getExpenseAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExpenseAnalysis', 'Textract', result, true, false, mock)
  },
  startDocumentAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentAnalysis', 'Textract', result, true, true, mock)
  },
  startDocumentAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentAnalysis', 'Textract', result, false, true, mock)
  },
  startDocumentAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentAnalysis', 'Textract', result, true, false, mock)
  },
  startDocumentTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentTextDetection', 'Textract', result, true, true, mock)
  },
  startDocumentTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentTextDetection', 'Textract', result, false, true, mock)
  },
  startDocumentTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentTextDetection', 'Textract', result, true, false, mock)
  },
  startExpenseAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExpenseAnalysis', 'Textract', result, true, true, mock)
  },
  startExpenseAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExpenseAnalysis', 'Textract', result, false, true, mock)
  },
  startExpenseAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExpenseAnalysis', 'Textract', result, true, false, mock)
  },
}
