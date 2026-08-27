import Link from 'next/link';
import {Arrow,Button,ExperiencePreview,PageFrame,ProjectFeature,ProofStrip,SectionHead,Status} from './components';
import {capabilities,experience} from './data';

export default function Home(){return <PageFrame>
  <section className="hero shell">
    <div className="hero-copy">
      <Status/>
      <span className="eyebrow hero-eyebrow">Product designer · complex digital systems</span>
      <h1>I turn complexity into products people can use with confidence.</h1>
      <p>4.5+ years designing across luxury travel, enterprise SaaS, AI tools and mobile products—from problem framing to developer handoff.</p>
      <div className="hero-actions"><Button href="/work">View selected work <Arrow/></Button><Button href="/about" secondary>About me</Button></div>
    </div>
    <div className="hero-visual reveal" data-parallax>
      <div className="portrait-frame"><img src="/akshay-portrait.jpg" alt="Akshay Venkata Narayana, Product Designer"/></div>
      <div className="portrait-note"><span>Currently based in</span><strong>United Kingdom</strong></div>
      <div className="portrait-mark" aria-hidden="true">AVN</div>
    </div>
  </section>

  <section className="shell scan-summary" aria-labelledby="scan-title">
    <div className="scan-intro reveal"><span className="eyebrow">30-second overview</span><h2 id="scan-title">The essentials, without the portfolio theatre.</h2><p>I frame ambiguous problems, simplify multi-step journeys and build reusable systems that make delivery clearer for product and engineering teams.</p></div>
    <ProofStrip/>
  </section>

  <section className="section shell" id="selected-work">
    <SectionHead eyebrow="Selected work" title="One detailed case study. No duplicate projects." copy="Start with the summary. Go deeper when you want to inspect the decisions, trade-offs and system behind the screens." action={<Link className="text-link" href="/work">All work <Arrow/></Link>}/>
    <ProjectFeature/>
  </section>

  <section className="section shell">
    <SectionHead eyebrow="More experience" title="Breadth across products, not made-up case studies." copy="A concise view of recent work. Detailed artefacts can be discussed in an interview where confidentiality allows."/>
    <div className="experience-preview-grid">
      {experience.slice(0,3).map(item=><ExperiencePreview key={item.company} company={item.company} role={item.role} summary={item.summary} meta={item.date}/>) }
    </div>
    <Link className="text-link section-bottom-link" href="/about#experience">View full experience <Arrow/></Link>
  </section>

  <section className="section shell approach">
    <SectionHead eyebrow="How I work" title="Clear thinking before polished pixels."/>
    <div className="approach-grid">
      <article className="reveal"><span>01</span><h3>Frame the right problem</h3><p>Connect user behaviour, business goals and delivery constraints before committing to a solution.</p></article>
      <article className="reveal"><span>02</span><h3>Make decisions visible</h3><p>Use flows, prototypes and clear rationale so teams can evaluate trade-offs together.</p></article>
      <article className="reveal"><span>03</span><h3>Design for the system</h3><p>Resolve the happy path, edge cases and reusable patterns engineers need to ship confidently.</p></article>
    </div>
    <div className="capability-row reveal">{capabilities.map(item=><span key={item}>{item}</span>)}</div>
  </section>

  <section className="section shell about-preview">
    <div className="about-preview-image reveal" data-parallax><img src="/figma/about-photo-v2.png" alt="Akshay by the coast"/></div>
    <div className="about-preview-copy reveal"><span className="eyebrow">A little context</span><h2>A product designer who is comfortable in the messy middle.</h2><p>I&apos;m pursuing a Master&apos;s in Design in the UK while working across product strategy, UX and interface systems. I care about the part between a good idea and a product that actually holds together.</p><blockquote>“Good design removes the thinking users should never have to do.”</blockquote><Link className="text-link" href="/about">More about me <Arrow/></Link></div>
  </section>
</PageFrame>}
