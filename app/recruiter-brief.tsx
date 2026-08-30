'use client';

import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';

export default function RecruiterBrief(){
  const [open,setOpen]=useState(false);
  const dialogRef=useRef<HTMLDivElement>(null);
  const closeRef=useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    if(!open)return;
    const previous=document.activeElement as HTMLElement|null;
    document.documentElement.classList.add('recruiter-brief-open');
    const focusTimer=window.setTimeout(()=>closeRef.current?.focus(),50);
    const onKeyDown=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){setOpen(false);return;}
      if(event.key!=='Tab'||!dialogRef.current)return;
      const focusable=Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'));
      if(!focusable.length)return;
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    };
    document.addEventListener('keydown',onKeyDown);
    return()=>{
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown',onKeyDown);
      document.documentElement.classList.remove('recruiter-brief-open');
      previous?.focus();
    };
  },[open]);

  return <>
    <button className="recruiter-trigger" type="button" aria-expanded={open} aria-controls="recruiter-brief" onClick={()=>setOpen(true)}><span>Recruiters—start here</span><small>60-sec brief</small><b aria-hidden="true">↗</b></button>
    {open&&<div className="recruiter-overlay" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
      <div ref={dialogRef} id="recruiter-brief" className="recruiter-dialog" role="dialog" aria-modal="true" aria-labelledby="recruiter-title">
        <header className="recruiter-brief-head">
          <div><span>For recruiters · a 60-second read</span><h2 id="recruiter-title">Why bring Akshay into your team?</h2><p>I make complex products easier for people to understand—and easier for teams to build.</p></div>
          <button ref={closeRef} type="button" onClick={()=>setOpen(false)} aria-label="Close recruiter brief"><span>Close</span><b aria-hidden="true">×</b></button>
        </header>

        <div className="recruiter-proof" aria-label="Career evidence"><div><strong>5+</strong><span>Years across Product & UX</span></div><div><strong>20+</strong><span>Projects completed</span></div><div><strong>6+</strong><span>Core travel journeys designed</span></div><div><strong>3</strong><span>Platforms sharing one system</span></div></div>

        <section className="recruiter-intro"><span>01 / Why me</span><h3>I work well where the problem is still messy.</h3><p>I can move from an unclear business request to a framed user problem, an understandable journey and an implementation-ready design. My computer-science background helps me collaborate with developers, question constraints early and design the states between the polished screens.</p></section>

        <section className="recruiter-contribution"><div><span>02 / Evidence from past work</span><h3>What I have already contributed.</h3></div><ol><li><b>One connected travel product</b><p>Designed the LUXTJ customer website and contributed across mobile and the partner extranet—covering discovery, planning, booking, payment and post-booking journeys.</p></li><li><b>Clearer high-friction experiences</b><p>Reduced Bucket List comprehension from about two minutes to 30–50 seconds, shortened checkout completion time by 22%, and increased time spent in the social-profile experience by 70%.</p></li><li><b>A system teams could reuse</b><p>Built and maintained shared components across three platforms, improving consistency and making engineering handoff more efficient.</p></li><li><b>Design that survived delivery</b><p>Worked closely with stakeholders and developers to resolve requirements, behaviour, edge cases and responsive states before launch.</p></li></ol></section>

        <section className="recruiter-difference"><div><span>03 / The difference I can make</span><h3>What changes when I join.</h3></div><div className="recruiter-difference-grid"><article><small>Your challenge</small><strong>Complex product decisions</strong><p>I map the system, expose assumptions and help the team agree on the next question before pixels create false certainty.</p></article><article><small>Your challenge</small><strong>Fragmented user journeys</strong><p>I connect individual screens into a coherent end-to-end experience with visible context, consequences and recovery.</p></article><article><small>Your challenge</small><strong>Design–engineering gaps</strong><p>I specify behaviour and edge cases, collaborate early and stay involved until the intended experience is buildable.</p></article><article><small>Your challenge</small><strong>Inconsistent products</strong><p>I turn repeated decisions into reusable patterns that improve quality now and delivery speed later.</p></article></div></section>

        <section className="recruiter-table"><div><span>04 / What I bring</span><h3>A practical mix of skills and working style.</h3></div><dl><div><dt>Product thinking</dt><dd>Framing, prioritisation and decision clarity</dd></div><div><dt>UX craft</dt><dd>Research, journeys, interaction and information architecture</dd></div><div><dt>Systems thinking</dt><dd>Connected workflows, reusable components and edge cases</dd></div><div><dt>Technical empathy</dt><dd>Computer-science foundation and developer collaboration</dd></div><div><dt>Working style</dt><dd>Curious, calm, open to feedback and dependable</dd></div><div><dt>Role fit</dt><dd>Product Designer or UX Designer · UK based</dd></div></dl></section>

        <footer className="recruiter-actions"><div><span>Interested?</span><p>The fastest next step is to inspect one case study, then talk.</p></div><div><Link href="/work/luxtj">See my strongest case <b aria-hidden="true">↗</b></Link><Link href="/resume">View resume</Link><a href="mailto:akshayv2310@gmail.com">Email Akshay</a></div></footer>
      </div>
    </div>}
  </>;
}
