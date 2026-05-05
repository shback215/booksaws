import React, { useState, useEffect } from 'react';

const BookApi = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Mock data for now
      const books = [
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
      ];
      
      setBooks(books);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px' }}>
      <h2>Books from AWS Lambda</h2>
      
      <button onClick={fetchBooks} disabled={loading} style={{ marginBottom: '20px' }}>
        {loading ? 'Loading Books...' : 'Refresh Books'}
      </button>
      
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {books.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {books.map((book) => (
            <div key={book.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '15px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{book.title}</h3>
              <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#666' }}>
                by {book.author}
              </p>
              <p style={{ margin: '10px 0', fontSize: '14px', lineHeight: '1.4' }}>
                {book.description}
              </p>
              <a 
                href={book.amazonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#ff9900',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              >
                View on Amazon
              </a>
              
              {book.chapters && book.chapters.length > 0 && (
                <div style={{ marginTop: '15px' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Chapters:</h4>
                  <ul style={{ margin: '0', paddingLeft: '20px' }}>
                    {book.chapters.slice(0, 3).map((chapter, index) => (
                      <li key={index} style={{ margin: '5px 0', fontSize: '12px' }}>
                        <a 
                          href={chapter.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#0066cc', textDecoration: 'none' }}
                        >
                          {chapter.title}
                        </a>
                      </li>
                    ))}
                    {book.chapters.length > 3 && (
                      <li style={{ margin: '5px 0', fontSize: '12px', fontStyle: 'italic' }}>
                        ...and {book.chapters.length - 3} more chapters
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p>No books available. Click "Refresh Books" to load data from AWS Lambda.</p>
          </div>
        )
      )}
    </div>
  );
};

export default BookApi;
