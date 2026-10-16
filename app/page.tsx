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

  {/* All Projects - Case Studies */}
  <section className="projects-showcase shell reveal">
    <div className="project-showcase-card project-showcase-1">
      <div className="project-showcase-number">01</div>
      <div className="project-showcase-category">Luxury travel · Customer experience</div>
      <div className="project-showcase-readtime">9 MIN READ</div>

      <div className="project-showcase-visual">
        <img src="/casestudy1.png" alt="LUXTJ Checkout case study" />
      </div>
      <div className="project-showcase-content">
        <div className="project-showcase-metric">60% → 22% <span>CHECKOUT DROP-OFF</span></div>
        <h3>The leak wasn't on the checkout screen</h3>
        <p className="project-showcase-description">I redesigned the booking journey to address the friction behind abandoned bookings</p>
        <div className="project-showcase-footer">
          <Link href="/work/luxtj" className="project-showcase-cta-link">
            VIEW CASE STUDY
            <span className="project-showcase-arrow">↗</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="project-showcase-card project-showcase-2">
      <div className="project-showcase-number">02</div>
      <div className="project-showcase-category">Luxury travel · Partner operations</div>
      <div className="project-showcase-readtime">6 MIN READ</div>

      <div className="project-showcase-visual">
        <img src="/casestudy2.png" alt="LUXTJ Extranet case study" />
      </div>
      <div className="project-showcase-content">
        <div className="project-showcase-metric">3 <span>PRODUCTS UNIFIED</span></div>
        <h3>What happens after a luxury trip is booked?</h3>
        <p className="project-showcase-description">Unified workflows across customer and operational platforms</p>
        <div className="project-showcase-footer">
          <Link href="/work/luxtj-extranet" className="project-showcase-cta-link">
            VIEW CASE STUDY
            <span className="project-showcase-arrow">↗</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="project-showcase-card project-showcase-3">
      <div className="project-showcase-number">03</div>
      <div className="project-showcase-category">AI product · Website creation</div>
      <div className="project-showcase-readtime">6 MIN READ</div>

      <div className="project-showcase-visual">
        <img src="/casestudy3.png" alt="Simpo AI case study" />
      </div>
      <div className="project-showcase-content">
        <div className="project-showcase-metric">8 → 4 <span>ONBOARDING STEPS</span></div>
        <h3>Why were people leaving an AI website builder before they made their first choice?</h3>
        <p className="project-showcase-description">Clearer progression meant users stayed. Complexity wasn't the issue—clarity was.</p>
        <div className="project-showcase-footer">
          <Link href="/work/simpo-ai" className="project-showcase-cta-link">
            VIEW CASE STUDY
            <span className="project-showcase-arrow">↗</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="project-showcase-card project-showcase-4">
      <div className="project-showcase-number">04</div>
      <div className="project-showcase-category">Healthcare · Partner operations</div>
      <div className="project-showcase-readtime">6 MIN READ</div>

      <div className="project-showcase-visual">
        <img src="/casestudy4.png" alt="ScotCare case study" />
      </div>
      <div className="project-showcase-content">
        <div className="project-showcase-metric">WCAG 2.2 AA <span>ACCESSIBILITY STANDARD</span></div>
        <h3>When someone feels unwell, the hardest question is often: what happens next?</h3>
        <p className="project-showcase-description">Healthcare needs clarity more than anywhere. Designed for everyone.</p>
        <div className="project-showcase-footer">
          <Link href="/work/scotcare" className="project-showcase-cta-link">
            VIEW CASE STUDY
            <span className="project-showcase-arrow">↗</span>
          </Link>
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
