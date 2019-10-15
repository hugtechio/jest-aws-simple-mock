"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
// private function
const mockAsyncIterator = (result) => {
    const ret = {};
    ret[Symbol.asyncIterator] = async function* () {
        if (Array.isArray(result)) {
            for (const item of result) {
                yield item;
            }
        }
        else {
            yield result;
        }
    };
    ret.count = (result) ? Object.keys(result).length : 0;
    return ret;
};
// public (exported) function
exports.mockStripe = {
    once: function (payload) {
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke').mockImplementation(() => {
            return {
                promise: () => {
                    return {
                        StatusCode: 200,
                        Payload: (payload) ? JSON.stringify(payload) : null
                    };
                }
            };
        });
    },
    twice: function (payload1, payload2) {
        // @ts-ignore
        const promiseObject = (payload) => {
            return {
                promise: () => {
                    return {
                        StatusCode: 200,
                        Payload: JSON.stringify(payload)
                    };
                }
            };
        };
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke')
            .mockImplementationOnce(() => promiseObject(payload1))
            .mockImplementationOnce(() => promiseObject(payload2));
    },
    three: function (payload1, payload2, payload3) {
        // @ts-ignore
        const promiseObject = (payload) => {
            return {
                promise: () => {
                    return {
                        StatusCode: 200,
                        Payload: JSON.stringify(payload)
                    };
                }
            };
        };
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke')
            .mockImplementationOnce(() => promiseObject(payload1))
            .mockImplementationOnce(() => promiseObject(payload2))
            .mockImplementationOnce(() => promiseObject(payload3));
    }
};
exports.mockDynamo = {
    query: function (queryResult) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { return mockAsyncIterator(queryResult); });
    },
    queryTwice: function (result1, result2) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { return mockAsyncIterator(result1); })
            .mockImplementationOnce(() => { return mockAsyncIterator(result2); });
    },
    get: function (result) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'get')
            .mockImplementationOnce(async () => result);
    },
    getTwice: function (result1, result2) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'get')
            .mockImplementationOnce(async () => result1)
            .mockImplementationOnce(async () => result2);
    },
    put: function (result) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'put')
            .mockImplementationOnce(async () => result);
    },
    update: function (result) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'update')
            .mockImplementationOnce(async () => result);
    },
    delete: function (result) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'delete')
            .mockImplementationOnce(async () => result);
    },
    batchDelete: function (result) {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'batchDelete')
            .mockImplementationOnce(() => { return mockAsyncIterator(result); });
    },
    throw: function () {
        return jest.spyOn(dynamodb_data_mapper_1.DataMapper.prototype, 'query')
            .mockImplementationOnce(() => { throw new Error('mock exception'); });
    }
};
exports.mockLambda = {
    invoke: function (payload = {}) {
        // @ts-ignore
        return jest.spyOn(AWS.Lambda.services['2015-03-31'].prototype, 'invoke').mockImplementation(() => {
            return {
                promise: () => {
                    return {
                        statusCode: 200,
                        Payload: JSON.stringify(payload)
                    };
                }
            };
        });
    }
};
exports.mockS3 = {
    getSignedUrl: function (url) {
        return jest.spyOn(AWS.S3.prototype, 'getSignedUrl').mockImplementation(() => {
            return url;
        });
    }
};
