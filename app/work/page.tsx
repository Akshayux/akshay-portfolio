import type {Metadata} from 'next';
import {PageFrame,ProjectFeature,SectionHead} from '../components';
import {experience} from '../data';

export const metadata:Metadata={title:'Work',description:'Selected product design work by Akshay Venkata Narayana, with role, scope, decisions and outcomes made easy to scan.'};

export default function WorkPage(){return <PageFrame>
  <section className="page-hero shell reveal">
    <span className="eyebrow">Selected work</span>
    <h1>Product work for people who want the summary—and the scrutiny.</h1>
    <p>Each project starts with role, scope and context. The detailed case study then shows the problem, the decisions I owned, the trade-offs and what I would measure next.</p>
  </section>

  <section className="section shell work-feature">
    <ProjectFeature compact/>
  </section>

  <section className="section shell">
    <SectionHead eyebrow="Experience snapshots" title="Other product contexts I have worked in." copy="These projects are kept concise because a useful portfolio should be accurate about the evidence it can show."/>
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
