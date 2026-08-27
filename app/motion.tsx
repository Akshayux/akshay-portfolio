'use client';

import {useEffect,useState,type ReactNode} from 'react';
import {animate,inView,motion,stagger,useMotionValue,useReducedMotion,useScroll,useSpring} from 'motion/react';

const editorialEase=[0.22,1,0.36,1] as const;
const gridSelectors=[
  '.tag-row','.home-stats','.testimonial-grid','.belief-points','.interest-row',
  '.snapshot-grid','.glance-row','.ecosystem-grid','.principle-grid',
  '.evidence-grid','.supporting-grid','.validation-grid','.outcome-grid',
  '.reflection-grid','.case-facts'
].join(',');

export default function Motion({children}:{children:ReactNode}){
  const reduceMotion=useReducedMotion();
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:120,damping:26,mass:.32});
  const pointerX=useMotionValue(-100);
  const pointerY=useMotionValue(-100);
  const cursorX=useSpring(pointerX,{stiffness:520,damping:36,mass:.18});
  const cursorY=useSpring(pointerY,{stiffness:520,damping:36,mass:.18});
  const [cursorActive,setCursorActive]=useState(false);

  useEffect(()=>{
    const root=document.documentElement;
    root.classList.add('motion-ready','motion-premium');
    if(reduceMotion){
      root.classList.add('reduce-motion');
      document.querySelectorAll('.reveal').forEach(element=>element.classList.add('is-visible'));
      return()=>{root.classList.remove('motion-ready','motion-premium','reduce-motion');};
    }

    const cleanups:Array<()=>void>=[];
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
      });
    },{threshold:.08,rootMargin:'0px 0px -6%'});
    document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

    const introControls=[
      animate('.site-header .location',{opacity:[0,1],y:[-18,0]},{duration:.72,ease:editorialEase}),
      animate('.site-header .round-link',{opacity:[0,1],scale:[.82,1],y:[-12,0]},{duration:.78,delay:.12,ease:editorialEase}),
      animate('.home-hero h1 span',{opacity:[0,1],y:[70,0],rotate:[2,0]},{duration:1.05,delay:stagger(.1,{startDelay:.12}),ease:editorialEase}),
      animate('.hero-portrait',{opacity:[0,1],y:[64,0],scale:[.92,1]},{duration:1.08,delay:.22,ease:editorialEase}),
      animate('.hero-summary, .hero-im',{opacity:[0,1],y:[24,0]},{duration:.72,delay:stagger(.1,{startDelay:.48}),ease:editorialEase}),
      animate('.home-hero > .identity-wrap',{opacity:[0,1],y:[42,0]},{duration:.92,delay:.62,ease:editorialEase}),
      animate('.page-wordmark, .about-title, .contact-panel > h1',{opacity:[0,1],y:[36,0],letterSpacing:['.16em','0em']},{duration:.9,delay:.12,ease:editorialEase}),
      animate('.case-opening > *',{opacity:[0,1],y:[34,0]},{duration:.8,delay:stagger(.07,{startDelay:.08}),ease:editorialEase})
    ];
    cleanups.push(()=>introControls.forEach(control=>control.stop()));

    const stopGridView=inView(gridSelectors,(element)=>{
      const items=Array.from(element.children) as HTMLElement[];
      if(!items.length)return;
      const controls=animate(items,{opacity:[0,1],y:[32,0],scale:[.97,1]},{duration:.72,delay:stagger(.075),ease:editorialEase});
      return()=>controls.stop();
    },{margin:'0px 0px -12% 0px',amount:.12});
    cleanups.push(stopGridView);

    const stopOrbitView=inView('.skill-orbit',()=>{
      const controls=animate('.orbit-pill',{opacity:[0,1],filter:['blur(8px)','blur(0px)']},{duration:.74,delay:stagger(.065),ease:editorialEase});
      return()=>controls.stop();
    },{amount:.2});
    cleanups.push(stopOrbitView);

    const countElements=Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const countObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        const element=entry.target as HTMLElement;
        const target=Number(element.dataset.count||0);
        const decimals=Number(element.dataset.decimals||0);
        const suffix=element.dataset.suffix||'';
        const started=performance.now();
        const duration=1200;
        const tick=(now:number)=>{
          const raw=Math.min(1,(now-started)/duration);
          const eased=1-Math.pow(1-raw,4);
          element.textContent=(target*eased).toFixed(decimals)+suffix;
          if(raw<1)requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        countObserver.unobserve(element);
      });
    },{threshold:.55});
    countElements.forEach(element=>countObserver.observe(element));
    cleanups.push(()=>countObserver.disconnect());

    const tiltCards=Array.from(document.querySelectorAll<HTMLElement>('.project-card'));
    tiltCards.forEach(card=>{
      const visual=card.querySelector<HTMLElement>('.project-visual');
      const move=(event:PointerEvent)=>{
        if(event.pointerType==='touch')return;
        const rect=card.getBoundingClientRect();
        const x=(event.clientX-rect.left)/rect.width-.5;
        const y=(event.clientY-rect.top)/rect.height-.5;
        animate(card,{rotateX:-y*3.2,rotateY:x*4.2,y:-5},{type:'spring',stiffness:210,damping:24,mass:.55});
        if(visual)animate(visual,{x:x*9,y:y*7},{type:'spring',stiffness:220,damping:25,mass:.45});
      };
      const leave=()=>{
        animate(card,{rotateX:0,rotateY:0,y:0},{type:'spring',stiffness:170,damping:22,mass:.65});
        if(visual)animate(visual,{x:0,y:0},{type:'spring',stiffness:180,damping:24,mass:.55});
      };
      card.addEventListener('pointermove',move);
      card.addEventListener('pointerleave',leave);
      cleanups.push(()=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave);});
    });

    const magneticElements=Array.from(document.querySelectorAll<HTMLElement>('.round-link,.contact-form button'));
    magneticElements.forEach(element=>{
      const move=(event:PointerEvent)=>{
        if(event.pointerType==='touch')return;
        const rect=element.getBoundingClientRect();
        animate(element,{x:(event.clientX-rect.left-rect.width/2)*.16,y:(event.clientY-rect.top-rect.height/2)*.2},{type:'spring',stiffness:280,damping:20,mass:.35});
      };
      const leave=()=>animate(element,{x:0,y:0},{type:'spring',stiffness:240,damping:18,mass:.4});
      element.addEventListener('pointermove',move);
      element.addEventListener('pointerleave',leave);
      cleanups.push(()=>{element.removeEventListener('pointermove',move);element.removeEventListener('pointerleave',leave);});
    });

    let frame=0;
    let lastScroll=window.scrollY;
    let scrollVelocity=0;
    const update=()=>{
      const current=window.scrollY;
      scrollVelocity+=(current-lastScroll-scrollVelocity)*.22;
      root.style.setProperty('--page-scroll',String(current));
      root.style.setProperty('--scroll-velocity',String(Math.max(-22,Math.min(22,scrollVelocity))));
      lastScroll=current;
      document.querySelectorAll<HTMLElement>('.parallax-card img,.case-device-hero img').forEach((image,index)=>{
        const rect=image.getBoundingClientRect();
        if(rect.bottom<0||rect.top>window.innerHeight)return;
        const progress=(rect.top+rect.height/2-window.innerHeight/2)/window.innerHeight;
        image.style.translate=`0 ${progress*(index%2?18:-15)}px`;
      });
      frame=0;
    };
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const onPointer=(event:PointerEvent)=>{
      root.style.setProperty('--pointer-x',String(event.clientX/window.innerWidth-.5));
      root.style.setProperty('--pointer-y',String(event.clientY/window.innerHeight-.5));
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };
    const onPointerOver=(event:PointerEvent)=>{
      const target=event.target as Element|null;
      setCursorActive(Boolean(target?.closest('a,button,.project-card,.orbit-pill')));
    };
    const onPointerLeave=()=>{pointerX.set(-100);pointerY.set(-100);setCursorActive(false);};

    let transitioning=false;
    const onNavigate=(event:MouseEvent)=>{
      const anchor=(event.target as Element|null)?.closest('a') as HTMLAnchorElement|null;
      if(!anchor||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||anchor.target==='_blank'||anchor.hasAttribute('download'))return;
      const url=new URL(anchor.href,window.location.href);
      if(url.origin!==window.location.origin||url.href===window.location.href||url.hash)return;
      event.preventDefault();
      if(transitioning)return;
      transitioning=true;
      animate('.page-curtain',{scaleY:[0,1]},{duration:.46,ease:[.76,0,.24,1]});
      window.setTimeout(()=>{window.location.href=url.href;},430);
    };

    update();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('pointermove',onPointer,{passive:true});
    window.addEventListener('pointerover',onPointerOver,{passive:true});
    document.documentElement.addEventListener('pointerleave',onPointerLeave);
    document.addEventListener('click',onNavigate,true);
    return()=>{
      observer.disconnect();
      cleanups.forEach(cleanup=>cleanup());
      window.removeEventListener('scroll',onScroll);
      window.removeEventListener('pointermove',onPointer);
      window.removeEventListener('pointerover',onPointerOver);
      document.documentElement.removeEventListener('pointerleave',onPointerLeave);
      document.removeEventListener('click',onNavigate,true);
      if(frame)cancelAnimationFrame(frame);
      root.classList.remove('motion-ready','motion-premium');
    };
  },[pointerX,pointerY,reduceMotion]);

  return <>
    <motion.div className="scroll-progress" style={{scaleX:progress}} aria-hidden="true"/>
    <motion.div className={`cursor-orb ${cursorActive?'is-active':''}`} style={{x:cursorX,y:cursorY}} aria-hidden="true"/>
    <motion.div className="page-curtain" initial={{scaleY:1}} animate={{scaleY:0}} transition={{duration:reduceMotion?0:.78,ease:[.76,0,.24,1],delay:reduceMotion?0:.06}} aria-hidden="true"/>
    {children}
  </>;
}
