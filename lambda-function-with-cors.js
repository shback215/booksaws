exports.handler = async (event) => {
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

    // Handle GET request
    if (event.httpMethod === 'GET') {
        const books = [
            {
                id: 1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                description: "A classic American novel set in the Jazz Age.",
                amazonLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
                chapters: [
                    { title: "Chapter 1", link: "https://example.com/chapter1" },
                    { title: "Chapter 2", link: "https://example.com/chapter2" },
                    { title: "Chapter 3", link: "https://example.com/chapter3" }
                ]
            },
            {
                id: 2,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                description: "A gripping tale of racial injustice and childhood innocence.",
                amazonLink: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120081",
                chapters: [
                    { title: "Chapter 1", link: "https://example.com/chapter1" },
                    { title: "Chapter 2", link: "https://example.com/chapter2" },
                    { title: "Chapter 3", link: "https://example.com/chapter3" }
                ]
            },
            {
                id: 3,
                title: "1984",
                author: "George Orwell",
                description: "A dystopian social science fiction novel.",
                amazonLink: "https://www.amazon.com/1984-George-Orwell/dp/0452284236",
                chapters: [
                    { title: "Chapter 1", link: "https://example.com/chapter1" },
                    { title: "Chapter 2", link: "https://example.com/chapter2" },
                    { title: "Chapter 3", link: "https://example.com/chapter3" }
                ]
            }
        ];

        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({
                books: books
            })
        };
    }

    // Handle other methods
    return {
        statusCode: 405,
        headers: headers,
        body: JSON.stringify({ message: 'Method not allowed' })
    };
};
