import { Link, PrefetchPageLinks } from 'react-router-dom';
import '../css/About.css';

function AboutIcarus() {
  return (
    <div className="about">
      <h2>About <i>Icarus: An American Odyssey</i></h2>
      <div>
        <p className="justify"><i>Icarus: An American Odyssey</i> is a narrative novel as told by a 
        raven named Icarus to a Baltimore native, a librarian named Robin. This narration is told in two parts.</p>
        <p className="justify">The first section is primarily about Icarus's friendship with Edgar Allan Poe.
        This friendship begins on a cold winter night when Robins meets Icarus on the windowsill of his bedroom in 
        the historic Baltimore house in which Robin had spent most of his life, up until he was compelled to move and decided to write 
        his story and that of his friend Icarus. In his narration, Robin briefly describes his infliction, due to an
        accident that occurred when he was a boy, which scarred the next four decades of his life. In a sense, this narration 
        is a way for Robin to come to terms with his past and find peace. It is also a way for Icarus to share his wisdom, 
        based on more than a century of life experience. In this narration of Icarus, Robin learns that the raven was in 
        fact a friend of Edgar Allan Poe. This friendship with Poe began when Poe was the foster child of John and Frances
        Allan in Richmond, Virginia, and lasted throughout Poe's moves, primarily for employment and survival, through 
        American cities in the eastern states up until his demise. In addition to already known details about Poe's life 
        this narration also includes unpublished stories that Poes told Icarus over the many years of their friendship, 
        in Richmond, New York, Philadelphia, and Baltimore.</p>
        <p className="justify">
        The second part of the novel is about Icarus's relationship with Huckleberry Finn and Ulysses S. Grant, during the 
        American Civil War. This narration includes Huckleberry Finn's and Jim's experiences after Huckleberry became a 
        riverboat engineer for the Union and Jim served as his assistant. Huckleberry's narration also includes experiences
        with the general, starting with Grant's first battle on the Mississippi at Belmont, a small city on the river south 
        of Cairo, Illinois, where Grant was stationed prior to his rapid promotions. This narration extends through Vicksburg
        and other battles on the Western front, until Grant was promoted to command the entire Army of the Tennessee and all 
        Union forces in the East, where the supposed butcher and future President ended the bloody war. This narration also 
        tells the story of Huckleberry and Jim during these trying times serving with Grant on the river and in Virginia,
        and after the war in the west again.
        </p>
      </div>
      <br></br>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
}

export default AboutIcarus;