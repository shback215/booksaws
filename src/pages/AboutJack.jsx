import { Link, PrefetchPageLinks } from 'react-router-dom';
import '../css/About.css';

function AboutJack() {
  return (
   <div className="about">
      <h2>About <i>Me: Jack in the Box with OCD</i></h2>
      <div>
        <p className="justify"><i>Me: Jack in the Box with OCD</i> is a fictionalized narration of a man with Obsessive 
        Compulsive Disorder (OCD). This affliction began in his childhood when the protagonist Ray was nine on nights 
        his parents would leave his older brother in charge of Ray and his two younger brothers, and Ray worried their 
        parents might not be coming home that night. His older brother did the best he could to deal with Ray's worries about
        "What if ...?" Three years later, in a time of great stress for Ray and his family, Ray's worries became even more 
        intense, such as times he was angry at his parents for not understanding his condition as their conflict escalated. Still, Ray did the best he could to
        deal with such worries for more than 30 years with his undiagnosed OCD worries; but these became so overwhelming one night in mid-April when he was so worried about his taxes, after 
        his first time alone again before April 16, after he had separated from his exwife and their six-year-old son in San Diego, that 
        he could not sleep. These worries became so intense the next Saturday morning on the way from his new job in Northern 
        Virgina to the beach for his grandmother's funeral that he smoked a pack of cigarettes, because Ray never liked being 
        left alone, even by those who had passed on. So began his 13 days in a mental ward at a hospital at the beach, 
        where he had family ties. That time was when learned about his affliction when a dark-haired female therapist, whom Ray 
        found very attractive, helped him through his ordeal because she understood his condition, though Ray 
        wondered how she knew so much about him in such a short time. She explained his suppressed thoughts made him much like 
        a Jack in the box, with thoughts held in but always ready to pop out unexpectedly. He later learned that that this analogy
        was often used by mental health counselors to describe how those who suffered with OCD always fought a constant battle
        with unwanted thoughts. Nonetheless, in the many years that followed, Ray learned to manage his OCD and live a 
        fulfilling life, even though this affliction never fully went away, for like a bull shark in shallow water,
        this Jack was always there waiting for a weak or stressed moment to pop out again.
        </p>
        <p className="justify">
        In Ray's narration about his lifelong struggle with OCD, he describes how the condition affected his childhood, 
        teenage years, adulthood, and all the years that followed. He talks about the constant worries and intrusive thoughts that plagued him 
        for years, and how he struggled to understand what was happening to him. He also discusses the moment when he 
        finally sought help and was diagnosed with OCD, and how that diagnosis changed his life. Interspersed throughout 
        his story are reflections on the impact of OCD on his relationships, work, and daily life, as well as his journey 
        toward acceptance and management of the condition. In addition, Ray, who always wanted to be a writer, despite how difficult
        recognition and success can be in this vocation or avocation, found a way to share his story and help others understand
        OCD. With this confession of sorts Ray wrote several related short stories that he shared with his therapist and 
        shares now with other readers, despite how few there may be.
        </p>
      </div>
      <br></br>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>    
  );
}

export default AboutJack;