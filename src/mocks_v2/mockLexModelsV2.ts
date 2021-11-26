
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
  export const mockLexModelsV2 = {
  buildBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('buildBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  buildBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('buildBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  buildBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('buildBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotVersion', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotVersion', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBotVersion', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createResourcePolicyStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createResourcePolicyStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createResourcePolicyStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourcePolicyStatement', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createUploadUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUploadUrl', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createUploadUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUploadUrl', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createUploadUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUploadUrl', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotVersion', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotVersion', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBotVersion', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteResourcePolicyStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicyStatement', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteUtterances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUtterances', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteUtterancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUtterances', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteUtterancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUtterances', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotVersion', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotVersion', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBotVersion', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listAggregatedUtterances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAggregatedUtterances', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listAggregatedUtterancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAggregatedUtterances', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listAggregatedUtterancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAggregatedUtterances', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotAliases', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotAliases', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotAliases', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotLocales: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotLocales', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotLocalesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotLocales', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotLocalesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotLocales', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotVersions', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotVersions', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBotVersions', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBots', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBots', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBots', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBuiltInIntents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuiltInIntents', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBuiltInIntentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuiltInIntents', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBuiltInIntentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuiltInIntents', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBuiltInSlotTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuiltInSlotTypes', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBuiltInSlotTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuiltInSlotTypes', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBuiltInSlotTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuiltInSlotTypes', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExports', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExports', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExports', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listImports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImports', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listImportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImports', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listImportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listImports', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listIntents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntents', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listIntentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntents', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listIntentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntents', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listSlotTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSlotTypes', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listSlotTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSlotTypes', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listSlotTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSlotTypes', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listSlots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSlots', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listSlotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSlots', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listSlotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSlots', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  startImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  startImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  startImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
}
