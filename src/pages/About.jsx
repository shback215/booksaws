import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About This App</h1>
      <p>This is a books website with React.</p>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
}

export default About;