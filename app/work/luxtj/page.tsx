import type {Metadata} from 'next';
import Link from 'next/link';
import {Arrow,SiteFooter,SiteHeader} from '../../components';

export const metadata:Metadata={
  title:'LUXTJ Case Study - From Confusion to Clarity',
  description:'How Akshay designed LUXTJ v1, learned from real usage and led the redesign of four high-friction luxury-travel journeys.',
};

const chapters=[
  {
    number:'01',
    label:'Personal Travel Calendar · Learnability',
    title:'A calendar of dates did not yet feel like a reason to travel.',
    question:'How might personal milestones become useful travel inspiration without making setup feel like administration?',
    failed:'The original Personal Travel Calendar opened with an unfamiliar setup flow. Before adding anything, people spent about two minutes working out what the feature was for, which dates belonged there and what would happen next.',
    investigated:'I studied progressive disclosure, demonstration-led onboarding and familiar calendar patterns. People were being asked to organise information before seeing how a birthday, anniversary or meaningful moment could become a travel plan.',
    changed:'I introduced the feature through recognisable personal moments, showed the travel-planning benefit first and created one clear path for adding a date. Recommendations and next steps then appeared progressively, keeping the calendar useful and lightweight.',
    result:'30–50 sec',
    resultLabel:'to understand the Personal Travel Calendar, down from about 2 minutes',
    lesson:'Show how a personal date becomes a meaningful plan before asking people to maintain it.',
    image:'/figma/luxtj-ptc-before-after.png',
    imageAlt:'Redesigned LUXTJ Personal Travel Calendar experience',
  },
  {
    number:'02',
    label:'Checkout · Completion',
    title:'More information created less confidence.',
    question:'How do you keep essential trip details visible without making checkout feel endless?',
    failed:'The original checkout brought every decision, policy and trip detail into one long page. Users had to scan through too much information at once, contributing to a drop-off rate of nearly 60%.',
    investigated:'I audited checkout patterns across travel platforms, comparing how they sequence travellers, itinerary details, pricing, policies and payment. The strongest examples reduced memory load without hiding consequences.',
    changed:'I reorganised checkout into decision-sized groups, kept the trip summary and price visible, made sections editable and moved supporting detail closer to the moment it was needed.',
    result:'22%',
    resultLabel:'reduction in checkout completion time after redesign',
    lesson:'The checkout improved when every detail appeared beside the decision it affected, with an obvious route back to edit it.',
    image:'/figma/luxtj-checkout-before-after.png',
    imageAlt:'LUXTJ checkout before-and-after redesign comparison',
  },
  {
    number:'03',
    label:'Hotels · Decision speed',
    title:'The details were present, but people still could not choose confidently.',
    question:'What does a traveller need to know before a hotel feels safe to choose?',
    failed:'Hotel selection took the longest part of the journey. Important differences were difficult to scan, forcing people to open, compare and revisit options repeatedly.',
    investigated:'I reviewed hotel product-detail pages across travel websites and mapped the evidence people use to decide: location, inclusions, room differences, cancellation, price and the path forward.',
    changed:'I redesigned the description and room-selection pages around comparison. High-value evidence appears first; richer detail remains available progressively; price, policies and actions stay connected.',
    result:'Shorter path',
    resultLabel:'from hotel consideration to checkout, observed after redesign',
    lesson:'The hotel page was answering six questions at once. I prioritised the evidence people needed before booking and moved the supporting detail one step deeper.',
    image:'/figma/luxtj-hotel-before-after.png',
    imageAlt:'LUXTJ hotel selection before-and-after redesign comparison',
  },
  {
    number:'04',
    label:'Profile · Engagement',
    title:'The profile offered plenty of features and gave people no reason to begin.',
    question:'How can each profile step show enough value to earn the next one?',
    failed:'Profile interest was close to zero. Multiple pages and features were presented at once, with no obvious first step and no visible reason to complete them.',
    investigated:'I studied the existing behaviour, mapped where people stopped and explored the trigger–action–reward ideas in Hooked. The opportunity was to create momentum through visible value at each step.',
    changed:'I introduced one clear starting point, showed visible progress and used a trigger–action–reward structure to surface genuine travel-personalisation value.',
    result:'+70%',
    resultLabel:'time spent in the social profile experience',
    lesson:'Engagement grows when every small action reveals a meaningful next benefit.',
    image:'/figma/luxtj-profile-before-after.png',
    imageAlt:'LUXTJ traveller profile before-and-after redesign comparison',
  },
] as const;

const chapterLabels=[
  ['Where people got stuck','The pattern I followed','Where it landed','What stayed with me'],
  ['The information wall','What I compared','The rebuild','What changed in my practice'],
  ['The decision gap','What people needed','The page I shipped','The detail that mattered'],
] as const;

const process=[
  ['01','Observe','Watch where understanding, confidence or momentum breaks.'],
  ['02','Name the risk','Turn visible friction into one testable design question.'],
  ['03','Study patterns','Benchmark comparable journeys and the behaviour behind them.'],
  ['04','Simplify the path','Reorder information around the user’s next decision.'],
  ['05','Learn again','Compare behaviour after redesign and carry the lesson forward.'],
] as const;

const principles=[
  ['01','Explain before asking','Introduce the value of a new feature before asking people to complete a form.'],
  ['02','Keep context close','Keep dates, travellers, selections and price visible while decisions are being made.'],
  ['03','Prioritise the next decision','Put the evidence needed now first; keep deeper detail available progressively.'],
  ['04','Design the recovery','Make edits, missing information and changed plans understandable and recoverable.'],
] as const;

const supporting=[
  ['/figma/case-4.png','Flight selection','Shared patterns make duration, stops and fare conditions easier to compare.'],
  ['/figma/case-7.png','Hotel discovery','Filters, map context and richer results support a confident shortlist.'],
  ['/figma/case-12.png','Room selection','Policies, inclusions, price and the next action stay connected.'],
  ['/figma/luxtj-begin-your-journey.png','Trip planning entry','A clear introduction explains the value before asking people to add information.'],
] as const;

function CaseKicker({children}:{children:React.ReactNode}){return <span className="eyebrow case-eyebrow">{children}</span>}

export default function LuxtjPage(){return <main id="top" className="case-page luxtj-case">
  <SiteHeader/>
  <aside className="case-toc" aria-label="Case study contents"><span>On this page</span><a href="#overview" data-cursor-label="Jump">Overview</a><a href="#ecosystem" data-cursor-label="Jump">Ecosystem</a><a href="#failure" data-cursor-label="Jump">First failure</a><a href="#architecture" data-cursor-label="Jump">Architecture</a><a href="#process" data-cursor-label="Jump">Process</a><a href="#redesigns" data-cursor-label="Jump">Redesigns</a><a href="#learning" data-cursor-label="Jump">Learning</a></aside>

  <section className="case-hero shell" id="overview">
    <div className="case-hero-copy reveal"><CaseKicker>LUXTJ · Luxury travel website</CaseKicker><h1 data-parallax-layer data-parallax-speed="10">I designed v1. Real use gave me the brief for v2.</h1><p>I designed the first version of LUXTJ during my earlier freelance engagement. When people struggled to understand key features and complete important journeys, I owned that outcome and returned to lead the redesign. The work was about making complex travel decisions easier to understand, while working inside an evolving product system and delivery constraints.</p></div>
    <dl className="case-summary reveal">
      <div><dt>Role</dt><dd>Lead Product & UX Designer</dd></div><div><dt>Ownership</dt><dd>Research, flows, UI and validation</dd></div><div><dt>Timeline</dt><dd>12 months</dd></div><div><dt>Team</dt><dd>Founder, stakeholders and engineering</dd></div><div><dt>Scope</dt><dd>Website + connected product system</dd></div><div><dt>Read time</dt><dd>9 minutes</dd></div>
    </dl>
  </section>

  <section className="case-hero-media lux-hero-media reveal" data-parallax><img src="/optimized/luxtj-main.jpg" alt="LUXTJ personalised luxury-travel experience displayed on a laptop"/></section>

  <section className="lux-impact case-wide reveal" aria-label="Selected project outcomes">
    <div><strong>2 min → 30–50 sec</strong><span>Travel Calendar comprehension</span></div>
    <div><strong>~60%</strong><span>Checkout drop-off surfaced</span></div>
    <div><strong>22% faster</strong><span>Checkout completion</span></div>
    <div><strong>+70%</strong><span>Social-profile engagement</span></div>
  </section>

  <section className="lux-skim case-wide reveal" aria-label="LUXTJ case study at a glance">
    <div><CaseKicker>At a glance</CaseKicker><small>90-second summary</small></div>
    <ul><li><b>The problem</b><p>I designed v1, but it asked people to configure a Personal Travel Calendar, interpret dense checkout and navigate an unstructured profile before showing value.</p></li><li><b>The rules</b><p>The redesign had to work across an evolving web, mobile and partner ecosystem. I kept the trip context, prices and policies connected without making each screen feel overloaded.</p></li><li><b>My ownership</b><p>I framed the product questions, traced the friction, mapped journeys, set the hierarchy and worked through edge cases with the team through handoff.</p></li><li><b>The impact</b><p>People understood the Personal Travel Calendar in 30–50 sec, checkout completed 22% faster and profile engagement rose 70%.</p></li></ul>
  </section>

  <section className="case-section case-wide ecosystem-section reveal" id="ecosystem"><CaseKicker>The product I was shaping</CaseKicker><h2>One travel idea. Several moments that had to feel like one journey.</h2><ol className="journey-flow" aria-label="Connected LUXTJ customer journey"><li><span>01</span><strong>Discovery</strong></li><li><span>02</span><strong>Hotel details</strong></li><li><span>03</span><strong>Room choice</strong></li><li><span>04</span><strong>Cart</strong></li><li><span>05</span><strong>Checkout</strong></li><li><span>06</span><strong>Booking</strong></li><li><span>07</span><strong>Travel calendar</strong></li></ol><div className="ecosystem-cards"><article><img className="ecosystem-device-image ecosystem-mobile-image" src="/optimized/luxtj-mobile-three-phones.jpg" loading="lazy" decoding="async" alt="Three LUXTJ mobile application screens showing a package, hotel and personal travel list"/><span>Mobile app</span><h3>Inspiration in the pocket</h3><p>Discover destinations, save ideas and return when a trip becomes real.</p></article><article><img className="ecosystem-device-image" src="/optimized/luxtj-customer-website-laptop.jpg" loading="lazy" decoding="async" alt="LUXTJ customer website displayed on a laptop"/><span>Customer website</span><h3>Space to compare and plan</h3><p>Explore, evaluate and assemble a complex trip with more context.</p></article><article><img className="ecosystem-device-image" src="/optimized/luxtj-partner-extranet-bookings.jpg" loading="lazy" decoding="async" alt="LUXTJ partner extranet bookings and special-requests interface displayed on a laptop"/><span>Partner extranet</span><h3>Operations behind the promise</h3><p>Manage content, availability, pricing and bookings behind the customer experience.</p></article></div></section>

  <section className="case-section case-narrow lux-origin" id="failure">
    <div className="case-split"><div className="reveal"><CaseKicker>The uncomfortable start</CaseKicker><h2>I designed v1, and my first mistake was prioritising completeness over comprehension.</h2></div><div className="reveal"><p>During my first freelance engagement, I designed a product that tried to expose the richness of luxury travel immediately. In real use, that richness became work. New concepts looked like forms, checkout became an information wall, and profile options appeared without a reason to begin. Returning for the next engagement gave me the opportunity to own those decisions, learn from the evidence and lead a more focused redesign.</p><blockquote><small>What changed my direction</small>A finished-looking screen can still fail if a person cannot explain what it is for, what to do first or what happens next.</blockquote></div></div>
    <div className="lux-assumption-grid reveal">
      <article><span>My assumption</span><p>If all the useful options were visible, people would feel informed and in control.</p></article>
      <article><span>What I observed</span><p>More options increased interpretation time, backtracking and uncertainty.</p></article>
      <article><span>The design shift</span><p>Move from screen completeness to progressive understanding and decision support.</p></article>
    </div>
  </section>

  <section className="case-section case-narrow architecture reveal" id="architecture"><CaseKicker>Journey architecture</CaseKicker><h2>Every screen had to answer the next important question.</h2><div className="decision-table"><div><b>What was happening</b><b>Question left open</b><b>Design response</b></div><div><span>Disconnected search screens</span><span>What have I already chosen?</span><span>Persistent trip context</span></div><div><span>Dense result cards</span><span>What makes this right for me?</span><span>Progressive hierarchy</span></div><div><span>Totals appeared late</span><span>What will this decision cost?</span><span>Running price and consequences</span></div><div><span>Errors at submission</span><span>How do I recover?</span><span>Inline validation and editable review</span></div></div></section>

  <section className="case-section case-wide lux-process" id="process">
    <div className="case-section-heading reveal"><CaseKicker>How I worked through the mess</CaseKicker><h2>Failure became a repeatable design loop.</h2><p>I stopped treating each weak screen as an isolated UI issue. The same loop helped me find the underlying behaviour, redesign the journey and learn from the result.</p></div>
    <ol className="lux-process-list reveal">{process.map(([number,title,copy])=><li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    <div className="lux-process-outcome reveal"><div><CaseKicker>What came out of the loop</CaseKicker><h3>Four rules kept the product coherent as it grew.</h3></div><div className="principle-grid">{principles.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
  </section>

  <section className="case-section case-wide lux-redesigns" id="redesigns">
    <div className="case-section-heading reveal"><CaseKicker>Four contributions</CaseKicker><h2>The redesign unfolded differently in each journey.</h2><p>Each chapter begins with the friction and follows the decisions that shaped the final direction.</p></div>
    <div className="lux-story-list">
      {chapters.map((chapter,index)=><article className={`lux-story reveal ${index%2?'lux-story-reverse':''}`} key={chapter.number}>
        <div className="lux-story-copy">
          <header><span>{chapter.number}</span><small>{chapter.label}</small></header>
          <h3>{chapter.title}</h3>
          <p className="lux-story-question">{chapter.question}</p>
          {index===3?<div className="lux-story-profile-notes">
            <p>{chapter.failed} I mapped where people stopped, then used a clearer starting point and visible progress to make the value of each step easier to see.</p>
            <p>The trigger–action–reward restructure moved time spent in the profile up 70%, but drop-off still spikes at the second profile step. I have a theory about the amount of information requested there, but I have not tested it yet.</p>
          </div>:<>
            <div className="lux-story-steps">
              <section><small>{chapterLabels[index][0]}</small><p>{chapter.failed}</p></section>
              <section><small>{chapterLabels[index][1]}</small><p>{chapter.investigated}</p></section>
              <section><small>{chapterLabels[index][2]}</small><p>{chapter.changed}</p></section>
            </div>
            <div className="lux-story-result"><strong>{chapter.result}</strong><span>{chapter.resultLabel}</span></div>
            <blockquote><small>{chapterLabels[index][3]}</small>{chapter.lesson}</blockquote>
          </>}
        </div>
        <figure className="lux-story-visual"><img src={chapter.image} alt={chapter.imageAlt}/><figcaption>Final direction · LUXTJ {chapter.label.split(' · ')[0]}</figcaption></figure>
      </article>)}
    </div>
  </section>

  <section className="case-section case-narrow lux-contribution">
    <div className="case-split"><div className="reveal"><CaseKicker>My contribution</CaseKicker><h2>I carried the work from ambiguity into delivery.</h2></div><div className="reveal"><p>I took a loosely defined product idea, clarified the decisions it needed to support, studied user behaviour, mapped the journeys, set the information hierarchy and worked with developers to resolve edge cases before implementation.</p><div className="responsibility-grid"><article><span>Product framing</span><p>Converted loosely defined travel ideas into clear user problems and measurable questions.</p></article><article><span>Research & synthesis</span><p>Combined observed friction, comparative analysis and behavioural patterns into design direction.</p></article><article><span>UX & interface</span><p>Redesigned core flows, page hierarchy, component behaviour, validation and recovery states.</p></article><article><span>Design to delivery</span><p>Maintained a shared library across three platforms and worked closely with engineering through handoff.</p></article></div></div></div>
  </section>

  <section className="case-section case-wide reveal"><CaseKicker>Supporting journeys</CaseKicker><h2>The smaller states carried real product risk too.</h2><div className="support-grid">{supporting.map(([image,title,copy],index)=><article key={title}><img src={image} loading="lazy" decoding="async" alt={title}/><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-wide system-section"><div className="case-section-heading reveal"><CaseKicker>Making the learning reusable</CaseKicker><h2>The redesign became a shared product language.</h2><p>The same principles, including progressive disclosure, persistent context, visible consequences and clear recovery, were carried into reusable patterns across customer web, mobile and the partner extranet.</p></div><div className="system-images reveal"><img src="/optimized/luxtj-three-platform-system.jpg" loading="lazy" decoding="async" alt="LUXTJ shared experience across partner extranet, mobile app and customer website"/></div></section>

  <section className="case-section case-narrow" id="learning">
    <div className="case-split"><div className="reveal"><CaseKicker>Reflection</CaseKicker><h2>The fortnight that changed how I approached the project.</h2></div><div className="lux-reflection-note reveal"><p>I spent the first two weeks trying to fix checkout by moving things around visually before I realised the actual problem was that nobody understood what they were paying for until the last screen.</p><p>That was a wasted fortnight, but it was also the point where I stopped treating this as a UI job. From there, the work became a question of sequencing decisions, consequences and recovery.</p></div></div>
    <p className="lux-evidence-note reveal"><strong>Heads up.</strong> These figures come from the project data available during the work. A controlled A/B test was outside the project, so I trust the direction more than the exact number.</p>
  </section>

  <section className="case-closing shell reveal"><span>Next</span><h2>Want to talk through the messy middle?</h2><p>I can walk through the failed directions, research choices, alternatives and delivery decisions in a portfolio conversation.</p><div><Link href="/work" data-cursor-label="Back">← All work</Link><Link href="/contact" data-cursor-label="Open">Start a conversation <Arrow/></Link></div></section>
  <SiteFooter/>
</main>}
