import type {Metadata} from 'next';
import Link from 'next/link';
import {Arrow,SiteFooter,SiteHeader} from '../../components';

export const metadata:Metadata={
  title:'LUXTJ Case Study — From Confusion to Clarity',
  description:'How Akshay learned from an unclear first version and redesigned four high-friction journeys across the LUXTJ luxury-travel website.',
};

const chapters=[
  {
    number:'01',
    label:'Bucket List · Learnability',
    title:'The feature existed. The idea did not land.',
    question:'How do you teach a new travel-planning concept without making people study the interface?',
    failed:'The original Bucket List opened like a form. Before entering anything, people spent about two minutes working out what the feature was for and where to begin.',
    investigated:'I studied how product tours, progressive disclosure and demonstration-led layouts introduce unfamiliar features. The problem was not the fields themselves—it was asking for effort before showing value.',
    changed:'I replaced the all-at-once form with a context-setting entry, a clear starting point and a progressive flow that demonstrated the benefit before asking for information.',
    result:'30–50 sec',
    resultLabel:'to understand the feature, down from about 2 minutes',
    lesson:'Explain the reward before asking users to invest effort.',
    image:'/figma/case-20.png',
    imageAlt:'Redesigned LUXTJ Bucket List discovery experience',
    imageClass:'lux-story-visual-tall',
  },
  {
    number:'02',
    label:'Checkout · Completion',
    title:'More information created less confidence.',
    question:'How do you keep essential trip details visible without making checkout feel endless?',
    failed:'The first checkout page brought too much information into one place. Users felt overwhelmed and the journey showed a drop-off rate of nearly 60%.',
    investigated:'I audited checkout patterns across travel platforms, comparing how they sequence travellers, itinerary details, pricing, policies and payment. The strongest examples reduced memory load without hiding consequences.',
    changed:'I reorganised checkout into decision-sized groups, kept the trip summary and price visible, made sections editable and moved supporting detail closer to the moment it was needed.',
    result:'22%',
    resultLabel:'reduction in checkout completion time after redesign',
    lesson:'Fast checkout is created by hierarchy and recovery—not by removing every detail.',
    image:'/figma/case-3.png',
    imageAlt:'Redesigned LUXTJ checkout and trip summary page',
  },
  {
    number:'03',
    label:'Hotels · Decision speed',
    title:'The details were present, but not decision-ready.',
    question:'What does a traveller need to know before a hotel feels safe to choose?',
    failed:'Hotel selection took the longest part of the journey. Important differences were difficult to scan, forcing people to open, compare and revisit options repeatedly.',
    investigated:'I reviewed hotel product-detail pages across travel websites and mapped the evidence people use to decide: location, inclusions, room differences, cancellation, price and the path forward.',
    changed:'I redesigned the description and room-selection pages around comparison. High-value evidence appears first; richer detail remains available progressively; price, policies and actions stay connected.',
    result:'Shorter path',
    resultLabel:'from hotel consideration to checkout, observed after redesign',
    lesson:'A useful detail page does not show everything equally—it answers the next decision first.',
    image:'/figma/case-14.png',
    imageAlt:'Redesigned LUXTJ hotel room selection page',
  },
  {
    number:'04',
    label:'Profile · Engagement',
    title:'A list of features is not a reason to start.',
    question:'How can profile creation feel like progress rather than administration?',
    failed:'Profile interest was close to zero. Multiple pages and features were presented at once, with no obvious first step and no visible reason to complete them.',
    investigated:'I studied the existing behaviour, mapped where people stopped and explored the trigger–action–reward ideas in Hooked. The opportunity was to create momentum, not add another reminder.',
    changed:'I introduced one clear starting point, showed visible progress and used useful travel-personalisation outcomes to create curiosity about what completing the profile would unlock.',
    result:'+70%',
    resultLabel:'time spent in the social profile experience',
    lesson:'Engagement grows when every small action reveals a meaningful next benefit.',
    image:'/figma/case-13.png',
    imageAlt:'LUXTJ traveller profile details interface',
    imageClass:'lux-story-visual-tall',
  },
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
  ['/figma/case-18.png','Travel Calendar','Saved ideas become a useful plan instead of a dead-end list.'],
] as const;

function CaseKicker({children}:{children:React.ReactNode}){return <span className="eyebrow case-eyebrow">{children}</span>}

export default function LuxtjPage(){return <main id="top" className="case-page luxtj-case">
  <SiteHeader/>
  <aside className="case-toc" aria-label="Case study contents"><span>On this page</span><a href="#overview">Overview</a><a href="#ecosystem">Ecosystem</a><a href="#failure">First failure</a><a href="#architecture">Architecture</a><a href="#process">Process</a><a href="#redesigns">Redesigns</a><a href="#learning">Learning</a></aside>

  <section className="case-hero shell" id="overview">
    <div className="case-hero-copy reveal"><CaseKicker>LUXTJ · Luxury travel website</CaseKicker><h1 data-parallax-layer data-parallax-speed="10">From messy ideas to a product people could understand.</h1><p>The first version looked complete, but people struggled to understand key features and finish important journeys. I used that failure to redesign the product around learnability, decision speed and confidence.</p></div>
    <dl className="case-summary reveal">
      <div><dt>Role</dt><dd>Lead Product & UX Designer</dd></div><div><dt>Ownership</dt><dd>Research, flows, UI and validation</dd></div><div><dt>Timeline</dt><dd>12 months</dd></div><div><dt>Team</dt><dd>Founder, stakeholders and engineering</dd></div><div><dt>Scope</dt><dd>Website + connected product system</dd></div><div><dt>Read time</dt><dd>9 minutes</dd></div>
    </dl>
  </section>

  <section className="case-hero-media lux-hero-media reveal" data-parallax><img src="/figma/case-17.png" alt="LUXTJ luxury-travel website shown on a desktop display"/></section>

  <section className="lux-impact case-wide reveal" aria-label="Selected project outcomes">
    <div><strong>2 min → 30–50 sec</strong><span>Bucket List comprehension</span></div>
    <div><strong>~60%</strong><span>Checkout drop-off surfaced</span></div>
    <div><strong>22% faster</strong><span>Checkout completion</span></div>
    <div><strong>+70%</strong><span>Social-profile engagement</span></div>
  </section>

  <section className="case-section case-wide ecosystem-section reveal" id="ecosystem"><CaseKicker>The product I was shaping</CaseKicker><h2>One travel idea. Several moments that had to feel like one journey.</h2><div className="ecosystem-cards"><article><img src="/figma/case-11.png" alt="LUXTJ mobile application"/><span>Mobile app</span><h3>Inspiration in the pocket</h3><p>Discover destinations, save ideas and return when a trip becomes real.</p></article><article><img src="/figma/case-19.png" alt="LUXTJ customer website"/><span>Customer website</span><h3>Space to compare and plan</h3><p>Explore, evaluate and assemble a complex trip with more context.</p></article><article><img src="/figma/case-1.png" alt="LUXTJ partner extranet"/><span>Partner extranet</span><h3>Operations behind the promise</h3><p>Manage content, availability, pricing and bookings behind the customer experience.</p></article></div></section>

  <section className="case-section case-narrow lux-origin" id="failure">
    <div className="case-split"><div className="reveal"><CaseKicker>The uncomfortable start</CaseKicker><h2>My first mistake was designing for completeness before comprehension.</h2></div><div className="reveal"><p>The initial product tried to expose the richness of luxury travel immediately. In practice, that richness became work. New concepts looked like forms, checkout became an information wall, and profile options appeared without a reason to begin.</p><blockquote><small>What changed my direction</small>A finished-looking screen can still fail if a person cannot explain what it is for, what to do first or what happens next.</blockquote></div></div>
    <div className="lux-assumption-grid reveal">
      <article><span>My assumption</span><p>If all the useful options were visible, people would feel informed and in control.</p></article>
      <article><span>What I observed</span><p>More options increased interpretation time, backtracking and uncertainty.</p></article>
      <article><span>The design shift</span><p>Move from screen completeness to progressive understanding and decision support.</p></article>
    </div>
  </section>

  <section className="case-section case-narrow architecture reveal" id="architecture"><CaseKicker>Journey architecture</CaseKicker><h2>Every screen had to answer the next important question.</h2><div className="decision-table"><div><b>What was happening</b><b>Question left open</b><b>Design response</b></div><div><span>Disconnected search screens</span><span>What have I already chosen?</span><span>Persistent trip context</span></div><div><span>Dense result cards</span><span>What makes this right for me?</span><span>Progressive hierarchy</span></div><div><span>Totals appeared late</span><span>What will this decision cost?</span><span>Running price and consequences</span></div><div><span>Errors at submission</span><span>How do I recover?</span><span>Inline validation and editable review</span></div></div></section>

  <section className="case-section case-narrow reveal"><CaseKicker>Working principles</CaseKicker><h2>Four rules kept the product coherent as it grew.</h2><div className="principle-grid">{principles.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-wide lux-process" id="process">
    <div className="case-section-heading reveal"><CaseKicker>How I worked through the mess</CaseKicker><h2>Failure became a repeatable design loop.</h2><p>I stopped treating each weak screen as an isolated UI issue. The same loop helped me find the underlying behaviour, redesign the journey and learn from the result.</p></div>
    <ol className="lux-process-list reveal">{process.map(([number,title,copy])=><li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
  </section>

  <section className="case-section case-wide lux-redesigns" id="redesigns">
    <div className="case-section-heading reveal"><CaseKicker>Four contributions</CaseKicker><h2>What failed, what I changed and what I learned.</h2><p>Each chapter starts with the friction—not the final mock-up—so the design decisions and my contribution stay visible.</p></div>
    <div className="lux-story-list">
      {chapters.map((chapter,index)=><article className={`lux-story reveal ${index%2?'lux-story-reverse':''}`} key={chapter.number}>
        <div className="lux-story-copy">
          <header><span>{chapter.number}</span><small>{chapter.label}</small></header>
          <h3>{chapter.title}</h3>
          <p className="lux-story-question">{chapter.question}</p>
          <div className="lux-story-steps">
            <section><small>What failed</small><p>{chapter.failed}</p></section>
            <section><small>What I investigated</small><p>{chapter.investigated}</p></section>
            <section><small>What I changed</small><p>{chapter.changed}</p></section>
          </div>
          <div className="lux-story-result"><strong>{chapter.result}</strong><span>{chapter.resultLabel}</span></div>
          <blockquote><small>What I learned</small>{chapter.lesson}</blockquote>
        </div>
        <figure className={`lux-story-visual ${chapter.imageClass||''}`}><img src={chapter.image} alt={chapter.imageAlt}/><figcaption>Final direction · LUXTJ {chapter.label.split(' · ')[0]}</figcaption></figure>
      </article>)}
    </div>
  </section>

  <section className="case-section case-narrow lux-contribution">
    <div className="case-split"><div className="reveal"><CaseKicker>My contribution</CaseKicker><h2>I carried the work from ambiguity into delivery.</h2></div><div className="reveal"><p>I clarified the product idea, studied user behaviour, mapped journeys, explored patterns, redesigned the information hierarchy and worked with developers to resolve edge cases before implementation.</p><div className="responsibility-grid"><article><span>Product framing</span><p>Converted loosely defined travel ideas into clear user problems and measurable questions.</p></article><article><span>Research & synthesis</span><p>Combined observed friction, comparative analysis and behavioural patterns into design direction.</p></article><article><span>UX & interface</span><p>Redesigned core flows, page hierarchy, component behaviour, validation and recovery states.</p></article><article><span>Design to delivery</span><p>Maintained a shared library across three platforms and worked closely with engineering through handoff.</p></article></div></div></div>
  </section>

  <section className="case-section case-wide reveal"><CaseKicker>Supporting journeys</CaseKicker><h2>The smaller states carried real product risk too.</h2><div className="support-grid">{supporting.map(([image,title,copy],index)=><article key={title}><img src={image} alt={title}/><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-wide system-section"><div className="case-section-heading reveal"><CaseKicker>Making the learning reusable</CaseKicker><h2>The redesign became a shared product language.</h2><p>The same principles—progressive disclosure, persistent context, visible consequences and clear recovery—were carried into reusable patterns across customer web, mobile and the partner extranet.</p></div><div className="system-images reveal"><img src="/figma/case-16.png" alt="LUXTJ hotel comparison component pattern"/><img src="/figma/case-20.png" alt="LUXTJ website interface system"/></div></section>

  <section className="case-section case-narrow" id="learning">
    <div className="case-split"><div className="reveal"><CaseKicker>Reflection</CaseKicker><h2>The best outcome was a better way of designing.</h2></div><div className="lux-learning-list reveal"><article><span>01</span><h3>Comprehension comes before conversion.</h3><p>If people cannot explain the value, optimising the action is premature.</p></article><article><span>02</span><h3>Hierarchy is a product decision.</h3><p>What appears first shapes confidence, speed and the quality of every choice after it.</p></article><article><span>03</span><h3>Failure needs a diagnosis, not decoration.</h3><p>Changing the visual layer would not have fixed unclear concepts or missing starting points.</p></article><article><span>04</span><h3>Instrument the next version early.</h3><p>I now define the behaviour to measure alongside the experience, not after the design is finished.</p></article></div></div>
    <p className="lux-evidence-note reveal"><strong>Evidence note.</strong> Figures shown here reflect project observations and product data available during the work. Where exact instrumentation was limited, I describe the result directionally rather than inventing precision.</p>
  </section>

  <section className="case-closing shell reveal"><span>Next</span><h2>Want to talk through the messy middle?</h2><p>I can walk through the failed directions, research choices, alternatives and delivery decisions in a portfolio conversation.</p><div><Link href="/work">← All work</Link><Link href="/contact">Start a conversation <Arrow/></Link></div></section>
  <SiteFooter/>
</main>}
