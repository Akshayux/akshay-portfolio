import type {Metadata} from 'next';
import {Arrow,Button,PageFrame,ProofStrip,SectionHead,Status} from '../components';
import {capabilities,experience,profile} from '../data';

export const metadata:Metadata={title:'About',description:'About Akshay Venkata Narayana — product designer working across complex digital systems, currently based in the UK.'};

export default function AboutPage(){return <PageFrame>
  <section className="about-hero shell">
    <div className="about-hero-copy reveal"><Status/><span className="eyebrow">About</span><h1>Curious about people. Precise about systems.</h1><p>I&apos;m a product designer and UX strategist pursuing a Master&apos;s in Design in the UK. I design human-centred products across travel, AI tools, SaaS platforms, dashboards and mobile applications.</p><div className="hero-actions"><Button href={`mailto:${profile.email}?subject=Resume%20request`}>Request résumé <Arrow/></Button><Button href="/work" secondary>View work</Button></div></div>
    <div className="about-hero-image reveal" data-parallax><img src="/figma/about-photo-v2.png" alt="Akshay standing beside the coast"/></div>
  </section>

  <section className="shell about-proof"><ProofStrip/></section>

  <section className="section shell belief-section">
    <span className="eyebrow reveal">Design belief</span>
    <div className="belief-layout"><h2 className="reveal">Good design removes the thinking users should never have to do.</h2><div className="reveal"><p>My process starts before the screen. I look at behaviour, business goals, task flows, constraints and moments of confusion—then turn that understanding into clear architecture, focused interfaces and scalable systems.</p><ul><li>Reduce friction before adding features</li><li>Make complex systems feel understandable</li><li>Design for clarity, confidence and action</li><li>Balance user value with business reality</li></ul></div></div>
  </section>

  <section className="section shell" id="experience">
    <SectionHead eyebrow="Experience" title="The work, in chronological order." copy="What I worked on, the context and the contribution I was responsible for."/>
    <div className="timeline">
      {experience.map((item,index)=><article className="timeline-item reveal" key={item.company}>
        <span>{String(index+1).padStart(2,'0')}</span>
        <div className="timeline-title"><h3>{item.company}</h3><strong>{item.role}</strong><small>{item.place}</small></div>
        <div className="timeline-copy"><time>{item.date}</time><p>{item.summary}</p><p><b>My contribution:</b> {item.contribution}</p></div>
      </article>)}
    </div>
  </section>

  <section className="section shell capability-section">
    <SectionHead eyebrow="Capabilities" title="A generalist across product definition and delivery."/>
    <div className="capability-list reveal">{capabilities.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div>
  </section>

  <section className="section shell reflection-section reveal">
    <span className="eyebrow">What experience changed</span>
    <div><h2>I used to reach for polish too early.</h2><p>That taught me to slow down at the start: understand the user problem, make assumptions visible and connect every design decision to a purpose. The result is less theatre and more clarity—for users and for the team building the product.</p></div>
  </section>
</PageFrame>}
