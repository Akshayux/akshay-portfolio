'use client';

import {useEffect, type ReactNode} from 'react';

export default function Motion({children}:{children:ReactNode}){
  useEffect(()=>{
    const root=document.documentElement;
    root.classList.add('motion-ready');
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
      });
    },{threshold:.08,rootMargin:'0px 0px -6%'});
    document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

    let frame=0;
    const update=()=>{root.style.setProperty('--page-scroll',String(window.scrollY));frame=0;};
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const onPointer=(event:PointerEvent)=>{
      root.style.setProperty('--pointer-x',String(event.clientX/window.innerWidth-.5));
      root.style.setProperty('--pointer-y',String(event.clientY/window.innerHeight-.5));
    };
    update();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('pointermove',onPointer,{passive:true});
    return()=>{observer.disconnect();window.removeEventListener('scroll',onScroll);window.removeEventListener('pointermove',onPointer);if(frame)cancelAnimationFrame(frame);root.classList.remove('motion-ready');};
  },[]);
  return children;
}
