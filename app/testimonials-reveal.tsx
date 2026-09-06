'use client';

import {useEffect, useState} from 'react';
import ArrowIcon from './arrow-icon';

const recommendations = [
  {
    name: 'Gaurav Sharma',
    role: 'Founder & Product Builder · Simpo.ai',
    perspective: 'Product leadership',
    quote: "Akshay brought absolute clarity to our wireframe handoffs. He was remarkably receptive to technical constraints and team feedback. He doesn’t just design pretty screens; he questions assumptions, validates ideas through quick usability testing, and documents design systems so engineering handoffs are seamless. Any product team would be lucky to have Akshay's creative problem-solving skills.",
  },
  {
    name: 'Harish Vithan',
    role: 'UX Lead · Proficon Labs',
    perspective: 'UX leadership',
    quote: 'What stood out was his strong sense of ownership, clear UX thinking, and ability to tell the story behind his design decisions in a way that made complex problems easier to understand.',
  },
  {
    name: 'Palash Makhijja',
    role: 'Senior Software Engineer',
    perspective: 'Engineering',
    quote: 'He understands user needs and works well with developers to turn ideas into practical solutions. Akshay was open to feedback and clear in communicating his design decisions.',
  },
  {
    name: 'Dhruvi Kapdi',
    role: 'Senior Flutter Developer',
    perspective: 'Development',
    quote: 'He communicated his ideas clearly, was open to feedback, and worked closely with the development team to make sure the designs were practical and delivered as intended.',
  },
];

export default function TestimonialsReveal() {
  const [linkedInRedirect, setLinkedInRedirect] = useState<string | null>(null);

  useEffect(() => {
    if (!linkedInRedirect) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLinkedInRedirect(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [linkedInRedirect]);

  return (
    <div className="results-proof-wall">
      <div className="results-grid" aria-label="Selected product outcomes">
        <article className="result-card result-card-featured reveal">
          <header><span>LUXTJ · Profile</span><small>Project outcome</small></header>
          <strong className="result-metric">9 <i>→</i> 4</strong>
          <h3>Profile setup screens</h3>
          <p>Rebuilt an unclear 9-screen setup as a 4-screen guided flow without removing any required step.</p>
          <div className="result-client-note">
            <span>Client perspective</span>
            <blockquote>“You need people who care, adapt, take ownership and go beyond what was expected. Akshay is one of those people. Across the LUXTJ website, app and extranet, he approached every rethink with patience, openness and a genuine willingness to make the product better.”</blockquote>
            <footer><strong>Hooma Roy Choudhury</strong><small>Founder · Travel Jaunts &amp; LUXTJ</small></footer>
          </div>
        </article>

        <article className="result-card result-card-wide reveal">
          <header><span>LUXTJ · Hotel details</span><small>Project outcome</small></header>
          <div className="result-card-split">
            <div><strong className="result-metric">Most-clicked</strong><h3>Add-to-cart action</h3></div>
            <p>Heatmap evidence helped move decision-critical information forward, taking the action from ignored to the most-clicked element on the page.</p>
          </div>
        </article>

        <article className="result-card result-card-small reveal">
          <header><span>LUXTJ · Checkout</span><small>Ownership</small></header>
          <strong className="result-metric">Web + mobile</strong>
          <h3>One checkout journey</h3>
          <p>Owned the work from identifying drop-off through usability testing to production-ready handoff.</p>
        </article>

        <article className="result-card result-card-small result-card-dark reveal">
          <header><span>LUXTJ · Ecosystem</span><small>Ownership</small></header>
          <strong className="result-kicker">End to end</strong>
          <h3>One connected product</h3>
          <p>Led product design for the luxury-travel website and partner extranet, connecting customer and operational workflows across web, mobile and internal platforms.</p>
        </article>
      </div>

      <article className="result-card result-card-horizontal reveal">
        <header><span>LUXTJ · Hotel selection</span><small>Design decision</small></header>
        <h3>Faster hotel decisions</h3>
        <p>Reduced friction by benchmarking leading travel platforms and redesigning hotel-detail pages to surface decision-critical information earlier, supporting faster progression towards checkout.</p>
      </article>

      <div className="recommendation-heading reveal">
        <span>Recommendations</span>
        <h3>People who worked closely with me.</h3>
        <p>Four perspectives on ownership, collaboration and getting design into production.</p>
      </div>

      <div className="recommendation-grid" aria-label="Recommendations from collaborators">
        {recommendations.map((item, index) => (
          <article className="recommendation-card reveal" key={item.name}>
            <header><span>{String(index + 1).padStart(2, '0')}</span><small>{item.perspective}</small></header>
            <blockquote>“{item.quote}”</blockquote>
            <footer><strong>{item.name}</strong><span>{item.role}</span></footer>
            <button className="recommendation-link-trigger" type="button" onClick={() => setLinkedInRedirect(item.name)} aria-label={`View ${item.name}'s recommendation on LinkedIn`}><ArrowIcon/></button>
          </article>
        ))}
      </div>
      {linkedInRedirect && (
        <div className="external-link-dialog" role="presentation" onMouseDown={() => setLinkedInRedirect(null)}>
          <section role="dialog" aria-modal="true" aria-labelledby="linkedin-dialog-title" aria-describedby="linkedin-dialog-copy" onMouseDown={(event) => event.stopPropagation()}>
            <span>External link · LinkedIn</span>
            <h3 id="linkedin-dialog-title">Continue to LinkedIn?</h3>
            <p id="linkedin-dialog-copy">You&apos;re leaving this portfolio to view {linkedInRedirect}&apos;s recommendation on LinkedIn.</p>
            <div>
              <button type="button" onClick={() => setLinkedInRedirect(null)} autoFocus>Cancel</button>
              <a href="https://linkedin.com/in/akshayproductdesigner" target="_blank" rel="noreferrer" onClick={() => setLinkedInRedirect(null)}>Continue to LinkedIn <ArrowIcon/></a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
