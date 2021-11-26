
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockLexModelBuildingService = {
  createBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createBotVersion', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  createBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createBotVersion', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  createBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createBotVersion', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  createIntentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createIntentVersion', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  createIntentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createIntentVersion', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  createIntentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createIntentVersion', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  createSlotTypeVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createSlotTypeVersion', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  createSlotTypeVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createSlotTypeVersion', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  createSlotTypeVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'createSlotTypeVersion', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBot', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBot', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBot', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotAlias', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotAlias', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotAlias', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteBotChannelAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotChannelAssociation', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteBotChannelAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotChannelAssociation', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteBotChannelAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotChannelAssociation', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotVersion', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotVersion', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteBotVersion', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteIntent', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteIntent', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteIntent', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteIntentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteIntentVersion', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteIntentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteIntentVersion', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteIntentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteIntentVersion', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteSlotType', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteSlotType', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteSlotType', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteSlotTypeVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteSlotTypeVersion', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteSlotTypeVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteSlotTypeVersion', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteSlotTypeVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteSlotTypeVersion', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  deleteUtterances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteUtterances', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  deleteUtterancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteUtterances', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  deleteUtterancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'deleteUtterances', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'destroy', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'destroy', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'destroy', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBot', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBot', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBot', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotAlias', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotAlias', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotAlias', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBotAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotAliases', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBotAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotAliases', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBotAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotAliases', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBotChannelAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotChannelAssociation', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBotChannelAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotChannelAssociation', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBotChannelAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotChannelAssociation', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBotChannelAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotChannelAssociations', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBotChannelAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotChannelAssociations', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBotChannelAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotChannelAssociations', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBotVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotVersions', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBotVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotVersions', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBotVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBotVersions', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBots', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBots', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBots', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBuiltinIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinIntent', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBuiltinIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinIntent', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBuiltinIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinIntent', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBuiltinIntents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinIntents', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBuiltinIntentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinIntents', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBuiltinIntentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinIntents', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getBuiltinSlotTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinSlotTypes', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getBuiltinSlotTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinSlotTypes', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getBuiltinSlotTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getBuiltinSlotTypes', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getExport', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getExport', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getExport', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getImport', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getImport', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getImport', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntent', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntent', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntent', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getIntentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntentVersions', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getIntentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntentVersions', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getIntentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntentVersions', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getIntents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntents', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getIntentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntents', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getIntentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getIntents', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getMigration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getMigration', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getMigrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getMigration', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getMigrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getMigration', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getMigrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getMigrations', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getMigrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getMigrations', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getMigrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getMigrations', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotType', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotType', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotType', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getSlotTypeVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotTypeVersions', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getSlotTypeVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotTypeVersions', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getSlotTypeVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotTypeVersions', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getSlotTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotTypes', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getSlotTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotTypes', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getSlotTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getSlotTypes', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  getUtterancesView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getUtterancesView', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  getUtterancesViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getUtterancesView', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  getUtterancesViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'getUtterancesView', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'listTagsForResource', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'listTagsForResource', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'listTagsForResource', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  putBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putBot', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  putBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putBot', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  putBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putBot', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  putBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putBotAlias', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  putBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putBotAlias', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  putBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putBotAlias', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  putIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putIntent', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  putIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putIntent', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  putIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putIntent', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  putSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putSlotType', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  putSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putSlotType', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  putSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'putSlotType', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  startImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'startImport', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  startImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'startImport', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  startImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'startImport', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  startMigration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'startMigration', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  startMigrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'startMigration', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  startMigrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'startMigration', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'tagResource', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'tagResource', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'tagResource', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'untagResource', 'LexModelBuildingService', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'untagResource', 'LexModelBuildingService', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'untagResource', 'LexModelBuildingService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'send', 'LexModelBuildingServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'send', 'LexModelBuildingServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-model-building-service', 'send', 'LexModelBuildingServiceClient', Promise.reject(result), true, mock)
  }
}