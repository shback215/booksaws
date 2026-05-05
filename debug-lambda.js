exports.handler = async (event) => {
    // Log the entire event to see what we're receiving
    console.log('Full event:', JSON.stringify(event, null, 2));
    
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle OPTIONS preflight request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: headers,
            body: ''
        };
    }

    // Return debug info for any request
    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            debug: true,
            httpMethod: event.httpMethod,
            path: event.path,
            pathParameters: event.pathParameters,
            queryStringParameters: event.queryStringParameters,
            headers: event.headers,
            requestContext: event.requestContext,
            fullEvent: event
        })
    };
};
