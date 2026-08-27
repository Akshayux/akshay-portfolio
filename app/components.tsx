import type {ReactNode} from 'react';
import Link from 'next/link';
import {profile} from './data';

export function Arrow(){return <span aria-hidden="true">↗</span>}

export function SiteHeader(){
  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Akshay Venkata Narayana, home">
        <span>AVN</span><strong>Akshay Venkata Narayana</strong>
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <a className="header-action" href={`mailto:${profile.email}?subject=Resume%20request`}>Request résumé <Arrow/></a>
    </div>
  </header>;
}

export function Status(){
  return <span className="status"><i/> Open to product design roles · UK</span>;
}

export function Button({href,children,secondary=false}:{href:string;children:ReactNode;secondary?:boolean}){
  const internal=href.startsWith('/');
  const className=`button ${secondary?'button-secondary':''}`;
  if(internal)return <Link className={className} href={href}>{children}</Link>;
  return <a className={className} href={href}>{children}</a>;
}

export function SectionHead({eyebrow,title,copy,action}:{eyebrow:string;title:string;copy?:string;action?:ReactNode}){
  return <div className="section-head reveal">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>
    {action&&<div className="section-action">{action}</div>}
  </div>;
}

export function ProofStrip(){
  return <dl className="proof-strip reveal" aria-label="Career summary">
    <div><dt>{profile.years}</dt><dd>Years designing products</dd></div>
    <div><dt>{profile.projects}</dt><dd>Projects completed</dd></div>
    <div><dt>{profile.clients}</dt><dd>Client collaborations</dd></div>
    <div><dt>End-to-end</dt><dd>From framing to handoff</dd></div>
  </dl>;
}

export function ProjectFeature({compact=false}:{compact?:boolean}){
  return <article className={`project-feature reveal ${compact?'project-feature-compact':''}`} data-tilt>
    <Link className="project-media" href="/work/luxtj" aria-label="Read the LUXTJ case study">
      <img src="/figma/case-17.png" alt="LUXTJ luxury-travel booking website"/>
      <span>Featured case study</span>
    </Link>
    <div className="project-body">
      <div className="project-index"><span>01 / LUXTJ</span><span>12 min read</span></div>
      <h3>Making a complex travel booking journey feel clear and connected.</h3>
      <p>I designed the customer website and partner extranet as one ecosystem—connecting discovery, comparison, booking and fulfilment.</p>
      <dl className="project-facts">
        <div><dt>Role</dt><dd>Lead Product Designer</dd></div>
        <div><dt>Scope</dt><dd>Research, UX, UI, system</dd></div>
        <div><dt>Timeline</dt><dd>12 months</dd></div>
      </dl>
      <Link className="text-link" href="/work/luxtj">Read case study <Arrow/></Link>
    </div>
  </article>;
}

export function ExperiencePreview({company,role,summary,meta}:{company:string;role:string;summary:string;meta:string}){
  return <article className="experience-preview reveal">
    <span>{meta}</span><h3>{company}</h3><strong>{role}</strong><p>{summary}</p>
  </article>;
}

export function ContactPanel(){
  return <section className="contact-cta shell reveal">
    <span className="eyebrow">Next step</span>
    <div><h2>Have a role or a problem worth solving?</h2><p>I&apos;m open to full-time product design roles, selected freelance projects and thoughtful collaborations.</p></div>
    <Button href="/contact">Start a conversation <Arrow/></Button>
  </section>;
}

export function SiteFooter(){
  return <footer className="site-footer"><div className="shell">
    <p>© 2026 {profile.name}</p>
    <div><a href={`mailto:${profile.email}`}>Email</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div>
  </div></footer>;
}

export function PageFrame({children}:{children:ReactNode}){
  return <main id="top"><SiteHeader/>{children}<ContactPanel/><SiteFooter/></main>;
}
