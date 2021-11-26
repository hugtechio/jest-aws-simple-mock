
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockForecast = {
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
  createPredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  createPredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  createPredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'createPredictor', 'Forecast', Promise.reject(result), true, mock)
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
  deletePredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  deletePredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  deletePredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deletePredictor', 'Forecast', Promise.reject(result), true, mock)
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
  deleteResourceTree: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteResourceTree', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteResourceTreeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteResourceTree', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteResourceTreeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'deleteResourceTree', 'Forecast', Promise.reject(result), true, mock)
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
  describePredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  describePredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  describePredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'describePredictor', 'Forecast', Promise.reject(result), true, mock)
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'destroy', 'Forecast', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'destroy', 'Forecast', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-forecast', 'destroy', 'Forecast', Promise.reject(result), true, mock)
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