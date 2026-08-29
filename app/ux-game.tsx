'use client';

import {useState} from 'react';

const rounds=[
  {
    prompt:'A patient has submitted a care request. Which status reduces uncertainty?',
    context:'Healthcare · waiting state',
    options:['Request received','Request received · clinician review by 11:20'],
    answer:1,
    principle:'A useful status confirms success and answers the next question: what happens now, and when?',
    law:'Visibility of system status',
  },
  {
    prompt:'An admin selects “Remove team member”. Which confirmation is safer?',
    context:'Enterprise software · permissions',
    options:['Yes / No','Keep access / Remove access'],
    answer:1,
    principle:'Actions should name their outcome. Recognition is faster and safer than remembering what “yes” refers to.',
    law:'Error prevention',
  },
  {
    prompt:'A public-service form has twelve fields. What should the first step ask for?',
    context:'Digital service · form design',
    options:['All 12 fields at once','Only what is needed to begin'],
    answer:1,
    principle:'Progressive disclosure lowers the initial effort while keeping the full task available when it becomes relevant.',
    law:'Progressive disclosure',
  },
];

export default function UXGame(){
  const [round,setRound]=useState(0);
  const [choice,setChoice]=useState<number|null>(null);
  const [score,setScore]=useState(0);
  const item=rounds[round];
  const finished=round>=rounds.length;

  const select=(index:number)=>{
    if(choice!==null)return;
    setChoice(index);
    if(index===item.answer)setScore(value=>value+1);
  };
  const next=()=>{
    if(round===rounds.length-1){setRound(rounds.length);return;}
    setRound(value=>value+1);setChoice(null);
  };
  const restart=()=>{setRound(0);setChoice(null);setScore(0)};

  if(finished)return <div className="ux-game-card ux-game-result" aria-live="polite">
    <span className="game-count">Complete</span>
    <div><strong>{score}/{rounds.length}</strong><h3>{score===rounds.length?'You spotted every friction point.':'Good instincts. Small words shape big decisions.'}</h3><p>The point is not to memorise UX laws. It is to make the safer, clearer path feel obvious in any product.</p></div>
    <button type="button" onClick={restart}>Play again ↻</button>
  </div>;

  return <div className="ux-game-card">
    <div className="game-progress" aria-label={`Question ${round+1} of ${rounds.length}`}><i style={{width:`${((round+1)/rounds.length)*100}%`}}/></div>
    <div className="game-meta"><span>{item.context}</span><span>{String(round+1).padStart(2,'0')} / {String(rounds.length).padStart(2,'0')}</span></div>
    <h3>{item.prompt}</h3>
    <div className="game-options">
      {item.options.map((option,index)=><button type="button" key={option} onClick={()=>select(index)} disabled={choice!==null} className={choice!==null&&index===item.answer?'is-correct':choice===index?'is-wrong':''}><span>{String.fromCharCode(65+index)}</span>{option}</button>)}
    </div>
    {choice!==null&&<div className="game-feedback" aria-live="polite"><span>{choice===item.answer?'Good call':'A clearer option'}</span><p>{item.principle}</p><small>{item.law}</small><button type="button" onClick={next}>{round===rounds.length-1?'See result':'Next question'} →</button></div>}
  </div>;
}
