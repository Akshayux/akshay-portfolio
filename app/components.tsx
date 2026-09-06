import type {ReactNode} from 'react';
import Link from 'next/link';
import {featuredProjects,profile,socials} from './data';
import TestimonialsReveal from './testimonials-reveal';
import ArrowIcon from './arrow-icon';
import ThemeToggle from './theme-toggle';

export function Arrow(){return <ArrowIcon/>}

export function SiteHeader(){
  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Akshay Venkata Narayana, home" data-cursor-label="Home">
        <img src="/akshay-logo.png" alt="" width="420" height="420"/>
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        <div className="work-menu">
          <Link className="work-menu-link" href="/work" data-cursor-label="Jump">Work</Link>
          <details>
            <summary data-cursor-label="Open" aria-label="Open work menu"><svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5"/></svg></summary>
            <div className="work-menu-panel">
              <Link href="/work" data-cursor-label="Jump"><small>00</small><span>All work</span></Link>
              <Link href="/work/luxtj" data-cursor-label="Jump"><small>01</small><span>LUXTJ</span></Link>
              <Link href="/work/luxtj-extranet" data-cursor-label="Jump"><small>02</small><span>LUXTJ Extranet</span></Link>
              <Link href="/work/scotcare" data-cursor-label="Jump"><small>03</small><span>ScotCare</span></Link>
              <Link href="/work/simpo-ai" data-cursor-label="Jump"><small>04</small><span>Simpo AI</span></Link>
            </div>
          </details>
        </div>
        <Link href="/about" data-cursor-label="Jump">About</Link>
        <Link href="/contact" data-cursor-label="Jump">Contact</Link>
        <ThemeToggle/>
      </nav>
    </div>
  </header>;
}

export function Button({href,children,secondary=false,cursorLabel}:{href:string;children:ReactNode;secondary?:boolean;cursorLabel:string}){
  const internal=href.startsWith('/');
  const className=`button ${secondary?'button-secondary':''}`;
  const content=<><span className="button-label"><span>{children}</span><span aria-hidden="true">{children}</span></span><span className="button-icon" aria-hidden="true"><Arrow/></span></>;
  if(internal)return <Link className={className} href={href} data-cursor-label={cursorLabel}>{content}</Link>;
  return <a className={className} href={href} data-cursor-label={cursorLabel}>{content}</a>;
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
    <div><dt><span>U</span><span>K</span></dt><dd>currently based</dd></div>
  </dl>;
}

export function ProjectFeature({compact=false}:{compact?:boolean}){
  return <article className={`case-study-card case-study-feature reveal ${compact?'project-feature-compact':''}`}>
    <Link className="case-study-link" href="/work/luxtj" aria-label="Read the LUXTJ case study" data-cursor-label="View">
      <div className="case-study-media" data-parallax><img src="/optimized/luxtj-main.jpg" alt="LUXTJ personalised luxury-travel experience displayed on a laptop"/></div>
      <div className="case-study-copy">
        <header><small>Luxury travel · Customer experience</small><span>9 min read</span></header>
        <h3>Three conversion leaks were hiding inside one luxury-travel journey.</h3>
        <dl className="case-study-metrics" aria-label="LUXTJ project outcomes"><div><dt>60% → 22%</dt><dd>Checkout drop-off</dd></div><div><dt>24% → 58%</dt><dd>Add-to-cart</dd></div><div><dt>+70%</dt><dd>Profile engagement</dd></div></dl>
        <footer><span>View case study</span><Arrow/></footer>
      </div>
    </Link>
  </article>;
}

export function ProjectCard({index,title,label,role,metrics,readTime,description,outcome,signal,image,href,tags}:{index:string;title:string;label:string;role:string;metrics:{value:string;label:string}[];readTime:string;description:string;outcome:string;signal:string;image:string;href:string;tags:string[]}){
  return <article className={`case-study-card project-card-${index} reveal`}>
    <Link className="case-study-link" href={href} aria-label={`Read the ${title} case study`} data-cursor-label="Explore">
      <div className="case-study-media" data-parallax><img src={image} loading="lazy" decoding="async" alt={`${title} project interface`}/><span>{index}</span></div>
      <div className="case-study-copy">
        <header><small>{label}</small><span>{readTime} read</span></header>
        <h3>{description}</h3>
        <dl className="case-study-metrics">{metrics.map(metric=><div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl>
        <footer><span>View case study</span><Arrow/></footer>
      </div>
    </Link>
  </article>;
}

export function CaseStudyStack({compact=false}:{compact?:boolean}){
  return <div className={`case-study-stack${compact?' case-study-stack-static':''}`}><ProjectFeature compact={compact}/>{featuredProjects.slice(1).map(project=><ProjectCard key={project.title} {...project}/>)}</div>;
}

export function TestimonialsSection({index='05'}:{index?:string}={}){
  return <section className="testimonials shell">
    <div className="editorial-heading testimonial-heading reveal"><span>{index}</span><div><small>Results + recommendations</small><h2>Results that speak.<br/>People who saw the work.</h2><p>Selected LUXTJ outcomes alongside recommendations from the people who worked closely with me.</p></div></div>
    <TestimonialsReveal/>
    <div className="testimonial-footer reveal"><p>Product outcomes and attributed recommendations are presented separately for clarity.</p><a className="text-link" href="https://linkedin.com/in/akshayproductdesigner" target="_blank" rel="noreferrer" data-cursor-label="Open">View recommendations <Arrow/></a></div>
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
    <Button href="/contact" cursorLabel="Open">Say hello</Button>
  </section>;
}

export function SiteFooter(){
  return <footer className="site-footer"><div className="shell">
    <p>© 2026 {profile.name} · Product & UX Designer</p>
    <div><a href={`mailto:${profile.email}`} data-cursor-label="Email">Email</a>{socials.map(item=><a key={item.label} href={item.href} target="_blank" rel="noreferrer" data-cursor-label="Open">{item.label}</a>)}<a href="#top" data-cursor-label="Scroll">Back to top ↑</a></div>
  </div></footer>;
}

export function PageFrame({children}:{children:ReactNode}){
  return <main id="top"><SiteHeader/>{children}<ContactPanel/><SiteFooter/></main>;
}
