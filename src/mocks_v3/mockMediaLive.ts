
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockMediaLive = {
  acceptInputDeviceTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'acceptInputDeviceTransfer', 'MediaLive', Promise.resolve(result), true, mock)
  },
  acceptInputDeviceTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'acceptInputDeviceTransfer', 'MediaLive', Promise.resolve(result), false, mock)
  },
  acceptInputDeviceTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'acceptInputDeviceTransfer', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchDelete: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchDelete', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchDeleteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchDelete', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchDeleteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchDelete', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchStart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchStart', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchStartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchStart', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchStartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchStart', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchStop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchStop', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchStopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchStop', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchStopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchStop', 'MediaLive', Promise.reject(result), true, mock)
  },
  batchUpdateSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchUpdateSchedule', 'MediaLive', Promise.resolve(result), true, mock)
  },
  batchUpdateScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchUpdateSchedule', 'MediaLive', Promise.resolve(result), false, mock)
  },
  batchUpdateScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'batchUpdateSchedule', 'MediaLive', Promise.reject(result), true, mock)
  },
  cancelInputDeviceTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'cancelInputDeviceTransfer', 'MediaLive', Promise.resolve(result), true, mock)
  },
  cancelInputDeviceTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'cancelInputDeviceTransfer', 'MediaLive', Promise.resolve(result), false, mock)
  },
  cancelInputDeviceTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'cancelInputDeviceTransfer', 'MediaLive', Promise.reject(result), true, mock)
  },
  claimDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'claimDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  claimDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'claimDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  claimDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'claimDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  createInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  createInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  createMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  createMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  createPartnerInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createPartnerInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createPartnerInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createPartnerInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createPartnerInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createPartnerInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createTags', 'MediaLive', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createTags', 'MediaLive', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'createTags', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteReservation', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteReservation', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteReservation', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteSchedule', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteSchedule', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteSchedule', 'MediaLive', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteTags', 'MediaLive', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteTags', 'MediaLive', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'deleteTags', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInputDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInputDeviceThumbnail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputDeviceThumbnail', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputDeviceThumbnailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputDeviceThumbnail', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputDeviceThumbnailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputDeviceThumbnail', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeOffering', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeOffering', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeOffering', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeReservation', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeReservation', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeReservation', 'MediaLive', Promise.reject(result), true, mock)
  },
  describeSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeSchedule', 'MediaLive', Promise.resolve(result), true, mock)
  },
  describeScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeSchedule', 'MediaLive', Promise.resolve(result), false, mock)
  },
  describeScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'describeSchedule', 'MediaLive', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'destroy', 'MediaLive', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'destroy', 'MediaLive', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'destroy', 'MediaLive', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listChannels', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listChannels', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listChannels', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputDeviceTransfers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputDeviceTransfers', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputDeviceTransfersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputDeviceTransfers', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputDeviceTransfersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputDeviceTransfers', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputDevices', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputDevices', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputDevices', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputSecurityGroups', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputSecurityGroups', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputSecurityGroups', 'MediaLive', Promise.reject(result), true, mock)
  },
  listInputs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputs', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listInputsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputs', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listInputsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listInputs', 'MediaLive', Promise.reject(result), true, mock)
  },
  listMultiplexPrograms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listMultiplexPrograms', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listMultiplexProgramsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listMultiplexPrograms', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listMultiplexProgramsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listMultiplexPrograms', 'MediaLive', Promise.reject(result), true, mock)
  },
  listMultiplexes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listMultiplexes', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listMultiplexesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listMultiplexes', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listMultiplexesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listMultiplexes', 'MediaLive', Promise.reject(result), true, mock)
  },
  listOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listOfferings', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listOfferings', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listOfferings', 'MediaLive', Promise.reject(result), true, mock)
  },
  listReservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listReservations', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listReservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listReservations', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listReservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listReservations', 'MediaLive', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listTagsForResource', 'MediaLive', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listTagsForResource', 'MediaLive', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'listTagsForResource', 'MediaLive', Promise.reject(result), true, mock)
  },
  purchaseOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'purchaseOffering', 'MediaLive', Promise.resolve(result), true, mock)
  },
  purchaseOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'purchaseOffering', 'MediaLive', Promise.resolve(result), false, mock)
  },
  purchaseOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'purchaseOffering', 'MediaLive', Promise.reject(result), true, mock)
  },
  rejectInputDeviceTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'rejectInputDeviceTransfer', 'MediaLive', Promise.resolve(result), true, mock)
  },
  rejectInputDeviceTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'rejectInputDeviceTransfer', 'MediaLive', Promise.resolve(result), false, mock)
  },
  rejectInputDeviceTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'rejectInputDeviceTransfer', 'MediaLive', Promise.reject(result), true, mock)
  },
  startChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'startChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  startChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'startChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  startChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'startChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  startMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'startMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  startMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'startMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  startMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'startMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  stopChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'stopChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  stopChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'stopChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  stopChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'stopChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  stopMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'stopMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  stopMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'stopMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  stopMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'stopMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  transferInputDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'transferInputDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  transferInputDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'transferInputDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  transferInputDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'transferInputDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateChannel', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateChannel', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateChannel', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateChannelClass: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateChannelClass', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateChannelClassAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateChannelClass', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateChannelClassThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateChannelClass', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInput', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInput', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInput', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateInputDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInputDevice', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateInputDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInputDevice', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateInputDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInputDevice', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateInputSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInputSecurityGroup', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateInputSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInputSecurityGroup', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateInputSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateInputSecurityGroup', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateMultiplex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateMultiplex', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateMultiplexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateMultiplex', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateMultiplexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateMultiplex', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateMultiplexProgram: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateMultiplexProgram', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateMultiplexProgramAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateMultiplexProgram', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateMultiplexProgramThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateMultiplexProgram', 'MediaLive', Promise.reject(result), true, mock)
  },
  updateReservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateReservation', 'MediaLive', Promise.resolve(result), true, mock)
  },
  updateReservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateReservation', 'MediaLive', Promise.resolve(result), false, mock)
  },
  updateReservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'updateReservation', 'MediaLive', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'send', 'MediaLiveClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'send', 'MediaLiveClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-medialive', 'send', 'MediaLiveClient', Promise.reject(result), true, mock)
  }
}