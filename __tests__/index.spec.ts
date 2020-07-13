import * as target from '../index'
import * as AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'
import { DynamoDB } from 'aws-sdk'

describe('#index', () => {
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
        describe('#dynamodb data mapper', () => {
            it('#query', async () => {
                const result = await target.mockDynamo.query([{}])
                // @ts-ignore
                expect(result).toHaveProperty('mock')
            });
            
        });
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
    })
})