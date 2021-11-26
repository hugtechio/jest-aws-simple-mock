
/**
* @description mocks_v2:mockDynamo.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


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
  