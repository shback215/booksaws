import '../css/Home.css'
import '../css/App.css'
import Trees from '../assets/Trees.jpg'
import Icarus from '../assets/Icarus.jpg'
import Jack from '../assets/Jack.jpg'
import BookCard from '../components/BookCard'

const books = [
  {
    id: 1,
    title: "When the Dogwood Blooms: Seasons in a Boy's Life",
    author: "Stanley B. Howard",
    description: "Though not a Homeric odyssey, this a fictionalized life journey, told as only the traveller could tell it.",
    amazonLink: "https://www.amazon.com/When-Dogwood-Blooms-Seasons-Boys-ebook/dp/B0BSNQ5T1L",
    coverImage: Trees,    
    altText: "When the Dogwood Blooms: Seasons in a Boy's Life",
    chapters: [
      { title: "Three Stories of The Plague", link: "https://www.amazon.com/Three-Stories-Plague-Chapter-Chapters-ebook/dp/B0BTY71HZ2" },
      { title: "A Year in the Valley", link: "https://www.amazon.com/Year-Valley-Chapter-Dogwood-Chapters/dp/B0BW2RY35C" },
      { title: "The Big Time Newspaper Man", link: "https://www.amazon.com/Big-Time-Newspaper-Man-Chapter-Chapters-ebook/dp/B0BTY9W2SL" },      
      { title: "Shanties Never Sung", link: "https://www.amazon.com/Shanties-Never-Sung-Chapter-Chapters-ebook/dp/B0BTYGB85B" },
      { title: "Five Stories of a Summer Night", link: "https://www.amazon.com/Five-Stories-Summer-Night-Chapters-ebook/dp/B0BTYJ1YFH" },
      { title: "AKA Jake Spelled Jaak", link: "https://www.amazon.ca/AKA-Jake-Spelled-Jaak-Chapter/dp/B0BW2VKLD4" },
      { title: "Homecoming for Tex", link: "https://www.amazon.com/Homecoming-Tex-Chapter-Dogwood-Chapters-ebook/dp/B0BV21RQRM" }
    ]
  },

  {
    id: 2,
    title: "Icarus: An American Odyssey", 
    author: "Stanley B. Howard",
    description: "A history-based American Odyssey told by the raven friend of Edgar Allan Poe and Ulysses S. Grant.",
    amazonLink: "https://www.amazon.com/Icarus-American-Stanley-B-Howard-ebook/dp/B0BW4LQNN1",
    coverImage: Icarus,
    altText: "Icarus: An American Odyssey"
  },
  {
    id: 3,
    title: "Me: Jack in the Box with OCD", 
    author: "Stanley B. Howard",
    description: "A story of pure-O OCD and how it affects daily life.",
    amazonLink: "https://www.amazon.com/Me-Jack-Stanley-B-Howard-ebook/dp/B0G2KDVWZ7",
    coverImage: Jack,
    altText: "Me: Jack in the Box with OCD"
  }
]

function Home() {

    return (
       <div className="home">
            <header className="header">
                <h1>Books by Stanley B. Howard</h1>
                <p>Discover my collection of books on Amazon</p>
            </header>

            <main className="main">
                <section className="books-grid">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
                
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2026 Stanley B. Howard. All rights reserved.</p>
            </footer>
        </div>  )
}

export default Home



    