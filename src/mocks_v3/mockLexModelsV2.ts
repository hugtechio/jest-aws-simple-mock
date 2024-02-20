
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
  batchCreateCustomVocabularyItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchCreateCustomVocabularyItem', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  batchCreateCustomVocabularyItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchCreateCustomVocabularyItem', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  batchCreateCustomVocabularyItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchCreateCustomVocabularyItem', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  batchDeleteCustomVocabularyItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchDeleteCustomVocabularyItem', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  batchDeleteCustomVocabularyItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchDeleteCustomVocabularyItem', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  batchDeleteCustomVocabularyItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchDeleteCustomVocabularyItem', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  batchUpdateCustomVocabularyItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchUpdateCustomVocabularyItem', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  batchUpdateCustomVocabularyItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchUpdateCustomVocabularyItem', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  batchUpdateCustomVocabularyItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'batchUpdateCustomVocabularyItem', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  buildBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'buildBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  buildBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'buildBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  buildBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'buildBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
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
  createBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBot', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBot', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBot', 'LexModelsV2', Promise.reject(result), true, mock)
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
  createBotReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotReplica', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createBotReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotReplica', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createBotReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createBotReplica', 'LexModelsV2', Promise.reject(result), true, mock)
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
  createTestSetDiscrepancyReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createTestSetDiscrepancyReport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  createTestSetDiscrepancyReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createTestSetDiscrepancyReport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  createTestSetDiscrepancyReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'createTestSetDiscrepancyReport', 'LexModelsV2', Promise.reject(result), true, mock)
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
  deleteBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
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
  deleteBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  deleteBotReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotReplica', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteBotReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotReplica', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteBotReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteBotReplica', 'LexModelsV2', Promise.reject(result), true, mock)
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
  deleteCustomVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteCustomVocabulary', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteCustomVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteCustomVocabulary', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteCustomVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteCustomVocabulary', 'LexModelsV2', Promise.reject(result), true, mock)
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
  deleteTestSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteTestSet', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  deleteTestSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteTestSet', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  deleteTestSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'deleteTestSet', 'LexModelsV2', Promise.reject(result), true, mock)
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
  describeBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
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
  describeBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotRecommendation', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotRecommendation', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotRecommendation', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotReplica', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotReplica', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotReplica', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeBotResourceGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotResourceGeneration', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeBotResourceGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotResourceGeneration', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeBotResourceGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeBotResourceGeneration', 'LexModelsV2', Promise.reject(result), true, mock)
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
  describeCustomVocabularyMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeCustomVocabularyMetadata', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeCustomVocabularyMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeCustomVocabularyMetadata', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeCustomVocabularyMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeCustomVocabularyMetadata', 'LexModelsV2', Promise.reject(result), true, mock)
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
  describeTestExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestExecution', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeTestExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestExecution', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeTestExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestExecution', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeTestSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSet', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeTestSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSet', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeTestSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSet', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeTestSetDiscrepancyReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSetDiscrepancyReport', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeTestSetDiscrepancyReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSetDiscrepancyReport', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeTestSetDiscrepancyReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSetDiscrepancyReport', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  describeTestSetGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSetGeneration', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  describeTestSetGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSetGeneration', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  describeTestSetGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'describeTestSetGeneration', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  generateBotElement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'generateBotElement', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  generateBotElementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'generateBotElement', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  generateBotElementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'generateBotElement', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  getTestExecutionArtifactsUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'getTestExecutionArtifactsUrl', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  getTestExecutionArtifactsUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'getTestExecutionArtifactsUrl', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  getTestExecutionArtifactsUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'getTestExecutionArtifactsUrl', 'LexModelsV2', Promise.reject(result), true, mock)
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
  listBotAliasReplicas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotAliasReplicas', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotAliasReplicasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotAliasReplicas', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotAliasReplicasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotAliasReplicas', 'LexModelsV2', Promise.reject(result), true, mock)
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
  listBotRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotRecommendations', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotRecommendations', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotRecommendations', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotReplicas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotReplicas', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotReplicasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotReplicas', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotReplicasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotReplicas', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotResourceGenerations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotResourceGenerations', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotResourceGenerationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotResourceGenerations', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotResourceGenerationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotResourceGenerations', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listBotVersionReplicas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotVersionReplicas', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listBotVersionReplicasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotVersionReplicas', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listBotVersionReplicasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listBotVersionReplicas', 'LexModelsV2', Promise.reject(result), true, mock)
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
  listCustomVocabularyItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listCustomVocabularyItems', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listCustomVocabularyItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listCustomVocabularyItems', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listCustomVocabularyItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listCustomVocabularyItems', 'LexModelsV2', Promise.reject(result), true, mock)
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
  listIntentMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentMetrics', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listIntentMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentMetrics', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listIntentMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentMetrics', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listIntentPaths: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentPaths', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listIntentPathsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentPaths', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listIntentPathsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentPaths', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listIntentStageMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentStageMetrics', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listIntentStageMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentStageMetrics', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listIntentStageMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listIntentStageMetrics', 'LexModelsV2', Promise.reject(result), true, mock)
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
  listRecommendedIntents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listRecommendedIntents', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listRecommendedIntentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listRecommendedIntents', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listRecommendedIntentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listRecommendedIntents', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listSessionAnalyticsData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSessionAnalyticsData', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listSessionAnalyticsDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSessionAnalyticsData', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listSessionAnalyticsDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSessionAnalyticsData', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listSessionMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSessionMetrics', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listSessionMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSessionMetrics', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listSessionMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listSessionMetrics', 'LexModelsV2', Promise.reject(result), true, mock)
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
  listTestExecutionResultItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestExecutionResultItems', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listTestExecutionResultItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestExecutionResultItems', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listTestExecutionResultItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestExecutionResultItems', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listTestExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestExecutions', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listTestExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestExecutions', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listTestExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestExecutions', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listTestSetRecords: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestSetRecords', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listTestSetRecordsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestSetRecords', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listTestSetRecordsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestSetRecords', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listTestSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestSets', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listTestSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestSets', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listTestSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listTestSets', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listUtteranceAnalyticsData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listUtteranceAnalyticsData', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listUtteranceAnalyticsDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listUtteranceAnalyticsData', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listUtteranceAnalyticsDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listUtteranceAnalyticsData', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  listUtteranceMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listUtteranceMetrics', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  listUtteranceMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listUtteranceMetrics', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  listUtteranceMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'listUtteranceMetrics', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  searchAssociatedTranscripts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'searchAssociatedTranscripts', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  searchAssociatedTranscriptsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'searchAssociatedTranscripts', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  searchAssociatedTranscriptsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'searchAssociatedTranscripts', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  startBotRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startBotRecommendation', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  startBotRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startBotRecommendation', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  startBotRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startBotRecommendation', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  startBotResourceGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startBotResourceGeneration', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  startBotResourceGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startBotResourceGeneration', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  startBotResourceGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startBotResourceGeneration', 'LexModelsV2', Promise.reject(result), true, mock)
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
  startTestExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startTestExecution', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  startTestExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startTestExecution', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  startTestExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startTestExecution', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  startTestSetGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startTestSetGeneration', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  startTestSetGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startTestSetGeneration', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  startTestSetGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'startTestSetGeneration', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  stopBotRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'stopBotRecommendation', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  stopBotRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'stopBotRecommendation', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  stopBotRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'stopBotRecommendation', 'LexModelsV2', Promise.reject(result), true, mock)
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
  updateBotAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotAlias', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotAlias', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotAlias', 'LexModelsV2', Promise.reject(result), true, mock)
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
  updateBotLocale: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotLocale', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotLocaleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotLocale', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotLocaleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotLocale', 'LexModelsV2', Promise.reject(result), true, mock)
  },
  updateBotRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotRecommendation', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateBotRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotRecommendation', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateBotRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateBotRecommendation', 'LexModelsV2', Promise.reject(result), true, mock)
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
  updateTestSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateTestSet', 'LexModelsV2', Promise.resolve(result), true, mock)
  },
  updateTestSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateTestSet', 'LexModelsV2', Promise.resolve(result), false, mock)
  },
  updateTestSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-models-v2', 'updateTestSet', 'LexModelsV2', Promise.reject(result), true, mock)
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
