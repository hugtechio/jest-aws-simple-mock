
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockCloudFormation = {
  activateType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'activateType', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  activateTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'activateType', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  activateTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'activateType', 'CloudFormation', Promise.reject(result), true, mock)
  },
  batchDescribeTypeConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'batchDescribeTypeConfigurations', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  batchDescribeTypeConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'batchDescribeTypeConfigurations', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  batchDescribeTypeConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'batchDescribeTypeConfigurations', 'CloudFormation', Promise.reject(result), true, mock)
  },
  cancelUpdateStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'cancelUpdateStack', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  cancelUpdateStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'cancelUpdateStack', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  cancelUpdateStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'cancelUpdateStack', 'CloudFormation', Promise.reject(result), true, mock)
  },
  continueUpdateRollback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'continueUpdateRollback', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  continueUpdateRollbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'continueUpdateRollback', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  continueUpdateRollbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'continueUpdateRollback', 'CloudFormation', Promise.reject(result), true, mock)
  },
  createChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createChangeSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  createChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createChangeSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  createChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createChangeSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  createStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStack', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  createStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStack', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  createStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStack', 'CloudFormation', Promise.reject(result), true, mock)
  },
  createStackInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStackInstances', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  createStackInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStackInstances', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  createStackInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStackInstances', 'CloudFormation', Promise.reject(result), true, mock)
  },
  createStackSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStackSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  createStackSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStackSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  createStackSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'createStackSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  deactivateType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deactivateType', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  deactivateTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deactivateType', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  deactivateTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deactivateType', 'CloudFormation', Promise.reject(result), true, mock)
  },
  deleteChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteChangeSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  deleteChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteChangeSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  deleteChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteChangeSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  deleteStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStack', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  deleteStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStack', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  deleteStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStack', 'CloudFormation', Promise.reject(result), true, mock)
  },
  deleteStackInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStackInstances', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  deleteStackInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStackInstances', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  deleteStackInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStackInstances', 'CloudFormation', Promise.reject(result), true, mock)
  },
  deleteStackSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStackSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  deleteStackSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStackSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  deleteStackSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deleteStackSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  deregisterType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deregisterType', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  deregisterTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deregisterType', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  deregisterTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'deregisterType', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeAccountLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeAccountLimits', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeAccountLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeAccountLimits', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeAccountLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeAccountLimits', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeChangeSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeChangeSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeChangeSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describePublisher: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describePublisher', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describePublisherAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describePublisher', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describePublisherThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describePublisher', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackDriftDetectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackDriftDetectionStatus', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackDriftDetectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackDriftDetectionStatus', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackDriftDetectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackDriftDetectionStatus', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackEvents', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackEvents', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackEvents', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackInstance', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackInstance', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackInstance', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResource', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResource', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResource', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackResourceDrifts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResourceDrifts', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackResourceDriftsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResourceDrifts', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackResourceDriftsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResourceDrifts', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResources', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResources', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackResources', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStackSetOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackSetOperation', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStackSetOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackSetOperation', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStackSetOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStackSetOperation', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStacks', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStacks', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeStacks', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeType', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeType', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeType', 'CloudFormation', Promise.reject(result), true, mock)
  },
  describeTypeRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeTypeRegistration', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  describeTypeRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeTypeRegistration', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  describeTypeRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'describeTypeRegistration', 'CloudFormation', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'destroy', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'destroy', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'destroy', 'CloudFormation', Promise.reject(result), true, mock)
  },
  detectStackDrift: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackDrift', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  detectStackDriftAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackDrift', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  detectStackDriftThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackDrift', 'CloudFormation', Promise.reject(result), true, mock)
  },
  detectStackResourceDrift: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackResourceDrift', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  detectStackResourceDriftAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackResourceDrift', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  detectStackResourceDriftThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackResourceDrift', 'CloudFormation', Promise.reject(result), true, mock)
  },
  detectStackSetDrift: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackSetDrift', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  detectStackSetDriftAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackSetDrift', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  detectStackSetDriftThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'detectStackSetDrift', 'CloudFormation', Promise.reject(result), true, mock)
  },
  estimateTemplateCost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'estimateTemplateCost', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  estimateTemplateCostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'estimateTemplateCost', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  estimateTemplateCostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'estimateTemplateCost', 'CloudFormation', Promise.reject(result), true, mock)
  },
  executeChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'executeChangeSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  executeChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'executeChangeSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  executeChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'executeChangeSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  getStackPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getStackPolicy', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  getStackPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getStackPolicy', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  getStackPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getStackPolicy', 'CloudFormation', Promise.reject(result), true, mock)
  },
  getTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getTemplate', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  getTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getTemplate', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  getTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getTemplate', 'CloudFormation', Promise.reject(result), true, mock)
  },
  getTemplateSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getTemplateSummary', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  getTemplateSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getTemplateSummary', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  getTemplateSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'getTemplateSummary', 'CloudFormation', Promise.reject(result), true, mock)
  },
  importStacksToStackSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'importStacksToStackSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  importStacksToStackSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'importStacksToStackSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  importStacksToStackSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'importStacksToStackSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listChangeSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listChangeSets', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listChangeSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listChangeSets', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listChangeSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listChangeSets', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listExports', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listExports', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listExports', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listImports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listImports', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listImportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listImports', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listImportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listImports', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listStackInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackInstances', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listStackInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackInstances', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listStackInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackInstances', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listStackResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackResources', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listStackResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackResources', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listStackResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackResources', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listStackSetOperationResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSetOperationResults', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listStackSetOperationResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSetOperationResults', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listStackSetOperationResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSetOperationResults', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listStackSetOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSetOperations', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listStackSetOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSetOperations', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listStackSetOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSetOperations', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listStackSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSets', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listStackSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSets', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listStackSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStackSets', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStacks', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStacks', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listStacks', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listTypeRegistrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypeRegistrations', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listTypeRegistrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypeRegistrations', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listTypeRegistrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypeRegistrations', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listTypeVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypeVersions', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listTypeVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypeVersions', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listTypeVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypeVersions', 'CloudFormation', Promise.reject(result), true, mock)
  },
  listTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypes', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  listTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypes', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  listTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'listTypes', 'CloudFormation', Promise.reject(result), true, mock)
  },
  publishType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'publishType', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  publishTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'publishType', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  publishTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'publishType', 'CloudFormation', Promise.reject(result), true, mock)
  },
  recordHandlerProgress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'recordHandlerProgress', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  recordHandlerProgressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'recordHandlerProgress', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  recordHandlerProgressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'recordHandlerProgress', 'CloudFormation', Promise.reject(result), true, mock)
  },
  registerPublisher: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'registerPublisher', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  registerPublisherAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'registerPublisher', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  registerPublisherThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'registerPublisher', 'CloudFormation', Promise.reject(result), true, mock)
  },
  registerType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'registerType', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  registerTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'registerType', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  registerTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'registerType', 'CloudFormation', Promise.reject(result), true, mock)
  },
  rollbackStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'rollbackStack', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  rollbackStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'rollbackStack', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  rollbackStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'rollbackStack', 'CloudFormation', Promise.reject(result), true, mock)
  },
  setStackPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setStackPolicy', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  setStackPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setStackPolicy', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  setStackPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setStackPolicy', 'CloudFormation', Promise.reject(result), true, mock)
  },
  setTypeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setTypeConfiguration', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  setTypeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setTypeConfiguration', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  setTypeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setTypeConfiguration', 'CloudFormation', Promise.reject(result), true, mock)
  },
  setTypeDefaultVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setTypeDefaultVersion', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  setTypeDefaultVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setTypeDefaultVersion', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  setTypeDefaultVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'setTypeDefaultVersion', 'CloudFormation', Promise.reject(result), true, mock)
  },
  signalResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'signalResource', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  signalResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'signalResource', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  signalResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'signalResource', 'CloudFormation', Promise.reject(result), true, mock)
  },
  stopStackSetOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'stopStackSetOperation', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  stopStackSetOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'stopStackSetOperation', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  stopStackSetOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'stopStackSetOperation', 'CloudFormation', Promise.reject(result), true, mock)
  },
  testType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'testType', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  testTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'testType', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  testTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'testType', 'CloudFormation', Promise.reject(result), true, mock)
  },
  updateStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStack', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  updateStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStack', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  updateStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStack', 'CloudFormation', Promise.reject(result), true, mock)
  },
  updateStackInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStackInstances', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  updateStackInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStackInstances', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  updateStackInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStackInstances', 'CloudFormation', Promise.reject(result), true, mock)
  },
  updateStackSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStackSet', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  updateStackSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStackSet', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  updateStackSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateStackSet', 'CloudFormation', Promise.reject(result), true, mock)
  },
  updateTerminationProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateTerminationProtection', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  updateTerminationProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateTerminationProtection', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  updateTerminationProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'updateTerminationProtection', 'CloudFormation', Promise.reject(result), true, mock)
  },
  validateTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'validateTemplate', 'CloudFormation', Promise.resolve(result), true, mock)
  },
  validateTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'validateTemplate', 'CloudFormation', Promise.resolve(result), false, mock)
  },
  validateTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'validateTemplate', 'CloudFormation', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'send', 'CloudFormationClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'send', 'CloudFormationClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudformation', 'send', 'CloudFormationClient', Promise.reject(result), true, mock)
  }
}