import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'

// private function
const mockAsyncIterator = (result: any) => {
    const ret: any = {}
    ret[Symbol.asyncIterator] = async function * () {
        if (Array.isArray(result)) {
            for (const item of result) {
                yield item
            }
        } else {
            yield result
        }
    }
    ret.count = (result) ? Object.keys(result).length : 0
    return ret
}

// public (exported) function
export const mockStripe = {
    once: function (payload?: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke').mockImplementation(() => {
            return {
                promise: () => {
                    return {
                        StatusCode: 200,
                        Payload: (payload) ? JSON.stringify(payload) : null
                    }
                }
            }
        })
    },
    twice: function (payload1: {}, payload2: {}): jest.SpyInstance {
        // @ts-ignore
        const promiseObject = (payload: {}) => {
            return {
                promise: () => {
                    return {
                        StatusCode: 200,
                        Payload: JSON.stringify(payload)
                    }
                }
            }
        }
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke')
            .mockImplementationOnce(() => promiseObject(payload1))
            .mockImplementationOnce(() => promiseObject(payload2))
    },

    three: function (payload1: {}, payload2: {}, payload3: {}): jest.SpyInstance {
        // @ts-ignore
        const promiseObject = (payload: {}) => {
            return {
                promise: () => {
                    return {
                        StatusCode: 200,
                        Payload: JSON.stringify(payload)
                    }
                }
            }
        }
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke')
            .mockImplementationOnce(() => promiseObject(payload1))
            .mockImplementationOnce(() => promiseObject(payload2))
            .mockImplementationOnce(() => promiseObject(payload3))
    }
}

export const mockDynamo = {
    query: function (queryResult: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { return mockAsyncIterator(queryResult) })
    },

    queryTwice: function (result1: any, result2: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { return mockAsyncIterator(result1) })
            .mockImplementationOnce(() => { return mockAsyncIterator(result2) })
    },

    get: function (result: any) : jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'get')
            .mockImplementationOnce(async () => result)
    },

    getTwice: function (result1: any, result2: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'get')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
    },

    put: function (result: any) : jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'put')
            .mockImplementationOnce(async () => result)
    },

    update: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'update')
            .mockImplementationOnce(async () => result)
    },

    delete: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'delete')
            .mockImplementationOnce(async () => result)
    },

    batchDelete: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'batchDelete')
            .mockImplementationOnce(() => { return mockAsyncIterator(result) })
    },

    throw: function (): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { throw new Error('mock exception') })
    }
}

export const mockLambda = {
    invoke: function (payload = {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke').mockImplementation(() => {
            return {
                promise: () => {
                    return {
                        statusCode: 200,
                        Payload: JSON.stringify(payload)
                    }
                }
            }
        })
    }
}

export const mockS3 = {
    getSignedUrl: function(url: string): jest.SpyInstance {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrl').mockImplementation(() => {
            return url
        })
    }
}
