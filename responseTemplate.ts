export default {
    lambda: function (payload: any, statusCode?: number): any {
        return {
            promise: () => {
                return {
                    statusCode: (statusCode) ? statusCode : 200,
                    Payload: JSON.stringify(payload)
                }
            }
        }
    }
}