'use client';

import Link from 'next/link';
import {useEffect,useRef} from 'react';

export default function HeroPreview(){
  const previewRef=useRef<HTMLAnchorElement>(null);
  const scrollProgressRef=useRef(0);

  const move=(event:React.PointerEvent<HTMLAnchorElement>)=>{
    if(event.pointerType==='touch')return;
    const element=previewRef.current;
    if(!element)return;
    const rect=element.getBoundingClientRect();
    if(scrollProgressRef.current>0)return;
    const normalized=(event.clientX-rect.left)/rect.width-.5;
    element.style.setProperty('--pointer-shift-x',`${normalized*72}px`);
  };
  const reset=()=>{
    const element=previewRef.current;
    element?.style.setProperty('--pointer-shift-x','0px');
  };

  useEffect(()=>{
    const element=previewRef.current;
    if(!element)return;
    const hero=element.closest<HTMLElement>('.hero-centered');
    let frame=0;
    const updateScroll=()=>{
      frame=0;
      if(!hero)return;
      const travel=Math.max(hero.offsetHeight-window.innerHeight,1);
      const progress=Math.max(0,Math.min(1,-hero.getBoundingClientRect().top/travel));
      scrollProgressRef.current=progress;
      const compactWidth=Math.min(539,window.innerWidth*.88);
      const fullScale=Math.max(1,window.innerWidth/compactWidth);
      const scale=1+(fullScale-1)*progress;
      element.style.setProperty('--scroll-scale',String(scale));
      element.style.setProperty('--scroll-drop',`${(270*(scale-1))/2+40*progress}px`);
      if(progress>0)element.style.setProperty('--pointer-shift-x','0px');
    };
    const onScroll=()=>{
      if(frame)return;
      frame=window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll);
    return()=>{
      window.removeEventListener('scroll',onScroll);
      window.removeEventListener('resize',onScroll);
      if(frame)window.cancelAnimationFrame(frame);
    };
  },[]);

  return <Link ref={previewRef} className="hero-preview reveal" href="/work" aria-label="Explore selected work" onPointerMove={move} onPointerLeave={reset} data-cursor-label="Explore">
    <div className="hero-preview-frame">
      <video className="hero-preview-video" autoPlay muted loop playsInline preload="auto" aria-label="Akshay Venkata Narayana product design reel">
        <source src="/hero-reel.mp4" type="video/mp4"/>
      </video>
      <span className="hero-preview-kicker">Selected work · LUXTJ</span>
      <span className="hero-preview-hint">Explore the thinking</span>
      <span className="hero-preview-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 6 9 6-9 6Z"/></svg></span>
    </div>
  </Link>;
}
