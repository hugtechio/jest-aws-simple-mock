import { DynamoDB, DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb'
import { S3, S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { Lambda, LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'
import { CloudFront, CloudFrontClient, GetDistributionCommand } from '@aws-sdk/client-cloudfront'

import { V3 } from '../index'

describe('#index_v3', () => {
    describe('#dynamodb', () => {
        beforeEach(() => {
            jest.restoreAllMocks()
        })
        it ('should be return mock result (v3 style send)', async () => {
            V3.mockDynamo.send({})
            const command = new GetItemCommand({
                TableName: 'dummy',
                Key: {
                    ID: { S: 'aaaa'}
                }
            })
            const client = new DynamoDBClient({region: 'us-east-1'})
            // @ts-ignore
            const result = await client.send(command)
            expect(result).toEqual({})
        })

        it ('should be return dynamoDB mock', async () => {
            V3.mockDynamo.getItem({})
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result = await dynamodb.getItem({})
            expect(result).toEqual({})
        })

        it ('should be return dynamoDB mock(chaining)', async () => {
            let m = V3.mockDynamo.getItem({
                times:1
            })
            m = V3.mockDynamo.getItem({
                times:2
            }, m)
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result1 = await dynamodb.getItem({})
            expect(result1).toEqual({times: 1})
            // @ts-ignore
            const result2 = await dynamodb.getItem({})
            expect(result2).toEqual({times: 2})
        })

        it ('should be return dynamoDB mock(all)', async () => {
            let m = V3.mockDynamo.getItemAll({
                times: 'all'
            })
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            // @ts-ignore
            const result1 = await dynamodb.getItem({})
            expect(result1).toEqual({times: 'all'})
            // @ts-ignore
            const result2 = await dynamodb.getItem({})
            expect(result2).toEqual({times: 'all'})
        })

        it ('should be return dynamoDB mock(throw)', async () => {
            let m = V3.mockDynamo.getItemThrow({
                error: 'error'
            })
            const dynamodb = new DynamoDB({region: 'us-east-1'})
            try {
                // @ts-ignore
                await dynamodb.getItem({})
                expect('Test fail').toBe(null)
            } catch (e) {
                expect(e).toEqual({error: 'error'})
            }
        })
    })

    describe ('#s3', () => {
        beforeEach(() => {
            jest.restoreAllMocks()
        })
        it ('should be return mock result (v3 style send)', async () => {
            V3.mockS3.send({})
            const command = new GetObjectCommand({
                Bucket: 'dummy',
                Key: 'key'
            })
            const client = new S3Client({region: 'us-east-1'})
            // @ts-ignore
            const result = await client.send(command)
            expect(result).toEqual({})
        })

        it('should get getObject mock', async () => {
            const s3 = new S3({region: 'us-east-1'})
            V3.mockS3.getObject({})
            const result = await s3.getObject({
                Bucket: 'dummy',
                Key: 'key'
            })
            expect(result).toEqual({})
        });
    })

    describe ('#lambda', () => {
        const lambdaParam = {
            FunctionName: 'dummy',
            Payload: undefined
        }

        beforeEach(() => {
            jest.restoreAllMocks()
        })

        it ('should be return mock result (v3 style send)', async () => {
            V3.mockLambda.send({})
            const command = new InvokeCommand(lambdaParam)
            const client = new LambdaClient({region: 'us-east-1'})
            // @ts-ignore
            const result = await client.send(command)
            expect(result).toEqual({})
        })

        it('should get invoke', async () => {
            const lambda = new Lambda({region: 'us-east-1'})
            V3.mockLambda.invoke({})
            const result = await lambda.invoke(lambdaParam)
            expect(result).toEqual({})
        });

        it('should get invokeAll', async () => {
            const lambda = new Lambda({region: 'us-east-1'})
            V3.mockLambda.invokeAll({})
            const result1 = await lambda.invoke(lambdaParam)
            const result2 = await lambda.invoke(lambdaParam)
            expect(result1).toEqual({})
            expect(result2).toEqual({})
        });
    })

    describe ('#cloudfront', () => {
        const getDistributionParam = {
            Id: 'dummy'
        }
        beforeEach(() => {
            jest.restoreAllMocks()
        })

        it ('should be return mock result (v3 style send)', async () => {
            V3.mockCloudFront.send({})
            const command = new GetDistributionCommand(getDistributionParam)
            const client = new CloudFrontClient({region: 'us-east-1'})
            // @ts-ignore
            const result = await client.send(command)
            expect(result).toEqual({})
        })

        it('should get getDistribution', async () => {
            const cf = new CloudFront({region: 'us-east-1'})
            V3.mockCloudFront.getDistribution({})
            const result = await cf.getDistribution(getDistributionParam)
            expect(result).toEqual({})
        });

        it('should get getDistributionConfigAll', async () => {
            const cf = new CloudFront({region: 'us-east-1'})
            V3.mockCloudFront.getDistributionAll({})
            const result1 = await cf.getDistribution(getDistributionParam)
            const result2 = await cf.getDistribution(getDistributionParam)
            expect(result1).toEqual({})
            expect(result2).toEqual({})
        });

        it('should throw getDistributionThrow', async () => {
            const cf = new CloudFront({region: 'us-east-1'})
            let mock = V3.mockCloudFront.getDistributionThrow({})
            try {
                const result1 = await cf.getDistribution(getDistributionParam)
                expect(null).toBe('This path is fault of the test') // should be
            } catch (e) {
                expect(e).toEqual({})
            }
        });
    })
})