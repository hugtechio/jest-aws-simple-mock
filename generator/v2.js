const fs = require('fs')

const Header = (fileName) => `
/**
* @description mocks_v2:${fileName} module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

`

function genDef(noCache) {
  let code = Header('mockDynamo.ts') 
  code += `
export const mockAsyncIterator = (result: any) => {
  const ret: any = {};
  ret[Symbol.asyncIterator] = async function*() {
    if (Array.isArray(result)) {
      for (const item of result) {
        yield item;
      }
    } else {
      yield result;
    }
  };
  ret.count = result ? Object.keys(result).length : 0;
  ret.lastEvaluatedKey = 'dummyKey';
  return ret;
};

export const mockAsyncIteratorPage = (result: any, last: boolean = false) => {
  const ret: any = {};
  ret[Symbol.asyncIterator] = async function*() {
    if (Array.isArray(result)) {
      for (const item of result) {
        yield item;
      }
    } else {
      yield result;
    }
  };
  ret.count = result ? Object.keys(result).length : 0;
  if (!last) ret.lastEvaluatedKey = 'dummyKey';
  return ret;
};

export const mockDynamo = {
  query: function(
    queryResult: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'query');
    return tmp.mockImplementationOnce(() => {
      return mockAsyncIterator(queryResult);
    });
  },

  // @ts-ignore
  queryPages: function(
    queryResult: any,
    last?: boolean,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'query');
    return tmp.mockImplementationOnce(() => {
      return {
        pages: () => {
          return mockAsyncIteratorPage(queryResult, last);
        }
      };
    });
  },

  queryTwice: function(
    result1: any,
    result2: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'query');
    return tmp
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result1);
      })
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result2);
      });
  },

  // @ts-ignore
  queryThrice: function(
    result1: any,
    result2: any,
    result3: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'query');
    return tmp
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result1);
      })
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result2);
      })
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result3);
      });
  },

  // @ts-ignore
  queryFourth: function(
    result1: any,
    result2: any,
    result3: any,
    result4: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'query');
    return tmp
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result1);
      })
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result2);
      })
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result3);
      })
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result4);
      });
  },

  queryAll: function(queryResult: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'query')
      .mockImplementation(() => {
        return mockAsyncIterator(queryResult);
      });
  },

  get: function(result: any, mock?: jest.SpyInstance): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'get');
    return tmp.mockImplementationOnce(async () => result);
  },

  getTwice: function(
    result1: any,
    result2: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'get');
    return tmp
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2);
  },
  // @ts-ignore
  getThrice: function(
    result1: any,
    result2: any,
    result3: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'get');
    return tmp
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2)
      .mockImplementationOnce(async () => result3);
  },

  getAll: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'get')
      .mockImplementation(async () => result);
  },

  put: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'put')
      .mockImplementationOnce(async () => result);
  },

  putTwice: function(result1: any, result2: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'put')
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2);
  },

  // @ts-ignore
  putThrice: function(
    result1: any,
    result2: any,
    result3: any
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'put')
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2)
      .mockImplementationOnce(async () => result3);
  },

  putAll: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'put')
      .mockImplementation(async () => result);
  },

  update: function(result: any, mock?: jest.SpyInstance): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'update');
    tmp.mockImplementationOnce(async () => result);
    return tmp;
  },

  updateTwice: function(
    result1: any,
    result2: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'update');
    tmp
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2);
    return tmp;
  },

  // @ts-ignore
  updateThrice: function(
    result1: any,
    result2: any,
    result3: any,
    mock?: jest.SpyInstance
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'update');
    tmp
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2)
      .mockImplementationOnce(async () => result3);
    return tmp;
  },

  updateAll: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'update')
      .mockImplementation(async () => result);
  },

  delete: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'delete')
      .mockImplementationOnce(async () => result);
  },

  deleteTwice: function(result1: any, result2: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'delete')
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2);
  },

  // @ts-ignore
  deleteThrice: function(
    result1: any,
    result2: any,
    result3: any
  ): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'delete')
      .mockImplementationOnce(async () => result1)
      .mockImplementationOnce(async () => result2)
      .mockImplementationOnce(async () => result3);
  },

  deleteAll: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'delete')
      .mockImplementation(async () => result);
  },

  batchGet: function(result: any, mock?: jest.SpyInstance): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    let tmp = mock ? mock : jest.spyOn(DataMapper.prototype, 'batchGet');
    return tmp.mockImplementationOnce(() => {
      return mockAsyncIterator(result);
    });
  },

  batchGetAll: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'batchGet')
      .mockImplementation(() => {
        return mockAsyncIterator(result);
      });
  },

  batchDelete: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'batchDelete')
      .mockImplementationOnce(() => {
        return mockAsyncIterator(result);
      });
  },

  batchDeleteAll: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'batchDelete')
      .mockImplementation(() => {
        return mockAsyncIterator(result);
      });
  },

  batchPut: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'batchPut')
      .mockImplementation(() => {
        return mockAsyncIterator(result);
      });
  },

  queryWithThrow: function(mock?: jest.SpyInstance): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    const m = mock ? mock : jest.spyOn(DataMapper.prototype, 'query');
    return m.mockImplementationOnce(() => {
      throw new Error('mock exception');
    });
  },
  getWithThrow: function(mock?: jest.SpyInstance): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    const m = mock ? mock : jest.spyOn(DataMapper.prototype, 'get');
    return m.mockImplementationOnce(() => {
      throw new Error('mock exception');
    });
  },
  executeUpdateExpression: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'executeUpdateExpression')
      .mockImplementationOnce(async () => result);
  },
  executeUpdateExpressionAll: function(result: any): jest.SpyInstance {
    const { DataMapper } = require('@aws/dynamodb-data-mapper');
    return jest
      .spyOn(DataMapper.prototype, 'executeUpdateExpression')
      .mockImplementation(async () => result);
  }
}
  `

  fs.writeFileSync('./tmp/mocks_v2/mockDynamo.ts', code, 'utf8')

  let commonCode = Header('common.ts')
  commonCode += `
const Template = {
  promise: function(result: any): any {
    return {
      promise: () => Promise.resolve(result)
    };
  },
  throw: function(result: any): any {
    return {
      promise: () => Promise.reject(result)
    };
  }
};

export function attachMock(method:string, name:string, result:any, once:boolean=true, resolved=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  let awsSdkObject 
  let service
  let returnValue = Template.promise(result)
  if (name === 'DocumentClient') {
    awsSdkObject = mod.DynamoDB.DocumentClient
    new awsSdkObject
    service = awsSdkObject
  } else {
    awsSdkObject = mod[name]
    new awsSdkObject
    service = currentVersion(mod[name].services)
  }

  if (name === 'S3' && ['getSignedUrl', 'getSignedUrlPromise'].indexOf(method) >= 0) {
    service = awsSdkObject
    if (method === 'getSignedUrl') returnValue = result
    else if (method === 'getSignedUrlPromise') returnValue = Promise.resolve(result)
  }

  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(service.prototype, method)
  if (!resolved) return tmp.mockImplementationOnce(() => Template.throw(result)) 
  return (once) ? tmp.mockImplementationOnce(() => returnValue) : tmp.mockImplementation(() => returnValue)
}

export const currentVersion = (services: any): any => {
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

\n`
fs.writeFileSync('./tmp/mocks_v2/common.ts', commonCode, 'utf8')

  function writeMockMethodObject(mockMethod, method, name, once=true, resolved=true, eof=false) {
    code += (`  ${mockMethod}: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {\n`)
    code += (`    return attachMock('${method}', '${name}', result, ${once}, ${resolved}, mock)\n`)
    if (eof) {
      code += (`  }\n`)
    } else 
    {
      code += (`  },\n`)
    }
  }

  // Gen AWS-SDK v2 method
  let modules = []
  console.log('[Flag]: from cache')
  modules = JSON.parse(fs.readFileSync('./tmp/modules_cache.json', 'utf8'))

  index = `export * from './mockDynamo'\n` 
  modules.forEach(r => {
    console.log('[Begin]:', r.mockName)
    code = Header(`${r.mockName}.ts`)
    code += `import {attachMock} from './common'\n`
    let mockName = r.mockName
    let className = r.name 
    if (r.name == 'SFN') {
      mockName = 'mockStepFunctions',
      className = 'StepFunctions'
    } else if (r.name === 'CognitoIdentityProvider') {
      mockName = 'mockCognitoIdp',
      className = 'CognitoIdentityServiceProvider'
    } else if (r.name === 'SESv2') {
      mockName = 'mockSESV2',
      className = 'SESV2'
    }
    code += `export const ${mockName} = {\n`
    r.methods.forEach(m => {
      writeMockMethodObject(m, m, className, true, true)
      writeMockMethodObject(`${m}All`, m, className, false, true)
      writeMockMethodObject(`${m}Throw`, m, className, true, false)
    })

    if (r.name === 'S3') {
      ['getSignedUrl', 'getSignedUrlPromise'].forEach(m => {
        writeMockMethodObject(m, m, className, true, true)
        writeMockMethodObject(`${m}All`, m, className, false, true)
        writeMockMethodObject(`${m}Throw`, m, className, true, false)
      })
    }
    code += `}\n`
    // console.log('[Debug]:', code)
    fs.writeFileSync(`./tmp/mocks_v2/${mockName}.ts`, code, 'utf8')
    index += `export * from './${mockName}'\n`
    console.log('[End]:', r.mockName)
  });

  const DynamoDocClientMethods = [
    'batchGet',
    'batchWrite',
    'createSet',
    'delete',
    'get',
    'put',
    'query',
    'scan',
    'transactGet',
    'transactWrite',
    'update'
  ]

  index += `export * from './mockDynamoDocClient'\n`
  code = Header('mockDynamoDocClient.ts')
  code += `import {attachMock} from './common'\n`
  code += `export const mockDynamoDocClient = {\n`
  const DocumentClient = 'DocumentClient'
  DynamoDocClientMethods.forEach(m => {
    writeMockMethodObject(m, m, DocumentClient, true, true)
    writeMockMethodObject(`${m}All`, m, DocumentClient, false, true)
    writeMockMethodObject(`${m}Throw`, m, DocumentClient, true, false)
  })
  code += `}\n`
  fs.writeFileSync(`./tmp/mocks_v2/mockDynamoDocClient.ts`, code, 'utf8')

  index += `export * from './common'\n`
  fs.writeFileSync(`./tmp/mocks_v2/index.ts`, index, 'utf8')
}

genDef()