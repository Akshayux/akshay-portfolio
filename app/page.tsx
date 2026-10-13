import Link from 'next/link';
import {Arrow,CaseStudyStack,PageFrame,TestimonialsSection} from './components';
import HeroPreview from './hero-preview';
import LanguageGreeting from './language-greeting';

export default function Home(){return <PageFrame>
  <section className="hero hero-centered shell" aria-labelledby="hero-title">
    <div className="hero-stage">
      <HeroPreview/>
      <div className="hero-introduction">
        <LanguageGreeting className="reveal"/>
        <div className="hero-copy hero-copy-body reveal">
          <h1 id="hero-title" className="hero-statement">I find the real problem, then design the <em>simplest</em> solution.</h1>
          <div className="hero-support"><p>Product Designer with 5+ years shipping clarity. I start with research, not screens. Most design problems aren't design problems.</p><p>CS background · MA in Digital Design (HCI) · Built for travel, SaaS, AI, and teams that care about usable products.</p></div>
          <div className="hero-cta-row"><Link className="button hero-primary-button" href="/work" data-cursor-label="View"><span>See my work</span><span className="button-icon" aria-hidden="true"><Arrow/></span></Link><Link className="button hero-primary-button" href="/contact" data-cursor-label="Open" style={{background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)'}}><span>Let's talk</span><span className="button-icon" aria-hidden="true"><Arrow/></span></Link></div>
        </div>
      </div>
    </div>
  </section>

  <section className="featured-work shell reveal" id="selected-work">
    <div className="editorial-heading reveal"><span>01</span><div><small>Recent work</small><h2>Where I found the real problem (and fixed it).</h2><p>Four products across travel, AI, and healthcare. Each started with the same pattern: the reported problem wasn't the actual problem.</p></div></div>
    <CaseStudyStack bento/>
    <div className="more-work-heading reveal"><span>Earlier projects</span><Link className="text-link" href="/work" data-cursor-label="View">See all projects <Arrow/></Link></div>
  </section>

  <section className="systems-thinking shell">
    <div className="systems-thinking-prose reveal">
      <small>Why your redesign might be solving the wrong problem</small>
      <div>
        <p>Most design problems aren't design problems. A slow checkout flow isn't actually about the checkout screen. A confusing dashboard isn't about the dashboard. I start by finding where the frustration actually comes from — the user stuck mid-task, the support team fielding the same complaint for the tenth time, the metric that won't move.</p>
        <p>The screen is usually just the symptom.</p>
        <div className="systems-thinking-proof">On LUXTJ: "checkout drop-off" → traced it to a calendar screen two steps earlier. Fixing the wrong problem would've wasted weeks. <Link href="/work/luxtj" data-cursor-label="Read">Read the full case <Arrow/></Link></div>
      </div>
    </div>
  </section>

  <TestimonialsSection index="02"/>

</PageFrame>}
