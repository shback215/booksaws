exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Content-Type': 'application/json'
    };

    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A classic American novel set in the Jazz Age.",
            amazonLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "A gripping tale of racial injustice and childhood innocence.",
            amazonLink: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120081"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            description: "A dystopian social science fiction novel.",
            amazonLink: "https://www.amazon.com/1984-George-Orwell/dp/0452284236"
        }
    ];

    return {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify({
            books: books
        })
    };
};
