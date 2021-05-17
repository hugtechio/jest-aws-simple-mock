import { methodList, V3Client } from './methodList'
import { Mock, dynamicImport } from './base'

/**
 * MockDefinition
 */
interface MockDefinition {
    mock: (mock: Mock) => void;
    module: string;
    name: string;
}

/**
 * mocked aws object
 */
export let mockLambda: Mock = {}
export let mockDynamo: Mock = {}
export let mockS3: Mock = {}
export let mockCloudFront: Mock = {}
export let mockSesV2: Mock = {}
export let mockCognitoIdp: Mock = {}

/**
 * AWS Mock definitions
 */
const mockDefinitions: MockDefinition[] = [
    { mock: (mock) => { mockDynamo = mock }, module: '@aws-sdk/client-dynamodb', name: 'DynamoDB'},
    { mock: (mock) => { mockLambda  = mock }, module: '@aws-sdk/client-lambda', name: 'Lambda' },
    { mock: (mock) => { mockS3  = mock }, module: '@aws-sdk/client-s3', name: 'S3' },
    { mock: (mock) => { mockCloudFront  = mock }, module: '@aws-sdk/client-cloudfront', name: 'CloudFront' },
    { mock: (mock) => { mockSesV2  = mock }, module: '@aws-sdk/client-sesv2', name: 'SESv2' },
    { mock: (mock) => { mockCognitoIdp  = mock }, module: '@aws-sdk/client-cognito-identity-provider', name: 'CognitoIdentityProvider' }
]

/**
 * 
 * @param awsObjectPrototype AWS service object
 * @param method target method which will be mocked
 * @param result result value of the mock
 * @param mockOnce flag: if true, mock only the time
 * @param mock source mock object which the mock is chained
 * @param isThrow flag: if true, mock will be throw exception
 * @returns 
 */
const doMock = (awsObjectPrototype: any, method: any, result: any, mockOnce: boolean, mock?: jest.SpyInstance, isThrow?: boolean): jest.SpyInstance => {
    // @ts-ignore
    const tmp = (mock) ? mock : jest.spyOn(awsObjectPrototype, method)
    const mockResultFunction = (!isThrow) ? Promise.resolve(result) : Promise.reject(result)
    return (mockOnce) ?
        tmp.mockImplementationOnce(() => mockResultFunction) :
        tmp.mockImplementation(() => mockResultFunction)
}

/**
 * 
 * @param awsObjectPrototype AWS service object
 * @param methods List of methods
 * @returns 
 */
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

/**
 * 
 * @param def AWS mock definition of single module
 * @returns 
 */
async function implMock(def: MockDefinition): Promise<void> {
    const moduleName = def.module
    const mod = await dynamicImport(moduleName)
    if (!mod) return

    const v2StyleObject = mod[def.name]
    const v3StyleObject = mod[def.name + 'Client']
    const mocks = genMock(v2StyleObject.prototype, methodList[def.name])
    const mocksSend = genMock(v3StyleObject.prototype, V3Client)
    def.mock(Object.assign(mocks, mocksSend))
}

/**
 * generate all mock methods
 */
async function mock(): Promise<void> {
    const promises = mockDefinitions.map(async def => implMock(def))
    await Promise.all(promises)
}

mock()
