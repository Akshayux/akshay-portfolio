import type {Metadata} from 'next';
import Link from 'next/link';
import {Arrow,SiteFooter,SiteHeader} from '../../components';

export const metadata:Metadata={title:'LUXTJ Extranet Case Study',description:'Designing the partner and internal workflows behind LUXTJ across listings, bookings, staff, offers and payments.'};

const modules=[
  ['01','Listings','Create and maintain property information, imagery, amenities and experience details.'],
  ['02','Bookings','Keep reservation context, status and required partner actions visible.'],
  ['03','Staff','Support clear roles and access without exposing unnecessary controls.'],
  ['04','Offers','Manage discounts and promotional availability as structured product content.'],
  ['05','Payments','Connect earnings, payment status and operational follow-up.'],
  ['06','Support','Give partners a predictable route to guidance and issue resolution.'],
];

const principles=[
  ['Progressive complexity','Frequent actions stay visible; specialist settings appear only when relevant.'],
  ['Operational context','Status, ownership and next actions travel with each booking or listing.'],
  ['Safe changes','Destructive and financially meaningful actions explain their consequence before commitment.'],
  ['Shared language','Components and labels stay consistent across customer web, extranet and mobile.'],
];

function Kicker({children}:{children:React.ReactNode}){return <span className="eyebrow case-eyebrow">{children}</span>}

export default function ExtranetPage(){return <main id="top" className="case-page extranet-case">
  <SiteHeader/>
  <aside className="case-toc" aria-label="Case study contents"><span>On this page</span><a href="#overview" data-cursor-label="Jump">Overview</a><a href="#challenge" data-cursor-label="Jump">Challenge</a><a href="#scope" data-cursor-label="Jump">Scope</a><a href="#system" data-cursor-label="Jump">System</a><a href="#delivery" data-cursor-label="Jump">Delivery</a></aside>

  <section className="case-hero shell" id="overview">
    <div className="case-hero-copy reveal"><Kicker>LUXTJ Extranet · Product & UX case study</Kicker><h1 data-parallax-layer data-parallax-speed="10">Designing the operations behind a luxury trip.</h1><p>The extranet connects the customer promise to the partner work required to fulfil it, from listing content and availability to bookings, offers, staff and payments.</p></div>
    <dl className="case-summary reveal"><div><dt>Role</dt><dd>Lead Product & UX Designer</dd></div><div><dt>Scope</dt><dd>UX, UI, workflows, component library</dd></div><div><dt>Context</dt><dd>B2B partner operations</dd></div><div><dt>Platforms</dt><dd>Web, extranet and mobile</dd></div><div><dt>Team</dt><dd>Stakeholders and developers</dd></div><div><dt>Status</dt><dd>Implementation-ready design</dd></div></dl>
  </section>

  <section className="case-hero-media extranet-hero-media reveal" data-parallax><img src="/figma/luxtj-extranet-booking-dashboard.png" alt="LUXTJ partner extranet booking dashboard displayed on a desktop monitor"/></section>

  <section className="case-section case-narrow reveal"><Kicker>Executive summary</Kicker><h2>One ecosystem across customer and internal workflows.</h2><p className="case-lead">I designed the complete Luxury Travel website and extranet, connecting customer and internal workflows across web, extranet and mobile.</p><div className="case-three"><article><span>6+ core journeys</span><h3>Connected around the trip.</h3><p>Discovery, planning, booking, payments and post-booking experiences were improved as related journeys.</p></article><article><span>3 platforms</span><h3>A shared component library.</h3><p>Reusable patterns improved design consistency and made developer handoff more efficient.</p></article><article><span>Delivery</span><h3>Requirements made concrete.</h3><p>Close stakeholder and developer collaboration helped resolve edge cases before launch.</p></article></div></section>

  <section className="case-section case-narrow" id="challenge"><div className="case-split"><div className="reveal"><Kicker>The challenge</Kicker><h2>The interface had to help partners complete real operational tasks.</h2></div><div className="reveal"><p>Partners need to move between content, bookings, people and money while preserving the context of what they are managing. A dashboard can look clean and still fail if ownership, status or the next action is unclear.</p><blockquote><small>Design question</small>How might the extranet make complex partner operations feel predictable without hiding the detail people need to do the work?</blockquote></div></div></section>

  <section className="case-section case-wide" id="scope"><div className="case-section-heading reveal"><Kicker>Core modules</Kicker><h2>Six areas. One operational language.</h2><p>The navigation follows the partner&apos;s responsibilities instead of mirroring the internal organisation of the business.</p></div><div className="module-grid">{modules.map(([number,title,copy])=><article className="reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-wide evidence-band reveal"><div><Kicker>Selected interface</Kicker><h2>Listings combine rich content with clear operational control.</h2><p>Property imagery and customer-facing details remain recognisable, while administrative actions, settings and states are organised around the job the partner needs to complete.</p></div><figure><img src="/figma/luxtj-extranet-listings.png" alt="LUXTJ extranet listing management displayed on a desktop monitor"/><figcaption>Partner listing management · desktop</figcaption></figure></section>

  <section className="case-section case-narrow reveal" id="system"><Kicker>Interaction principles</Kicker><h2>Consistency lowers the cost of complex work.</h2><div className="principle-grid">{principles.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

  <section className="case-section case-wide system-section"><div className="case-section-heading reveal"><Kicker>Shared component library</Kicker><h2>One system across three platforms.</h2><p>Buttons, cards, filters, forms, statuses and summaries use the same interaction logic across customer web, partner extranet and mobile. The visual expression adapts; the behaviour stays familiar.</p></div><div className="system-images system-images-single reveal"><img src="/figma/luxtj-three-platform-system.png" alt="LUXTJ shared system across partner extranet, mobile app and customer website"/></div></section>

  <section className="case-section case-narrow" id="delivery"><div className="case-split"><div className="reveal"><Kicker>Design to delivery</Kicker><h2>Resolve ambiguity before it becomes rework.</h2></div><div className="reveal"><p>I worked closely with stakeholders and developers to turn business requirements into clear, implementation-ready designs. Reviews focused on behaviour, missing states and edge cases, not only visual matching.</p><h3 className="measure-title">What the handoff made explicit</h3><ul className="measure-list"><li>Role, status and permission states</li><li>Validation and recovery behaviour</li><li>Empty, loading and incomplete states</li><li>Responsive component behaviour</li></ul></div></div></section>

  <section className="case-closing shell reveal"><span>Next case study</span><h2>ScotCare: designing from panic to plan.</h2><p>An evidence-informed university project about safer, clearer care navigation in Scotland.</p><div><Link href="/work" data-cursor-label="Back">← All work</Link><Link href="/work/scotcare" data-cursor-label="View">Read ScotCare <Arrow/></Link></div></section>
  <SiteFooter/>
</main>}
