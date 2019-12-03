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

    get: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'get')
            .mockImplementationOnce(async () => result)
    },

    getTwice: function (result1: any, result2: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'get')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
    },

    getThirth: function (result1: any, result2: any, result3: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'get')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
            .mockImplementationOnce(async () => result3)
    },

    put: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'put')
            .mockImplementationOnce(async () => result)
    },

    update: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'update')
            .mockImplementationOnce(async () => result)
    },

    updateTwice: function (result1: any, result2: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'update')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
    },

    delete: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'delete')
            .mockImplementationOnce(async () => result)
    },

    batchDelete: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'batchDelete')
            .mockImplementationOnce(() => { return mockAsyncIterator(result) })
    },

    queryWithThrow: function (): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { throw new Error('mock exception') })
    },
    getWIthThrow: function (): jest.SpyInstance {
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
    headObject: function (meta: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.S3.services['2006-03-01'].prototype, 'headObject').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(meta)
            }
        })
    },
    headObjectRejection: function (exception: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.S3.services['2006-03-01'].prototype, 'headObject').mockImplementation(() => {
            return {
                promise: () => Promise.reject(exception)
            }
        })
    },

    getSignedUrl: function (url: string): jest.SpyInstance {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrl').mockImplementation(() => {
            return url
        })
    }
}

export const mockCloudFront = {
    getDistribution: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.CloudFront.services['2019-03-26'].prototype, 'getDistribution').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },

    getDistributionConfig: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.CloudFront.services['2019-03-26'].prototype, 'getDistributionConfig').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },

    updateDistribution: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.CloudFront.services['2019-03-26'].prototype, 'updateDistribution').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    }
}
