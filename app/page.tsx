import Link from 'next/link';
import {Arrow,CaseStudyStack,PageFrame,TestimonialsSection} from './components';
import LanguageGreeting from './language-greeting';

export default function Home(){return <PageFrame>
  <section className="hero hero-centered shell" aria-labelledby="hero-title">
    <div className="hero-stage">
      <div className="hero-introduction">
        <LanguageGreeting className="reveal"/>
        <div className="hero-copy hero-copy-body reveal">
          <h1 id="hero-title" className="hero-statement">I make complex digital products <span>easier to use.</span></h1>
          <div className="hero-support"><p>I bring clarity to checkout, onboarding and operational workflows, so people can make confident decisions and finish what they came to do.</p><p>One LUXTJ redesign cut checkout drop-off from 60% to 22%.</p></div>
          <div className="hero-cta-row"><Link className="button hero-primary-button" href="/work" data-cursor-label="View"><span>Explore the work</span><span className="button-icon" aria-hidden="true"><Arrow/></span></Link></div>
        </div>
      </div>
    </div>
  </section>

  <section className="featured-work shell reveal" id="selected-work">
    <div className="editorial-heading reveal"><span>01</span><div><small>Work</small><h2>A few products I&apos;ve helped make clearer.</h2></div></div>
    <CaseStudyStack bento/>
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

</PageFrame>}
