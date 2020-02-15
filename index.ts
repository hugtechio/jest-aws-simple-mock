import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'

export const mockAsyncIterator = (result: any) => {
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

export const currentVersion = (services: any): any => {
    const keys = Object.keys(services)
    let service = null
    keys.forEach(versionStr => {
        if (services.hasOwnProperty(versionStr) &&
            services[versionStr] !== null &&
            services[versionStr] !== undefined) {
            service = services[versionStr]
            return
        }
    });
    return service
}

export const mockDynamo = {
    query: function (queryResult: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
        return tmp.mockImplementationOnce(() => { return mockAsyncIterator(queryResult) })
    },

    queryTwice: function (result1: any, result2: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
        return tmp.mockImplementationOnce(() => { return mockAsyncIterator(result1) })
                .mockImplementationOnce(() => { return mockAsyncIterator(result2) })
    },

    queryThrice: function (result1: any, result2: any, result3: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
        return tmp.mockImplementationOnce(() => { return mockAsyncIterator(result1) })
                .mockImplementationOnce(() => { return mockAsyncIterator(result2) })
                .mockImplementationOnce(() => { return mockAsyncIterator(result3) })
    },

    queryFourth: function (result1: any, result2: any, result3: any, result4: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
        return tmp.mockImplementationOnce(() => { return mockAsyncIterator(result1) })
                .mockImplementationOnce(() => { return mockAsyncIterator(result2) })
                .mockImplementationOnce(() => { return mockAsyncIterator(result3) })
                .mockImplementationOnce(() => { return mockAsyncIterator(result4) })
    },

    queryAll: function (queryResult: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'query')
            .mockImplementation(() => { return mockAsyncIterator(queryResult) })
    },

    get: function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'get')
        return tmp.mockImplementationOnce(async () => result)
    },

    getTwice: function (result1: any, result2: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'get')
        return tmp.mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
    },

    getThrice: function (result1: any, result2: any, result3: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'get')
        return tmp.mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
            .mockImplementationOnce(async () => result3)
    },

    getAll: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'get')
            .mockImplementation(async () => result)
    },

    put: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'put')
            .mockImplementationOnce(async () => result)
    },

    putTwice: function (result1: any, result2: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'put')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
    },

    putThrice: function (result1: any, result2: any, result3: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'put')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
            .mockImplementationOnce(async () => result3)
    },

    putAll: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'put')
            .mockImplementation(async () => result)
    },

    update: function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'update')
            tmp.mockImplementationOnce(async () => result)
        return tmp
    },

    updateTwice: function (result1: any, result2: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'update')
            tmp.mockImplementationOnce(async () => result1)
                .mockImplementationOnce(async () => result2)
        return tmp
    },

    updateThrice: function (result1: any, result2: any, result3: any, mock?: jest.SpyInstance): jest.SpyInstance {
        let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'update')
            tmp.mockImplementationOnce(async () => result1)
                .mockImplementationOnce(async () => result2)
                .mockImplementationOnce(async () => result3)
        return tmp
    },

    updateAll: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'update')
            .mockImplementation(async () => result)
    },

    delete: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'delete')
            .mockImplementationOnce(async () => result)
    },

    deleteTwice: function (result1: any, result2: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'delete')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
    },

    deleteThrice: function (result1: any, result2: any, result3: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'delete')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2)
            .mockImplementationOnce(async () => result3)
    },

    deleteAll: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'delete')
            .mockImplementation(async () => result)
    },

    batchDelete: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'batchDelete')
            .mockImplementationOnce(() => { return mockAsyncIterator(result) })
    },

    batchDeleteAll: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'batchDelete')
            .mockImplementation(() => { return mockAsyncIterator(result) })
    },

    queryWithThrow: function (): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { throw new Error('mock exception') })
    },
    getWithThrow: function (): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { throw new Error('mock exception') })
    },
    executeUpdateExpression: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'executeUpdateExpression')
            .mockImplementationOnce(async () => result)
    },
    executeUpdateExpressionAll: function (result: any): jest.SpyInstance {
        return jest.spyOn(DataMapper.prototype, 'executeUpdateExpression')
            .mockImplementation(async () => result)
    }
}

export const mockDynamoDocClient = {
    get: function (result: any): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.DynamoDB.DocumentClient.prototype, 'get').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    getAll: function (result: any): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.DynamoDB.DocumentClient.prototype, 'get').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    put: function (result: any): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.DynamoDB.DocumentClient.prototype, 'put').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    putAll: function (result: any): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.DynamoDB.DocumentClient.prototype, 'put').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    update: function (result: any): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.DynamoDB.DocumentClient.prototype, 'update').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    updateAll: function (result: any): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(AWS.DynamoDB.DocumentClient.prototype, 'update').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    }
}

export const mockLambda = {
    invoke: function (payload = {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.Lambda.services).prototype, 'invoke').mockImplementationOnce(() => {
            return {
                promise: () => {
                    return {
                        statusCode: 200,
                        Payload: JSON.stringify(payload)
                    }
                }
            }
        })
    },
    invokeTwice: function (payload1 = {}, payload2 = {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.Lambda.services).prototype, 'invoke')
        .mockImplementationOnce(() => {
            return {
                promise: () => {
                    return {
                        statusCode: 200,
                        Payload: JSON.stringify(payload1)
                    }
                }
            }
        })
        .mockImplementationOnce(() => {
            return {
                promise: () => {
                    return {
                        statusCode: 200,
                        Payload: JSON.stringify(payload2)
                    }
                }
            }
        })
    },
    invokeAll: function (payload = {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.Lambda.services).prototype, 'invoke').mockImplementation(() => {
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
        return jest.spyOn(currentVersion(AWS.S3.services).prototype, 'headObject').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(meta)
            }
        })
    },
    headObjectAll: function (meta: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.S3.services).prototype, 'headObject').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(meta)
            }
        })
    },
    headObjectRejection: function (exception: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.S3.services).prototype, 'headObject').mockImplementation(() => {
            return {
                promise: () => Promise.reject(exception)
            }
        })
    },

    getSignedUrl: function (url: string): jest.SpyInstance {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrl').mockImplementationOnce(() => {
            return url
        })
    },
    getSignedUrlAll: function (url: string): jest.SpyInstance {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrl').mockImplementation(() => {
            return url
        })
    }
}

export const mockCloudFront = {
    getDistribution: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'getDistribution').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    getDistributionAll: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'getDistribution').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    getDistributionConfig: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'getDistributionConfig').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    getDistributionConfigAll: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'getDistributionConfig').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    updateDistribution: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'updateDistribution').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    updateDistributionAll: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'updateDistribution').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    createInvalidation: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'createInvalidation').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    createInvalidationAll: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CloudFront.services).prototype, 'createInvalidation').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    }
}

export const mockSqs = {
    sendMessage: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.SQS.services).prototype, 'sendMessage').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    sendMessageAll: function (result: {}): jest.SpyInstance {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.SQS.services).prototype, 'sendMessage').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    }
}

export const mockAcm = {
    describeCertificate: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.ACM.services).prototype, 'describeCertificate').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    describeCertificateAll: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.ACM.services).prototype, 'describeCertificate').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    }
}

export const mockCognitoIdp = {
    listUsers: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'listUser').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    listUsersThrow: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'listUser').mockImplementationOnce(() => {
            return {
                promise: () => Promise.reject(result)
            }
        })
    },
    listUsersAll: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'listUser').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    getUser: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'getUser').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    getUserThrow: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'getUser').mockImplementationOnce(() => {
            return {
                promise: () => Promise.reject(result)
            }
        })
    },
    getUserAll: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'getUser').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    adminGetUser: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'adminGetUser').mockImplementationOnce(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    adminGetUserAll: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'adminGetUser').mockImplementation(() => {
            return {
                promise: () => Promise.resolve(result)
            }
        })
    },
    adminGetUserThrow: function (result = {}) {
        // @ts-ignore
        return jest.spyOn(currentVersion(AWS.CognitoIdentityServiceProvider.services).prototype, 'adminGetUser').mockImplementation(() => {
            return {
                promise: () => Promise.reject(result)
            }
        })
    }
}