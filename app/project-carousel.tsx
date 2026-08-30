'use client';

import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {Arrow} from './components';

type Project={
  index:string;
  title:string;
  label:string;
  description:string;
  image:string;
  href:string;
  tags:string[];
};

export default function ProjectCarousel({projects}:{projects:Project[]}){
  const trackRef=useRef<HTMLDivElement>(null);
  const frameRef=useRef(0);
  const [active,setActive]=useState(0);
  const [ready,setReady]=useState(false);

  const goTo=(index:number)=>{
    const track=trackRef.current;
    if(!track)return;
    const next=(index+projects.length)%projects.length;
    const card=track.querySelectorAll<HTMLElement>('.liquid-project-card')[next];
    if(!card)return;
    track.scrollTo({left:card.offsetLeft-(track.clientWidth-card.clientWidth)/2,behavior:'smooth'});
    setActive(next);
  };

  useEffect(()=>{
    const track=trackRef.current;
    if(!track)return;
    setReady(true);
    const update=()=>{
      const center=track.scrollLeft+track.clientWidth/2;
      let closest=0;
      let distance=Number.POSITIVE_INFINITY;
      track.querySelectorAll<HTMLElement>('.liquid-project-card').forEach((card,index)=>{
        const nextDistance=Math.abs(card.offsetLeft+card.clientWidth/2-center);
        if(nextDistance<distance){distance=nextDistance;closest=index;}
      });
      setActive(closest);
      frameRef.current=0;
    };
    const onScroll=()=>{if(!frameRef.current)frameRef.current=requestAnimationFrame(update)};
    const onResize=()=>update();
    update();
    track.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onResize,{passive:true});
    return()=>{
      track.removeEventListener('scroll',onScroll);
      window.removeEventListener('resize',onResize);
      if(frameRef.current)cancelAnimationFrame(frameRef.current);
    };
  },[projects.length]);

  return <section className={`liquid-project-carousel reveal ${ready?'is-ready':''}`} aria-roledescription="carousel" aria-label="Selected Product and UX case studies" onKeyDown={event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();goTo(active-1)}
    if(event.key==='ArrowRight'){event.preventDefault();goTo(active+1)}
  }}>
    <div className="liquid-project-track" ref={trackRef} tabIndex={0}>
      {projects.map((project,index)=><article className={`liquid-project-card ${index===active?'is-active':''}`} key={project.title} role="group" aria-label={`${index+1} of ${projects.length}: ${project.title}`}>
        <Link href={project.href} aria-label={`Read the ${project.title} case study`}>
          <img src={project.image} alt={`${project.title} product interface`} draggable="false"/>
          <span className="liquid-project-number">{project.index}</span>
          <div className="liquid-project-copy">
            <small>{project.label}</small>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
          </div>
          <span className="liquid-project-open"><Arrow/></span>
        </Link>
      </article>)}
    </div>
    <div className="liquid-lens" aria-hidden="true"><i/><b/></div>
    <footer className="liquid-carousel-controls">
      <span><strong>{String(active+1).padStart(2,'0')}</strong> / {String(projects.length).padStart(2,'0')}</span>
      <p>Drag or use the arrows</p>
      <div><button type="button" onClick={()=>goTo(active-1)} aria-label="Previous project">←</button><button type="button" onClick={()=>goTo(active+1)} aria-label="Next project">→</button></div>
    </footer>
  </section>;
}
