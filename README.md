# jest-aws-simple-mock
Simple mocking aws sdk version 2 and the dynamodb-datamapper  with jest.

You can only specify expectation of the target function to mock some AWS-SDK feature.
And if You use DynamoDB data mapper to access to dynamoDB, It's is also able to mock.

# Examples 

## DynamoDB Data Mapper
```
import { mockDynamo } from 'jest-aws-simple-mock'

<!-- mocking once -->
mockDynamo.query([resultObject1-1, resultObject1-2])
mockDynamo.get({resultObject})

<!-- mocking all invocation -->
mockDynamo.queryAll([resultObject1-1, resultObject1-2])
mockDynamo.getAll({resultObject})

<!-- mocking with throw -->
mockDynamo.queryThrow([resultObject1-1, resultObject1-2])
mockDynamo.getThrow({resultObject})
```

## DynamoDB Document Client
```
import { mockDynamoDocClient } from 'jest-aws-simple-mock'
mockDynamoDocClient.get({Item: {xxxxx}}
```

## The other AWS-SDK method
```
import { mockLambda } from 'jest-aws-simple-mock'
mockLambda.invoke(resultObject}
```

To see all generated functions, check below.

## Mocking patterns

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
You can add additional mock function by passing mock object

following exampke, mockLambda will return result1 when first call the lambda invoke.
And it will return result2 when second call.
(If the lambda invoke method was called 3 times, The third call was call original AWS method.)

```
let mock = mockLambda.invoke(result1)
mock = mockLambda.invoke(result2, mock)
```

# Exported functions(2020.05.14)

```javascript
/// <reference types="jest" />
export declare const mockAsyncIterator: (result: any) => any;
export declare const mockAsyncIteratorPage: (result: any, last?: boolean) => any;
export declare const currentVersion: (services: any) => any;
interface Mock {
    [method: string]: (result: any, mock?: jest.SpyInstance) => jest.SpyInstance;
}
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
export declare const mockLambda: Mock; // exorted all of Lambda function mock. [methodlist](../blob/master/methodList.ts)
export declare const mockS3: Mock; // exorted all of Lambda function mock. [methodlist](../blob/master/methodList.ts)
export declare const mockEventBridge: Mock; // exorted all of Lambda function mock. [methodlist](../blob/master/methodList.ts)

export declare const mockCloudFront: Mock; // exported all of CloudFront function mock. [methodlist](../blob/master/methodList.ts)
export declare const mockSqs: {
    sendMessage: (result: {}) => jest.SpyInstance<any, any>;
    sendMessageAll: (result: {}) => jest.SpyInstance<any, any>;
};
export declare const mockAcm: Mock; // exorted all of Acm function mock. [methodlist](../blob/master/methodList.ts)
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
export {};
```
