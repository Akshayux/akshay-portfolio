import Link from 'next/link';
import {Arrow,PageFrame,TestimonialsSection} from './components';
import HeroCanvas from './hero-canvas';

export default function Home(){return <PageFrame>
  {/* Hero: Personal Brand - Centered Layout */}
  <section className="personal-hero reveal">
    <HeroCanvas/>
    <div className="personal-hero-centered">
      <div className="personal-hero-badge">Product & UX Designer</div>
      <h1 className="personal-hero-title-inline">
        Hi, <img src="/akshay-portrait.jpg" alt="Akshay Venkata Narayana" width="140" height="140" className="portrait-inline"/> I'm Akshay
      </h1>
      <p className="personal-hero-description">
        I design for clarity. <span className="highlight">5+ years crafting digital products</span> that users actually understand. I start with research, solve real problems, and ship solutions that stick.
      </p>
    </div>
    <div className="scroll-indicator">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </section>

  {/* Selected Work */}
  <section className="selected-work shell reveal">
    <div className="selected-work-header">
      <div className="selected-work-label">Selected work</div>
      <h2 className="selected-work-title">Curated work that sells the shelf</h2>
    </div>

    <div className="selected-work-card">
      <div className="selected-work-number">01</div>
      <div className="selected-work-category">Luxury travel · Customer experience</div>
      <div className="selected-work-readtime">9 MIN READ</div>

      <div className="selected-work-visual">
        <img src="/luxtj.png" alt="LUXTJ project" />
      </div>
      <div className="selected-work-content">
        <div className="selected-work-metric">60% → 22% <span>CHECKOUT DROP-OFF</span></div>
        <h3>The leak wasn't on the checkout screen</h3>
        <p className="selected-work-description">I redesigned the booking journey to address the friction behind abandoned bookings</p>
        <div className="selected-work-footer">
          <Link href="/work/luxtj" className="selected-work-cta-link">
            VIEW CASE STUDY
            <span className="selected-work-arrow">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* About Brief */}
  <section className="about-brief shell reveal">
    <div className="about-brief-grid">
      <div className="about-brief-item">
        <h3>5+ years</h3>
        <p>Designing products at scale</p>
      </div>
      <div className="about-brief-item">
        <h3>Research-first</h3>
        <p>Problems solved through user understanding</p>
      </div>
      <div className="about-brief-item">
        <h3>Travel → SaaS → AI</h3>
        <p>Across industries and complexity</p>
      </div>
    </div>
  </section>

  {/* Approach */}
  <section className="approach-section approach-1">
    <div className="approach-content shell reveal">
      <div className="approach-label">How I work</div>
      <div>
        <h2>Research first. Design later.</h2>
        <p>I don't jump to solutions. Every project starts with understanding—the user, the problem, the constraints. Real research beats assumptions every time.</p>
        <p className="approach-highlight-text">The best design feels inevitable because it solves what people actually need.</p>
      </div>
    </div>
  </section>

  {/* Featured Work */}
  <section className="work-showcase shell reveal" id="selected-work">
    <div className="work-intro reveal">
      <div className="work-label">Featured Projects</div>
      <div>
        <h2>Where I've made an impact.</h2>
        <p>Four products. Four distinct problems. One approach: find the real issue, design the simplest solution.</p>
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
          <p className="work-description">Drop-off reduction</p>
          <p className="work-insight">Checkout wasn't the problem. Two steps earlier was. Fixed the real issue.</p>
          <Link href="/work/luxtj" className="work-link">Read the case <Arrow/></Link>
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
          <p className="work-insight">Clearer progression meant users stayed. Complexity wasn't the issue—clarity was.</p>
          <Link href="/work/simpo-ai" className="work-link">View project <Arrow/></Link>
        </div>
      </div>

      <div className="work-card work-card-3">
        <div className="work-card-visual">
          <div className="work-placeholder luxtj-extranet">LUXTJ Extranet</div>
        </div>
        <div className="work-card-content">
          <h3>LUXTJ Extranet Platform</h3>
          <p className="work-metric">3 products unified</p>
          <p className="work-description">Connected system</p>
          <p className="work-insight">Scattered workflows became one coherent platform. System thinking solved it.</p>
          <Link href="/work/luxtj-extranet" className="work-link">Explore <Arrow/></Link>
        </div>
      </div>

      <div className="work-card work-card-4">
        <div className="work-card-visual">
          <div className="work-placeholder scotcare">ScotCare</div>
        </div>
        <div className="work-card-content">
          <h3>ScotCare Healthcare</h3>
          <p className="work-metric">WCAG 2.2 AA</p>
          <p className="work-description">Accessibility standard</p>
          <p className="work-insight">Healthcare needs clarity more than anywhere. Designed for everyone.</p>
          <Link href="/work/scotcare" className="work-link">Study <Arrow/></Link>
        </div>
      </div>
    </div>
  </section>

  {/* Philosophy */}
  <section className="philosophy-section reveal">
    <div className="philosophy-content shell">
      <div className="philosophy-label">My Philosophy</div>
      <div>
        <h2>Design solves problems. Beautiful ones are bonuses.</h2>
        <p>I design for people. Real people with real constraints. If it doesn't solve their problem, it doesn't matter how it looks.</p>
        <p className="philosophy-bold">Clear design is kind design.</p>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="cta-section shell reveal">
    <div className="cta-content">
      <h2>Let's work together</h2>
      <p>Got a design challenge? Let's talk about it.</p>
      <div className="cta-buttons">
        <Link className="button-primary button-large" href="/work">See all work <Arrow/></Link>
        <Link className="button-secondary button-large" href="/contact">Get in touch <Arrow/></Link>
      </div>
    </div>
  </section>

  <TestimonialsSection index="04"/>

</PageFrame>}
