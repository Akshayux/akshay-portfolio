'use client';

import Link from 'next/link';
import {useRef} from 'react';

export default function HeroPreview(){
  const previewRef=useRef<HTMLAnchorElement>(null);

  const move=(event:React.PointerEvent<HTMLAnchorElement>)=>{
    if(event.pointerType==='touch')return;
    const element=previewRef.current;
    if(!element)return;
    const rect=element.getBoundingClientRect();
    element.style.setProperty('--pointer-x',`${event.clientX-rect.left}px`);
    element.style.setProperty('--pointer-y',`${event.clientY-rect.top}px`);
  };
  const reset=()=>{
    const element=previewRef.current;
    element?.style.setProperty('--pointer-x','50%');
    element?.style.setProperty('--pointer-y','50%');
  };

  return <Link ref={previewRef} className="hero-preview reveal" href="/work/luxtj" aria-label="Explore the LUXTJ case study" onPointerMove={move} onPointerLeave={reset} data-cursor-label="Explore">
    <div className="hero-preview-frame">
      <img src="/figma/luxtj-main.png" alt="LUXTJ luxury-travel product interface on a laptop" loading="eager" decoding="async"/>
      <span className="hero-preview-kicker">Selected work · LUXTJ</span>
      <span className="hero-preview-hint">Explore the thinking</span>
      <span className="hero-preview-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 6 9 6-9 6Z"/></svg></span>
    </div>
  </Link>;
}
