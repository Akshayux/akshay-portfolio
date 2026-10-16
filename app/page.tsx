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

  {/* Featured Work - Primary */}
  <section className="featured-work-primary shell reveal">
    <div className="featured-work-header">
      <div className="featured-work-label">Featured Work</div>
      <h2>Where design solves real problems.</h2>
      <p>Four distinct challenges. Four solutions that moved the needle. Each one started with research, not assumptions.</p>
    </div>

    <div className="featured-work-card-primary">
      <div className="featured-work-card-number">01</div>
      <div className="featured-work-card-category">Luxury travel · Customer experience</div>
      <div className="featured-work-card-readtime">9 MIN READ</div>

      <div className="featured-work-card-visual">
        <img src="/luxtj.png" alt="LUXTJ project" />
      </div>
      <div className="featured-work-card-content">
        <div className="featured-work-card-metric">60% → 22% <span>CHECKOUT DROP-OFF</span></div>
        <h3>The leak wasn't on the checkout screen</h3>
        <p className="featured-work-card-description">I redesigned the booking journey to address the friction behind abandoned bookings</p>
        <div className="featured-work-card-footer">
          <Link href="/work/luxtj" className="featured-work-card-cta-link">
            VIEW CASE STUDY
            <span className="featured-work-card-arrow">↗</span>
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* Services */}
  <section className="services shell reveal">
    <div className="services-header">
      <div className="services-label">What I offer</div>
      <h2>How I can help you.</h2>
    </div>
    <div className="services-grid">
      <div className="service-card">
        <h3>UX Research & Strategy</h3>
        <p>Deep user understanding through research. I find the real problems before designing solutions.</p>
      </div>
      <div className="service-card">
        <h3>Product Design</h3>
        <p>Clean, intuitive interfaces built on research. Design that solves problems and feels effortless.</p>
      </div>
      <div className="service-card">
        <h3>Design Systems</h3>
        <p>Scalable design frameworks. Consistency, clarity, and speed across your entire product.</p>
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

  {/* All Projects Grid */}
  <section className="projects-grid shell reveal">
    <div className="projects-grid-container">
      <div className="project-card project-card-1">
        <div className="project-card-visual">
          <div className="project-placeholder luxtj">LUXTJ</div>
        </div>
        <div className="project-card-content">
          <p className="project-category">Luxury Travel · Design</p>
          <h3>LUXTJ Checkout</h3>
          <p className="project-metric">60% → 22%</p>
          <p className="project-description">Drop-off reduction through journey redesign</p>
          <Link href="/work/luxtj" className="project-link">Read case <Arrow/></Link>
        </div>
      </div>

      <div className="project-card project-card-2">
        <div className="project-card-visual">
          <div className="project-placeholder simpo">Simpo</div>
        </div>
        <div className="project-card-content">
          <p className="project-category">AI · Onboarding</p>
          <h3>Simpo AI Onboarding</h3>
          <p className="project-metric">8 → 4</p>
          <p className="project-description">Simplified setup for clarity and adoption</p>
          <Link href="/work/simpo-ai" className="project-link">View project <Arrow/></Link>
        </div>
      </div>

      <div className="project-card project-card-3">
        <div className="project-card-visual">
          <div className="project-placeholder luxtj-extranet">LUXTJ Extranet</div>
        </div>
        <div className="project-card-content">
          <p className="project-category">SaaS · Systems</p>
          <h3>LUXTJ Extranet Platform</h3>
          <p className="project-metric">3 products unified</p>
          <p className="project-description">Connected system for scattered workflows</p>
          <Link href="/work/luxtj-extranet" className="project-link">Explore <Arrow/></Link>
        </div>
      </div>

      <div className="project-card project-card-4">
        <div className="project-card-visual">
          <div className="project-placeholder scotcare">ScotCare</div>
        </div>
        <div className="project-card-content">
          <p className="project-category">Healthcare · Accessibility</p>
          <h3>ScotCare Healthcare</h3>
          <p className="project-metric">WCAG 2.2 AA</p>
          <p className="project-description">Accessible design for universal clarity</p>
          <Link href="/work/scotcare" className="project-link">Study <Arrow/></Link>
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
