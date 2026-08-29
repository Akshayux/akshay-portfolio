import Link from 'next/link';
import {Arrow,PageFrame,ProjectFeature,ProofStrip,Status} from './components';
import {experience} from './data';

export default function Home(){return <PageFrame>
  <section className="hero shell">
    <div className="hero-copy">
      <span className="hero-label">Product designer · United Kingdom</span>
      <h1>Complex products,<br/><em>made clear.</em></h1>
      <div className="hero-intro"><p>I&apos;m Akshay. I turn complicated workflows, systems and ideas into digital products people understand and enjoy using.</p><div><Link className="text-link" href="/work">See my work <Arrow/></Link><Link className="text-link quiet-link" href="/about">About me</Link></div></div>
    </div>
    <div className="hero-visual reveal" data-parallax>
      <div className="portrait-frame"><img src="/akshay-portrait.jpg" alt="Akshay Venkata Narayana, Product Designer"/></div>
      <div className="portrait-note"><strong>4.5 years</strong><span>Product design experience</span></div>
      <Status/>
    </div>
    <div className="hero-foot"><span>Scroll to explore</span><span>↓</span></div>
  </section>

  <section className="home-proof shell"><ProofStrip/></section>

  <section className="featured-work shell" id="selected-work">
    <div className="editorial-heading reveal"><span>01</span><div><small>Selected work</small><h2>Designing the whole journey, not a collection of screens.</h2></div></div>
    <ProjectFeature/>
  </section>

  <section className="home-about shell">
    <div className="editorial-heading reveal"><span>02</span><div><small>About me</small><h2>I like the messy part—when the problem is still taking shape.</h2></div></div>
    <div className="home-about-layout">
      <div className="home-about-image reveal" data-parallax><img src="/figma/about-photo-v2.png" alt="Akshay by the coast"/><span>Outside the screen / UK</span></div>
      <div className="home-about-copy reveal"><p className="large-copy">I work across product strategy, UX and interface design. My job is to find the structure hidden inside a complicated problem—and make it feel natural to everyone else.</p><p>I&apos;ve designed for luxury travel, enterprise software, AI tools, editorial platforms and mobile products. I&apos;m currently pursuing a Master&apos;s in Design in the UK.</p><blockquote>Good design should feel considered,<br/>not complicated.</blockquote><Link className="text-link" href="/about">Read my story <Arrow/></Link></div>
    </div>
  </section>

  <section className="home-experience shell">
    <div className="editorial-heading reveal"><span>03</span><div><small>Recent experience</small><h2>A few places I&apos;ve been useful.</h2></div></div>
    <div className="simple-experience">
      {experience.slice(0,4).map(item=><article className="reveal" key={item.company}><time>{item.date}</time><div><h3>{item.company}</h3><p>{item.role}</p></div><p>{item.summary}</p></article>)}
    </div>
    <Link className="text-link" href="/about#experience">Full experience <Arrow/></Link>
  </section>
</PageFrame>}
