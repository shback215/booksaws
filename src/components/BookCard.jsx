import "../css/BookCard.css"

function BookCard({book}) {
    return (
      <article key={book.id} className="book-card">
              
        <div className="book-cover">
            <img 
                src={book.coverImage} 
                alt={book.altText}
                className="cover-image"
            />
            </div>
            <div className="book-info">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">by {book.author}</p>
            <p className="book-description">{book.description}</p>
            {book.chapters && (
                <div className="chapters" style={{ marginLeft: '20px', marginTop: '10px' }}>
                    <p>Chapters:</p>
                    {book.chapters.map((chapter, index) => (
                    <div key={index} style={{ marginBottom: '5px' }}>
                    <a key={index} href={chapter.link} target="_blank" rel="noopener noreferrer" className="chapter-link">
                        {chapter.title}
                    </a>
                    </div>
                    ))}
                </div>
            )}
            <a 
                href={book.amazonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="amazon-button"
            >
                Buy on Amazon
            </a>
        </div>
    </article>
    )
}

export default BookCard