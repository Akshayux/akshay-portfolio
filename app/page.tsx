import Link from 'next/link';
import {Arrow,CaseStudyStack,PageFrame,TestimonialsSection} from './components';
import {experience} from './data';
import RecruiterBrief from './recruiter-brief';
import UXGame from './ux-game';

export default function Home(){return <PageFrame>
  <section className="hero shell">
    <div className="hero-copy">
      <span className="hero-label">Hello</span>
      <h1 data-parallax-layer data-parallax-speed="12">I&apos;m Akshay.</h1>
      <div className="hero-intro">
        <p>I&apos;m a Product Designer with 5+ years of experience, a Computer Science background, and an MA in Digital Design (HCI) from Heriot-Watt University. I use human-centred research and storytelling to turn complex workflows into clear, useful products that people trust.</p>
        <p className="hero-signoff">When I&apos;m not shaping products, I&apos;m usually chasing one last rep at the gym.</p>
        <div className="hero-cta-row"><Link className="text-link" href="/work" data-cursor-label="View">See my work <Arrow/></Link><RecruiterBrief/></div>
      </div>
    </div>
    <Link className="hero-work-peek reveal" href="#selected-work" data-cursor-label="View work" aria-label="Preview selected work">
      <div><span>Selected work</span><strong>&ldquo;The leak wasn&apos;t on the checkout screen.&rdquo;</strong></div>
      <img src="/optimized/luxtj-main.jpg" alt="Preview of the LUXTJ travel product"/>
      <Arrow/>
    </Link>
  </section>

  <section className="featured-work shell" id="selected-work">
    <div className="editorial-heading reveal"><span>01</span><div><small>Work</small><h2>A few products I&apos;ve helped make clearer.</h2></div></div>
    <CaseStudyStack/>
    <div className="more-work-heading reveal"><span>More selected work</span><Link className="text-link" href="/work" data-cursor-label="View">See all work <Arrow/></Link></div>
  </section>

  <section className="systems-thinking shell">
    <div className="systems-thinking-prose reveal">
      <small>How I actually find the problem</small>
      <div>
        <p>I don&apos;t start with the screen. I start with whoever&apos;s frustrated by it — a user stuck mid-task, a support team fielding the same complaint, a metric that won&apos;t move no matter what gets redesigned.</p>
        <p>By the time I open Figma, I usually already know which three screens are actually involved.</p>
        <div className="systems-thinking-proof">On LUXTJ, a &ldquo;checkout problem&rdquo; turned out to start on the calendar screen, two steps earlier. <Link href="/work/luxtj" data-cursor-label="Read">See how that unfolded <Arrow/></Link></div>
      </div>
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
      <div className="home-about-image home-about-image-london reveal" data-parallax><img src="/optimized/about-london.jpg" loading="lazy" decoding="async" alt="Akshay in London with Tower Bridge in the background"/><span>Outside the screen / London</span></div>
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
