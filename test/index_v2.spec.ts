import * as target from '../src/mocks_v2'
import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'
import { MockChain } from '../src/chain'

describe('#index_V2', () => {
    describe('#methodChaining', () => {
        beforeEach(() => {
            jest.restoreAllMocks()
        })
        it('should be combine any mocking to the chain', async () => {
            const chain = new MockChain()
            chain
                .add(target.mockDynamoDocClient.get, {result: 2})
                .add(target.mockLambda.invoke, {result: 1})
                .add(target.mockLambda.invoke, {result: 3}, 0)
            chain.getSpies()

            const lambda = new AWS.Lambda()
            const db = new AWS.DynamoDB.DocumentClient()
            // call methods
            const result1 = await lambda.invoke().promise()
            // @ts-ignore
            const result2 = await db.get().promise()
            const result3 = await lambda.invoke().promise()

            // check results
            expect(result1).toEqual({result: 1})
            expect(result2).toEqual({result: 2})
            expect(result3).toEqual({result: 3})
        })
    })

    describe('#method currentVersion', () => {
        it('return valid service', async () => {
            const data = {
                '2015-01-01': {prototype: 'valid'},
                '2017-01-01': null,
                '2018-01-01': undefined
            }
            const service = target.currentVersion(data)
            expect(service).toEqual({prototype: 'valid'})
        })

        it('return null (not found)', async () => {
            const data = {
                '2015-01-01': null,
                '2017-01-01': null,
                '2018-01-01': undefined
            }
            const service = target.currentVersion(data)
            expect(service).toBe(null)
        })
    })

    describe('#getting mock object', () => {
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
                const dataMapper = new DataMapper({client: new AWS.DynamoDB()})
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
                const dataMapper = new DataMapper({client: new AWS.DynamoDB()})
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
                const dataMapper = new DataMapper({client: new AWS.DynamoDB()})
                target.mockDynamo.queryPages([[{id: 1}]])
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
                target.mockACM.requestCertificate({})
                const result = await acm.requestCertificate().promise()
                expect(result).toEqual({})
            });
            it('should get requestCertificateAll', async () => {
                const acm = new AWS.ACM()
                target.mockACM.requestCertificateAll({})
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
                target.mockCloudFront.getDistributionConfig({})
                const result = await cf.getDistributionConfig().promise()
                expect(result).toEqual({})
            });

            it('should get getDistributionConfigAll', async () => {
                const cf = new AWS.CloudFront()
                target.mockCloudFront.getDistributionConfigAll({})
                const result1 = await cf.getDistributionConfig().promise()
                const result2 = await cf.getDistributionConfig().promise()
                expect(result1).toEqual({})
                expect(result2).toEqual({})
            });

            it('should throw getDistributionConfigThrow', async () => {
                const cf = new AWS.CloudFront()
                target.mockCloudFront.getDistributionConfigThrow({})
                try {
                    await cf.getDistributionConfig().promise()
                    expect(null).toBe('This path is fault of the test') // should be
                } catch (e) {
                    console.log(e)
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
                target.mockLambda.invoke({})
                const result = await lambda.invoke().promise()
                expect(result).toEqual({})
            });

            it('should get invokeAll', async () => {
                const lambda = new AWS.Lambda()
                target.mockLambda.invokeAll({})
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
                target.mockS3.getObject({})
                const result = await s3.getObject().promise()
                expect(result).toEqual({})
            });
            it('should get getpresignedurl mock', async () => {
                const s3 = new AWS.S3()
                target.mockS3.getSignedUrl({})
                // @ts-ignore
                const result = s3.getSignedUrl()
                expect(result).toEqual({})
            });
            it('should get getpresignedurlPromise mock', async () => {
                const s3 = new AWS.S3()
                target.mockS3.getSignedUrlPromise({})
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
                target.mockEventBridge.createEventBus({})
                const result = await eb.createEventBus().promise()
                expect(result).toEqual({})                
            })
            it('should get putEvents mock', async () => {
                const eb = new AWS.EventBridge()
                target.mockEventBridge.putEvents({})
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
                target.mockStepFunctions.startExecution({})
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
                target.mockCognitoIdp.listUsers({})
                const result = await idp.listUsers().promise()
                expect(result).toEqual({})                
            })

            it('should get adminInitiateAuth mock', async () => {
                const idp = new AWS.CognitoIdentityServiceProvider()
                target.mockCognitoIdp.adminInitiateAuth({})
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
                target.mockKMS.encrypt({})
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
                target.mockSSM.getParameter({})
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
                target.mockECS.createCapacityProvider({})
                const result = await ecs.createCapacityProvider().promise()
                expect(result).toEqual({})                
            })
        })

        describe ('#TimestreamQuery', () => {
            beforeEach(() => {
                jest.restoreAllMocks()
            })
            it('should query mock', async () => {
                const tsq = new AWS.TimestreamQuery()
                target.mockTimestreamQuery.query({})
                const result = await tsq.query().promise()
                expect(result).toEqual({})                
            })
        })

        describe ('#TimestreamWrite', () => {
            beforeEach(() => {
                jest.restoreAllMocks()
            })
            it('should createDatabase mock', async () => {
                const tsw = new AWS.TimestreamWrite()
                target.mockTimestreamWrite.createDatabase({})
                const result = await tsw.createDatabase().promise()
                expect(result).toEqual({})                
            })
        })

        describe ('#SES', () => {
            beforeEach(() => {
                jest.restoreAllMocks()
            })
            it('should sendEmail mock', async () => {
                const ses = new AWS.SES()
                target.mockSES.sendEmail({})
                const result = await ses.sendEmail().promise()
                expect(result).toEqual({})                
            })
        })

        describe ('#SESv2', () => {
            beforeEach(() => {
                jest.restoreAllMocks()
            })
            it('should sendEmail mock', async () => {
                const sesv2 = new AWS.SESV2()
                target.mockSESV2.sendEmail({})
                const result = await sesv2.sendEmail().promise()
                expect(result).toEqual({})                
            })
        })
    })
})