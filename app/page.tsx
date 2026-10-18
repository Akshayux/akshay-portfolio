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
      <span>⌄</span>
      <span>⌄</span>
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

  {/* Results + Recommendations */}
  <section className="results-recommendations shell reveal">
    <div className="results-recommendations-grid">
      <div className="results-card-primary">
        <div className="results-metric">
          <div className="results-metric-value">5+</div>
          <div className="results-metric-label">Years Experience</div>
        </div>

        <div className="results-divider"></div>

        <div className="results-testimonial">
          <p className="results-quote">
            "Working with Akshay transformed how we think about user experience. Every design decision is backed by research and real user feedback."
          </p>
          <div>
            <div className="results-author">Trusted by startups & enterprises</div>
            <div className="results-author-title">LUXTJ, Simpo AI, ScotCare & more</div>
          </div>
        </div>
      </div>

      <div className="results-secondary-grid">
        <div className="results-card-secondary">
          <div className="results-card-label">Design Philosophy</div>
          <h3 className="results-card-title">Clarity First</h3>
          <p className="results-card-description">
            Every pixel has a purpose. I design for real users solving real problems, not for aesthetics alone.
          </p>
          <div className="results-card-highlight">Problem-Driven</div>
        </div>

        <div className="results-card-secondary">
          <div className="results-card-label">Approach</div>
          <h3 className="results-card-title">Research-Led</h3>
          <p className="results-card-description">
            I start with discovery. Understanding user behavior, pain points, and context shapes every decision.
          </p>
          <div className="results-card-highlight">User Research</div>
        </div>

        <div className="results-card-secondary">
          <div className="results-card-label">Execution</div>
          <h3 className="results-card-title">Pixel Perfect</h3>
          <p className="results-card-description">
            From concept to handoff, I ensure designs are precise, accessible, and production-ready.
          </p>
          <div className="results-card-highlight">Quality Obsessed</div>
        </div>

        <div className="results-card-secondary">
          <div className="results-card-label">Impact</div>
          <h3 className="results-card-title">Results Matter</h3>
          <p className="results-card-description">
            Design isn't done until it moves metrics. I measure success by real user outcomes and business impact.
          </p>
          <div className="results-card-highlight">Measurable Impact</div>
        </div>
      </div>
    </div>
  </section>

<TestimonialsSection index="04"/>

</PageFrame>}
