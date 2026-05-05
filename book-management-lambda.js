exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Content-Type': 'application/json'
    };

    // Since event is empty, handle both OPTIONS and GET the same way
    // Return appropriate response based on what the browser needs
    if (event.httpMethod === 'OPTIONS' || event.requestContext?.http?.method === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: headers,
            body: ''
        };
    }

    // Return books for any other request
    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            books: [
                {
                    id: 1,
                    title: "When the Dogwood Blooms: Seasons in a Boy's Life",
                    author: "Stanley B. Howard",
                    description: "Though not a Homeric odyssey, this a fictionalized life journey, told as only the traveller could tell it.",
                    amazonLink: "https://www.amazon.com/When-Dogwood-Blooms-Seasons-Boys-ebook/dp/B0BSNQ5T1L"
                },
                {
                    id: 2,
                    title: "Icarus: An American Odyssey", 
                    author: "Stanley B. Howard",
                    description: "A history-based American Odyssey told by the raven friend of Edgar Allan Poe and Ulysses S. Grant.",
                    amazonLink: "https://www.amazon.com/Icarus-American-Stanley-B-Howard-ebook/dp/B0BW4LQNN1"
                },
                {
                    id: 3,
                    title: "Me: Jack in the Box with OCD", 
                    author: "Stanley B. Howard",
                    description: "A story of pure-O OCD and how it affects daily life.",
                    amazonLink: "https://www.amazon.com/Me-Jack-Stanley-B-Howard-ebook/dp/B0G2KDVWZ7"
                }
            ]
        })
    };
};
