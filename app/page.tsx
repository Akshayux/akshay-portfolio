import Link from 'next/link';
import {Arrow,PageFrame,TestimonialsSection} from './components';
import HeroPreview from './hero-preview';

export default function Home(){return <PageFrame>
  {/* HERO: Bold, Narrative-Driven */}
  <section className="hero-creative shell reveal" aria-labelledby="hero-title">
    <div className="hero-creative-grid">
      <div className="hero-creative-content">
        <h1 id="hero-title" className="hero-creative-title reveal">
          I turn <span className="color-accent-1">messy problems</span> into <span className="color-accent-2">simple systems</span>.
        </h1>
        <p className="hero-creative-subtitle reveal">
          Product Designer. 5+ years. I start with real people, not Figma. Most design problems aren't design problems.
        </p>
        <div className="hero-creative-cta reveal">
          <Link className="button-primary" href="/work">View work <Arrow/></Link>
          <Link className="button-secondary" href="/contact">Get in touch <Arrow/></Link>
        </div>
      </div>
      <div className="hero-creative-visual reveal">
        <HeroPreview/>
      </div>
    </div>
  </section>

  {/* APPROACH: Storytelling with Color */}
  <section className="approach-section approach-1">
    <div className="approach-content shell reveal">
      <div className="approach-label">01. My Approach</div>
      <div>
        <h2>Research first. Pixels later.</h2>
        <p>I don't start with the screen. I start with the person frustrated in front of it. A user mid-task. A support team hearing the same complaint. A metric that won't budge.</p>
        <p>By the time I open Figma, I already know which three screens matter.</p>
        <div className="approach-highlight">
          On LUXTJ: "checkout problem" → traced to calendar screen two steps earlier. Fixing the wrong thing would've wasted weeks.
        </div>
      </div>
    </div>
  </section>

  {/* WORK: Horizontal Scroll with Parallax */}
  <section className="work-showcase shell reveal" id="selected-work">
    <div className="work-intro reveal">
      <div className="work-label">02. Selected Work</div>
      <div>
        <h2>Where clarity changed things.</h2>
        <p>Four projects. Same pattern: the reported problem wasn't the real one. Here's how I found each.</p>
      </div>
    </div>

    <div className="work-scroll-container reveal">
      <div className="work-card work-card-1">
        <div className="work-card-visual">
          <div className="work-placeholder luxtj">LUXTJ</div>
        </div>
        <div className="work-card-content">
          <h3>LUXTJ Checkout</h3>
          <p className="work-metric">60% → 22%</p>
          <p className="work-description">Checkout drop-off</p>
          <p className="work-insight">The problem wasn't the checkout screen—it started two steps earlier on the calendar.</p>
          <Link href="/work/luxtj" className="work-link">Read case <Arrow/></Link>
        </div>
      </div>

      <div className="work-card work-card-2">
        <div className="work-card-visual">
          <div className="work-placeholder simpo">Simpo</div>
        </div>
        <div className="work-card-content">
          <h3>Simpo AI Onboarding</h3>
          <p className="work-metric">8 → 4</p>
          <p className="work-description">Setup steps</p>
          <p className="work-insight">Users bailed mid-onboarding. Clearer progression made the difference.</p>
          <Link href="/work/simpo-ai" className="work-link">View work <Arrow/></Link>
        </div>
      </div>

      <div className="work-card work-card-3">
        <div className="work-card-visual">
          <div className="work-placeholder luxtj-extranet">LUXTJ Extranet</div>
        </div>
        <div className="work-card-content">
          <h3>LUXTJ Extranet</h3>
          <p className="work-metric">3</p>
          <p className="work-description">Connected products</p>
          <p className="work-insight">Five scattered workflows became one connected workspace.</p>
          <Link href="/work/luxtj-extranet" className="work-link">Explore <Arrow/></Link>
        </div>
      </div>

      <div className="work-card work-card-4">
        <div className="work-card-visual">
          <div className="work-placeholder scotcare">ScotCare</div>
        </div>
        <div className="work-card-content">
          <h3>ScotCare</h3>
          <p className="work-metric">WCAG 2.2 AA</p>
          <p className="work-description">Healthcare clarity</p>
          <p className="work-insight">Safety and clarity matter most when someone feels unwell.</p>
          <Link href="/work/scotcare" className="work-link">Read study <Arrow/></Link>
        </div>
      </div>
    </div>
  </section>

  {/* WHY: Philosophy Section */}
  <section className="philosophy-section reveal">
    <div className="philosophy-content shell">
      <div className="philosophy-label">03. Philosophy</div>
      <div>
        <h2>Design isn't decoration.</h2>
        <p>It's the bridge between what someone needs and what they can actually use. Most design problems are really research problems. Most redesigns solve the wrong thing.</p>
        <p className="philosophy-bold">I find the real problem. Then I make it simple.</p>
      </div>
    </div>
  </section>

  {/* NEXT STEPS: Clear Conversion */}
  <section className="cta-section shell reveal">
    <div className="cta-content">
      <h2>Ready for clarity?</h2>
      <p>Let's talk about your problem.</p>
      <div className="cta-buttons">
        <Link className="button-primary button-large" href="/work">See all work <Arrow/></Link>
        <Link className="button-secondary button-large" href="/contact">Start a conversation <Arrow/></Link>
      </div>
    </div>
  </section>

  <TestimonialsSection index="04"/>

</PageFrame>}
