import Link from 'next/link';
import {Arrow,PageFrame,ProjectCard,ProjectFeature,TestimonialsSection} from './components';
import {experience,featuredProjects} from './data';
import RecruiterBrief from './recruiter-brief';
import UXGame from './ux-game';

export default function Home(){return <PageFrame>
  <section className="hero shell">
    <div className="hero-copy">
      <span className="hero-label">Akshay V. · Product &amp; UX Designer</span>
      <h1 data-parallax-layer data-parallax-speed="12">I design digital products<br/><em>that make sense.</em></h1>
      <div className="hero-intro">
        <p>I&apos;m Akshay, a Product and UX Designer with 5+ years of experience across travel, enterprise SaaS, insurance, banking and proptech. I turn complicated workflows into clear web and mobile experiences for people and businesses.</p>
        <div><Link className="text-link" href="/work" data-cursor-label="View">See my work <Arrow/></Link><RecruiterBrief/></div>
      </div>
    </div>
    <div className="hero-visual reveal" data-parallax>
      <div className="portrait-frame"><img src="/akshay-portrait.jpg" alt="Akshay Venkata Narayana, Product Designer"/></div>
      <div className="portrait-note"><strong>5+ years</strong><span>Product & UX experience</span></div>
    </div>
    <div className="hero-foot"><span>Scroll to explore</span><span>↓</span></div>
  </section>

  <section className="featured-work shell" id="selected-work">
    <div className="editorial-heading reveal"><span>01</span><div><small>Selected work</small><h2>I usually end up redesigning three connected screens when someone asks me to fix one.</h2></div></div>
    <ProjectFeature/>
    <div className="more-work-heading reveal"><span>More selected work</span><Link className="text-link" href="/work" data-cursor-label="View">See all work <Arrow/></Link></div>
    <div className="project-card-grid">
      {featuredProjects.slice(1).map(project=><ProjectCard key={project.title} {...project}/>)}
    </div>
  </section>

  <TestimonialsSection index="02"/>

  <section className="home-game shell">
    <div className="editorial-heading reveal"><span>03</span><div><small>A tiny everyday game</small><h2>You use products all day. Which option feels better?</h2></div></div>
    <div className="game-layout"><div className="game-intro reveal"><p>Five familiar moments, from a late pizza to a free trial. Pick the option you&apos;d genuinely want to see.</p><span>No design knowledge needed.<br/>About one minute.</span></div><div className="reveal"><UXGame/></div></div>
  </section>

  <section className="home-about shell">
    <div className="editorial-heading reveal"><span>04</span><div><small>About me</small><h2>I came to UX by following the questions code couldn&apos;t answer.</h2></div></div>
    <div className="home-about-layout">
      <div className="home-about-image home-about-image-london reveal" data-parallax><img src="/home-about-london.png" alt="Akshay in London with Tower Bridge in the background"/><span>Outside the screen / London</span></div>
      <div className="home-about-copy reveal">
        <p className="large-copy">My computer science degree taught me how digital systems are built. I became more interested in what happened on the other side of the screen, why a logical flow could still confuse someone, or why a useful feature went untouched.</p>
        <p>Playing Rainbow Six Siege sharpened that curiosity. I started noticing how small interaction cues, feedback loops and split-second decisions shaped what players understood, and what they did next.</p>
        <p>That curiosity moved me into Product and UX Design. For more than five years, I&apos;ve worked with founders, engineers and stakeholders across travel, enterprise and service products, turning early ideas, constraints and edge cases into journeys people can actually follow.</p>
        <dl className="designer-story" aria-label="My path into product and UX design">
          <div><dt>Foundation</dt><dd>Computer science</dd></div>
          <div><dt>Practice</dt><dd>Product &amp; UX design</dd></div>
          <div><dt>Today</dt><dd>Master&apos;s in Design · UK</dd></div>
        </dl>
        <blockquote>I don&apos;t start with screens.<br/>I start with what people need to understand.</blockquote>
        <Link className="text-link" href="/about" data-cursor-label="View">More about how I work <Arrow/></Link>
      </div>
    </div>
  </section>

  <section className="home-experience shell">
    <div className="editorial-heading reveal"><span>05</span><div><small>Recent experience</small><h2>A few places I&apos;ve been useful.</h2></div></div>
    <div className="simple-experience">
      {experience.slice(0,4).map(item=><article className="reveal" key={`${item.company}-${item.date}`}><time>{item.date}</time><div><h3>{item.company}</h3><p>{item.role}{item.employment ? ` · ${item.employment}` : ''}</p></div><p>{item.summary}</p></article>)}
    </div>
    <Link className="text-link" href="/about#experience" data-cursor-label="Jump">Full experience <Arrow/></Link>
  </section>

</PageFrame>}
