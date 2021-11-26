
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
  export const mockTextract = {
  analyzeDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeDocument', 'Textract', Promise.resolve(result), true, mock)
  },
  analyzeDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeDocument', 'Textract', Promise.resolve(result), false, mock)
  },
  analyzeDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeDocument', 'Textract', Promise.reject(result), true, mock)
  },
  analyzeExpense: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeExpense', 'Textract', Promise.resolve(result), true, mock)
  },
  analyzeExpenseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeExpense', 'Textract', Promise.resolve(result), false, mock)
  },
  analyzeExpenseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('analyzeExpense', 'Textract', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Textract', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Textract', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Textract', Promise.reject(result), true, mock)
  },
  detectDocumentText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDocumentText', 'Textract', Promise.resolve(result), true, mock)
  },
  detectDocumentTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDocumentText', 'Textract', Promise.resolve(result), false, mock)
  },
  detectDocumentTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDocumentText', 'Textract', Promise.reject(result), true, mock)
  },
  getDocumentAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  getDocumentAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  getDocumentAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  getDocumentTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentTextDetection', 'Textract', Promise.resolve(result), true, mock)
  },
  getDocumentTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentTextDetection', 'Textract', Promise.resolve(result), false, mock)
  },
  getDocumentTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentTextDetection', 'Textract', Promise.reject(result), true, mock)
  },
  getExpenseAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExpenseAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  getExpenseAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExpenseAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  getExpenseAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getExpenseAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  startDocumentAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  startDocumentAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  startDocumentAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
  startDocumentTextDetection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentTextDetection', 'Textract', Promise.resolve(result), true, mock)
  },
  startDocumentTextDetectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentTextDetection', 'Textract', Promise.resolve(result), false, mock)
  },
  startDocumentTextDetectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentTextDetection', 'Textract', Promise.reject(result), true, mock)
  },
  startExpenseAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExpenseAnalysis', 'Textract', Promise.resolve(result), true, mock)
  },
  startExpenseAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExpenseAnalysis', 'Textract', Promise.resolve(result), false, mock)
  },
  startExpenseAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startExpenseAnalysis', 'Textract', Promise.reject(result), true, mock)
  },
}
