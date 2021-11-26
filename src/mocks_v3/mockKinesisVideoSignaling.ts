
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockKinesisVideoSignaling = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'destroy', 'KinesisVideoSignaling', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'destroy', 'KinesisVideoSignaling', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'destroy', 'KinesisVideoSignaling', Promise.reject(result), true, mock)
  },
  getIceServerConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'getIceServerConfig', 'KinesisVideoSignaling', Promise.resolve(result), true, mock)
  },
  getIceServerConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'getIceServerConfig', 'KinesisVideoSignaling', Promise.resolve(result), false, mock)
  },
  getIceServerConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'getIceServerConfig', 'KinesisVideoSignaling', Promise.reject(result), true, mock)
  },
  sendAlexaOfferToMaster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'sendAlexaOfferToMaster', 'KinesisVideoSignaling', Promise.resolve(result), true, mock)
  },
  sendAlexaOfferToMasterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'sendAlexaOfferToMaster', 'KinesisVideoSignaling', Promise.resolve(result), false, mock)
  },
  sendAlexaOfferToMasterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'sendAlexaOfferToMaster', 'KinesisVideoSignaling', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'send', 'KinesisVideoSignalingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'send', 'KinesisVideoSignalingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-signaling', 'send', 'KinesisVideoSignalingClient', Promise.reject(result), true, mock)
  }
}