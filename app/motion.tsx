'use client';

import {useEffect,type ReactNode} from 'react';
import {motion,useReducedMotion,useScroll,useSpring} from 'motion/react';
import {usePathname} from 'next/navigation';

export default function Motion({children}:{children:ReactNode}){
  const pathname=usePathname();
  const reduceMotion=useReducedMotion();
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:130,damping:30,mass:.28});

  useEffect(()=>{
    const root=document.documentElement;
    if(reduceMotion){
      root.classList.add('reduce-motion');
      return()=>root.classList.remove('reduce-motion');
    }

    // Content stays legible while each section makes a brief entrance.
    const items=Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },{threshold:.02,rootMargin:'0px 0px -24px 0px'});
    items.forEach(item=>observer.observe(item));

    document.querySelector<HTMLElement>('.proof-strip')?.classList.add('is-animated');
    return()=>observer.disconnect();
  },[pathname,reduceMotion]);

  return <>
    <motion.div className="scroll-progress" style={{scaleX:progress}} aria-hidden="true"/>
    {children}
  </>;
}
