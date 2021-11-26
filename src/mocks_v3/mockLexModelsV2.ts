
/**
* @description mocks_v3:mockLexModelsV2 module is mocks for AWS-SDK V3
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

  export const mockLexModelsV2 = {
  buildBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'buildBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  buildBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'buildBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  buildBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'buildBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotVersion', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotVersion', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotVersion', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createResourcePolicyStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createResourcePolicyStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createResourcePolicyStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createResourcePolicyStatement', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  createUploadUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createUploadUrl', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createUploadUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createUploadUrl', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createUploadUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createUploadUrl', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotVersion', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotVersion', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotVersion', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteImport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteImport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteImport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteResourcePolicyStatement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyStatementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteResourcePolicyStatement', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyStatementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteResourcePolicyStatement', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteUtterances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteUtterances', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteUtterancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteUtterances', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteUtterancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteUtterances', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotVersion', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotVersion', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotVersion', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeImport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeImport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeImport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'destroy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'destroy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'destroy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listAggregatedUtterances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listAggregatedUtterances', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listAggregatedUtterancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listAggregatedUtterances', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listAggregatedUtterancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listAggregatedUtterances', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotAliases', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotAliases', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotAliases', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotLocales: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotLocales', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotLocalesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotLocales', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotLocalesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotLocales', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotVersions', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotVersions', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotVersions', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBots', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBots', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBots', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBuiltInIntents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBuiltInIntents', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBuiltInIntentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBuiltInIntents', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBuiltInIntentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBuiltInIntents', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBuiltInSlotTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBuiltInSlotTypes', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBuiltInSlotTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBuiltInSlotTypes', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBuiltInSlotTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBuiltInSlotTypes', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listExports', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listExports', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listExports', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listImports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listImports', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listImportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listImports', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listImportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listImports', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listIntents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntents', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listIntentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntents', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listIntentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntents', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listSlotTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSlotTypes', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listSlotTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSlotTypes', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listSlotTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSlotTypes', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listSlots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSlots', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listSlotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSlots', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listSlotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSlots', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTagsForResource', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTagsForResource', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTagsForResource', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  startImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startImport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  startImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startImport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  startImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startImport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'tagResource', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'tagResource', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'tagResource', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'untagResource', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'untagResource', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'untagResource', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateExport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateExport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateExport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateIntent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateIntent', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateIntentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateIntent', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateIntentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateIntent', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateResourcePolicy', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateResourcePolicy', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateResourcePolicy', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateSlot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateSlot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateSlotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateSlot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateSlotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateSlot', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateSlotType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateSlotType', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateSlotTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateSlotType', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateSlotTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateSlotType', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'send', 'LexModelsV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'send', 'LexModelsV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'send', 'LexModelsV2Client', Promise.reject(result), true, mock)
  }
}