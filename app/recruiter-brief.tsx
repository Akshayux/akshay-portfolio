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
    <button className="recruiter-trigger" type="button" aria-expanded={open} aria-controls="recruiter-brief" onClick={()=>setOpen(true)} data-cursor-label="Open"><span>Want to hire me?</span><small>See why I fit</small><b aria-hidden="true">↗</b></button>
    {open&&<div className="recruiter-overlay" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
      <div ref={dialogRef} id="recruiter-brief" className="recruiter-dialog" role="dialog" aria-modal="true" aria-labelledby="recruiter-title">
        <header className="recruiter-brief-head">
          <div><span>For recruiters · designed for your first scan</span><h2 id="recruiter-title">Why Akshay for your organisation?</h2><p>I find the friction hidden inside complex products, turn it into a clear design problem and stay with the work until the solution is understandable, measurable and buildable.</p></div>
          <button ref={closeRef} type="button" onClick={()=>setOpen(false)} aria-label="Close recruiter brief" data-cursor-label="Close"><span>Close</span><b aria-hidden="true">×</b></button>
        </header>

        <section className="recruiter-rationale"><span>Why I designed this brief</span><div><h3>I solved the portfolio-search problem for you too.</h3><p>Recruiters often have minutes, not hours, to understand a portfolio. I made this brief so you do not have to go through every page and assemble the signal yourself. It puts the answer in one place: what I solve, evidence that I have solved it before, and the skills I can bring to your organisation.</p></div></section>

        <div className="recruiter-proof" aria-label="Selected product outcomes">
          <div><strong>65% → 13%</strong><div><span>Onboarding drop-off</span><small><Link href="/work#proficon-labs">Proficon Labs · Simpo AI</Link></small></div></div>
          <div><strong>60% → 22%</strong><div><span>Checkout drop-off</span><small><Link href="/work/luxtj">LUXTJ · checkout</Link></small></div></div>
          <div><strong>Up to +70%</strong><div><span>Profile engagement</span><small><Link href="/work/luxtj">LUXTJ · profile</Link></small></div></div>
          <div><strong>Up to +60%</strong><div><span>App opening rate</span><small><Link href="/work#proficon-labs">Proficon Labs (Orra Jewellery)</Link></small></div></div>
        </div>

        <section className="recruiter-intro recruiter-why"><span>01 / Why me</span><div><h3>I make ambiguity useful.</h3><p>Hire me when you need a Product or UX Designer who can diagnose why a journey is failing, not only make the interface look better.</p><div className="recruiter-why-grid"><article><strong>I find the real cause</strong><p>I connect user behaviour, business needs and system constraints before choosing a solution.</p></article><article><strong>I design measurable change</strong><p>I turn research into clearer journeys and track whether the redesign actually improved behaviour.</p></article><article><strong>I use AI with judgement</strong><p>I use tools such as ChatGPT, Claude and Figma AI to explore, synthesise and stress-test ideas, always grounded in human insight.</p></article></div></div></section>

        <section className="recruiter-contribution"><div><span>02 / Proof from past work</span><h3>Problems I have already turned around.</h3></div><ol><li><b>LUXTJ · Luxury travel</b><p>Reduced checkout drop-off from nearly 60% to 22% by redesigning the cart and checkout experience, restructuring dense travel information, improving hierarchy, and simplifying the path from review to payment. I also increased profile engagement by up to 70% through a clearer, guided journey.</p></li><li><b>Proficon Labs · AI onboarding</b><p>Reduced onboarding drop-off from nearly 65% to 13% by redesigning Simpo AI’s complex website-creation flow around clearer task progression, simpler choices, and more focused AI-assisted interactions.</p></li><li><b>Proficon Labs client · ORRA Jewellery</b><p>Increased app opening rate by up to 60% by redesigning the Tambola gamification experience, clarifying how users participate and applying behavioural design principles to encourage repeat engagement.</p></li><li><b>Halohues Studios · Format conversion</b><p>Reduced image conversion time by 40% by designing a simpler workflow for VFX artists, making technical controls easier to understand and reducing unnecessary steps in the conversion process.</p></li></ol></section>

        <section className="recruiter-difference"><div><span>03 / What I bring to your team</span><h3>A designer who can think, make and explain.</h3></div><div className="recruiter-difference-grid"><article><small>Product thinking</small><strong>Frame the right problem</strong><p>I connect user needs, business goals and system constraints to focus the team on the decision that matters next.</p></article><article><small>UX craft</small><strong>Design clear journeys</strong><p>I turn research into simple information architecture, useful interactions and experiences people can move through with confidence.</p></article><article><small>AI-assisted workflow</small><strong>Move faster with judgement</strong><p>I use AI tools for exploration, synthesis and critique, while keeping the final decisions human, evidence-led and responsible.</p></article><article><small>Systems + delivery</small><strong>Make work buildable</strong><p>I create reusable patterns, communicate states and partner with developers so good ideas survive implementation.</p></article></div></section>

        <footer className="recruiter-actions"><div><span>The short answer</span><p>I bring clarity to the product, evidence to the decision and care to the collaboration.</p></div><div><Link href="/work/luxtj" data-cursor-label="View">See the thinking <b aria-hidden="true">↗</b></Link><Link href="/resume" data-cursor-label="Download">View resume</Link><a href="mailto:akshayv2310@gmail.com" data-cursor-label="Email">Talk to Akshay</a></div></footer>
      </div>
    </div>}
  </>;
}
