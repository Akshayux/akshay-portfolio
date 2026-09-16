import type {Metadata} from 'next';
import {Button,PageFrame,ProofStrip,SectionHead,TestimonialsSection} from '../components';
import {capabilities,experience} from '../data';

export const metadata:Metadata={title:'About',description:'About Akshay Venkata Narayana, Product and UX Designer working across complex digital systems, currently based in the UK.'};

export default function AboutPage(){return <PageFrame>
  <section className="about-canvas shell">
    <div className="about-canvas-top reveal"><span className="eyebrow">About Akshay Venkata Narayana</span><h1 data-parallax-layer data-parallax-speed="10">Designer first,<br/><em>product thinker always.</em></h1><p>I design digital products by following the people, rules and decisions behind the interface.</p><div className="hero-actions"><Button href="/work" cursorLabel="View">View work</Button><Button href="/contact" secondary cursorLabel="Open">Get in touch</Button></div></div>
    <div className="about-canvas-board reveal">
      <div className="about-canvas-callout about-callout-location"><span>Based in</span><strong>London, UK</strong><small>Currently designing across the UK and beyond.</small></div>
      <div className="about-canvas-callout about-callout-focus"><span>Designs for</span><strong>B2B SaaS · AI · Travel</strong><small>Also insurance, banking and public-interest services.</small></div>
      <div className="about-canvas-portrait" data-parallax><img src="/optimized/about-london.jpg" alt="Akshay in London with Tower Bridge in the background"/><span>Outside the screen / London</span></div>
      <div className="about-canvas-callout about-callout-practice"><span>How I work</span><strong>I research before I redesign.</strong><small>When a stakeholder asks for a visual fix, I trace the friction and explain what actually needs to change.</small></div>
      <div className="about-canvas-callout about-callout-tools"><span>Works with</span><strong>Figma · FigJam · Prototypes</strong><small>Close to engineering, from first question to shipped detail.</small></div>
    </div>
  </section>

  <section className="shell about-proof"><ProofStrip/></section>

  <section className="section shell about-dual-section">
    <span className="eyebrow reveal">Two sides of me</span>
    <div className="about-dual-grid">
      <article className="about-dual-card about-designer reveal"><span>01 / As a UX designer</span><h2>Human behaviour, with a technical backbone.</h2><p>My Bachelor&apos;s in Computer Science taught me how software is structured. UX taught me to ask whether that structure makes sense to the person using it.</p><p>Today I work across research, product thinking, information architecture, interaction design and detailed UI, staying close to engineers and making edge cases part of the core journey.</p><strong>I sit comfortably between people, business needs and technical systems.</strong></article>
      <article className="about-dual-card about-person reveal"><span>02 / When I&apos;m not doing UX</span><h2>I collect experiences, not only references.</h2><p>Travel and photography keep me observant. Fitness gives me discipline. Games make me notice systems, feedback and motivation from a completely different angle.</p><p>I also enjoy UX events and conversations with other designers, the kind where a small detail turns into a much bigger idea.</p><div><span>Travel</span><span>Fitness</span><span>Photography</span><span>Gaming</span><span>UX community</span></div></article>
    </div>
  </section>

  <section className="section shell belief-section">
    <span className="eyebrow reveal">How I think</span>
    <div className="belief-layout"><h2 className="reveal">Make the complicated parts feel considered.</h2><div className="reveal"><p>I start with behaviour, business goals and the awkward moments in a journey. Then I find the structure, test the important decisions and shape an interface that feels natural.</p><ul><li>Understand before simplifying</li><li>Make decisions easy to explain</li><li>Design the edge cases, not only the demo</li><li>Stay close to the people building it</li></ul></div></div>
  </section>

  <section className="section shell" id="experience">
    <SectionHead eyebrow="Experience" title="Where I&apos;ve worked and what I owned."/>
    <div className="timeline">
      {experience.map((item,index)=><article className="timeline-item reveal" key={`${item.company}-${item.date}`}>
        <span>{String(index+1).padStart(2,'0')}</span>
        <div className="timeline-title"><h3>{item.company}</h3><strong>{item.role}{item.employment ? ` · ${item.employment}` : ''}</strong>{item.place&&<small>{item.place}</small>}</div>
        <div className="timeline-copy"><time>{item.date}</time><ul>{item.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul></div>
      </article>)}
    </div>
  </section>

  <section className="section shell capability-section">
    <SectionHead eyebrow="Capabilities" title="From early questions to shipped details."/>
    <div className="capability-list reveal">{capabilities.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>)}</div>
  </section>

  <section className="section shell reflection-section reveal">
    <span className="eyebrow">A lesson I keep</span>
    <div><h2>The screen is usually only the last clue.</h2><p>I designed the first version of LUXTJ, then came back to it after real usage showed where people were struggling. The redesign got better when I stopped polishing the reported screen and followed the friction into the surrounding journey.</p></div>
  </section>

  <section className="section shell about-next reveal">
    <span className="eyebrow">What I want next</span>
    <div><h2>Complex products with room for careful thinking.</h2><p>I’m most interested in teams where customer journeys, operational realities and business rules meet — and where a designer can stay close enough to the people building the work to make the details hold together.</p></div>
  </section>

  <TestimonialsSection/>
</PageFrame>}
