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
    return()=>{window.clearTimeout(focusTimer);document.removeEventListener('keydown',onKeyDown);document.documentElement.classList.remove('recruiter-brief-open');previous?.focus();};
  },[open]);

  return <>
    <button className="recruiter-trigger" type="button" aria-expanded={open} aria-controls="recruiter-brief" onClick={()=>setOpen(true)}><span>Recruiters—start here</span><small>Why Akshay?</small><b aria-hidden="true">↗</b></button>
    {open&&<div className="recruiter-overlay" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
      <div ref={dialogRef} id="recruiter-brief" className="recruiter-dialog" role="dialog" aria-modal="true" aria-labelledby="recruiter-title">
        <header className="recruiter-brief-head">
          <div><span>For recruiters · designed for your first scan</span><h2 id="recruiter-title">Why Akshay for your organisation?</h2><p>I find the friction hidden inside complex products, turn it into a clear design problem and stay with the work until the solution is understandable, measurable and buildable.</p></div>
          <button ref={closeRef} type="button" onClick={()=>setOpen(false)} aria-label="Close recruiter brief"><span>Close</span><b aria-hidden="true">×</b></button>
        </header>

        <section className="recruiter-rationale"><span>Why I designed this button</span><div><h3>Your hiring problem matters too.</h3><p>Recruiters often have minutes—not hours—to understand a portfolio. I did not want you to search through every page to piece together my value. This brief gives you the decision-ready version: what I solve, evidence that I have solved it before, and the difference I can make in your team.</p></div></section>

        <div className="recruiter-proof" aria-label="Selected product outcomes"><div><strong>50% → 3%</strong><span>Onboarding drop-off</span></div><div><strong>Up to +60%</strong><span>App opening rate</span></div><div><strong>+70%</strong><span>Profile engagement</span></div><div><strong>3 platforms</strong><span>One shared system</span></div></div>

        <section className="recruiter-intro recruiter-why"><span>01 / Why me</span><div><h3>I make ambiguity useful.</h3><p>Hire me when you need a Product or UX Designer who can diagnose why a journey is failing—not only make the interface look better.</p><div className="recruiter-why-grid"><article><strong>I find the real cause</strong><p>I connect user behaviour, business needs and system constraints before choosing a solution.</p></article><article><strong>I design measurable change</strong><p>I turn research into clearer journeys and track whether the redesign actually improved behaviour.</p></article><article><strong>I help teams ship</strong><p>My computer-science background helps me work closely with developers and resolve edge cases early.</p></article></div></div></section>

        <section className="recruiter-contribution"><div><span>02 / Proof from past work</span><h3>Problems I have already turned around.</h3></div><ol><li><b>LUXTJ · Luxury travel</b><p>Hotel selection took the longest in the journey. I studied product-detail patterns and redesigned the hotel description around decision-ready information, shortening the route to checkout. I also gave an ignored profile experience a clear starting point and useful rewards, increasing time spent there by 70%.</p></li><li><b>Proficonlabs · AI onboarding</b><p>Nearly 50% of users left before starting their business website. I researched hybrid and task-oriented AI agents, then rebuilt onboarding around a clearer sequence. Drop-off reduced to 3%.</p></li><li><b>Orra Jewellery · Gamification</b><p>People were not engaging because they did not understand how to play Tambola. I applied the Hook model to clarify the game loop, prompts and rewards. App opening increased by up to 60% after redesign.</p></li><li><b>Parents application · Core usability</b><p>I identified and redesigned the highest-impact usability problems across the parent experience, making important everyday journeys clearer without adding more complexity.</p></li></ol></section>

        <section className="recruiter-difference"><div><span>03 / What changes when I join</span><h3>The difference I can make.</h3></div><div className="recruiter-difference-grid"><article><small>For your users</small><strong>Less confusion</strong><p>Clear starting points, understandable choices and journeys that help people recover.</p></article><article><small>For your product</small><strong>Better decisions</strong><p>Design grounded in observed behaviour, prioritised risk and measurable outcomes.</p></article><article><small>For your team</small><strong>Less rework</strong><p>Aligned flows, explicit edge cases and close design–engineering collaboration.</p></article><article><small>For your organisation</small><strong>A system that scales</strong><p>Reusable patterns that improve consistency and make future delivery faster.</p></article></div></section>

        <footer className="recruiter-actions"><div><span>The short answer</span><p>I bring clarity to the product, evidence to the decision and care to the collaboration.</p></div><div><Link href="/work/luxtj">See the thinking <b aria-hidden="true">↗</b></Link><Link href="/resume">View resume</Link><a href="mailto:akshayv2310@gmail.com">Talk to Akshay</a></div></footer>
      </div>
    </div>}
  </>;
}
