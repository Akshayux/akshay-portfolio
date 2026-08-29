import type {Metadata} from 'next';
import {SiteFooter,SiteHeader} from '../components';
import {capabilities,experience,profile} from '../data';
import ResumeActions from './resume-actions';

export const metadata:Metadata={title:'Résumé',description:'Résumé of Akshay Venkata Narayana, Product and UX Designer based in the United Kingdom.'};

export default function ResumePage(){return <main id="top" className="resume-page">
  <SiteHeader/>
  <article className="resume-sheet shell">
    <header className="resume-heading reveal"><div><span>Résumé · 2026</span><h1>{profile.name}</h1><p>Product & UX Designer</p></div><div className="resume-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href="tel:+447810120379">{profile.phone}</a><a href="https://linkedin.com/in/akshayproductdesigner" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>Edinburgh, United Kingdom</span><ResumeActions/></div></header>

    <section className="resume-section resume-summary"><h2>Profile</h2><p>Product and UX Designer with 5+ years of experience turning complex requirements into clear user journeys, scalable design systems and production-ready interfaces. Experienced across AI, SaaS, enterprise platforms, luxury travel, public-interest services and mobile products. Comfortable working from research and information architecture through interaction design, visual design and developer handoff.</p></section>

    <section className="resume-section"><h2>Experience</h2><div className="resume-experience">{experience.map(item=><article key={item.company}><time>{item.date}</time><div><h3>{item.company}</h3><strong>{item.role} · {item.place}</strong><p>{item.summary}</p><p><b>Contribution:</b> {item.contribution}</p></div></article>)}</div></section>

    <section className="resume-section"><h2>Education</h2><div className="resume-education"><article><time>2025 — Present</time><div><h3>Heriot-Watt University</h3><p>Digital Design and Innovation · Edinburgh, United Kingdom</p></div></article><article><time>2017 — 2021</time><div><h3>The Oxford College of Education</h3><p>Bachelor of Engineering, Computer Science · Bengaluru, India</p></div></article></div></section>

    <section className="resume-section"><h2>Capabilities</h2><div className="resume-skills">{capabilities.map(item=><span key={item}>{item}</span>)}</div></section>
  </article>
  <SiteFooter/>
</main>}
