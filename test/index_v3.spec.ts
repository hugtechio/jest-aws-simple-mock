import { DynamoDB, DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb'
import { S3, S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { Lambda, LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'
import { CloudFront, CloudFrontClient, GetDistributionCommand } from '@aws-sdk/client-cloudfront'
import { SESv2, SESv2Client, GetAccountCommand } from '@aws-sdk/client-sesv2'

import { V3 } from '../src/index'
import { MockChain } from '../src/chain'

const lambdaParam = {
    FunctionName: 'dummy',
    Payload: undefined
}

describe('#index_v3', () => {
    describe('#methodChaining', () => {
        beforeEach(() => {
            jest.restoreAllMocks()
        })
        it('should be combine any mocking to the chain', async () => {

            // construct mock chain
            const chain = new MockChain()
            chain
                .addWithName('dynamoSend', V3.mockDynamo.send, 1)
                .addWithName('lambdaSend', V3.mockLambda.send, {})
                .addWithName('dynamoSend', V3.mockDynamo.send, 2)
            const spies = chain.getNamedSpies()

            // call methods
            const dynamoClient = new DynamoDBClient({region: 'us-east-1'})
            const dynamoCommandParam1 = {
                TableName: 'dummy',
                Key: {
                    ID: { S: 'aaaa'}
                }
            }
            const dynamoCommand1 = new GetItemCommand(dynamoCommandParam1)
            const result1 = await dynamoClient.send(dynamoCommand1)

            const lambdaCommand = new InvokeCommand(lambdaParam)
            const lambdaClient = new LambdaClient({region: 'us-east-1'})
            const result2 = await lambdaClient.send(lambdaCommand)

            const dynamoCommandParam2 = {
                TableName: 'dummy',
                Key: {
                    ID: { S: 'bbbb'}
                }
            }
            const dynamoCommand2 = new GetItemCommand(dynamoCommandParam2)
            const result3 = await dynamoClient.send(dynamoCommand2)

            // check results
            expect(result1).toBe(1)
            expect(result2).toEqual({})
            expect(result3).toEqual(2)
            expect(spies.dynamoSend).toHaveBeenNthCalledWith(1, expect.objectContaining({
                input: dynamoCommandParam1
            }))
            expect(spies.lambdaSend).toHaveBeenNthCalledWith(1, expect.objectContaining({
                input: lambdaParam
            }))
            expect(spies.dynamoSend).toHaveBeenNthCalledWith(2, expect.objectContaining({
                input: dynamoCommandParam2
            }))
        })
    })

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
            V3.mockDynamo.getItemAll({
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
            V3.mockDynamo.getItemThrow({
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

    describe ('#sesv2', () => {
        beforeEach(() => {
            jest.restoreAllMocks()
        })

        it ('should be return mock result (v3 style send)', async () => {
            V3.mockSESv2.send({})
            const command = new GetAccountCommand({})
            const client = new SESv2Client({region: 'us-east-1'})
            // @ts-ignore
            const result = await client.send(command)
            expect(result).toEqual({})
        })

        it('should get getAccount', async () => {
            const sesV2 = new SESv2({region: 'us-east-1'})
            V3.mockSESv2.getAccount({})
            const result = await sesV2.getAccount({})
            expect(result).toEqual({})
        });

        it('should get getAccount for all calls', async () => {
            const sesV2 = new SESv2({region: 'us-east-1'})
            V3.mockSESv2.getAccountAll({})
            const result1 = await sesV2.getAccount({})
            const result2 = await sesV2.getAccount({})
            expect(result1).toEqual({})
            expect(result2).toEqual({})
        });

        it('should throw getAccount with throw', async () => {
            const sesV2 = new SESv2({region: 'us-east-1'})
            V3.mockSESv2.getAccountThrow({})
            try {
                await sesV2.getAccount({})
                expect(null).toBe('This path is fault of the test') // should be
            } catch (e) {
                expect(e).toEqual({})
            }
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
            V3.mockCloudFront.getDistributionThrow({})
            try {
                await cf.getDistribution(getDistributionParam)
                expect(null).toBe('This path is fault of the test') // should be
            } catch (e) {
                expect(e).toEqual({})
            }
        });
    })
})