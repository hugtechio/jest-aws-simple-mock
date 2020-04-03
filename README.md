# jest-aws-simple-mock
simple mocking aws sdk and dynamodb-datamapper by jest.

You can only specfiy expectation of result object to mock some AWS-SDK function.
And if You use DynamoDB data mapper to access to dynamoDB, It's is also able to mock.

# Usage

## for DynamoDB Data mapper
```
import { mockDynamo } from 'jest-aws-simple-mock'

mockDynamo.query([resultObject1-1, resultObject1-2])
mockDynamo.get({resultObject})
```

## for DynamoDB Document Client
```
import { mockDynamoDocClient } from 'jest-aws-simple-mock'
mockDynamoDocClient.get({Item: {xxxxx}}
```

## for other AWS-SDK method
```
import { mockLambda } from 'jest-aws-simple-mock'
mockLambda.invoke(resultObject}
```

## mock all and mock once
### mock All invocation (all call target function will return same resultObject)
```
mockLambda.invokeAll(resultObject}
```

### mock once invocation(only first call target function will return resultObject)
```
mockLambda.invoke(resultObject}
```

# Example

```javascript
import * as mock from 'jest-aws-simple-mock'

// Target function
import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'
const dataMapper = new DataMapper({client: new DynamoDB()})

@table('Sample')
interface SampleModel {
    @hash_key()
    id: string;

    @attribute()
    name: string;

    @attribute()
    address: string;
}

function async target (input: string): Promise<boolean> {
    const query = dataMapper.query<SampleModel>(
        SampleModel,
        {id: input}
    )

    let result: boolean = false
    for await (const item of query) {
        if (item) {
            result = true
        }
    }
    return result
}


// test function
describe('Test Sample function', () => {
    beforeAll(() => {
        jest.resetAllMocks()
    })

    it ('expect result true', async () => {
        // mock result of dynamodb.query method for dynamodb data mapper.
        mock.mockDynamo.query([{id: 'id1', name: 'name1', address: 'address1'}])
        const result = await target('id')
        expect(result).toBeTruthy()
    })
})
```

# example (dynamodb data mapper query method) * here is a part of test code in this library.

```javascript

    it('#query (new)', async () => {
        const dataMapper = new DataMapper({client: new DynamoDB()})
        target.mockDynamo.query([{id: 1}])
        // @ts-ignore
        const q = dataMapper.query()
        let result = [] 
        for await (const item of q) {
            result.push(item)
        }
        expect(result).toEqual([{id: 1}])
    });

    it('#query (add)', async () => {
        const dataMapper = new DataMapper({client: new DynamoDB()})
        let mock = target.mockDynamo.query([{id: 1}])
        target.mockDynamo.query([{id: 2}], mock)

        // @ts-ignore
        let q = dataMapper.query()
        let result = [] 
        for await (const item of q) {
            result.push(item)
        }
        expect(result).toEqual([{id: 1}])

        // @ts-ignore
        q = dataMapper.query()
        result = [] 
        for await (const item of q) {
            result.push(item)
        }
        expect(result).toEqual([{id: 2}])
        
    });

```

# Exported functions(2020.03.23)

```javascript
/// <reference types="jest" />
export declare const mockAsyncIterator: (result: any) => any;
export declare const mockAsyncIteratorPage: (result: any, last?: boolean) => any;
export declare const currentVersion: (services: any) => any;
export declare const mockDynamo: {
    query: (queryResult: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryPages: (queryResult: any, last?: boolean | undefined, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryTwice: (result1: any, result2: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryThrice: (result1: any, result2: any, result3: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryFourth: (result1: any, result2: any, result3: any, result4: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    queryAll: (queryResult: any) => jest.SpyInstance<any, any>;
    get: (result: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getTwice: (result1: any, result2: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getThrice: (result1: any, result2: any, result3: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getAll: (result: any) => jest.SpyInstance<any, any>;
    put: (result: any) => jest.SpyInstance<any, any>;
    putTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    putThrice: (result1: any, result2: any, result3: any) => jest.SpyInstance<any, any>;
    putAll: (result: any) => jest.SpyInstance<any, any>;
    update: (result: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    updateTwice: (result1: any, result2: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    updateThrice: (result1: any, result2: any, result3: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    updateAll: (result: any) => jest.SpyInstance<any, any>;
    delete: (result: any) => jest.SpyInstance<any, any>;
    deleteTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    deleteThrice: (result1: any, result2: any, result3: any) => jest.SpyInstance<any, any>;
    deleteAll: (result: any) => jest.SpyInstance<any, any>;
    batchGet: (result: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    batchGetAll: (result: any) => jest.SpyInstance<any, any>;
    batchDelete: (result: any) => jest.SpyInstance<any, any>;
    batchDeleteAll: (result: any) => jest.SpyInstance<any, any>;
    queryWithThrow: () => jest.SpyInstance<any, any>;
    getWithThrow: () => jest.SpyInstance<any, any>;
    executeUpdateExpression: (result: any) => jest.SpyInstance<any, any>;
    executeUpdateExpressionAll: (result: any) => jest.SpyInstance<any, any>;
};
export declare const mockDynamoDocClient: {
    get: (result: any) => jest.SpyInstance<any, any>;
    getAll: (result: any) => jest.SpyInstance<any, any>;
    put: (result: any) => jest.SpyInstance<any, any>;
    putAll: (result: any) => jest.SpyInstance<any, any>;
    update: (result: any) => jest.SpyInstance<any, any>;
    updateAll: (result: any) => jest.SpyInstance<any, any>;
};
export declare const mockLambda: {
    invoke: (payload: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    invokeTwice: (payload1: any, payload2: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    invokeAll: (payload?: any) => jest.SpyInstance<any, any>;
    invokeAsync: (payload: any, mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    invokeAsyncAll: (payload?: any) => jest.SpyInstance<any, any>;
};
export declare const mockS3: {
    headObject: (meta: {}) => jest.SpyInstance<any, any>;
    headObjectAll: (meta: {}) => jest.SpyInstance<any, any>;
    headObjectRejection: (exception: {}) => jest.SpyInstance<any, any>;
    getSignedUrl: (url: string) => jest.SpyInstance<any, any>;
    getSignedUrlAll: (url: string) => jest.SpyInstance<any, any>;
    getBucketAcl: (result: {}) => jest.SpyInstance<any, any>;
    getBucketAclThrow: (result: {}) => jest.SpyInstance<any, any>;
    putBucketAcl: (result: {}) => jest.SpyInstance<any, any>;
    putBucketAclThrow: (result: {}) => jest.SpyInstance<any, any>;
};
export declare const mockCloudFront: {
    getDistribution: (result: {}) => jest.SpyInstance<any, any>;
    getDistributionAll: (result: {}) => jest.SpyInstance<any, any>;
    getDistributionConfig: (result: {}) => jest.SpyInstance<any, any>;
    getDistributionConfigAll: (result: {}) => jest.SpyInstance<any, any>;
    updateDistribution: (result: {}) => jest.SpyInstance<any, any>;
    updateDistributionAll: (result: {}) => jest.SpyInstance<any, any>;
    createInvalidation: (result: {}) => jest.SpyInstance<any, any>;
    createInvalidationAll: (result: {}) => jest.SpyInstance<any, any>;
};
export declare const mockSqs: {
    sendMessage: (result: {}) => jest.SpyInstance<any, any>;
    sendMessageAll: (result: {}) => jest.SpyInstance<any, any>;
};
export declare const mockAcm: {
    describeCertificate: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    describeCertificateAll: (result?: {}) => jest.SpyInstance<any, unknown[]>;
};
export declare const mockCognitoIdp: {
    listUsers: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    listUsersThrow: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    listUsersAll: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    getUser: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    getUserThrow: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    getUserAll: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    adminGetUser: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    adminGetUserAll: (result?: {}) => jest.SpyInstance<any, unknown[]>;
    adminGetUserThrow: (result?: {}) => jest.SpyInstance<any, unknown[]>;
};



```
