
/**
* @description mocks_v3:mockForecast module is mocks for AWS-SDK V3
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
export const mockForecast = {
  createAutoPredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createAutoPredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  createAutoPredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createAutoPredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  createAutoPredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createAutoPredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDataset', 'Forecast', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDataset', 'Forecast', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDataset', 'Forecast', Promise.reject(result), true, mock)
  },
  createDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  createDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  createDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
  createDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDatasetImportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  createDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDatasetImportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  createDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createDatasetImportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  createExplainability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createExplainability', 'Forecast', Promise.resolve(result), true, mock)
  },
  createExplainabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createExplainability', 'Forecast', Promise.resolve(result), false, mock)
  },
  createExplainabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createExplainability', 'Forecast', Promise.reject(result), true, mock)
  },
  createExplainabilityExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createExplainabilityExport', 'Forecast', Promise.resolve(result), true, mock)
  },
  createExplainabilityExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createExplainabilityExport', 'Forecast', Promise.resolve(result), false, mock)
  },
  createExplainabilityExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createExplainabilityExport', 'Forecast', Promise.reject(result), true, mock)
  },
  createForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  createForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  createForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  createForecastExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createForecastExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  createForecastExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createForecastExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  createForecastExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createForecastExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  createMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createMonitor', 'Forecast', Promise.resolve(result), true, mock)
  },
  createMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createMonitor', 'Forecast', Promise.resolve(result), false, mock)
  },
  createMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createMonitor', 'Forecast', Promise.reject(result), true, mock)
  },
  createPredictorBacktestExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictorBacktestExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  createPredictorBacktestExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictorBacktestExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  createPredictorBacktestExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictorBacktestExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  createPredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  createPredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  createPredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  createWhatIfAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfAnalysis', 'Forecast', Promise.resolve(result), true, mock)
  },
  createWhatIfAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfAnalysis', 'Forecast', Promise.resolve(result), false, mock)
  },
  createWhatIfAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfAnalysis', 'Forecast', Promise.reject(result), true, mock)
  },
  createWhatIfForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  createWhatIfForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  createWhatIfForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  createWhatIfForecastExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfForecastExport', 'Forecast', Promise.resolve(result), true, mock)
  },
  createWhatIfForecastExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfForecastExport', 'Forecast', Promise.resolve(result), false, mock)
  },
  createWhatIfForecastExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createWhatIfForecastExport', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDataset', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDataset', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDataset', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDatasetImportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDatasetImportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteDatasetImportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteExplainability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteExplainability', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteExplainabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteExplainability', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteExplainabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteExplainability', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteExplainabilityExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteExplainabilityExport', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteExplainabilityExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteExplainabilityExport', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteExplainabilityExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteExplainabilityExport', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteForecastExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteForecastExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteForecastExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteForecastExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteForecastExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteForecastExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteMonitor', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteMonitor', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteMonitor', 'Forecast', Promise.reject(result), true, mock)
  },
  deletePredictorBacktestExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  deletePredictorBacktestExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  deletePredictorBacktestExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictorBacktestExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  deletePredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  deletePredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  deletePredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteResourceTree: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteResourceTree', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteResourceTreeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteResourceTree', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteResourceTreeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteResourceTree', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteWhatIfAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfAnalysis', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteWhatIfAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfAnalysis', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteWhatIfAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfAnalysis', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteWhatIfForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteWhatIfForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteWhatIfForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteWhatIfForecastExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfForecastExport', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteWhatIfForecastExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfForecastExport', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteWhatIfForecastExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteWhatIfForecastExport', 'Forecast', Promise.reject(result), true, mock)
  },
  describeAutoPredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeAutoPredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeAutoPredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeAutoPredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeAutoPredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeAutoPredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDataset', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDataset', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDataset', 'Forecast', Promise.reject(result), true, mock)
  },
  describeDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
  describeDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDatasetImportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDatasetImportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeDatasetImportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  describeExplainability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeExplainability', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeExplainabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeExplainability', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeExplainabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeExplainability', 'Forecast', Promise.reject(result), true, mock)
  },
  describeExplainabilityExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeExplainabilityExport', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeExplainabilityExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeExplainabilityExport', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeExplainabilityExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeExplainabilityExport', 'Forecast', Promise.reject(result), true, mock)
  },
  describeForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  describeForecastExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeForecastExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeForecastExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeForecastExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeForecastExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeForecastExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  describeMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeMonitor', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeMonitor', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeMonitor', 'Forecast', Promise.reject(result), true, mock)
  },
  describePredictorBacktestExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  describePredictorBacktestExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  describePredictorBacktestExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictorBacktestExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  describePredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  describePredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  describePredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  describeWhatIfAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfAnalysis', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeWhatIfAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfAnalysis', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeWhatIfAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfAnalysis', 'Forecast', Promise.reject(result), true, mock)
  },
  describeWhatIfForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeWhatIfForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeWhatIfForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  describeWhatIfForecastExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfForecastExport', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeWhatIfForecastExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfForecastExport', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeWhatIfForecastExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describeWhatIfForecastExport', 'Forecast', Promise.reject(result), true, mock)
  },
  getAccuracyMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'getAccuracyMetrics', 'Forecast', Promise.resolve(result), true, mock)
  },
  getAccuracyMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'getAccuracyMetrics', 'Forecast', Promise.resolve(result), false, mock)
  },
  getAccuracyMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'getAccuracyMetrics', 'Forecast', Promise.reject(result), true, mock)
  },
  listDatasetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasetGroups', 'Forecast', Promise.resolve(result), true, mock)
  },
  listDatasetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasetGroups', 'Forecast', Promise.resolve(result), false, mock)
  },
  listDatasetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasetGroups', 'Forecast', Promise.reject(result), true, mock)
  },
  listDatasetImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasetImportJobs', 'Forecast', Promise.resolve(result), true, mock)
  },
  listDatasetImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasetImportJobs', 'Forecast', Promise.resolve(result), false, mock)
  },
  listDatasetImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasetImportJobs', 'Forecast', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasets', 'Forecast', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasets', 'Forecast', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listDatasets', 'Forecast', Promise.reject(result), true, mock)
  },
  listExplainabilities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listExplainabilities', 'Forecast', Promise.resolve(result), true, mock)
  },
  listExplainabilitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listExplainabilities', 'Forecast', Promise.resolve(result), false, mock)
  },
  listExplainabilitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listExplainabilities', 'Forecast', Promise.reject(result), true, mock)
  },
  listExplainabilityExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listExplainabilityExports', 'Forecast', Promise.resolve(result), true, mock)
  },
  listExplainabilityExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listExplainabilityExports', 'Forecast', Promise.resolve(result), false, mock)
  },
  listExplainabilityExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listExplainabilityExports', 'Forecast', Promise.reject(result), true, mock)
  },
  listForecastExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listForecastExportJobs', 'Forecast', Promise.resolve(result), true, mock)
  },
  listForecastExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listForecastExportJobs', 'Forecast', Promise.resolve(result), false, mock)
  },
  listForecastExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listForecastExportJobs', 'Forecast', Promise.reject(result), true, mock)
  },
  listForecasts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listForecasts', 'Forecast', Promise.resolve(result), true, mock)
  },
  listForecastsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listForecasts', 'Forecast', Promise.resolve(result), false, mock)
  },
  listForecastsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listForecasts', 'Forecast', Promise.reject(result), true, mock)
  },
  listMonitorEvaluations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listMonitorEvaluations', 'Forecast', Promise.resolve(result), true, mock)
  },
  listMonitorEvaluationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listMonitorEvaluations', 'Forecast', Promise.resolve(result), false, mock)
  },
  listMonitorEvaluationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listMonitorEvaluations', 'Forecast', Promise.reject(result), true, mock)
  },
  listMonitors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listMonitors', 'Forecast', Promise.resolve(result), true, mock)
  },
  listMonitorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listMonitors', 'Forecast', Promise.resolve(result), false, mock)
  },
  listMonitorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listMonitors', 'Forecast', Promise.reject(result), true, mock)
  },
  listPredictorBacktestExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listPredictorBacktestExportJobs', 'Forecast', Promise.resolve(result), true, mock)
  },
  listPredictorBacktestExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listPredictorBacktestExportJobs', 'Forecast', Promise.resolve(result), false, mock)
  },
  listPredictorBacktestExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listPredictorBacktestExportJobs', 'Forecast', Promise.reject(result), true, mock)
  },
  listPredictors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listPredictors', 'Forecast', Promise.resolve(result), true, mock)
  },
  listPredictorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listPredictors', 'Forecast', Promise.resolve(result), false, mock)
  },
  listPredictorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listPredictors', 'Forecast', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listTagsForResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listTagsForResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listTagsForResource', 'Forecast', Promise.reject(result), true, mock)
  },
  listWhatIfAnalyses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfAnalyses', 'Forecast', Promise.resolve(result), true, mock)
  },
  listWhatIfAnalysesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfAnalyses', 'Forecast', Promise.resolve(result), false, mock)
  },
  listWhatIfAnalysesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfAnalyses', 'Forecast', Promise.reject(result), true, mock)
  },
  listWhatIfForecastExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfForecastExports', 'Forecast', Promise.resolve(result), true, mock)
  },
  listWhatIfForecastExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfForecastExports', 'Forecast', Promise.resolve(result), false, mock)
  },
  listWhatIfForecastExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfForecastExports', 'Forecast', Promise.reject(result), true, mock)
  },
  listWhatIfForecasts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfForecasts', 'Forecast', Promise.resolve(result), true, mock)
  },
  listWhatIfForecastsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfForecasts', 'Forecast', Promise.resolve(result), false, mock)
  },
  listWhatIfForecastsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'listWhatIfForecasts', 'Forecast', Promise.reject(result), true, mock)
  },
  resumeResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'resumeResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  resumeResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'resumeResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  resumeResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'resumeResource', 'Forecast', Promise.reject(result), true, mock)
  },
  stopResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'stopResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  stopResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'stopResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  stopResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'stopResource', 'Forecast', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'tagResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'tagResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'tagResource', 'Forecast', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'untagResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'untagResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'untagResource', 'Forecast', Promise.reject(result), true, mock)
  },
  updateDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'updateDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  updateDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'updateDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  updateDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'updateDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'send', 'ForecastClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'send', 'ForecastClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'send', 'ForecastClient', Promise.reject(result), true, mock)
  }
}
