
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
  export const mockForecast = {
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'Forecast', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'Forecast', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'Forecast', Promise.reject(result), true, mock)
  },
  createDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  createDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  createDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
  createDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetImportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  createDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetImportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  createDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetImportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  createForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  createForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  createForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  createForecastExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createForecastExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  createForecastExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createForecastExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  createForecastExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createForecastExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  createPredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  createPredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  createPredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  createPredictorBacktestExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPredictorBacktestExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  createPredictorBacktestExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPredictorBacktestExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  createPredictorBacktestExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPredictorBacktestExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetImportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetImportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetImportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteForecastExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteForecastExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteForecastExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteForecastExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteForecastExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteForecastExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  deletePredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  deletePredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  deletePredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  deletePredictorBacktestExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  deletePredictorBacktestExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  deletePredictorBacktestExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePredictorBacktestExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  deleteResourceTree: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceTree', 'Forecast', Promise.resolve(result), true, mock)
  },
  deleteResourceTreeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceTree', 'Forecast', Promise.resolve(result), false, mock)
  },
  deleteResourceTreeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceTree', 'Forecast', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'Forecast', Promise.reject(result), true, mock)
  },
  describeDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
  describeDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatasetImportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatasetImportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatasetImportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  describeForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeForecast', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeForecast', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeForecast', 'Forecast', Promise.reject(result), true, mock)
  },
  describeForecastExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeForecastExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  describeForecastExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeForecastExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  describeForecastExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeForecastExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  describePredictor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePredictor', 'Forecast', Promise.resolve(result), true, mock)
  },
  describePredictorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePredictor', 'Forecast', Promise.resolve(result), false, mock)
  },
  describePredictorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePredictor', 'Forecast', Promise.reject(result), true, mock)
  },
  describePredictorBacktestExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), true, mock)
  },
  describePredictorBacktestExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePredictorBacktestExportJob', 'Forecast', Promise.resolve(result), false, mock)
  },
  describePredictorBacktestExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePredictorBacktestExportJob', 'Forecast', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Forecast', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Forecast', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Forecast', Promise.reject(result), true, mock)
  },
  getAccuracyMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccuracyMetrics', 'Forecast', Promise.resolve(result), true, mock)
  },
  getAccuracyMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccuracyMetrics', 'Forecast', Promise.resolve(result), false, mock)
  },
  getAccuracyMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccuracyMetrics', 'Forecast', Promise.reject(result), true, mock)
  },
  listDatasetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetGroups', 'Forecast', Promise.resolve(result), true, mock)
  },
  listDatasetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetGroups', 'Forecast', Promise.resolve(result), false, mock)
  },
  listDatasetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetGroups', 'Forecast', Promise.reject(result), true, mock)
  },
  listDatasetImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetImportJobs', 'Forecast', Promise.resolve(result), true, mock)
  },
  listDatasetImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetImportJobs', 'Forecast', Promise.resolve(result), false, mock)
  },
  listDatasetImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetImportJobs', 'Forecast', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'Forecast', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'Forecast', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'Forecast', Promise.reject(result), true, mock)
  },
  listForecastExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listForecastExportJobs', 'Forecast', Promise.resolve(result), true, mock)
  },
  listForecastExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listForecastExportJobs', 'Forecast', Promise.resolve(result), false, mock)
  },
  listForecastExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listForecastExportJobs', 'Forecast', Promise.reject(result), true, mock)
  },
  listForecasts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listForecasts', 'Forecast', Promise.resolve(result), true, mock)
  },
  listForecastsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listForecasts', 'Forecast', Promise.resolve(result), false, mock)
  },
  listForecastsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listForecasts', 'Forecast', Promise.reject(result), true, mock)
  },
  listPredictorBacktestExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPredictorBacktestExportJobs', 'Forecast', Promise.resolve(result), true, mock)
  },
  listPredictorBacktestExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPredictorBacktestExportJobs', 'Forecast', Promise.resolve(result), false, mock)
  },
  listPredictorBacktestExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPredictorBacktestExportJobs', 'Forecast', Promise.reject(result), true, mock)
  },
  listPredictors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPredictors', 'Forecast', Promise.resolve(result), true, mock)
  },
  listPredictorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPredictors', 'Forecast', Promise.resolve(result), false, mock)
  },
  listPredictorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPredictors', 'Forecast', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Forecast', Promise.reject(result), true, mock)
  },
  stopResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  stopResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  stopResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopResource', 'Forecast', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Forecast', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Forecast', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Forecast', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Forecast', Promise.reject(result), true, mock)
  },
  updateDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetGroup', 'Forecast', Promise.resolve(result), true, mock)
  },
  updateDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetGroup', 'Forecast', Promise.resolve(result), false, mock)
  },
  updateDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetGroup', 'Forecast', Promise.reject(result), true, mock)
  },
}
