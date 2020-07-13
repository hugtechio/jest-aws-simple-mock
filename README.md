# jest-aws-simple-mock
Simple mocking aws sdk and the dynamodb-datamapper by using Jest.
This module only has compatibility AWS SDK version 2.

# Specification
```
import { mock<ServiceName> } from 'jest-aws-simple-mock'

let spy mock<ServiceName>.<methodName>(<<returns>>)
```

# Examples 

## AWS Lambda
```
import { mockLambda } from 'jest-aws-simple-mock'

let spyLambda = mockLambda.invoke({
  StatusCode: 200,
  Payload: JSON.stringify({
    hoge: 1
  })
})

```

## DynamoDB Data Mapper
```
import { mockDynamo } from 'jest-aws-simple-mock'

mockDynamo.query([{1}, {2}])
mockDynamo.get({3})

```

## DynamoDB Document Client
```
import { mockDynamoDocClient } from 'jest-aws-simple-mock'
mockDynamoDocClient.get({Item: {xxxxx}}
```

To see all functions which current handled, check below.

# Mocking patterns

### mock at once (only mock first invocation)
```
mockLambda.invoke(resultObject)
```

### mock All invocation (mocking all calls of target function)
```
mockLambda.invokeAll(resultObject}
```

### mock with throw 
```
mockLambda.invokeThrow(resultObject}
```

## mock chaining
all mock method returns jest.SpyInstance object.
You can add mock if target function will be call multiply in the test.

```
let mock = mockLambda.invoke(result1) <-- first call mocking
mock = mockLambda.invoke(result2, mock) <-- second call mocking
```

# Exported functions(2020.07.12)

```javascript
/// <reference types="jest" />
export declare const mockAsyncIterator: (result: any) => any;
export declare const mockAsyncIteratorPage: (result: any, last?: boolean) => any;
export declare const currentVersion: (services: any) => any;
interface Mock {
    [method: string]: (result: any, mock?: jest.SpyInstance) => jest.SpyInstance;
}
export declare const genMock: (services: any, methods: string[]) => Mock;
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
    batchPut: (result: any) => jest.SpyInstance<any, any>;
    queryWithThrow: (mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
    getWithThrow: (mock?: jest.SpyInstance<any, any> | undefined) => jest.SpyInstance<any, any>;
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
export declare const mockLambda: Mock;
export declare const mockS3: Mock;
export declare const mockCloudFront: Mock;
export declare const mockEventBridge: Mock;
export declare const mockStepFunctions: Mock;
export declare const mockSqs: {
    sendMessage: (result: {}) => jest.SpyInstance<any, any>;
    sendMessageAll: (result: {}) => jest.SpyInstance<any, any>;
};
export declare const mockAcm: Mock;
export declare const mockCognitoIdp: Mock;
export declare const mockKms: Mock;
export {};
```
