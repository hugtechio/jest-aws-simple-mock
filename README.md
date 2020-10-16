# jest-aws-simple-mock
The jest-aws-simple-mock is a mocking library of AWS-SDK for javascript.
Currently, only these module you can mock is. 

- @aws/dynamodb-datamapper
- aws-sdk(vesion 2)  **not all services.**
- aws-sdk(version 3) ** currently only @aws-sdk/client-dynamodb::getItem method **

## Basic Usage
```ts
import { mock<ServiceName> } from 'jest-aws-simple-mock'

let spy = mock<ServiceName>.<methodName>(<<returns>>)
```

```ts
import { V3 } from 'jest-aws-simple-mock'

let spy = V3.mockDynamo.getItem(<<returns>>)
```


## Mocking example
Our test code is useful that how to use this library.

```ts
  describe('#dynamodb doc client', () => {
      it('#get', async () => {
          const result = await target.mockDynamoDocClient.get({})
          // @ts-ignore
          expect(result).toHaveProperty('mock')
      }),
      it('#put', async () => {
          const result = await target.mockDynamoDocClient.put({})
          // @ts-ignore
          expect(result).toHaveProperty('mock')
      })
  })

  describe('#dynamodb data mapper', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })

      it('#query', async () => {
          const result = await target.mockDynamo.query([{}])
          // @ts-ignore
          expect(result).toHaveProperty('mock')
      });

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

      it('#query (pages)', async () => {
          const dataMapper = new DataMapper({client: new DynamoDB()})
          let mock = target.mockDynamo.queryPages([[{id: 1}]])
          // @ts-ignore
          let q = dataMapper.query().pages()
          expect(q).toHaveProperty('lastEvaluatedKey')
          for await (const page of q) {
              expect(Array.isArray(page)).toBeTruthy()
          }
      });
  })

  describe ('#acm', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should get requestCertificate', async () => {
          const acm = new AWS.ACM()
          let mock = target.mockAcm.requestCertificate({})
          const result = await acm.requestCertificate().promise()
          expect(result).toEqual({})
      });
      it('should get requestCertificateAll', async () => {
          const acm = new AWS.ACM()
          let mock = target.mockAcm.requestCertificateAll({})
          const result1 = await acm.requestCertificate().promise()
          const result2 = await acm.requestCertificate().promise()
          expect(result1).toEqual({})
          expect(result2).toEqual({})
      });
  })

  describe ('#cloudfront', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should get getDistributionConfig', async () => {
          const cf = new AWS.CloudFront()
          let mock = target.mockCloudFront.getDistributionConfig({})
          const result = await cf.getDistributionConfig().promise()
          expect(result).toEqual({})
      });

      it('should get getDistributionConfigAll', async () => {
          const cf = new AWS.CloudFront()
          let mock = target.mockCloudFront.getDistributionConfigAll({})
          const result1 = await cf.getDistributionConfig().promise()
          const result2 = await cf.getDistributionConfig().promise()
          expect(result1).toEqual({})
          expect(result2).toEqual({})
      });

      it('should throw getDistributionConfigThrow', async () => {
          const cf = new AWS.CloudFront()
          let mock = target.mockCloudFront.getDistributionConfigThrow({})
          try {
              const result1 = await cf.getDistributionConfig().promise()
              expect(null).toBe('This path is fault of the test') // should be
          } catch (e) {
              expect(e).toEqual({})
          }
      });
  })

  describe ('#lambda', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should get invoke', async () => {
          const lambda = new AWS.Lambda()
          let mock = target.mockLambda.invoke({})
          const result = await lambda.invoke().promise()
          expect(result).toEqual({})
      });

      it('should get invokeAll', async () => {
          const lambda = new AWS.Lambda()
          let mock = target.mockLambda.invokeAll({})
          const result1 = await lambda.invoke().promise()
          const result2 = await lambda.invoke().promise()
          expect(result1).toEqual({})
          expect(result2).toEqual({})
      });
  })

  describe ('#s3', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should get getObject mock', async () => {
          const s3 = new AWS.S3()
          let mock = target.mockS3.getObject({})
          const result = await s3.getObject().promise()
          expect(result).toEqual({})
      });
      it('should get getpresignedurl mock', async () => {
          const s3 = new AWS.S3()
          let mock = target.mockS3.getSignedUrl({})
          // @ts-ignore
          const result = s3.getSignedUrl()
          expect(result).toEqual({})
      });
      it('should get getpresignedurlPromise mock', async () => {
          const s3 = new AWS.S3()
          let mock = target.mockS3.getSignedUrlPromise({})
          // @ts-ignore
          const result = await s3.getSignedUrlPromise()
          expect(result).toEqual({})
      });
  })

  describe ('#EventBridge', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should get createEventBus mock', async () => {
          const eb = new AWS.EventBridge()
          let mock = target.mockEventBridge.createEventBus({})
          const result = await eb.createEventBus().promise()
          expect(result).toEqual({})                
      })
      it('should get putEvents mock', async () => {
          const eb = new AWS.EventBridge()
          let mock = target.mockEventBridge.putEvents({})
          const result = await eb.putEvents().promise()
          expect(result).toEqual({})                
      })
  })

  describe ('#StepFunction', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should get startExecution mock', async () => {
          const sf = new AWS.StepFunctions()
          let mock = target.mockStepFunctions.startExecution({})
          const result = await sf.startExecution().promise()
          expect(result).toEqual({})                
      })
  })

  describe ('#CognitoIdp', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should get listUsers mock', async () => {
          const idp = new AWS.CognitoIdentityServiceProvider()
          let mock = target.mockCognitoIdp.listUsers({})
          const result = await idp.listUsers().promise()
          expect(result).toEqual({})                
      })

      it('should get adminInitiateAuth mock', async () => {
          const idp = new AWS.CognitoIdentityServiceProvider()
          let mock = target.mockCognitoIdp.adminInitiateAuth({})
          const result = await idp.adminInitiateAuth().promise()
          expect(result).toEqual({})                
      })
  })

  describe ('#Kms', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should encrypt mock', async () => {
          const kms = new AWS.KMS()
          let mock = target.mockKms.encrypt({})
          const result = await kms.encrypt().promise()
          expect(result).toEqual({})                
      })
  })

  describe ('#Ssm', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should GetParameter mock', async () => {
          const ssm = new AWS.SSM()
          let mock = target.mockSsm.getParameter({})
          const result = await ssm.getParameter().promise()
          expect(result).toEqual({})                
      })
  })

  describe ('#Ecs', () => {
      beforeEach(() => {
          jest.restoreAllMocks()
      })
      it('should createCapacityProvider mock', async () => {
          const ecs = new AWS.ECS()
          let mock = target.mockEcs.createCapacityProvider({})
          const result = await ecs.createCapacityProvider().promise()
          expect(result).toEqual({})                
      })
  })

  describe('#index_v3', () => {
      describe('#dynamodb', () => {
          it ('should be return dynamoDB mock', async () => {
              V3.mockDynamo.getItem({})
              const dynamodb = new DynamoDB({region: 'us-east-1'})
              // @ts-ignore
              const result = await dynamodb.getItem({})
              expect(result).toEqual({})
          })
      })
  })

```

# Mocking pattern
Jest-aws-simple-mock generate 3 types mock which return different result.


### mock at once (only mock first invocation)
This mocking invocation is to mock only a call of target function.

```javascript
mockLambda.invoke(resultObject)
```

### mock All invocation (mocking all calls of target function)
This mocking invocation is to mock **all** calls of target function.

```javascript
mockLambda.invokeAll(resultObject}
```


### mock with throw
This mocking invocation is to throw exception when target function was called.

```javascript
mockLambda.invokeThrow(resultObject}
```


## mock chaining
when you want to mock target function only several times in all calls. 
You can chain mock object.

these example, when the lamba.invoke is called more than 3 times in your logic, 
only first 2 calls is mocked.

```javascript
let mock = mockLambda.invoke(result1) <-- first call mocking
mock = mockLambda.invoke(result2, mock) <-- second call mocking
```



# all mockable functions and utilities (2020.09.09)

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
export declare const mockSsm: Mock;
export declare const mockDynamoDocClient: Mock;
export declare const mockEcs: Mock;
export {};

```
