import { Link } from 'react-router-dom';
// import '../css/About.css';

function About() {
  return (
    <div className="aboutcenter">
      <h2>About Books by Stanley B. Howard</h2>
      <div>
        <div className="justify">This website provides descriptions of books by Stanley B. Howard that are available
          on Amazon Books. These books are:</div>
          <li><i>When the Dogwood Blooms: Seasons in a Boys Life</i>: A description of this novel is at <Link to="/about-dogwood">About Dogwood</Link></li>
          <li><i>Icarus: An American Odyssey</i>: A description of this novel is at <Link to="/about-icarus">About Icarus</Link></li>
          <li><i>Me: Jack in the Box with OCD</i>: A description of this novel is at <Link to="/about-jack">About Jack</Link></li>
      </div>
      <nav>
        <Link className="aboutcenter" to="/">Back to Home</Link>
      </nav>
    </div>
  );
}

export default About;