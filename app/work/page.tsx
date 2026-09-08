import type {Metadata} from 'next';
import {CaseStudyStack,PageFrame,SectionHead} from '../components';
import {experience} from '../data';
import ArrowIcon from '../arrow-icon';

export const metadata:Metadata={title:'Work',description:'Selected Product and UX Design work by Akshay Venkata Narayana, with role, scope, decisions and outcomes made easy to scan.'};

export default function WorkPage(){return <PageFrame>
  <section className="page-hero shell reveal">
    <span className="eyebrow">Work / 2023-2026</span>
    <h1 data-parallax-layer data-parallax-speed="10">A few problems I followed past the screen.</h1>
    <p>Four case studies across customer travel, partner operations, AI onboarding and digital health — each focused on the decisions that changed what happened next.</p>
  </section>

  <section className="section shell work-feature">
    <CaseStudyStack compact/>
  </section>

  <section className="section shell">
    <SectionHead eyebrow="Project archive" title="Other product contexts I&apos;ve worked in." copy="Enterprise software, editorial products and mobile experiences across full-time, contract and freelance roles."/>
    <div className="work-snapshot-list">
      {experience.filter(item=>!item.company.startsWith('LUXTJ')).map((item,index)=><article className="work-snapshot reveal" id={item.company==='Proficonlabs'?'proficon-labs':undefined} key={`${item.company}-${item.date}`}>
        <span>{String(index+2).padStart(2,'0')}</span>
        <div><h3>{item.company}</h3><strong>{item.role}</strong></div>
        <p>{item.company==='Proficonlabs'?<>Enterprise dashboards, CRM workflows and an AI-supported website-building product, including <a className="inline-case-link" href="https://www.behance.net/gallery/232241697/Orra-Jewellery" target="_blank" rel="noreferrer" data-cursor-label="Open">Orra Jewellery <ArrowIcon/></a>, a Tambola-based rewards experience redesigned around a clearer game loop.</>:item.summary}</p>
        <dl><div><dt>When</dt><dd>{item.date}</dd></div><div><dt>{item.company==='Proficonlabs'?'Contribution':'Context'}</dt><dd>{item.company==='Proficonlabs'?'Reduced Simpo AI onboarding from 8 steps to 4 and a common ops task from 9 clicks to 4; for Orra, the redesigned game loop more than doubled weekly app opens.':([item.employment,item.place].filter(Boolean).join(' · ')||'Project-based')}</dd></div></dl>
      </article>)}
    </div>
  </section>
</PageFrame>}
