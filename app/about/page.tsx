import type {Metadata} from 'next';
import {Arrow,Button,PageFrame,ProofStrip,SectionHead,Status} from '../components';
import {capabilities,experience} from '../data';

export const metadata:Metadata={title:'About',description:'About Akshay Venkata Narayana — Product and UX Designer working across complex digital systems, currently based in the UK.'};

export default function AboutPage(){return <PageFrame>
  <section className="about-hero shell">
    <div className="about-hero-copy reveal"><Status/><span className="eyebrow">About Akshay</span><h1 data-parallax-layer data-parallax-speed="10">I ask why before drawing what.</h1><p>I&apos;m a Product and UX Designer based in the UK. I work on complex digital products—from travel booking and enterprise tools to public-interest platforms and mobile apps.</p><div className="hero-actions"><Button href="/resume">View résumé <Arrow/></Button><Button href="/work" secondary>View work</Button></div></div>
    <div className="about-hero-image reveal" data-parallax><img src="/figma/about-photo-v2.png" alt="Akshay standing beside the coast"/></div>
  </section>

  <section className="shell about-proof"><ProofStrip/></section>

  <section className="section shell origin-section">
    <span className="eyebrow reveal">From computer science to UX</span>
    <div className="origin-layout"><h2 className="reveal">I learned how software works. Then I became curious about why it often doesn&apos;t work for people.</h2><div className="reveal"><p>My Bachelor&apos;s degree in Computer Science gave me a foundation in logic, systems and technology. But while building software, I kept noticing a different kind of problem: a product can function perfectly and still leave people confused.</p><p>That curiosity pulled me towards UX. I started studying behaviour, research, information architecture and interaction design—then moved fully into designing digital products. The technical background still helps me ask better questions, understand constraints and work closely with engineers.</p><strong>Today I sit comfortably between both worlds: human behaviour and technical systems.</strong></div></div>
  </section>

  <section className="section shell belief-section">
    <span className="eyebrow reveal">How I think</span>
    <div className="belief-layout"><h2 className="reveal">Make the complicated parts feel considered.</h2><div className="reveal"><p>I start with behaviour, business goals and the awkward moments in a journey. Then I find the structure, test the important decisions and shape an interface that feels natural.</p><ul><li>Understand before simplifying</li><li>Make decisions easy to explain</li><li>Design the edge cases, not only the demo</li><li>Stay close to the people building it</li></ul></div></div>
  </section>

  <section className="section shell" id="experience">
    <SectionHead eyebrow="Experience" title="Where I&apos;ve worked and what I owned."/>
    <div className="timeline">
      {experience.map((item,index)=><article className="timeline-item reveal" key={item.company}>
        <span>{String(index+1).padStart(2,'0')}</span>
        <div className="timeline-title"><h3>{item.company}</h3><strong>{item.role}</strong><small>{item.place}</small></div>
        <div className="timeline-copy"><time>{item.date}</time><p>{item.summary}</p><p><b>My contribution:</b> {item.contribution}</p></div>
      </article>)}
    </div>
  </section>

  <section className="section shell capability-section">
    <SectionHead eyebrow="Capabilities" title="From early questions to shipped details."/>
    <div className="capability-list reveal">{capabilities.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div>
  </section>

  <section className="section shell reflection-section reveal">
    <span className="eyebrow">A lesson I keep</span>
    <div><h2>Polish cannot rescue a fuzzy problem.</h2><p>Early in my career, I reached for the final interface too quickly. Now I spend more time understanding the situation, making assumptions visible and connecting each design decision to a real purpose.</p></div>
  </section>

  <section className="section shell outside-section reveal"><span className="eyebrow">Away from the screen</span><div><h2>Travel keeps me curious. Fitness keeps me disciplined.</h2><p>I enjoy travel, photography, gaming and UX conferences. They give me new references, keep me observant and remind me that people experience the world in very different ways.</p><div><span>Travel</span><span>Fitness</span><span>Photography</span><span>Gaming</span><span>UX community</span></div></div></section>
</PageFrame>}
