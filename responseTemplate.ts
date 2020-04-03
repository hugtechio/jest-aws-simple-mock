export default {
    lambda: function (payload: any, statusCode?: number): any {
        return {
            promise: () => {
                return {
                    StatusCode: (statusCode) ? statusCode : 200,
                    Payload: JSON.stringify(payload)
                }
            }
        }
    },
    lambdaAsync: function (statusCode?: number): any {
        return {
            promise: () => {
                return {
                    Status: (statusCode) ? statusCode : 200
                }
            }
        }
    },
}