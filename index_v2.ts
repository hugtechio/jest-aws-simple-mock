import * as methodList from './methodList'
import responseTemplate, * as res from './responseTemplate'
import { dynamicImport } from './base'

interface Mock {
    [method: string]: (result: any, mock?: jest.SpyInstance) => jest.SpyInstance
}


/**
 * mock objects
 */
 export let mockDynamo: Mock // mock of DynamoDB DataMapper
 export let mockLambda: Mock 
 export let mockS3: Mock
 export let mockCloudFront: Mock
 export let mockEventBridge: Mock
 export let mockStepFunctions: Mock
 export let mockSqs: Mock
 export let mockAcm: Mock
 export let mockCognitoIdp: Mock
 export let mockKms: Mock
 export let mockSsm: Mock
 export let mockDynamoDocClient: Mock
 export let mockEcs: Mock
 export let mockTimestreamQuery: Mock
 export let mockTimestreamWrite: Mock
 export let mockSes: Mock
 export let mockSesV2: Mock

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
    ret.lastEvaluatedKey = 'dummyKey'
    return ret
}

export const mockAsyncIteratorPage = (result: any, last: boolean = false) => {
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
    if (!last) ret.lastEvaluatedKey = 'dummyKey'
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

const doMock = (services: any, method: any, result: any, mockOnce: boolean, mock?: jest.SpyInstance, isThrow?: boolean): jest.SpyInstance => {
    // @ts-ignore
    const tmp = (mock) ? mock : jest.spyOn(currentVersion(services).prototype, method)
    const mockResultFunction = (!isThrow) ? responseTemplate.promise(result) : responseTemplate.throw(result)
    return (mockOnce) ?
        tmp.mockImplementationOnce(() => mockResultFunction) :
        tmp.mockImplementation(() => mockResultFunction)
}

export const genMock = (services: any, methods: string[]) => {
    let ret: Mock = {}
    methods.forEach(method => {
        ret[method] = function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
            return doMock(services, method, result, true, mock)
        }

        ret[`${method}All`] = function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
            return doMock(services, method, result, false, mock)
        }

        ret[`${method}Throw`] = function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
            return doMock(services, method, result, false, mock, true)
        } 
    })
    return ret
}



async function importDataMapper(): Promise<Mock | undefined>{
    const moduleName = '@aws/dynamodb-data-mapper'

    const mod = await dynamicImport(moduleName)
    if (!mod) return undefined

    const { DataMapper } = mod

    const mocks: Mock = {
        query: function (queryResult: any, mock?: jest.SpyInstance): jest.SpyInstance {
            let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
            return tmp.mockImplementationOnce(() => { return mockAsyncIterator(queryResult) })
        },

        // @ts-ignore
        queryPages: function (queryResult: any, last?: boolean, mock?: jest.SpyInstance): jest.SpyInstance {
            let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
            return tmp.mockImplementationOnce(() => { 
                return { 
                    pages: () => { return mockAsyncIteratorPage(queryResult, last) }
                }
            })
        },
    
        queryTwice: function (result1: any, result2: any, mock?: jest.SpyInstance): jest.SpyInstance {
            let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
            return tmp.mockImplementationOnce(() => { return mockAsyncIterator(result1) })
                    .mockImplementationOnce(() => { return mockAsyncIterator(result2) })
        },
    
        // @ts-ignore
        queryThrice: function (result1: any, result2: any, result3: any, mock?: jest.SpyInstance): jest.SpyInstance {
            let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query')
            return tmp.mockImplementationOnce(() => { return mockAsyncIterator(result1) })
                    .mockImplementationOnce(() => { return mockAsyncIterator(result2) })
                    .mockImplementationOnce(() => { return mockAsyncIterator(result3) })
        },
    
        // @ts-ignore
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
        // @ts-ignore
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
    
        // @ts-ignore
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
    
        // @ts-ignore
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
    
        // @ts-ignore
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
    
        batchGet: function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
            let tmp = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'batchGet')
            return tmp.mockImplementationOnce(() => { return mockAsyncIterator(result) })
        },
    
        batchGetAll: function (result: any): jest.SpyInstance {
            return jest.spyOn(DataMapper.prototype, 'batchGet')
                .mockImplementation(() => { return mockAsyncIterator(result) })
        },
    
        batchDelete: function (result: any): jest.SpyInstance {
            return jest.spyOn(DataMapper.prototype, 'batchDelete')
                .mockImplementationOnce(() => { return mockAsyncIterator(result) })
        },
    
        batchDeleteAll: function (result: any): jest.SpyInstance {
            return jest.spyOn(DataMapper.prototype, 'batchDelete')
                .mockImplementation(() => { return mockAsyncIterator(result) })
        },
    
        batchPut: function (result: any): jest.SpyInstance {
            return jest.spyOn(DataMapper.prototype, 'batchPut')
                .mockImplementation(() => { return mockAsyncIterator(result) })
        },
    
        queryWithThrow: function (mock?: jest.SpyInstance): jest.SpyInstance {
            const m = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'query') 
            return m.mockImplementationOnce(() => { throw new Error('mock exception') })
        },
        getWithThrow: function (mock?: jest.SpyInstance): jest.SpyInstance {
            const m = (mock) ? mock : jest.spyOn(DataMapper.prototype, 'get') 
            return m.mockImplementationOnce(() => { throw new Error('mock exception') })
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
    return mocks
}

async function importAwsSdkV2() {
    const moduleName = 'aws-sdk'
    const AWS = await dynamicImport(moduleName)
    if (!AWS) return undefined 

    new AWS.Lambda()
    // @ts-ignore
    mockLambda = genMock(AWS.Lambda.services, methodList.Lambda)

    new AWS.S3()
    // @ts-ignore
    const mocksS3 = genMock(AWS.S3.services, methodList.s3)
    // The methods for presign urls not exist in the services scope. Adding these mocks with individually.
    mocksS3.getSignedUrl = (url: string): jest.SpyInstance => {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrl').mockImplementationOnce(() => {
            return url
        })
    }
    mocksS3.getSignedUrlAll = (url: string): jest.SpyInstance => {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrl').mockImplementation(() => {
            return url
        })
    }
    // The methods for presign urls not exist in the services scope. Adding these mocks with individually.
    mocksS3.getSignedUrlPromise = (url: string): jest.SpyInstance => {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrlPromise').mockImplementationOnce(() => {
            return Promise.resolve(url)
        })
    }
    mocksS3.getSignedUrlPromiseAll = (url: string): jest.SpyInstance => {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrlPromise').mockImplementation(() => {
            return Promise.resolve(url)
        })
    }
    mockS3 = mocksS3

    new AWS.CloudFront()
    mockCloudFront = genMock(AWS.CloudFront.services, methodList.CloudFront)

    new AWS.EventBridge()
    mockEventBridge = genMock(AWS.EventBridge.services, methodList.EventBridge)

    new AWS.StepFunctions()
    mockStepFunctions = genMock(AWS.StepFunctions.services, methodList.StepFunctions)

    new AWS.SQS()
    mockSqs = {
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


    new AWS.ACM()
    mockAcm = genMock(AWS.ACM.services, methodList.Acm)

    new AWS.CognitoIdentityServiceProvider()
    mockCognitoIdp = genMock(AWS.CognitoIdentityServiceProvider.services, methodList.CognitoIdp)

    new AWS.KMS()
    mockKms = genMock(AWS.KMS.services, methodList.Kms)

    new AWS.SSM()
    mockSsm = genMock(AWS.SSM.services, methodList.Ssm)

    new AWS.DynamoDB.DocumentClient()
    // Impersonate aws service configuration 
    mockDynamoDocClient = genMock({latest: AWS.DynamoDB.DocumentClient}, methodList.DynamoDocClient)

    new AWS.ECS()
    mockEcs = genMock(AWS.ECS.services, methodList.Ecs)

    new AWS.TimestreamQuery()
    mockTimestreamQuery = genMock(AWS.TimestreamQuery.services, methodList.TimestreamQuery)

    new AWS.TimestreamWrite()
    mockTimestreamWrite = genMock(AWS.TimestreamWrite.services, methodList.TimestreamWrite)

    new AWS.SES()
    mockSes = genMock(AWS.SES.services, methodList.SES)

    new AWS.SESV2()
    mockSesV2 = genMock(AWS.SESV2.services, methodList.SESv2)
}

/**
 * run mocking
 */
async function mock(): Promise<void> {
    const dataMapperMock = await importDataMapper()
    if (dataMapperMock) {
        mockDynamo = dataMapperMock
    }
    await importAwsSdkV2()
}

mock()