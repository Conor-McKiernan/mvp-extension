const { MONGODB_API_KEY } = require('./key')

export async function fetchMessagesData(): Promise<any> {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': `${MONGODB_API_KEY}`
        },
        body: JSON.stringify({
            "collection":"messages",
            "database":"zelta",
            "dataSource":"Cluster0",
            // "filter": { "author": "Conor" }
        })
    };
    try {
        const fetchResponse = await fetch('https://data.mongodb-api.com/app/data-bdlmk/endpoint/data/v1/action/find', settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        return e;
    }  
}