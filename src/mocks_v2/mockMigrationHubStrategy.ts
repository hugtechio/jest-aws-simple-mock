
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
  export const mockMigrationHubStrategy = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getApplicationComponentDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationComponentDetails', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getApplicationComponentDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationComponentDetails', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getApplicationComponentDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationComponentDetails', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getApplicationComponentStrategies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationComponentStrategies', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getApplicationComponentStrategiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationComponentStrategies', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getApplicationComponentStrategiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationComponentStrategies', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssessment', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssessment', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAssessment', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getImportFileTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImportFileTask', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getImportFileTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImportFileTask', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getImportFileTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getImportFileTask', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getPortfolioPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPortfolioPreferences', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getPortfolioPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPortfolioPreferences', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getPortfolioPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPortfolioPreferences', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getPortfolioSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPortfolioSummary', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getPortfolioSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPortfolioSummary', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getPortfolioSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPortfolioSummary', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getRecommendationReportDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendationReportDetails', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getRecommendationReportDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendationReportDetails', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getRecommendationReportDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendationReportDetails', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getServerDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServerDetails', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getServerDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServerDetails', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getServerDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServerDetails', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  getServerStrategies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServerStrategies', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  getServerStrategiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServerStrategies', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  getServerStrategiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServerStrategies', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  listApplicationComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationComponents', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  listApplicationComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationComponents', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  listApplicationComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationComponents', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  listCollectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCollectors', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  listCollectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCollectors', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  listCollectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCollectors', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  listImportFileTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImportFileTask', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  listImportFileTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImportFileTask', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  listImportFileTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImportFileTask', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  listServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServers', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  listServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServers', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  listServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServers', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  putPortfolioPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPortfolioPreferences', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  putPortfolioPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPortfolioPreferences', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  putPortfolioPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPortfolioPreferences', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  startAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAssessment', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  startAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAssessment', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  startAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAssessment', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  startImportFileTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportFileTask', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  startImportFileTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportFileTask', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  startImportFileTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImportFileTask', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  startRecommendationReportGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRecommendationReportGeneration', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  startRecommendationReportGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRecommendationReportGeneration', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  startRecommendationReportGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRecommendationReportGeneration', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  stopAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAssessment', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  stopAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAssessment', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  stopAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAssessment', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  updateApplicationComponentConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplicationComponentConfig', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  updateApplicationComponentConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplicationComponentConfig', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  updateApplicationComponentConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplicationComponentConfig', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
  updateServerConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServerConfig', 'MigrationHubStrategy', Promise.resolve(result), true, mock)
  },
  updateServerConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServerConfig', 'MigrationHubStrategy', Promise.resolve(result), false, mock)
  },
  updateServerConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServerConfig', 'MigrationHubStrategy', Promise.reject(result), true, mock)
  },
}
