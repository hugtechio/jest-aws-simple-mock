
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
  export const mockPolly = {
  deleteLexicon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLexicon', 'Polly', Promise.resolve(result), true, mock)
  },
  deleteLexiconAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLexicon', 'Polly', Promise.resolve(result), false, mock)
  },
  deleteLexiconThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLexicon', 'Polly', Promise.reject(result), true, mock)
  },
  describeVoices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVoices', 'Polly', Promise.resolve(result), true, mock)
  },
  describeVoicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVoices', 'Polly', Promise.resolve(result), false, mock)
  },
  describeVoicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVoices', 'Polly', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Polly', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Polly', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Polly', Promise.reject(result), true, mock)
  },
  getLexicon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLexicon', 'Polly', Promise.resolve(result), true, mock)
  },
  getLexiconAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLexicon', 'Polly', Promise.resolve(result), false, mock)
  },
  getLexiconThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLexicon', 'Polly', Promise.reject(result), true, mock)
  },
  getSpeechSynthesisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSpeechSynthesisTask', 'Polly', Promise.resolve(result), true, mock)
  },
  getSpeechSynthesisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSpeechSynthesisTask', 'Polly', Promise.resolve(result), false, mock)
  },
  getSpeechSynthesisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSpeechSynthesisTask', 'Polly', Promise.reject(result), true, mock)
  },
  listLexicons: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLexicons', 'Polly', Promise.resolve(result), true, mock)
  },
  listLexiconsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLexicons', 'Polly', Promise.resolve(result), false, mock)
  },
  listLexiconsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLexicons', 'Polly', Promise.reject(result), true, mock)
  },
  listSpeechSynthesisTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeechSynthesisTasks', 'Polly', Promise.resolve(result), true, mock)
  },
  listSpeechSynthesisTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeechSynthesisTasks', 'Polly', Promise.resolve(result), false, mock)
  },
  listSpeechSynthesisTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSpeechSynthesisTasks', 'Polly', Promise.reject(result), true, mock)
  },
  putLexicon: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLexicon', 'Polly', Promise.resolve(result), true, mock)
  },
  putLexiconAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLexicon', 'Polly', Promise.resolve(result), false, mock)
  },
  putLexiconThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLexicon', 'Polly', Promise.reject(result), true, mock)
  },
  startSpeechSynthesisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeechSynthesisTask', 'Polly', Promise.resolve(result), true, mock)
  },
  startSpeechSynthesisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeechSynthesisTask', 'Polly', Promise.resolve(result), false, mock)
  },
  startSpeechSynthesisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSpeechSynthesisTask', 'Polly', Promise.reject(result), true, mock)
  },
  synthesizeSpeech: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('synthesizeSpeech', 'Polly', Promise.resolve(result), true, mock)
  },
  synthesizeSpeechAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('synthesizeSpeech', 'Polly', Promise.resolve(result), false, mock)
  },
  synthesizeSpeechThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('synthesizeSpeech', 'Polly', Promise.reject(result), true, mock)
  },
}
