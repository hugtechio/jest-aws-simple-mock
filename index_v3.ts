import { DynamoDB, DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { Lambda, LambdaClient } from '@aws-sdk/client-lambda'
import { S3, S3Client } from '@aws-sdk/client-s3'
import { CloudFront, CloudFrontClient } from '@aws-sdk/client-cloudfront'
import * as methodList from './methodList'
import { Mock } from './base' 

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

// @ts-ignore
const mocksLambda = genMock(Lambda.prototype, methodList.Lambda)
const mocksLambdaSend = genMock(LambdaClient.prototype, methodList.V3Client)
export const mockLambda: Mock = Object.assign(mocksLambda, mocksLambdaSend)

// @ts-ignore
// Impersonate aws service configuration 
const mocksDynamo = genMock(DynamoDB.prototype, methodList.DynamoDB)
const mocksDynamoSend = genMock(DynamoDBClient.prototype, methodList.V3Client)
export const mockDynamo: Mock = Object.assign(mocksDynamo, mocksDynamoSend)

// @ts-ignore
const mocksS3 = genMock(S3.prototype, methodList.s3)
const mocksS3Send = genMock(S3Client.prototype, methodList.V3Client)
export const mockS3: Mock = Object.assign(mocksS3, mocksS3Send) 

// @ts-ignore
const mocksCloudFront = genMock(CloudFront.prototype, methodList.CloudFront)
const mocksCloudFrontSend = genMock(CloudFrontClient.prototype, methodList.V3Client)
export const mockCloudFront: Mock = Object.assign(mocksCloudFront, mocksCloudFrontSend) 

// // @ts-ignore
// const mocksEventBridge = genMock(AWS.EventBridge.services, methodList.EventBridge)
// export const mockEventBridge: Mock = mocksEventBridge

// // @ts-ignore
// const mocksStepFunctions = genMock(AWS.StepFunctions.services, methodList.StepFunctions)
// export const mockStepFunctions: Mock = mocksStepFunctions

// export const mockSqs = {
//     sendMessage: function (result: {}): jest.SpyInstance {
//         // @ts-ignore
//         return jest.spyOn(currentVersion(AWS.SQS.services).prototype, 'sendMessage').mockImplementationOnce(() => {
//             return {
//                 promise: () => Promise.resolve(result)
//             }
//         })
//     },
//     sendMessageAll: function (result: {}): jest.SpyInstance {
//         // @ts-ignore
//         return jest.spyOn(currentVersion(AWS.SQS.services).prototype, 'sendMessage').mockImplementation(() => {
//             return {
//                 promise: () => Promise.resolve(result)
//             }
//         })
//     }
// }

// // @ts-ignore
// const mocksAcm = genMock(AWS.ACM.services, methodList.Acm)
// export const mockAcm: Mock = mocksAcm

// // @ts-ignore
// const mocksCognitoIdp = genMock(AWS.CognitoIdentityServiceProvider.services, methodList.CognitoIdp)
// export const mockCognitoIdp: Mock = mocksCognitoIdp

// // @ts-ignore
// const mocksKms = genMock(AWS.KMS.services, methodList.Kms)
// export const mockKms: Mock = mocksKms

// // @ts-ignore
// const mocksSsm = genMock(AWS.SSM.services, methodList.Ssm)
// export const mockSsm: Mock = mocksSsm


// // @ts-ignore
// const mocksEcs = genMock(AWS.ECS.services, methodList.Ecs)
// export const mockEcs: Mock = mocksEcs

// // @ts-ignore
// const mocksTimestreamQuery = genMock(AWS.TimestreamQuery.services, methodList.TimestreamQuery)
// export const mockTimestreamQuery: Mock = mocksTimestreamQuery

// // @ts-ignore
// const mocksTimestreamWrite = genMock(AWS.TimestreamWrite.services, methodList.TimestreamWrite)
// export const mockTimestreamWrite: Mock = mocksTimestreamWrite 

// // @ts-ignore
// const mocksSes = genMock(AWS.SES.services, methodList.SES)
// export const mockSes: Mock = mocksSes

// // @ts-ignore
// const mocksSesV2 = genMock(AWS.SESV2.services, methodList.SESv2)
// export const mockSesV2: Mock = mocksSesV2