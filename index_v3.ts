import * as methodList from './methodList'
import { Mock, dynamicImport } from './base'

/**
 * mocked aws object
 */
export let mockLambda: Mock
export let mockDynamo: Mock
export let mockS3: Mock
export let mockCloudFront: Mock
export let mockSesV2: Mock

const doMock = (awsObjectPrototype: any, method: any, result: any, mockOnce: boolean, mock?: jest.SpyInstance, isThrow?: boolean): jest.SpyInstance => {
    // @ts-ignore
    const tmp = (mock) ? mock : jest.spyOn(awsObjectPrototype, method)
    const mockResultFunction = (!isThrow) ? Promise.resolve(result) : Promise.reject(result)
    return (mockOnce) ?
        tmp.mockImplementationOnce(() => mockResultFunction) :
        tmp.mockImplementation(() => mockResultFunction)
}

export const genMock = (awsObjectPrototype: any, methods: string[]) => {
    let ret: Mock = {}
    methods.forEach(method => {
        ret[method] = function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
            return doMock(awsObjectPrototype, method, result, true, mock)
        }

        ret[`${method}All`] = function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
            return doMock(awsObjectPrototype, method, result, false, mock)
        }

        ret[`${method}Throw`] = function (result: any, mock?: jest.SpyInstance): jest.SpyInstance {
            return doMock(awsObjectPrototype, method, result, false, mock, true)
        }
    })
    return ret
}

async function importLambda(): Promise<void> {
    const moduleName = '@aws-sdk/client-lambda'
    const mod = await dynamicImport(moduleName)
    if (!mod) return

    const { Lambda, LambdaClient } = mod
    const mocksLambda = genMock(Lambda.prototype, methodList.Lambda)
    const mocksLambdaSend = genMock(LambdaClient.prototype, methodList.V3Client)
    mockLambda = Object.assign(mocksLambda, mocksLambdaSend)
}

async function importDynamoDB(): Promise<void> {
    const moduleName = '@aws-sdk/client-dynamodb'
    const mod = await dynamicImport(moduleName)
    if (!mod) return

    const { DynamoDB, DynamoDBClient } = mod 
    const mocksDynamo = genMock(DynamoDB.prototype, methodList.DynamoDB)
    const mocksDynamoSend = genMock(DynamoDBClient.prototype, methodList.V3Client)
    mockDynamo = Object.assign(mocksDynamo, mocksDynamoSend)
}

async function importS3(): Promise<void> {
    const moduleName = '@aws-sdk/client-s3'
    const mod = await dynamicImport(moduleName)
    if (!mod) return

    const { S3, S3Client } = mod 
    const mocksS3 = genMock(S3.prototype, methodList.s3)
    const mocksS3Send = genMock(S3Client.prototype, methodList.V3Client)
    mockS3 = Object.assign(mocksS3, mocksS3Send) 
}

async function importCloudFront(): Promise<void> {
    const moduleName = '@aws-sdk/client-cloudfront'
    const mod = await dynamicImport(moduleName)
    if (!mod) return

    const { CloudFront, CloudFrontClient } = mod 
    const mocksCloudFront = genMock(CloudFront.prototype, methodList.CloudFront)
    const mocksCloudFrontSend = genMock(CloudFrontClient.prototype, methodList.V3Client)
    mockCloudFront = Object.assign(mocksCloudFront, mocksCloudFrontSend) 
}

async function importSesV2(): Promise<void> {
    const moduleName = '@aws-sdk/client-sesv2'
    const mod = await dynamicImport(moduleName)
    if (!mod) return

    const { SESv2, SESv2Client } = mod 
    const mocksSesV2 = genMock(SESv2.prototype, methodList.SESv2)
    const mocksSesV2Send = genMock(SESv2Client.prototype, methodList.V3Client)
    mockSesV2 = Object.assign(mocksSesV2, mocksSesV2Send) 
}

async function mock(): Promise<void> {
    await importLambda()
    await importDynamoDB()
    await importS3()
    await importCloudFront()
    await importSesV2()
}

mock()
