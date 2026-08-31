import type {Metadata} from 'next';
import {SiteFooter,SiteHeader} from '../components';
import {capabilities,certifications,education,experience,professionalSummary,profile,projectAchievements,toolsAndEnvironment} from '../data';
import ResumeActions from './resume-actions';

export const metadata:Metadata={title:'Resume',description:'Resume of Akshay Venkata Narayana, Product and UX Designer based in the United Kingdom.'};

export default function ResumePage(){return <main id="top" className="resume-page">
  <SiteHeader/>
  <article className="resume-sheet shell">
    <header className="resume-heading reveal"><div><span>Resume · 2026</span><h1>{profile.name}</h1><p>Product Designer</p></div><div className="resume-contact"><a href={`mailto:${profile.email}`} data-cursor-label="Email">{profile.email}</a><a href="tel:+447810120379" data-cursor-label="Call">{profile.phone}</a><a href="https://linkedin.com/in/akshayproductdesigner" target="_blank" rel="noreferrer" data-cursor-label="Open">LinkedIn ↗</a><span>Edinburgh, United Kingdom</span><ResumeActions/></div></header>

    <section className="resume-section resume-summary"><h2>Profile</h2><p>{professionalSummary}</p></section>

    <section className="resume-section"><h2>Project key achievements</h2><ol className="resume-achievements">{projectAchievements.map(item=><li key={item}>{item}</li>)}</ol></section>

    <section className="resume-section"><h2>Professional experience</h2><div className="resume-experience">{experience.map(item=><article key={`${item.company}-${item.date}`}><time>{item.date}</time><div><h3>{item.role} at {item.company}</h3><strong>{[item.employment,item.place].filter(Boolean).join(' · ')}</strong><ul>{item.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div></section>

    <section className="resume-section"><h2>Education</h2><div className="resume-education">{education.map(item=><article key={item.course}><time>{item.date}</time><div><h3>{item.course}</h3><p>{item.institution} · {item.place}</p></div></article>)}</div></section>

    <section className="resume-section"><h2>Skills</h2><div className="resume-skills">{capabilities.map(item=><span key={item}>{item}</span>)}</div></section>

    <section className="resume-section"><h2>Tools & environment</h2><div className="resume-details">{toolsAndEnvironment.map(item=><p key={item.label}><b>{item.label}</b><span>{item.value}</span></p>)}</div></section>

    <section className="resume-section"><h2>Certifications</h2><ul className="resume-certifications">{certifications.map(item=><li key={item}>{item}</li>)}</ul></section>
  </article>
  <SiteFooter/>
</main>}
