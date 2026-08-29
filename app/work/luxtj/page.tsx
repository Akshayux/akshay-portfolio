import type {Metadata} from 'next';
import Link from 'next/link';
import {Arrow,SiteFooter,SiteHeader} from '../../components';

export const metadata:Metadata={title:'LUXTJ Case Study',description:'How Akshay designed a connected luxury-travel booking experience across customer web and partner operations.'};

const principles=[
  ['01','Preserve context','Keep dates, travellers, selections and totals visible as people move through the journey.'],
  ['02','Reveal progressively','Show the detail needed for the current decision instead of the entire trip at once.'],
  ['03','Consequences first','Surface price, availability and policy implications before the user commits.'],
  ['04','Design for recovery','Make changes, missing information and changed plans understandable and recoverable.'],
];

const decisions=[
  {number:'01',title:'Keep the trip visible while users make decisions.',copy:'A persistent summary holds dates, travellers, selections and running totals close to each decision. People can inspect the whole journey without losing the page they are working on.',image:'/figma/case-3.png',trade:'This uses valuable screen space, but reduces the larger cost of memory, backtracking and uncertainty.'},
  {number:'02',title:'Make comparison feel calm, not crowded.',copy:'Filters and results follow a clear rhythm so travellers can narrow options, compare meaningful differences and open details without breaking the flow.',image:'/figma/case-10.png',trade:'The interface prioritises hierarchy over showing every possible option at once.'},
  {number:'03',title:'Give each hotel enough context to be chosen confidently.',copy:'Property cards connect imagery, location, package detail, inclusions and price so the important questions are answered before another page is opened.',image:'/figma/case-14.png',trade:'Fast scanning comes first; richer evidence remains available when the user needs it.'},
  {number:'04',title:'Treat booking review as a decision checkpoint.',copy:'Flights, stays, travellers and price are grouped into one understandable sequence. Each part remains traceable and editable before payment.',image:'/figma/case-6.png',trade:'Supporting edits adds interface and engineering states, but prevents the much worse outcome of restarting.'},
];

const supporting=[
  ['/figma/case-13.png','Traveller details','Repeatable forms keep validation local and make incomplete information visible.'],
  ['/figma/case-4.png','Flight selection','Shared patterns make duration, stops and fare conditions easier to compare.'],
  ['/figma/case-7.png','Hotel discovery','Filters, map context and richer results support a confident shortlist.'],
  ['/figma/case-12.png','Package confirmation','Selected products, price and the next required action remain connected.'],
];

function CaseKicker({children}:{children:React.ReactNode}){return <span className="eyebrow case-eyebrow">{children}</span>}

export default function LuxtjPage(){return <main id="top" className="case-page">
  <SiteHeader/>
  <aside className="case-toc" aria-label="Case study contents"><span>On this page</span><a href="#overview">Overview</a><a href="#problem">Problem</a><a href="#role">My role</a><a href="#decisions">Decisions</a><a href="#system">System</a><a href="#outcomes">Outcomes</a></aside>

  <section className="case-hero shell" id="overview">
    <div className="case-hero-copy reveal"><CaseKicker>LUXTJ · Product & UX case study</CaseKicker><h1 data-parallax-layer data-parallax-speed="10">Turning complex trip planning into one clear booking journey.</h1><p>I designed LUXTJ&apos;s customer website and partner extranet as a connected product ecosystem—bringing flights, hotels, travellers, pricing and trip details into a journey that feels calm enough for premium travel.</p></div>
    <dl className="case-summary reveal">
      <div><dt>Role</dt><dd>Lead Product Designer</dd></div><div><dt>Scope</dt><dd>Product thinking, UX, UI, design system</dd></div><div><dt>Timeline</dt><dd>12 months</dd></div><div><dt>Team</dt><dd>Founder, product and engineering</dd></div><div><dt>Surfaces</dt><dd>Customer web + partner extranet</dd></div><div><dt>Read time</dt><dd>12 minutes</dd></div>
    </dl>
  </section>

  <section className="case-hero-media reveal" data-parallax><img src="/figma/case-17.png" alt="LUXTJ customer travel website shown on desktop"/></section>

  <section className="case-section case-narrow reveal"><CaseKicker>Executive summary</CaseKicker><h2>I designed the complete journey, not only the interface.</h2><p className="case-lead">I designed the complete Luxury Travel website and extranet, connecting customer and internal workflows across web, extranet and mobile.</p><div className="case-three"><article><span>6+ core journeys</span><h3>From discovery to after booking.</h3><p>Discovery, planning, booking, payments and post-booking experiences were designed as one connected system.</p></article><article><span>3 platforms</span><h3>One shared component library.</h3><p>Reusable patterns improved consistency and made developer handoff more efficient across web, extranet and mobile.</p></article><article><span>Cross-functional delivery</span><h3>Requirements became buildable decisions.</h3><p>I worked with stakeholders and developers to clarify business needs and resolve edge cases before launch.</p></article></div></section>

  <section className="case-section case-narrow" id="problem">
    <div className="case-split"><div className="reveal"><CaseKicker>The product</CaseKicker><h2>Luxury travel is not a linear purchase.</h2></div><div className="reveal"><p>People move between dreaming and deciding. They compare flights and stays, involve other travellers, revisit dates and change their minds. The experience had to hold this complexity without making it feel complicated.</p><blockquote><small>Design question</small>How might we help travellers assemble a complex trip with confidence—without removing the detail they genuinely need?</blockquote></div></div>
    <div className="tension-grid reveal"><div><b>Inspiration</b><span>↔</span><b>Action</b></div><div><b>Choice</b><span>↔</span><b>Confidence</b></div><div><b>Flexibility</b><span>↔</span><b>Clarity</b></div><div><b>Premium</b><span>↔</span><b>Practical</b></div></div>
  </section>

  <section className="case-section case-wide ecosystem-section reveal"><CaseKicker>The ecosystem</CaseKicker><h2>One travel idea. Three connected products.</h2><div className="ecosystem-cards"><article><img src="/figma/case-11.png" alt="LUXTJ mobile application"/><span>Mobile app</span><h3>Inspiration in the pocket</h3><p>Discover destinations, save ideas and return when a trip becomes real.</p></article><article><img src="/figma/case-19.png" alt="LUXTJ customer website"/><span>Customer website</span><h3>Space to compare and plan</h3><p>Explore, evaluate and assemble a complex trip with more context.</p></article><article><img src="/figma/case-1.png" alt="LUXTJ partner extranet"/><span>Partner extranet</span><h3>Operations behind the promise</h3><p>Manage content, availability, pricing and bookings.</p></article></div></section>

  <section className="case-section case-narrow" id="role"><div className="case-split"><div className="reveal"><CaseKicker>My responsibility</CaseKicker><h2>From framing the problem to developer handoff.</h2></div><div className="responsibility-grid reveal"><article><span>Product thinking</span><p>Translated the mobile concept into web journeys and identified where desktop behaviour created new opportunities.</p></article><article><span>Information architecture</span><p>Connected destinations, search, hotels, flights, Bucket List and Travel Calendar.</p></article><article><span>UX & interaction design</span><p>Designed flows, selection patterns, information states, edge cases and responsive behaviour.</p></article><article><span>Design → development</span><p>Communicated behaviour, reviewed builds and resolved implementation questions with engineering.</p></article></div></div></section>

  <section className="case-section case-narrow reveal"><CaseKicker>Working principles</CaseKicker><h2>Four rules kept decisions consistent.</h2><div className="principle-grid">{principles.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-narrow architecture reveal"><CaseKicker>Journey architecture</CaseKicker><h2>Make every step answer the next important question.</h2><div className="decision-table"><div><b>Before</b><b>Question left open</b><b>Design response</b></div><div><span>Disconnected search screens</span><span>What have I already chosen?</span><span>Persistent trip context</span></div><div><span>Dense result cards</span><span>What makes this right for me?</span><span>Progressive hierarchy</span></div><div><span>Totals appear late</span><span>What will this decision cost?</span><span>Running price and consequences</span></div><div><span>Errors at submission</span><span>How do I recover?</span><span>Inline validation and editable review</span></div></div></section>

  <section className="case-section case-wide" id="decisions"><div className="case-section-heading reveal"><CaseKicker>Core design decisions</CaseKicker><h2>The choices that carried most of the product risk.</h2><p>Each decision below shows the design response and the cost I accepted—not just the final screen.</p></div><div className="decision-list">{decisions.map((item,index)=><article className="decision-card reveal" key={item.number}><div><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><small>Trade-off</small><strong>{item.trade}</strong></div><figure><img src={item.image} alt={item.title}/><figcaption>LUXTJ product interface · decision {index+1}</figcaption></figure></article>)}</div></section>

  <section className="case-section case-wide reveal"><CaseKicker>Supporting journeys</CaseKicker><h2>The small states carry real product risk.</h2><div className="support-grid">{supporting.map(([image,title,copy],index)=><article key={title}><img src={image} alt={title}/><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-wide system-section" id="system"><div className="case-section-heading reveal"><CaseKicker>Reusable interaction language</CaseKicker><h2>Repetition became a system.</h2><p>Cards, filters, selected states, summaries and actions repeat across the product. Familiar behaviour lowers the learning cost for users and removes ambiguity during delivery.</p></div><div className="system-images reveal"><img src="/figma/case-16.png" alt="LUXTJ reusable interface patterns"/><img src="/figma/case-20.png" alt="LUXTJ website design system"/></div></section>

  <section className="case-section case-narrow" id="outcomes"><div className="case-split"><div className="reveal"><CaseKicker>Outcomes</CaseKicker><h2>What changed—and what still needs evidence.</h2></div><div className="reveal"><p>The redesign produced a more coherent end-to-end journey, a shared interaction language across surfaces and a clearer specification for implementation. Because verified post-launch metrics are not available here, I am not presenting unsupported conversion claims.</p><h3 className="measure-title">What I would measure next</h3><ul className="measure-list"><li>Search-to-detail and detail-to-selection conversion</li><li>Where travellers edit, pause or abandon a journey</li><li>Recovery after availability or pricing changes</li><li>Support demand after booking review</li></ul></div></div></section>

  <section className="case-closing shell reveal"><span>Next</span><h2>Want to inspect the thinking together?</h2><p>I can walk through the flow, alternatives and delivery decisions in a portfolio conversation.</p><div><Link href="/work">← All work</Link><Link href="/contact">Start a conversation <Arrow/></Link></div></section>
  <SiteFooter/>
</main>}
