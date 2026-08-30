import Link from 'next/link';
import {Arrow,PageFrame,ProjectCard,ProjectFeature,Status,TestimonialsSection} from './components';
import {experience,featuredProjects} from './data';
import RecruiterBrief from './recruiter-brief';
import UXGame from './ux-game';

export default function Home(){return <PageFrame>
  <section className="hero shell">
    <div className="hero-copy">
      <span className="hero-label">Product & UX Designer · United Kingdom</span>
      <h1 data-parallax-layer data-parallax-speed="12">Complex products,<br/><em>made clear.</em></h1>
      <div className="hero-intro"><p>I&apos;m Akshay. I turn complicated workflows, systems and ideas into digital products people understand and enjoy using.</p><div><Link className="text-link" href="/work">See my work <Arrow/></Link><RecruiterBrief/></div></div>
    </div>
    <div className="hero-visual reveal" data-parallax>
      <div className="portrait-frame"><img src="/akshay-portrait.jpg" alt="Akshay Venkata Narayana, Product Designer"/></div>
      <div className="portrait-note"><strong>5+ years</strong><span>Product & UX experience</span></div>
      <Status/>
    </div>
    <div className="hero-foot"><span>Scroll to explore</span><span>↓</span></div>
  </section>

  <section className="featured-work shell" id="selected-work">
    <div className="editorial-heading reveal"><span>01</span><div><small>Selected work</small><h2>Designing the whole journey, not a collection of screens.</h2></div></div>
    <ProjectFeature/>
    <div className="more-work-heading reveal"><span>More selected work</span><Link className="text-link" href="/work">See all work <Arrow/></Link></div>
    <div className="project-card-grid">
      {featuredProjects.slice(1).map(project=><ProjectCard key={project.title} {...project}/>)}
    </div>
  </section>

  <section className="home-about shell">
    <div className="editorial-heading reveal"><span>02</span><div><small>About me</small><h2>I like the messy part—when the problem is still taking shape.</h2></div></div>
    <div className="home-about-layout">
      <div className="home-about-image reveal" data-parallax><img src="/figma/about-photo-v2.png" alt="Akshay by the coast"/><span>Outside the screen / UK</span></div>
      <div className="home-about-copy reveal"><p className="large-copy">On LUXTJ, I watched people spend almost two minutes trying to understand a bucket-list form. The interface looked finished, but the journey had no clear starting point. I learned to test for comprehension before polishing the pixels.</p><p>I&apos;m currently pursuing a Master&apos;s in Design in the UK, and I bring that same habit—ask why, make the next step obvious—to every project.</p><blockquote>Good design should feel considered,<br/>not complicated.</blockquote><Link className="text-link" href="/about">Read my story <Arrow/></Link></div>
    </div>
  </section>

  <section className="home-game shell">
    <div className="editorial-heading reveal"><span>03</span><div><small>A tiny everyday game</small><h2>You use products all day. Which option feels better?</h2></div></div>
    <div className="game-layout"><div className="game-intro reveal"><p>Five familiar moments—from a late pizza to a free trial. Pick the option you&apos;d genuinely want to see.</p><span>No design knowledge needed.<br/>About one minute.</span></div><div className="reveal"><UXGame/></div></div>
  </section>

  <section className="home-experience shell">
    <div className="editorial-heading reveal"><span>04</span><div><small>Recent experience</small><h2>A few places I&apos;ve been useful.</h2></div></div>
    <div className="simple-experience">
      {experience.slice(0,4).map(item=><article className="reveal" key={item.company}><time>{item.date}</time><div><h3>{item.company}</h3><p>{item.role}</p></div><p>{item.summary}</p></article>)}
    </div>
    <Link className="text-link" href="/about#experience">Full experience <Arrow/></Link>
  </section>

  <TestimonialsSection/>
</PageFrame>}
