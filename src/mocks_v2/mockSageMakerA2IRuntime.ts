
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
  export const mockSageMakerA2IRuntime = {
  deleteHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  deleteHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  deleteHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  describeHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  describeHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  describeHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  listHumanLoops: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHumanLoops', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  listHumanLoopsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHumanLoops', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  listHumanLoopsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHumanLoops', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  startHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  startHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  startHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  stopHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  stopHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  stopHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
}
