'use client';

import {useEffect,useRef,useState,type ReactNode} from 'react';
import {animate,motion,useMotionValue,useReducedMotion,useScroll,useSpring} from 'motion/react';

const ease=[0.22,1,0.36,1] as const;
const cursorInterests=[
  {name:'design',label:'Design'},
  {name:'travel',label:'Travel'},
  {name:'gaming',label:'Gaming'},
  {name:'fitness',label:'Fitness'},
] as const;

function CursorInterestIcon({name}:{name:(typeof cursorInterests)[number]['name']}){
  if(name==='travel')return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 9.4 14.6"/><path d="m22 2-7.6 20-4.2-8.2L2 9.6 22 2Z"/></svg>;
  if(name==='gaming')return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 8h8a6 6 0 0 1 5.5 8.4l-.7 1.6a2.5 2.5 0 0 1-4 1l-2-2h-5.6l-2 2a2.5 2.5 0 0 1-4-1l-.7-1.6A6 6 0 0 1 8 8Z"/><path d="M7 11v4M5 13h4M16.5 12h.01M18.5 14h.01"/></svg>;
  if(name==='fitness')return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M7 12h10M3.5 9v6M6 7.5v9M18 7.5v9M20.5 9v6"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m4 20 4.7-1.2L20 7.5 16.5 4 5.2 15.3 4 20Z"/><path d="m14.8 5.7 3.5 3.5M5.2 15.3l3.5 3.5"/></svg>;
}

function splitIntoRevealWords(element:HTMLElement){
  if(element.dataset.textSplit==='true')return Array.from(element.querySelectorAll<HTMLElement>('.text-reveal-word'));
  const textNodes:Text[]=[];
  const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT,{acceptNode(node){
    const parent=node.parentElement;
    if(!node.textContent?.trim()||parent?.closest('[aria-hidden="true"]'))return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }});
  while(walker.nextNode())textNodes.push(walker.currentNode as Text);
  textNodes.forEach(node=>{
    const fragment=document.createDocumentFragment();
    node.textContent?.split(/(\s+)/).forEach(part=>{
      if(!part)return;
      if(/^\s+$/.test(part)){fragment.appendChild(document.createTextNode(part));return;}
      const word=document.createElement('span');
      word.className='text-reveal-word';
      word.textContent=part;
      fragment.appendChild(word);
    });
    node.parentNode?.replaceChild(fragment,node);
  });
  element.dataset.textSplit='true';
  return Array.from(element.querySelectorAll<HTMLElement>('.text-reveal-word'));
}

function mutedRevealColor(primary:string){
  const channels=primary.match(/[\d.]+/g)?.slice(0,3).map(Number)??[20,20,20];
  const luminance=channels[0]*.299+channels[1]*.587+channels[2]*.114;
  return luminance>155?'rgba(255,255,255,.24)':'rgba(20,20,20,.22)';
}

export default function Motion({children}:{children:ReactNode}){
  const reduceMotion=useReducedMotion();
  const [preloaderPhase,setPreloaderPhase]=useState<'waiting'|'leaving'|'hidden'>('waiting');
  const [cursorInterest,setCursorInterest]=useState(0);
  const [cursorLabel,setCursorLabel]=useState('');
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:130,damping:30,mass:.28});
  const cursorX=useMotionValue(-100);
  const cursorY=useMotionValue(-100);
  const smoothCursorX=useSpring(cursorX,{stiffness:520,damping:34,mass:.34});
  const smoothCursorY=useSpring(cursorY,{stiffness:520,damping:34,mass:.34});
  const cursorRef=useRef<HTMLDivElement>(null);
  const cursorTargetRef=useRef<HTMLElement|null>(null);

  useEffect(()=>{
    if(reduceMotion)return;
    const cycle=window.setInterval(()=>setCursorInterest(current=>(current+1)%cursorInterests.length),1900);
    return()=>window.clearInterval(cycle);
  },[reduceMotion]);

  useEffect(()=>{
    const root=document.documentElement;
    if(reduceMotion){setPreloaderPhase('hidden');return;}
    root.classList.add('preloader-open');
    const leave=window.setTimeout(()=>setPreloaderPhase('leaving'),420);
    const hide=window.setTimeout(()=>{setPreloaderPhase('hidden');root.classList.remove('preloader-open')},1370);
    return()=>{window.clearTimeout(leave);window.clearTimeout(hide);root.classList.remove('preloader-open')};
  },[reduceMotion]);

  useEffect(()=>{
    const root=document.documentElement;
    root.classList.add('motion-ready');
    if(reduceMotion){
      root.classList.add('reduce-motion');
      document.querySelectorAll('.reveal').forEach(item=>item.classList.add('is-visible'));
      document.querySelectorAll('.proof-strip').forEach(item=>item.classList.add('is-animated'));
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

    const proofStrip=document.querySelector<HTMLElement>('.proof-strip');
    let proofObserver:IntersectionObserver|undefined;
    if(proofStrip){
      proofObserver=new IntersectionObserver(entries=>{
        const entry=entries[0];
        if(!entry?.isIntersecting)return;
        proofStrip.classList.add('is-animated');
        proofStrip.querySelectorAll<HTMLElement>('dt[data-count]').forEach((stat,index)=>{
          const target=Number(stat.dataset.count||0);
          const suffix=stat.dataset.suffix||'';
          const counter=animate(0,target,{
            duration:1.15,
            delay:.12+index*.11,
            ease,
            onUpdate:value=>{stat.textContent=`${Math.round(value)}${suffix}`},
          });
          cleanups.push(()=>counter.stop());
        });
        proofObserver?.disconnect();
      },{threshold:.34,rootMargin:'0px 0px -8%'});
      proofObserver.observe(proofStrip);
    }

    const intro=animate('.hero-copy > *, .page-hero > *, .about-hero-copy > *, .contact-heading > *, .case-hero-copy > *',
      {opacity:[0,1],y:[28,0]},
      {duration:.72,delay:(index)=>.78+index*.065,ease});
    cleanups.push(()=>intro.stop());

    const introHeading=document.querySelector<HTMLElement>('h1');
    if(introHeading){
      const introWords=splitIntoRevealWords(introHeading);
      const wordIntros=introWords.map((word,index)=>{
        const primary=getComputedStyle(word).color;
        return animate(word,{color:[mutedRevealColor(primary),primary],y:[12,0]},
          {duration:.72,delay:.82+Math.min(index*.045,.5),ease});
      });
      cleanups.push(()=>wordIntros.forEach(animation=>animation.stop()));
    }

    const textRevealSelector=[
      '.editorial-heading h2','.home-about-copy .large-copy','.testimonial-card blockquote',
      '.case-section h2','.case-closing h2','.about-dual-card h2',
      '.belief-layout h2','.contact-close p','.reflection-section h2'
    ].join(',');
    const revealGroups=Array.from(document.querySelectorAll<HTMLElement>(textRevealSelector)).map(element=>{
      const words=splitIntoRevealWords(element);
      words.forEach(word=>{
        const primary=getComputedStyle(word).color;
        word.style.setProperty('--word-primary',primary);
        word.style.setProperty('--word-muted',mutedRevealColor(primary));
      });
      return{element,words};
    });
    let textFrame=0;
    const updateTextReveal=()=>{
      const viewport=window.innerHeight;
      revealGroups.forEach(({element,words})=>{
        const rect=element.getBoundingClientRect();
        if(rect.top>viewport*1.15)return;
        const start=viewport*.9;
        const end=viewport*.24;
        const progress=Math.max(0,Math.min(1,(start-rect.top)/(start-end)));
        const last=Math.max(words.length-1,1);
        words.forEach((word,index)=>{
          const local=Math.max(0,Math.min(1,progress*1.5-(index/last)*.5));
          word.style.setProperty('--word-reveal',String(local));
          word.style.setProperty('--word-muted-share',`${(1-local)*100}%`);
        });
      });
      textFrame=0;
    };
    const scheduleTextReveal=()=>{if(!textFrame)textFrame=requestAnimationFrame(updateTextReveal)};
    updateTextReveal();

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
    const onScroll=()=>{if(!frame)frame=requestAnimationFrame(updateParallax);scheduleTextReveal()};
    updateParallax();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',scheduleTextReveal,{passive:true});

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

    const cursor=cursorRef.current;
    const findCursorTarget=(node:EventTarget|null)=>node instanceof Element?node.closest<HTMLElement>('[data-cursor-label]'):null;
    const setCursorTarget=(node:EventTarget|null)=>{
      const next=findCursorTarget(node);
      if(cursorTargetRef.current===next)return;
      cursorTargetRef.current=next;
      setCursorLabel(next?.dataset.cursorLabel??'');
      cursor?.classList.toggle('is-interactive',Boolean(next));
      cursor?.classList.toggle('is-nav',Boolean(next?.closest('.site-header')));
    };
    const onPointerMove=(event:PointerEvent)=>{
      if(event.pointerType==='touch')return;
      cursorX.set(event.clientX-19);
      cursorY.set(event.clientY-19);
      cursor?.classList.add('is-visible');
      setCursorTarget(event.target);
    };
    const onPointerOver=(event:PointerEvent)=>{if(event.pointerType!=='touch')setCursorTarget(event.target)};
    const onPointerOut=(event:PointerEvent)=>{if(event.pointerType!=='touch')setCursorTarget(event.relatedTarget)};
    const onPointerDown=()=>cursor?.classList.add('is-pressed');
    const onPointerUp=()=>cursor?.classList.remove('is-pressed');
    const onPointerLeave=()=>{cursor?.classList.remove('is-visible','is-interactive','is-pressed','is-nav');cursorTargetRef.current=null;setCursorLabel('');};
    window.addEventListener('pointermove',onPointerMove,{passive:true});
    document.addEventListener('pointerover',onPointerOver,{passive:true});
    document.addEventListener('pointerout',onPointerOut,{passive:true});
    window.addEventListener('pointerdown',onPointerDown,{passive:true});
    window.addEventListener('pointerup',onPointerUp,{passive:true});
    document.documentElement.addEventListener('mouseleave',onPointerLeave);

    return()=>{
      observer.disconnect();
      proofObserver?.disconnect();
      cleanups.forEach(cleanup=>cleanup());
      window.removeEventListener('scroll',onScroll);
      window.removeEventListener('resize',scheduleTextReveal);
      window.removeEventListener('pointermove',onPointerMove);
      document.removeEventListener('pointerover',onPointerOver);
      document.removeEventListener('pointerout',onPointerOut);
      window.removeEventListener('pointerdown',onPointerDown);
      window.removeEventListener('pointerup',onPointerUp);
      document.documentElement.removeEventListener('mouseleave',onPointerLeave);
      document.removeEventListener('click',onNavigate,true);
      if(frame)cancelAnimationFrame(frame);
      if(textFrame)cancelAnimationFrame(textFrame);
      parallaxLayers.forEach(layer=>{layer.style.translate=''})
      root.classList.remove('motion-ready');
    };
  },[reduceMotion]);

  return <>
    {preloaderPhase!=='hidden'&&<div className={`site-preloader ${preloaderPhase==='leaving'?'is-leaving':''}`} aria-hidden="true">
      <div className="preloader-panels"><i/><i/><i/><i/><i/></div>
      <div className="preloader-signature"><strong>AKSHAY V.</strong><span>Product + UX</span></div>
    </div>}
    <motion.div className="scroll-progress" style={{scaleX:progress}} aria-hidden="true"/>
    <motion.div className="page-curtain" initial={{scaleY:0}} animate={{scaleY:0}} transition={{duration:0}} aria-hidden="true"/>
    <motion.div ref={cursorRef} className="custom-cursor" style={{x:smoothCursorX,y:smoothCursorY}} aria-hidden="true">
      <span className="cursor-shell"><span className="cursor-interest" key={cursorInterests[cursorInterest].name}><CursorInterestIcon name={cursorInterests[cursorInterest].name}/></span><b>↗</b></span>
      <small className="cursor-interest-label">{cursorInterests[cursorInterest].label}</small>
      <small className={`cursor-context-label ${cursorLabel?'is-set':''}`}>{cursorLabel}</small>
    </motion.div>
    {children}
  </>;
}
