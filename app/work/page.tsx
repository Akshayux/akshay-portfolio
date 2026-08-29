import type {Metadata} from 'next';
import {PageFrame,ProjectCard,ProjectFeature,SectionHead} from '../components';
import {experience,featuredProjects} from '../data';

export const metadata:Metadata={title:'Work',description:'Selected Product and UX Design work by Akshay Venkata Narayana, with role, scope, decisions and outcomes made easy to scan.'};

export default function WorkPage(){return <PageFrame>
  <section className="page-hero shell reveal">
    <span className="eyebrow">Work / 2022—2026</span>
    <h1 data-parallax-layer data-parallax-speed="10">A closer look at how I solve product problems.</h1>
    <p>Three detailed case studies across customer travel, partner operations and evidence-informed digital health—followed by a concise project archive.</p>
  </section>

  <section className="section shell work-feature">
    <ProjectFeature compact/>
    <div className="project-card-grid work-project-grid">
      {featuredProjects.slice(1).map(project=><ProjectCard key={project.title} {...project}/>)}
    </div>
  </section>

  <section className="section shell">
    <SectionHead eyebrow="Project archive" title="Other product contexts I&apos;ve worked in." copy="Enterprise software, editorial products and mobile experiences across full-time, contract and freelance roles."/>
    <div className="work-snapshot-list">
      {experience.filter(item=>!item.company.startsWith('LUXTJ')).map((item,index)=><article className="work-snapshot reveal" key={item.company}>
        <span>{String(index+2).padStart(2,'0')}</span>
        <div><h3>{item.company}</h3><strong>{item.role}</strong></div>
        <p>{item.summary}</p>
        <dl><div><dt>When</dt><dd>{item.date}</dd></div><div><dt>Contribution</dt><dd>{item.contribution}</dd></div></dl>
      </article>)}
    </div>
  </section>
</PageFrame>}
