# jest-aws-simple-mock
simple mocking aws sdk and dynamodb-datamapper by jest
# Usage

mocking all calls of aws method --> call mocking method with suffix 'All'
-- e.g for all calls of sqs.sendMessage,  call mockSqs.sendMessageAll(res1)
-----> all calls in the code return res1

mocking several times of was method ---> call mocking method without suffix or times
-- e.g only twice calls of dynamodb get ---> call mockDynamo.getTwice(res1, res2)
-----> first call of dynamodb get, return res1,
-----> second call of dynamodb get, return res2,

# Example

```
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
describe('Test Sample fnction', () => {
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

# Exported functions(2019.12.13)
```
/// <reference types="jest" />
export declare const mockAsyncIterator: (result: any) => any;
export declare const currentVersion: (services: any) => any;
export declare const mockDynamo: {
    query: (queryResult: any) => jest.SpyInstance<any, any>;
    queryTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    queryAll: (queryResult: any) => jest.SpyInstance<any, any>;
    get: (result: any) => jest.SpyInstance<any, any>;
    getTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    getThirth: (result1: any, result2: any, result3: any) => jest.SpyInstance<any, any>;
    getAll: (result: any) => jest.SpyInstance<any, any>;
    put: (result: any) => jest.SpyInstance<any, any>;
    putAll: (result: any) => jest.SpyInstance<any, any>;
    update: (result: any) => jest.SpyInstance<any, any>;
    updateTwice: (result1: any, result2: any) => jest.SpyInstance<any, any>;
    updateAll: (result: any) => jest.SpyInstance<any, any>;
    delete: (result: any) => jest.SpyInstance<any, any>;
    deleteAll: (result: any) => jest.SpyInstance<any, any>;
    batchDelete: (result: any) => jest.SpyInstance<any, any>;
    batchDeleteAll: (result: any) => jest.SpyInstance<any, any>;
    queryWithThrow: () => jest.SpyInstance<any, any>;
    getWIthThrow: () => jest.SpyInstance<any, any>;
};
export declare const mockDynamoDocClient: {
    get: (result: any) => jest.SpyInstance<any, any>;
    getAll: (result: any) => jest.SpyInstance<any, any>;
    put: (result: any) => jest.SpyInstance<any, any>;
    putAll: (result: any) => jest.SpyInstance<any, any>;
};
export declare const mockLambda: {
    invoke: (payload?: {}) => jest.SpyInstance<any, any>;
    invokeAll: (payload?: {}) => jest.SpyInstance<any, any>;
};
export declare const mockS3: {
    headObject: (meta: {}) => jest.SpyInstance<any, any>;
    headObjectAll: (meta: {}) => jest.SpyInstance<any, any>;
    headObjectRejection: (exception: {}) => jest.SpyInstance<any, any>;
    getSignedUrl: (url: string) => jest.SpyInstance<any, any>;
    getSignedUrlAll: (url: string) => jest.SpyInstance<any, any>;
};
export declare const mockCloudFront: {
    getDistribution: (result: {}) => jest.SpyInstance<any, any>;
    getDistributionAll: (result: {}) => jest.SpyInstance<any, any>;
    getDistributionConfig: (result: {}) => jest.SpyInstance<any, any>;
    getDistributionConfigAll: (result: {}) => jest.SpyInstance<any, any>;
    updateDistribution: (result: {}) => jest.SpyInstance<any, any>;
    updateDistributionAll: (result: {}) => jest.SpyInstance<any, any>;
};
export declare const mockSqs: {
    sendMessage: (result: {}) => jest.SpyInstance<any, any>;
    sendMessageAll: (result: {}) => jest.SpyInstance<any, any>;
};



```
