import type {Metadata} from 'next';
import Link from 'next/link';
import {Arrow,SiteFooter,SiteHeader} from '../../components';

export const metadata:Metadata={title:'ScotCare Case Study',description:'ScotCare is an evidence-informed academic care-navigation concept for patients in Scotland, designed around safety, clarity and continuity.'};

const researchSteps=[
  ['01','Review','Published evidence on digital triage, safety-netting, patient communication and appointment preparation.'],
  ['02','Synthesize','Recurring breakdowns became experience principles and explicit design requirements.'],
  ['03','Model','Three provisional scenarios explored urgent, uncertain and lower-risk care situations.'],
  ['04','Design','Journey maps, information architecture and low-to-high fidelity prototypes connected the service.'],
  ['05','Evaluate','Scenario walkthroughs, heuristic checks, accessibility review and formative industry feedback.'],
];

const priorities=[
  ['Safety','Urgent warning signs interrupt the routine flow and preserve access to human-led care.'],
  ['Clarity','The interface explains what it understood, why a route is suggested and what happens next.'],
  ['Continuity','Waiting, preparation, follow-up and recovery remain part of the same journey.'],
];

function Kicker({children}:{children:React.ReactNode}){return <span className="eyebrow case-eyebrow">{children}</span>}

export default function ScotCarePage(){return <main id="top" className="case-page scotcare-case">
  <SiteHeader/>
  <aside className="case-toc" aria-label="Case study contents"><span>On this page</span><a href="#overview" data-cursor-label="Jump">Overview</a><a href="#problem" data-cursor-label="Jump">Problem</a><a href="#research" data-cursor-label="Jump">Research</a><a href="#experience" data-cursor-label="Jump">Experience</a><a href="#reflection" data-cursor-label="Jump">Reflection</a></aside>

  <section className="case-hero shell" id="overview"><div className="case-hero-copy reveal"><Kicker>ScotCare · University UX project</Kicker><h1 data-parallax-layer data-parallax-speed="10">From “I don&apos;t know what to do” to “I understand what happens next.”</h1><p>An evidence-informed care-navigation concept for people in Scotland, designed to reduce uncertainty before, during and after contact with human-led healthcare.</p></div><dl className="case-summary reveal"><div><dt>Role</dt><dd>Independent UX & Product Designer</dd></div><div><dt>Course</dt><dd>MA Digital Design & Innovation</dd></div><div><dt>University</dt><dd>Heriot-Watt University</dd></div><div><dt>Year</dt><dd>2026</dd></div><div><dt>Methods</dt><dd>Evidence synthesis to prototype</dd></div><div><dt>Status</dt><dd>Academic concept</dd></div></dl></section>

  <section className="case-hero-media scotcare-hero-media reveal" data-parallax><img src="/scotcare/mobile-mockup-cover.png" alt="ScotCare connected care-navigation experience across five mobile screens"/></section>

  <section className="case-section case-narrow reveal"><Kicker>Project position</Kicker><h2>Care navigation with a clear boundary around diagnosis.</h2><p className="case-lead">ScotCare helps a patient describe a concern, recognise when urgent help may be required, understand a suggested care route and stay supported while waiting, preparing and following up.</p><div className="case-three">{priorities.map(([title,copy])=><article key={title}><span>Design priority</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="case-disclaimer"><strong>Important:</strong> ScotCare is an independent academic concept with no affiliation to NHS Scotland. It offers no diagnosis or prescription and has no clinical validation.</p></section>

  <section className="case-section case-narrow" id="problem"><div className="case-split"><div className="reveal"><Kicker>The problem</Kicker><h2>Information exists. Confidence can still break.</h2></div><div className="reveal"><p>When someone feels unwell, they may need to choose between a GP, community pharmacy, NHS 24, A&amp;E, 999 or self-care. The challenge is not simply finding services; it is translating information into a confident, timely action while anxious or in pain.</p><blockquote><small>Research question</small>How might an AI-supported care-navigation service reduce uncertainty while maintaining safety and continuity before and after appointments?</blockquote></div></div></section>

  <section className="case-section case-wide" id="research"><div className="case-section-heading reveal"><Kicker>Research approach</Kicker><h2>Evidence changed the proposition.</h2><p>The project moved away from an unsafe “all-in-one NHS app” idea towards a constrained navigation and communication layer that preserves human clinical judgement.</p></div><div className="research-step-list">{researchSteps.map(([number,title,copy])=><article className="reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-wide scotcare-gallery" id="experience"><div className="case-section-heading reveal"><Kicker>Final experience</Kicker><h2>A connected journey from concern to follow-up.</h2><p>Each stage keeps the route, reason and next action visible while care moves between digital guidance and people.</p></div><ol className="journey-flow journey-flow-care reveal" aria-label="Connected ScotCare service journey"><li><span>01</span><strong>Concern</strong></li><li><span>02</span><strong>Triage</strong></li><li><span>03</span><strong>Care route</strong></li><li><span>04</span><strong>Appointment</strong></li><li><span>05</span><strong>Preparation</strong></li><li><span>06</span><strong>Waiting</strong></li><li><span>07</span><strong>Follow-up</strong></li></ol><div className="report-grid"><figure className="reveal"><img src="/scotcare/home.png" alt="ScotCare welcome and home experience"/><figcaption>01 · A clear starting point</figcaption></figure><figure className="reveal"><img src="/scotcare/recommendation.png" alt="ScotCare explained care recommendation"/><figcaption>02 · A route, reason and next action</figcaption></figure><figure className="reveal"><img src="/scotcare/preparation.png" alt="ScotCare appointment preparation experience"/><figcaption>03 · Preparing for human care</figcaption></figure><figure className="reveal"><img src="/scotcare/monitoring.png" alt="ScotCare symptom monitoring and follow-up"/><figcaption>04 · Safety-netting after the decision</figcaption></figure></div></section>

  <section className="case-section case-wide evidence-band reveal"><div><Kicker>Responsive behaviour</Kicker><h2>The priority stays stable as the layout expands.</h2><p>Mobile remained the primary format. Tablet and desktop adapt the same content hierarchy through flexible containers and reusable components, while urgent and primary actions remain prominent.</p></div><figure><img src="/scotcare/responsive.png" alt="ScotCare mobile tablet and desktop layouts"/><figcaption>Responsive concept · mobile, tablet and desktop</figcaption></figure></section>

  <section className="case-section case-narrow"><div className="case-split"><div className="reveal"><Kicker>Iteration</Kicker><h2>Safety changed the visual hierarchy.</h2></div><div className="reveal"><p>An earlier home screen hid urgent options inside an expandable card. The revised design keeps 999, NHS 24 and A&amp;E guidance directly visible, because reducing density was not worth adding friction before safety-critical information.</p><img className="inline-report-image" src="/scotcare/refinement.png" alt="ScotCare emergency support design refinement"/></div></div></section>

  <section className="case-section case-narrow" id="reflection"><div className="case-split"><div className="reveal"><Kicker>Critical reflection</Kicker><h2>A polished interface cannot prove a healthcare service is safe.</h2></div><div className="reveal"><p>The project was evaluated through secondary research, scenario walkthroughs, heuristic and accessibility checks, plus limited formative industry feedback. It did not include patient or healthcare-professional recruitment, participant usability testing or clinical validation.</p><h3 className="measure-title">The responsible next step</h3><ul className="measure-list"><li>Ethically approved patient research</li><li>Clinical-professional review</li><li>Formal accessibility and safety assessment</li><li>Incremental testing of navigation and appointment preparation</li></ul></div></div></section>

  <section className="case-closing shell reveal"><span>Explore more</span><h2>The academic work behind ScotCare.</h2><p>The complete design project and critical report document the evidence, decisions, limitations and final prototype in depth.</p><div><Link href="/work" data-cursor-label="Back">← All work</Link><Link href="/contact" data-cursor-label="Open">Discuss the project <Arrow/></Link></div></section>
  <SiteFooter/>
</main>}
