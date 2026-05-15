
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AboutDogwood from './pages/AboutDogwood'
import AboutIcarus from './pages/AboutIcarus'
import AboutJack from './pages/AboutJack'

import './CSS/App.css'

function App() {
  return (
    <div className="app">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about-dogwood">About Dogwood</Link>
        <Link to="/about-icarus">About Icarus</Link>
        <Link to="/about-jack">About Jack</Link>
      </nav>
      
     <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="/about-dogwood" element={<AboutDogwood />} />        
        <Route path="/about-icarus" element={<AboutIcarus />} />
        <Route path="/about-jack" element={<AboutJack />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App