import type {Metadata} from 'next';
import {ConnectPanel,IdentityCard,PageFooter,SiteHeader} from '../components';

export const metadata:Metadata={title:'About',description:'About Akshay — a UX and digital product designer working across AI, SaaS, enterprise and mobile products.'};

const experience=[
  {company:'The View Magazine CIC',role:'Volunteer UX/UI Designer',place:'United Kingdom',date:'Dec 2025- Present',copy:'Designed a mobile-first digital magazine experience for readers to discover, preview and access magazine issues easily. Worked on landing page structure, issue browsing, archive flow and reading experience for future publications. Improved clarity by bringing the latest issue within 1–2 key actions from the homepage.'},
  {company:'LUXTJ Website & Extranet',role:'Contract UX/UI Designer',place:'Remote',date:'Aug 2025- May 2026',copy:'Designed a luxury travel website and partner extranet for hotels, villas and travel partners. Created flows for booking, onboarding, pricing, availability, payments, promotions and support tickets. Designed 8+ core modules to simplify complex partner operations and improve task efficiency.'},
  {company:'Proficon Labs',role:'UX Designer',place:'India, Hyderabad',date:'Oct 2024- August 2025',copy:'Worked on enterprise dashboards, CRM flows and AI-supported website-building product experiences. Focused on simplifying complex business tools through clearer navigation, layouts and user flows. Contributed to product redesigns improving operational clarity, including faster inventory and checkout workflows.'},
  {company:'Halohues Studios',role:'UX/UI Designer',place:'India, Hyderabad',date:'Jan 2024- Oct 2024',copy:'Designed web and mobile interfaces for client projects from wireframes to high-fidelity UI. Built responsive layouts, reusable components and developer-ready design handoff files. Improved design consistency across projects by creating scalable UI patterns and structured Figma files.'},
  {company:'LUXTJ Mobile application',role:'Freelance UX/UI Designer',place:'India, Remote',date:'Dec 2023- Aug 2024',copy:'Designed a premium mobile travel app for destination discovery, hotel browsing and trip planning. Created flows for curated recommendations, hotel details, saved trips and booking journeys. Simplified the user journey from discover → compare → save → book for easier decision-making.'},
  {company:'Bratha (India) Private Limited',role:'UX/UI Designer',place:'India, Remote',date:'Jul 2023- Oct 2023',copy:'Designed product flows and UI screens for a digital platform focused on usability and clarity. Worked on wireframes, responsive layouts, visual design and development handoff. Improved interface consistency through reusable components and clearer information hierarchy.'},
  {company:'Astro Sutra',role:'Freelance UX/UI Designer',place:'India, Remote',date:'Oct 2022- Mar 2023',copy:'Designed a mobile astrology service platform for astrologer discovery and consultation booking. Created screens for onboarding, astrologer profiles, service details and booking actions. Improved trust and clarity through better content hierarchy, profile structure and call-to-action placement.'},
  {company:'Match Scope',role:'Freelance UX/UI Designer',place:'India, Remote',date:'Jan 2022- July 2022',copy:'Designed an astrology-based match prediction app from onboarding to compatibility results. Simplified complex user inputs into step-by-step mobile forms and clear result screens. Reduced cognitive load by making the prediction journey easier to complete and understand.'},
];

const tags=['AI Tools','AI Experiences','Enterprise dashboards','Education Systems','UX Research','B2B Platforms','Product Strategy'];

export default function AboutPage(){return <main className="about-page">
  <SiteHeader/>
  <section className="about-outer page-shell">
    <h1 className="about-title reveal">ABOUT</h1>
    <div className="about-inner">
      <section className="about-intro reveal">
        <div><h2>Good to see you here, I&apos;m Akshay</h2><p>I&apos;m a UX and Digital Product Designer pursuing my Master&apos;s in Design in the UK. I design human-centred digital products across AI tools, SaaS platforms, dashboards, and mobile applications — with a focus on clarity, usability, and business impact.</p><div className="about-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>
        <div className="about-portrait parallax-card"><img src="/figma/about-photo-v2.png" alt="Akshay standing beside the sea"/></div>
        <IdentityCard/>
      </section>

      <section className="belief reveal">
        <div className="chapter-label"><span>DESIGN BELIEF</span><b>×</b></div>
        <div className="belief-layout"><h2>Good design removes<br/>the thinking users<br/>should never have to<br/>do.</h2><div><p>My process starts before the screen. I look at user behaviour, business goals, task flows, constraints and moments of confusion. Then I translate that into clear information architecture, focused interfaces and scalable systems.</p><div className="belief-points"><span>Reduce friction before adding features</span><span>Make complex systems feel simple</span><span>Design for clarity, confidence and action</span><span>Balance user needs with business goals</span></div></div></div>
      </section>

      <section className="experience-list">
        {experience.map((item,index)=><article className="experience-item reveal" key={item.company}>
          <div className="experience-head"><h3>{item.company} <i>|</i> {item.role}</h3><span>{item.date} <b>⌃</b></span></div><small>{item.place}</small><p>{item.copy}</p><em>{String(index+1).padStart(2,'0')}</em>
        </article>)}
      </section>

      <section className="personal-note reveal">
        <div className="chapter-label"><span>A LITTLE MORE ABOUT ME</span><b>×</b></div>
        <div className="personal-grid"><h2>Beyond design, I&apos;m<br/>curious about people,<br/>creativity and how<br/>technology shapes<br/>everyday life.</h2><div><p>Outside of design, I enjoy exploring the intersection of technology, creativity, and human behaviour. I&apos;m someone who enjoys continuous learning — whether through conferences, creative experiments, side projects, or simply observing how people interact with the world.</p><p>Fitness, travel, and visual storytelling also influence the way I think as a designer. They help me stay curious, grounded, and open to new perspectives.</p><div className="interest-row"><span>Fitness</span><span>Gaming</span><span>Travel</span><span>UX Conferences</span></div></div></div>
      </section>

      <section className="failure-note reveal"><div className="chapter-label"><span>WHAT FAILURE TAUGHT ME</span><b>×</b></div><p>Early on, I focused too much on polished visuals before fully understanding the user problem. Now, I connect every design decision to a clear purpose.</p><strong>These experiences shaped how I design today — with a focus on clarity, structure and systems that help people move with confidence.</strong></section>
      <ConnectPanel inverse/>
    </div>
  </section>
  <PageFooter/>
</main>}
