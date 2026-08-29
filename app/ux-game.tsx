'use client';

import {useState} from 'react';

const rounds=[
  {
    prompt:'A traveller is ready to finish a £2,480 booking. Which action gives them more confidence?',
    context:'Checkout · final step',
    options:['Continue','Review & pay £2,480'],
    answer:1,
    principle:'Clarity beats ambiguity. The action tells people what happens next and makes the consequence visible.',
    law:'Visibility of system status',
  },
  {
    prompt:'Someone selects “Delete trip”. Which confirmation is safer?',
    context:'Saved trip · destructive action',
    options:['Yes / No','Keep trip / Delete permanently'],
    answer:1,
    principle:'Actions should name their outcome. Recognition is faster and safer than remembering what “yes” refers to.',
    law:'Error prevention',
  },
  {
    prompt:'A search has twelve possible filters. What should the first view show?',
    context:'Hotel search · filtering',
    options:['All 12 filters at once','4 common filters + “All filters”'],
    answer:1,
    principle:'Progressive disclosure keeps common choices quick while preserving access to the full toolset.',
    law:'Hick’s law',
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
    <div><strong>{score}/3</strong><h3>{score===3?'You spotted every friction point.':'Good instincts. Small words shape big decisions.'}</h3><p>The point is not to know a list of laws. It is to make the safer, clearer path feel obvious.</p></div>
    <button type="button" onClick={restart}>Play again ↻</button>
  </div>;

  return <div className="ux-game-card">
    <div className="game-progress" aria-label={`Question ${round+1} of ${rounds.length}`}><i style={{width:`${((round+1)/rounds.length)*100}%`}}/></div>
    <div className="game-meta"><span>{item.context}</span><span>{String(round+1).padStart(2,'0')} / 03</span></div>
    <h3>{item.prompt}</h3>
    <div className="game-options">
      {item.options.map((option,index)=><button type="button" key={option} onClick={()=>select(index)} disabled={choice!==null} className={choice!==null&&index===item.answer?'is-correct':choice===index?'is-wrong':''}><span>{String.fromCharCode(65+index)}</span>{option}</button>)}
    </div>
    {choice!==null&&<div className="game-feedback" aria-live="polite"><span>{choice===item.answer?'Good call':'A clearer option'}</span><p>{item.principle}</p><small>{item.law}</small><button type="button" onClick={next}>{round===rounds.length-1?'See result':'Next question'} →</button></div>}
  </div>;
}
