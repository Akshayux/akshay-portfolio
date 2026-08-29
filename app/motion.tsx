'use client';

import {useEffect,type ReactNode} from 'react';
import {animate,motion,useReducedMotion,useScroll,useSpring} from 'motion/react';

const ease=[0.22,1,0.36,1] as const;

export default function Motion({children}:{children:ReactNode}){
  const reduceMotion=useReducedMotion();
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:130,damping:30,mass:.28});

  useEffect(()=>{
    const root=document.documentElement;
    root.classList.add('motion-ready');
    if(reduceMotion){
      root.classList.add('reduce-motion');
      document.querySelectorAll('.reveal').forEach(item=>item.classList.add('is-visible'));
      return()=>root.classList.remove('motion-ready','reduce-motion');
    }

    const cleanups:Array<()=>void>=[];
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },{threshold:.08,rootMargin:'0px 0px -7%'});
    document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));

    const intro=animate('.hero-copy > *, .page-hero > *, .about-hero-copy > *, .contact-heading > *, .case-hero-copy > *',
      {opacity:[0,1],y:[28,0]},
      {duration:.72,delay:(index)=>.06+index*.065,ease});
    cleanups.push(()=>intro.stop());

    const parallaxItems=Array.from(document.querySelectorAll<HTMLElement>('[data-parallax] img'));
    const parallaxLayers=Array.from(document.querySelectorAll<HTMLElement>('[data-parallax-layer]'));
    let frame=0;
    const updateParallax=()=>{
      parallaxItems.forEach((image,index)=>{
        const rect=image.getBoundingClientRect();
        if(rect.bottom<0||rect.top>window.innerHeight)return;
        const delta=(rect.top+rect.height/2-window.innerHeight/2)/window.innerHeight;
        image.style.transform=`translate3d(0, ${delta*(index%2?18:-18)}px, 0) scale(1.035)`;
      });
      parallaxLayers.forEach(layer=>{
        const rect=layer.getBoundingClientRect();
        if(rect.bottom<0||rect.top>window.innerHeight)return;
        const speed=Number(layer.dataset.parallaxSpeed||10);
        const delta=(rect.top+rect.height/2-window.innerHeight/2)/window.innerHeight;
        layer.style.translate=`0 ${delta*speed}px`;
      });
      frame=0;
    };
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(updateParallax)};
    updateParallax();
    window.addEventListener('scroll',onScroll,{passive:true});

    const tilts=Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
    tilts.forEach(card=>{
      const move=(event:PointerEvent)=>{
        if(event.pointerType==='touch')return;
        const rect=card.getBoundingClientRect();
        const x=(event.clientX-rect.left)/rect.width-.5;
        const y=(event.clientY-rect.top)/rect.height-.5;
        animate(card,{rotateX:-y*1.2,rotateY:x*1.4,y:-3},{type:'spring',stiffness:180,damping:26,mass:.7});
      };
      const leave=()=>animate(card,{rotateX:0,rotateY:0,y:0},{type:'spring',stiffness:180,damping:24,mass:.65});
      card.addEventListener('pointermove',move);
      card.addEventListener('pointerleave',leave);
      cleanups.push(()=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave)});
    });

    let transitioning=false;
    const onNavigate=(event:MouseEvent)=>{
      const anchor=(event.target as Element|null)?.closest('a') as HTMLAnchorElement|null;
      if(!anchor||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||anchor.target==='_blank'||anchor.hasAttribute('download'))return;
      const url=new URL(anchor.href,window.location.href);
      if(url.origin!==window.location.origin||url.href===window.location.href||url.hash||url.protocol==='mailto:')return;
      event.preventDefault();
      if(transitioning)return;
      transitioning=true;
      animate('.page-curtain',{scaleY:[0,1]},{duration:.34,ease:[.76,0,.24,1]});
      window.setTimeout(()=>{window.location.href=url.href},315);
    };
    document.addEventListener('click',onNavigate,true);

    return()=>{
      observer.disconnect();
      cleanups.forEach(cleanup=>cleanup());
      window.removeEventListener('scroll',onScroll);
      document.removeEventListener('click',onNavigate,true);
      if(frame)cancelAnimationFrame(frame);
      parallaxLayers.forEach(layer=>{layer.style.translate=''})
      root.classList.remove('motion-ready');
    };
  },[reduceMotion]);

  return <>
    <motion.div className="scroll-progress" style={{scaleX:progress}} aria-hidden="true"/>
    <motion.div className="page-curtain" initial={{scaleY:1}} animate={{scaleY:0}} transition={{duration:reduceMotion?0:.58,ease:[.76,0,.24,1]}} aria-hidden="true"/>
    {children}
  </>;
}
