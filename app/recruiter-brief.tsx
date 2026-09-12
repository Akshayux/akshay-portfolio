'use client';

import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import ArrowIcon from './arrow-icon';

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
    return()=>{window.clearTimeout(focusTimer);document.removeEventListener('keydown',onKeyDown);document.documentElement.classList.remove('recruiter-brief-open');previous?.focus();};
  },[open]);

  return <>
    <button className="recruiter-trigger" type="button" aria-expanded={open} aria-controls="recruiter-brief" onClick={()=>setOpen(true)} data-cursor-label="Open"><span>Want to hire me?</span><small>See why I fit</small><b><ArrowIcon/></b></button>
    {open&&<div className="recruiter-overlay" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
      <div ref={dialogRef} id="recruiter-brief" className="recruiter-dialog" role="dialog" aria-modal="true" aria-labelledby="recruiter-title">
        <header className="recruiter-brief-head">
          <div><span>For recruiters · designed for your first scan</span><h2 id="recruiter-title">Why Akshay for your organisation?</h2><p>I find the friction hidden inside complex products, turn it into a clear design problem and stay with the work until the solution is understandable, measurable and buildable.</p></div>
          <button ref={closeRef} type="button" onClick={()=>setOpen(false)} aria-label="Close recruiter brief" data-cursor-label="Close"><span>Close</span><b aria-hidden="true">×</b></button>
        </header>

        <section className="recruiter-rationale"><span>Why I designed this brief</span><div><h3>I solved the portfolio-search problem for you too.</h3><p>Recruiters often have minutes, not hours, to understand a portfolio. I made this brief so you do not have to go through every page and assemble the signal yourself. It puts the answer in one place: what I solve, evidence that I have solved it before, and the skills I can bring to your organisation.</p></div></section>

        <div className="recruiter-proof" aria-label="Selected product outcomes">
          <div><strong>9 → 4</strong><div><span>Profile setup screens</span><small><Link href="/work/luxtj">LUXTJ · profile</Link></small></div></div>
          <div><strong>8 → 4</strong><div><span>Onboarding steps</span><small>Proficon Labs · Simpo AI</small></div></div>
          <div><strong>9 → 4</strong><div><span>Internal task clicks</span><small><Link href="/work#proficon-labs">Proficon Labs · operations</Link></small></div></div>
          <div><strong>5 → 1</strong><div><span>Daily tools</span><small>Halohues Studios</small></div></div>
        </div>

        <section className="recruiter-intro recruiter-why"><span>01 / Why me</span><div><h3>I make ambiguity useful.</h3><p>Hire me when you need a Product or UX Designer who can diagnose why a journey is failing, not only make the interface look better.</p><div className="recruiter-why-grid"><article><strong>I find the real cause</strong><p>I connect user behaviour, business needs and system constraints before choosing a solution.</p></article><article><strong>I design measurable change</strong><p>I turn research into clearer journeys and track whether the redesign actually improved behaviour.</p></article><article><strong>I use AI with judgement</strong><p>I use tools such as ChatGPT, Claude and Figma AI to explore, synthesise and stress-test ideas, always grounded in human insight.</p></article></div></div></section>

        <section className="recruiter-contribution"><div><span>02 / Proof from past work</span><h3>Problems I have already turned around.</h3></div><ol><li><b>LUXTJ · Luxury travel</b><p>Owned checkout from usability testing to handoff, rebuilt an unclear 9-screen profile as a 4-screen guided flow, and used heatmap evidence to make add-to-cart the most-clicked action.</p></li><li><b>Proficon Labs · AI onboarding</b><p>Rebuilt Simpo AI’s onboarding from 8 confusing steps to 4 focused ones, working directly with engineering to make the new flow practical within existing constraints.</p></li><li><b>Proficon Labs client · ORRA Jewellery</b><p>Owned the Tambola redesign end to end and more than doubled weekly app opens by clarifying participation, triggers and rewards.</p></li><li><b>Halohues Studios · Operations</b><p>Simplified VFX conversion, reduced a sales funnel from 7 steps to 3, and consolidated five daily tools into one intranet.</p></li></ol></section>

        <section className="recruiter-difference"><div><span>03 / What I bring to your team</span><h3>A designer who can think, make and explain.</h3></div><div className="recruiter-difference-grid"><article><small>Product thinking</small><strong>Frame the right problem</strong><p>I connect user needs, business goals and system constraints to focus the team on the decision that matters next.</p></article><article><small>UX craft</small><strong>Design clear journeys</strong><p>I turn research into simple information architecture, useful interactions and experiences people can move through with confidence.</p></article><article><small>AI-assisted workflow</small><strong>Move faster with judgement</strong><p>I use AI tools for exploration, synthesis and critique, while keeping the final decisions human, evidence-led and responsible.</p></article><article><small>Systems + delivery</small><strong>Make work buildable</strong><p>I create reusable patterns, communicate states and partner with developers so good ideas survive implementation.</p></article></div></section>

        <footer className="recruiter-actions"><div><span>The short answer</span><p>I bring clarity to the product, evidence to the decision and care to the collaboration.</p></div><div><Link href="/work/luxtj" data-cursor-label="View">See the thinking <b><ArrowIcon/></b></Link><Link href="/resume" data-cursor-label="Download">View resume</Link><a href="mailto:hello@akshayvenkat.com" data-cursor-label="Email">Talk to Akshay</a></div></footer>
      </div>
    </div>}
  </>;
}
