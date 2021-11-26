
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
  export const mockIoTEventsData = {
  batchAcknowledgeAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAcknowledgeAlarm', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  batchAcknowledgeAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAcknowledgeAlarm', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  batchAcknowledgeAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAcknowledgeAlarm', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  batchDisableAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisableAlarm', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  batchDisableAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisableAlarm', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  batchDisableAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisableAlarm', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  batchEnableAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEnableAlarm', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  batchEnableAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEnableAlarm', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  batchEnableAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEnableAlarm', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  batchPutMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutMessage', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  batchPutMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutMessage', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  batchPutMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutMessage', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  batchResetAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchResetAlarm', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  batchResetAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchResetAlarm', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  batchResetAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchResetAlarm', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  batchSnoozeAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchSnoozeAlarm', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  batchSnoozeAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchSnoozeAlarm', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  batchSnoozeAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchSnoozeAlarm', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  batchUpdateDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateDetector', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  batchUpdateDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateDetector', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  batchUpdateDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateDetector', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  describeAlarm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarm', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  describeAlarmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarm', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  describeAlarmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAlarm', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  describeDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDetector', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  describeDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDetector', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  describeDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDetector', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  listAlarms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAlarms', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  listAlarmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAlarms', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  listAlarmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAlarms', 'IoTEventsData', Promise.reject(result), true, mock)
  },
  listDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDetectors', 'IoTEventsData', Promise.resolve(result), true, mock)
  },
  listDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDetectors', 'IoTEventsData', Promise.resolve(result), false, mock)
  },
  listDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDetectors', 'IoTEventsData', Promise.reject(result), true, mock)
  },
}
