
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockIoTEvents = {
  createAlarmModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createAlarmModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  createAlarmModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createAlarmModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  createAlarmModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createAlarmModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  createDetectorModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createDetectorModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  createDetectorModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createDetectorModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  createDetectorModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createDetectorModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  createInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createInput', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  createInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createInput', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  createInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'createInput', 'IoTEvents', Promise.reject(result), true, mock)
  },
  deleteAlarmModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteAlarmModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  deleteAlarmModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteAlarmModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  deleteAlarmModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteAlarmModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  deleteDetectorModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteDetectorModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  deleteDetectorModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteDetectorModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  deleteDetectorModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteDetectorModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  deleteInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteInput', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  deleteInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteInput', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  deleteInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'deleteInput', 'IoTEvents', Promise.reject(result), true, mock)
  },
  describeAlarmModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeAlarmModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  describeAlarmModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeAlarmModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  describeAlarmModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeAlarmModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  describeDetectorModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeDetectorModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  describeDetectorModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeDetectorModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  describeDetectorModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeDetectorModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  describeDetectorModelAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeDetectorModelAnalysis', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  describeDetectorModelAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeDetectorModelAnalysis', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  describeDetectorModelAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeDetectorModelAnalysis', 'IoTEvents', Promise.reject(result), true, mock)
  },
  describeInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeInput', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  describeInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeInput', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  describeInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeInput', 'IoTEvents', Promise.reject(result), true, mock)
  },
  describeLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeLoggingOptions', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  describeLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeLoggingOptions', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  describeLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'describeLoggingOptions', 'IoTEvents', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'destroy', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'destroy', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'destroy', 'IoTEvents', Promise.reject(result), true, mock)
  },
  getDetectorModelAnalysisResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'getDetectorModelAnalysisResults', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  getDetectorModelAnalysisResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'getDetectorModelAnalysisResults', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  getDetectorModelAnalysisResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'getDetectorModelAnalysisResults', 'IoTEvents', Promise.reject(result), true, mock)
  },
  listAlarmModelVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listAlarmModelVersions', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  listAlarmModelVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listAlarmModelVersions', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  listAlarmModelVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listAlarmModelVersions', 'IoTEvents', Promise.reject(result), true, mock)
  },
  listAlarmModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listAlarmModels', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  listAlarmModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listAlarmModels', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  listAlarmModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listAlarmModels', 'IoTEvents', Promise.reject(result), true, mock)
  },
  listDetectorModelVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listDetectorModelVersions', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  listDetectorModelVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listDetectorModelVersions', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  listDetectorModelVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listDetectorModelVersions', 'IoTEvents', Promise.reject(result), true, mock)
  },
  listDetectorModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listDetectorModels', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  listDetectorModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listDetectorModels', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  listDetectorModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listDetectorModels', 'IoTEvents', Promise.reject(result), true, mock)
  },
  listInputRoutings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listInputRoutings', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  listInputRoutingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listInputRoutings', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  listInputRoutingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listInputRoutings', 'IoTEvents', Promise.reject(result), true, mock)
  },
  listInputs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listInputs', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  listInputsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listInputs', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  listInputsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listInputs', 'IoTEvents', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listTagsForResource', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listTagsForResource', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'listTagsForResource', 'IoTEvents', Promise.reject(result), true, mock)
  },
  putLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'putLoggingOptions', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  putLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'putLoggingOptions', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  putLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'putLoggingOptions', 'IoTEvents', Promise.reject(result), true, mock)
  },
  startDetectorModelAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'startDetectorModelAnalysis', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  startDetectorModelAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'startDetectorModelAnalysis', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  startDetectorModelAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'startDetectorModelAnalysis', 'IoTEvents', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'tagResource', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'tagResource', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'tagResource', 'IoTEvents', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'untagResource', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'untagResource', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'untagResource', 'IoTEvents', Promise.reject(result), true, mock)
  },
  updateAlarmModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateAlarmModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  updateAlarmModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateAlarmModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  updateAlarmModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateAlarmModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  updateDetectorModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateDetectorModel', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  updateDetectorModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateDetectorModel', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  updateDetectorModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateDetectorModel', 'IoTEvents', Promise.reject(result), true, mock)
  },
  updateInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateInput', 'IoTEvents', Promise.resolve(result), true, mock)
  },
  updateInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateInput', 'IoTEvents', Promise.resolve(result), false, mock)
  },
  updateInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'updateInput', 'IoTEvents', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'send', 'IoTEventsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'send', 'IoTEventsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-events', 'send', 'IoTEventsClient', Promise.reject(result), true, mock)
  }
}