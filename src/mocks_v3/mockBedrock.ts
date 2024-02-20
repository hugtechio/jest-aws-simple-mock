
/**
* @description mocks_v3:mockBedrock module is mocks for AWS-SDK V3
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
export const mockBedrock = {
  createModelCustomizationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'createModelCustomizationJob', 'Bedrock', Promise.resolve(result), true, mock)
  },
  createModelCustomizationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'createModelCustomizationJob', 'Bedrock', Promise.resolve(result), false, mock)
  },
  createModelCustomizationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'createModelCustomizationJob', 'Bedrock', Promise.reject(result), true, mock)
  },
  createProvisionedModelThroughput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'createProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), true, mock)
  },
  createProvisionedModelThroughputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'createProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), false, mock)
  },
  createProvisionedModelThroughputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'createProvisionedModelThroughput', 'Bedrock', Promise.reject(result), true, mock)
  },
  deleteCustomModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteCustomModel', 'Bedrock', Promise.resolve(result), true, mock)
  },
  deleteCustomModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteCustomModel', 'Bedrock', Promise.resolve(result), false, mock)
  },
  deleteCustomModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteCustomModel', 'Bedrock', Promise.reject(result), true, mock)
  },
  deleteModelInvocationLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteModelInvocationLoggingConfiguration', 'Bedrock', Promise.resolve(result), true, mock)
  },
  deleteModelInvocationLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteModelInvocationLoggingConfiguration', 'Bedrock', Promise.resolve(result), false, mock)
  },
  deleteModelInvocationLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteModelInvocationLoggingConfiguration', 'Bedrock', Promise.reject(result), true, mock)
  },
  deleteProvisionedModelThroughput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), true, mock)
  },
  deleteProvisionedModelThroughputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), false, mock)
  },
  deleteProvisionedModelThroughputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'deleteProvisionedModelThroughput', 'Bedrock', Promise.reject(result), true, mock)
  },
  getCustomModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getCustomModel', 'Bedrock', Promise.resolve(result), true, mock)
  },
  getCustomModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getCustomModel', 'Bedrock', Promise.resolve(result), false, mock)
  },
  getCustomModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getCustomModel', 'Bedrock', Promise.reject(result), true, mock)
  },
  getFoundationModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getFoundationModel', 'Bedrock', Promise.resolve(result), true, mock)
  },
  getFoundationModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getFoundationModel', 'Bedrock', Promise.resolve(result), false, mock)
  },
  getFoundationModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getFoundationModel', 'Bedrock', Promise.reject(result), true, mock)
  },
  getModelCustomizationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getModelCustomizationJob', 'Bedrock', Promise.resolve(result), true, mock)
  },
  getModelCustomizationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getModelCustomizationJob', 'Bedrock', Promise.resolve(result), false, mock)
  },
  getModelCustomizationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getModelCustomizationJob', 'Bedrock', Promise.reject(result), true, mock)
  },
  getModelInvocationLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getModelInvocationLoggingConfiguration', 'Bedrock', Promise.resolve(result), true, mock)
  },
  getModelInvocationLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getModelInvocationLoggingConfiguration', 'Bedrock', Promise.resolve(result), false, mock)
  },
  getModelInvocationLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getModelInvocationLoggingConfiguration', 'Bedrock', Promise.reject(result), true, mock)
  },
  getProvisionedModelThroughput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), true, mock)
  },
  getProvisionedModelThroughputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), false, mock)
  },
  getProvisionedModelThroughputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'getProvisionedModelThroughput', 'Bedrock', Promise.reject(result), true, mock)
  },
  listCustomModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listCustomModels', 'Bedrock', Promise.resolve(result), true, mock)
  },
  listCustomModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listCustomModels', 'Bedrock', Promise.resolve(result), false, mock)
  },
  listCustomModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listCustomModels', 'Bedrock', Promise.reject(result), true, mock)
  },
  listFoundationModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listFoundationModels', 'Bedrock', Promise.resolve(result), true, mock)
  },
  listFoundationModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listFoundationModels', 'Bedrock', Promise.resolve(result), false, mock)
  },
  listFoundationModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listFoundationModels', 'Bedrock', Promise.reject(result), true, mock)
  },
  listModelCustomizationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listModelCustomizationJobs', 'Bedrock', Promise.resolve(result), true, mock)
  },
  listModelCustomizationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listModelCustomizationJobs', 'Bedrock', Promise.resolve(result), false, mock)
  },
  listModelCustomizationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listModelCustomizationJobs', 'Bedrock', Promise.reject(result), true, mock)
  },
  listProvisionedModelThroughputs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listProvisionedModelThroughputs', 'Bedrock', Promise.resolve(result), true, mock)
  },
  listProvisionedModelThroughputsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listProvisionedModelThroughputs', 'Bedrock', Promise.resolve(result), false, mock)
  },
  listProvisionedModelThroughputsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listProvisionedModelThroughputs', 'Bedrock', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listTagsForResource', 'Bedrock', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listTagsForResource', 'Bedrock', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'listTagsForResource', 'Bedrock', Promise.reject(result), true, mock)
  },
  putModelInvocationLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'putModelInvocationLoggingConfiguration', 'Bedrock', Promise.resolve(result), true, mock)
  },
  putModelInvocationLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'putModelInvocationLoggingConfiguration', 'Bedrock', Promise.resolve(result), false, mock)
  },
  putModelInvocationLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'putModelInvocationLoggingConfiguration', 'Bedrock', Promise.reject(result), true, mock)
  },
  stopModelCustomizationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'stopModelCustomizationJob', 'Bedrock', Promise.resolve(result), true, mock)
  },
  stopModelCustomizationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'stopModelCustomizationJob', 'Bedrock', Promise.resolve(result), false, mock)
  },
  stopModelCustomizationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'stopModelCustomizationJob', 'Bedrock', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'tagResource', 'Bedrock', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'tagResource', 'Bedrock', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'tagResource', 'Bedrock', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'untagResource', 'Bedrock', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'untagResource', 'Bedrock', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'untagResource', 'Bedrock', Promise.reject(result), true, mock)
  },
  updateProvisionedModelThroughput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'updateProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), true, mock)
  },
  updateProvisionedModelThroughputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'updateProvisionedModelThroughput', 'Bedrock', Promise.resolve(result), false, mock)
  },
  updateProvisionedModelThroughputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'updateProvisionedModelThroughput', 'Bedrock', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'send', 'BedrockClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'send', 'BedrockClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock', 'send', 'BedrockClient', Promise.reject(result), true, mock)
  }
}
