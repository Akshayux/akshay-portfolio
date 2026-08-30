import type {ReactNode} from 'react';
import Link from 'next/link';
import {profile,socials} from './data';

export function Arrow(){return <span aria-hidden="true">↗</span>}

export function SiteHeader(){
  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Akshay Venkata Narayana, home">
        <strong>AKSHAY V.</strong><span>Product & UX designer</span>
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="header-action" href="/resume">View resume</Link>
    </div>
  </header>;
}

export function Status(){
  return <span className="status"><i/> Available for Product & UX roles</span>;
}

export function Button({href,children,secondary=false}:{href:string;children:ReactNode;secondary?:boolean}){
  const internal=href.startsWith('/');
  const className=`button ${secondary?'button-secondary':''}`;
  const content=<><span className="button-label"><span>{children}</span><span aria-hidden="true">{children}</span></span><span className="button-icon" aria-hidden="true"><Arrow/></span></>;
  if(internal)return <Link className={className} href={href}>{content}</Link>;
  return <a className={className} href={href}>{content}</a>;
}

export function SectionHead({eyebrow,title,copy,action}:{eyebrow:string;title:string;copy?:string;action?:ReactNode}){
  return <div className="section-head reveal">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>
    {action&&<div className="section-action">{action}</div>}
  </div>;
}

export function ProofStrip(){
  return <dl className="proof-strip reveal" aria-label="Career summary">
    <div><dt data-count="5" data-suffix="+">{profile.years}</dt><dd>years of experience</dd></div>
    <div><dt data-count="20" data-suffix="+">{profile.projects}</dt><dd>projects completed</dd></div>
    <div><dt data-count="10" data-suffix="+">{profile.clients}</dt><dd>client collaborations</dd></div>
    <div><dt><span>U</span><span>K</span></dt><dd>currently based</dd></div>
  </dl>;
}

export function ProjectFeature({compact=false}:{compact?:boolean}){
  return <article className={`project-feature reveal ${compact?'project-feature-compact':''}`}>
    <div className="project-topline"><span>Selected work / 01</span><span>Luxury travel · Customer experience</span></div>
    <Link className="project-media" href="/work/luxtj" aria-label="Read the LUXTJ case study" data-parallax>
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

export function ProjectCard({index,title,label,description,image,href,tags}:{index:string;title:string;label:string;description:string;image:string;href:string;tags:string[]}){
  return <article className="project-card reveal">
    <Link className="project-card-media" href={href} aria-label={`Read the ${title} case study`} data-parallax>
      <img src={image} alt={`${title} project interface`}/><span>{index}</span>
    </Link>
    <div className="project-card-copy"><small>{label}</small><h3>{title}</h3><p>{description}</p><div>{tags.map(tag=><span key={tag}>{tag}</span>)}</div><Link href={href} aria-label={`Read the ${title} case study`}><Arrow/></Link></div>
  </article>;
}

export function TestimonialsSection(){
  return <section className="testimonials shell">
    <div className="editorial-heading reveal"><span>05</span><div><small>Testimonials</small><h2>What clients and collaborators say.</h2></div></div>
    <div className="testimonial-grid">
      <article className="testimonial-card testimonial-card-featured reveal">
        <header><span className="testimonial-avatar">HC</span><small>Client perspective</small></header>
        <blockquote>“Akshay has approached that process with patience, openness, and a genuine willingness to make the product better. With Akshay, you are dealing with a genuinely good human being—sincere, dependable and humble.”</blockquote>
        <footer><strong>Hoomba Roy Choudhury</strong><span>Founder, Travel Jaunts & LUXTJ</span><small>Website · Mobile app · Extranet</small></footer>
      </article>
      <article className="testimonial-card reveal">
        <header><span className="testimonial-avatar">PM</span><small>Engineering perspective</small></header>
        <blockquote>“He is a thoughtful UX Designer who understands user needs and works well with developers to turn ideas into practical solutions. Akshay was always easy to work with, open to feedback, and clear in communicating his design decisions.”</blockquote>
        <footer><strong>Palash Makhijja</strong><span>Senior Software Engineer</span><small>Simpo.com · CMIS School CRM</small></footer>
      </article>
      <article className="testimonial-card reveal">
        <header><span className="testimonial-avatar">DK</span><small>Development perspective</small></header>
        <blockquote>“Working with him was always smooth and collaborative. He communicated his ideas clearly, was open to feedback, and worked closely with the development team to make sure the designs were practical and delivered as intended.”</blockquote>
        <footer><strong>Dhruvi Kapdi</strong><span>Senior Flutter Developer</span><small>LUXTJ mobile application</small></footer>
      </article>
    </div>
    <div className="testimonial-footer reveal"><p>Recommendations across client and engineering collaboration. Design-peer quotes are published only after the wording and attribution are approved.</p><a className="text-link" href="https://linkedin.com/in/akshayproductdesigner" target="_blank" rel="noreferrer">View recommendations <Arrow/></a></div>
  </section>;
}

export function ExperiencePreview({company,role,summary,meta}:{company:string;role:string;summary:string;meta:string}){
  return <article className="experience-preview reveal">
    <span>{meta}</span><h3>{company}</h3><strong>{role}</strong><p>{summary}</p>
  </article>;
}

export function ContactPanel(){
  return <section className="contact-cta shell reveal">
    <span className="eyebrow">Get in touch</span>
    <div><h2>Let&apos;s make<br/><em>something clear.</em></h2><p>Have a Product or UX role, a complex workflow or an interesting idea? I&apos;d like to hear about it.</p></div>
    <Button href="/contact">Say hello</Button>
  </section>;
}

export function SiteFooter(){
  return <footer className="site-footer"><div className="shell">
    <p>© 2026 {profile.name} · Product & UX Designer</p>
    <div><Link href="/resume">Resume</Link><a href={`mailto:${profile.email}`}>Email</a>{socials.map(item=><a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>)}<a href="#top">Back to top ↑</a></div>
  </div></footer>;
}

export function PageFrame({children}:{children:ReactNode}){
  return <main id="top"><SiteHeader/>{children}<ContactPanel/><SiteFooter/></main>;
}
