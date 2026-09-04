'use client';

import {useEffect, useState} from 'react';

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
          <header><span>LUXTJ · Checkout</span><small>Project outcome</small></header>
          <strong className="result-metric">60% <i>→</i> 22%</strong>
          <h3>Checkout drop-off</h3>
          <p>Reduced checkout drop-off from nearly 60% to 22% by restructuring dense travel information, improving hierarchy and simplifying the path from review to payment.</p>
          <div className="result-client-note">
            <span>Client perspective</span>
            <blockquote>“You need people who care, adapt, take ownership and go beyond what was expected. Akshay is one of those people. Across the LUXTJ website, app and extranet, he approached every rethink with patience, openness and a genuine willingness to make the product better.”</blockquote>
            <footer><strong>Hooma Roy Choudhury</strong><small>Founder · Travel Jaunts &amp; LUXTJ</small></footer>
          </div>
        </article>

        <article className="result-card result-card-wide reveal">
          <header><span>LUXTJ · Hotel details</span><small>Project outcome</small></header>
          <div className="result-card-split">
            <div><strong className="result-metric">24% <i>→</i> 58%</strong><h3>Add-to-cart rate</h3></div>
            <p>Increased add-to-cart rate by prioritising decision-critical hotel information and guiding people towards a clear next step.</p>
          </div>
        </article>

        <article className="result-card result-card-small reveal">
          <header><span>LUXTJ · Profile</span><small>Project outcome</small></header>
          <strong className="result-metric">+70%</strong>
          <h3>Profile engagement</h3>
          <p>Turned an overwhelming multi-page profile into a guided journey with clearer starting points and behavioural design principles.</p>
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
            <button className="recommendation-link-trigger" type="button" onClick={() => setLinkedInRedirect(item.name)} aria-label={`View ${item.name}'s recommendation on LinkedIn`}>↗</button>
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
              <a href="https://linkedin.com/in/akshayproductdesigner" target="_blank" rel="noreferrer" onClick={() => setLinkedInRedirect(null)}>Continue to LinkedIn <span>↗</span></a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
