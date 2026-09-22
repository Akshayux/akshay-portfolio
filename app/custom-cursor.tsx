'use client';

import {useEffect,useRef,useState} from 'react';

export default function CustomCursor(){
  const cursorRef=useRef<HTMLDivElement>(null);
  const [visible,setVisible]=useState(false);
  const [interactive,setInteractive]=useState(false);
  const [pressed,setPressed]=useState(false);
  const [label,setLabel]=useState('');

  useEffect(()=>{
    const finePointer=window.matchMedia('(pointer:fine)');
    if(!finePointer.matches)return;
    let frame=0;
    let nextX=0;
    let nextY=0;
    const paint=()=>{
      frame=0;
      cursorRef.current?.style.setProperty('transform',`translate3d(${nextX}px,${nextY}px,0)`);
    };
    const move=(event:PointerEvent)=>{
      nextX=event.clientX;
      nextY=event.clientY;
      if(!frame)frame=window.requestAnimationFrame(paint);
      setVisible(true);
      const target=event.target instanceof Element?event.target:null;
      const action=target?.closest<HTMLElement>('[data-cursor-label],a,button,summary,input,textarea,select');
      const nextLabel=action?.dataset.cursorLabel ?? (action?'Open':'');
      setInteractive(Boolean(action));
      setLabel(nextLabel);
    };
    const leave=()=>{setVisible(false);setInteractive(false);setPressed(false)};
    const down=()=>setPressed(true);
    const up=()=>setPressed(false);
    window.addEventListener('pointermove',move,{passive:true});
    window.addEventListener('pointerleave',leave);
    window.addEventListener('pointerdown',down,{passive:true});
    window.addEventListener('pointerup',up,{passive:true});
    return()=>{
      window.removeEventListener('pointermove',move);
      window.removeEventListener('pointerleave',leave);
      window.removeEventListener('pointerdown',down);
      window.removeEventListener('pointerup',up);
      if(frame)window.cancelAnimationFrame(frame);
    };
  },[]);

  return <div ref={cursorRef} className={`custom-cursor custom-cursor-plane${visible?' is-visible':''}${interactive?' is-interactive':''}${pressed?' is-pressed':''}`} aria-hidden="true">
    <span className="cursor-plane">
      <svg viewBox="0 0 32 32" focusable="false" aria-hidden="true">
        <path className="cursor-plane-body" d="M2.8 2.9 29.2 13.7 17.5 18.7 12.4 29.2 2.8 2.9Z"/>
        <path className="cursor-plane-fold" d="M4.2 4.5 17.5 18.7 28.8 13.8"/>
      </svg>
    </span>
    <span className="cursor-label">{label}</span>
  </div>;
}
