import type {ReactNode} from 'react';
import Link from 'next/link';
import {profile} from './data';

export function Arrow(){return <span aria-hidden="true">↗</span>}

export function SiteHeader(){
  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Akshay Venkata Narayana, home">
        <strong>AKSHAY V.</strong><span>Product designer</span>
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <a className="header-action" href={`mailto:${profile.email}`}>Email me <Arrow/></a>
    </div>
  </header>;
}

export function Status(){
  return <span className="status"><i/> Available for product design roles</span>;
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
    <div><dt>{profile.years}</dt><dd>years of experience</dd></div>
    <div><dt>{profile.projects}</dt><dd>projects completed</dd></div>
    <div><dt>{profile.clients}</dt><dd>client collaborations</dd></div>
    <div><dt>UK</dt><dd>currently based</dd></div>
  </dl>;
}

export function ProjectFeature({compact=false}:{compact?:boolean}){
  return <article className={`project-feature reveal ${compact?'project-feature-compact':''}`} data-tilt>
    <div className="project-topline"><span>Selected work / 01</span><span>Luxury travel · Web + Extranet</span></div>
    <Link className="project-media" href="/work/luxtj" aria-label="Read the LUXTJ case study">
      <img src="/figma/case-17.png" alt="LUXTJ luxury-travel booking website"/>
    </Link>
    <div className="project-body">
      <h3>LUXTJ</h3>
      <p>One connected experience for discovering, planning and booking luxury travel.</p>
      <dl className="project-facts">
        <div><dt>Role</dt><dd>Lead product designer</dd></div>
        <div><dt>Work</dt><dd>Product thinking, UX, UI and design system</dd></div>
        <div><dt>Time</dt><dd>12 months</dd></div>
      </dl>
      <Link className="project-arrow" href="/work/luxtj" aria-label="Read LUXTJ case study"><Arrow/></Link>
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
    <span className="eyebrow">Get in touch</span>
    <div><h2>Let&apos;s make<br/><em>something clear.</em></h2><p>Have a product role, a complex workflow or an interesting idea? I&apos;d like to hear about it.</p></div>
    <Button href="/contact">Say hello <Arrow/></Button>
  </section>;
}

export function SiteFooter(){
  return <footer className="site-footer"><div className="shell">
    <p>© 2026 {profile.name} · United Kingdom</p>
    <div><a href={`mailto:${profile.email}`}>Email</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div>
  </div></footer>;
}

export function PageFrame({children}:{children:ReactNode}){
  return <main id="top"><SiteHeader/>{children}<ContactPanel/><SiteFooter/></main>;
}
