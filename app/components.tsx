import type {ReactNode} from 'react';

export function SiteHeader({showContact=true}:{showContact?:boolean}){
  return <header className="site-header">
    <a className="location" href="/"><strong>Based in</strong><span>United Kingdom</span></a>
    {showContact&&<a className="round-link round-link-dark magnetic" href="/contact">Get in touch <b>↗</b></a>}
  </header>;
}

export function IdentityCard({light=false}:{light?:boolean}){
  return <div className={`identity-wrap ${light?'identity-light':''}`}>
    <span className="availability"><i/> Open to New Opportunities</span>
    <nav className="identity-card" aria-label="Primary navigation">
      <img src="/akshay-portrait.jpg" alt="Akshay Venkata Narayana"/>
      <a className="identity-name" href="/"><strong>AKSHAY VENKATA NARAYANA</strong><span>Product Designer | User Experience Designer</span></a>
      <div className="identity-menu">
        <span>Navigate</span>
        <div className="menu-lines"><i/><i/></div>
        <div className="identity-links"><a href="/">Home</a><a href="/work">Work</a><a href="/about">About</a><a href="/contact">Contact</a></div>
      </div>
    </nav>
  </div>;
}

export function ConnectPanel({inverse=false}:{inverse?:boolean}){
  return <section className={`connect-panel reveal ${inverse?'connect-inverse':''}`}>
    <div><span>LET&apos;S CONNECT</span><h2>Have a product idea or design<br/>challenge?</h2></div>
    <div><p>I&apos;m open to product design roles, UX Design roles, freelance<br/>projects and meaningful collaborations.</p><a className={`round-link ${inverse?'round-link-dark':''}`} href="/contact">Say Hello <b>↗</b></a></div>
  </section>;
}

export function PageFooter(){return <footer className="page-footer">© 2026 AKSHAY VENKATA NARAYANA- PRODUCT DESIGNER/UX DESIGNER</footer>;}

export function ProjectVisual({laptop=false}:{laptop?:boolean}){
  if(laptop)return <div className="project-visual project-laptop"><img src="/figma/home/raw-01.png" alt="LUXTJ Extranet shown on a laptop"/></div>;
  return <div className="project-visual project-monitors">
    <img className="monitor-back monitor-a" src="/figma/home/raw-04.png" alt="LUXTJ booking detail"/>
    <img className="monitor-back monitor-b" src="/figma/home/raw-05.png" alt="LUXTJ search experience"/>
    <img className="monitor-front" src="/figma/home/raw-07.png" alt="LUXTJ customer website"/>
  </div>;
}

export function ProjectCard({index=1,laptop=false,identity=false}:{index?:number;laptop?:boolean;identity?:boolean}){
  return <article className={`project-card reveal ${laptop?'home-project-card':''}`}>
    <ProjectVisual laptop={laptop}/>
    <div className="project-copy">
      <div className="project-meta"><b>CASE STUDY-{String(index).padStart(2,'0')}</b><span>12 m read</span></div>
      <div className="tag-row"><i>Product Design</i><i>End to end</i><i>Sole designer</i><i>Web + Extranet</i></div>
      <h3>LUXTJ — BRINGING A LUXURY TRAVEL APP TO THE WEB</h3>
      <p>A year-long, end-to-end design of LuxTJ across both mobile and web — home, travel calendar, and bucket list — designed as one connected experience and launching together as a single product.</p>
      <a className="round-link project-link" href="/work/luxtj">View casestudy <b>↗</b></a>
    </div>
    {identity&&<IdentityCard/>}
  </article>;
}

export function SectionTitle({eyebrow,title,copy}:{eyebrow:string;title:string;copy?:ReactNode}){
  return <div className="section-title reveal"><span>{eyebrow}</span><h2>{title}</h2>{copy&&<div className="section-title-copy">{copy}</div>}</div>;
}
