'use client';

import {useState} from 'react';

const rounds=[
  {
    prompt:'Your pizza is running late. Which update would you rather receive?',
    context:'Food delivery',
    options:['Your order is delayed','Your order is 20 min late · Wait or cancel for a refund'],
    answer:1,
    principle:'A helpful update says what happened, how long it may take and what you can do next.',
    lesson:'Useful, not vague',
  },
  {
    prompt:'You are removing a photo. Which confirmation feels safer?',
    context:'Photos',
    options:['Keep photo / Delete from this phone','No / Yes'],
    answer:0,
    principle:'Buttons that name the outcome prevent a quick tap from becoming a permanent mistake.',
    lesson:'Say what the button does',
  },
  {
    prompt:'You need a train ticket quickly. Where should the machine begin?',
    context:'Train tickets',
    options:['Show every ticket type and rule','Ask where and when you want to travel'],
    answer:1,
    principle:'Starting with the question you can answer makes a complicated choice feel manageable.',
    lesson:'One useful step at a time',
  },
  {
    prompt:'An app sends too many alerts. Which setting gives you better control?',
    context:'Notifications',
    options:['Turn off every notification','Choose delivery, offers and account updates separately'],
    answer:1,
    principle:'People should be able to keep useful alerts without accepting all the noisy ones too.',
    lesson:'Control without all-or-nothing',
  },
  {
    prompt:'You are starting a free trial. Which button feels more honest?',
    context:'Subscriptions',
    options:['Start free trial','Start 7-day trial · £8.99/month after'],
    answer:1,
    principle:'Showing the future cost before the tap creates confidence and avoids an unpleasant surprise later.',
    lesson:'No hidden consequences',
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
  const result=score===rounds.length
    ?{title:'Everyday clarity champion',copy:'You spotted every moment where a small detail could save time, worry or regret.'}
    :score>=3
      ?{title:'Friction finder',copy:'You notice when an everyday experience could be clearer, calmer or more honest.'}
      :{title:'Curious explorer',copy:'There is rarely one perfect answer—but asking what feels clearer is a great place to start.'};

  if(finished)return <div className="ux-game-card ux-game-result" aria-live="polite">
    <span className="game-count">Your result</span>
    <div><strong>{score}/{rounds.length}</strong><h3>{result.title}</h3><p>{result.copy}</p><p className="game-payoff">The pattern behind every choice: make the next step obvious, honest and calmer.</p></div>
    <button type="button" onClick={restart}>Play again ↻</button>
  </div>;

  return <div className="ux-game-card">
    <div className="game-progress" aria-label={`Question ${round+1} of ${rounds.length}`}><i style={{width:`${((round+1)/rounds.length)*100}%`}}/></div>
    <div className="game-meta"><span>{item.context}</span><span>{String(round+1).padStart(2,'0')} / {String(rounds.length).padStart(2,'0')}</span></div>
    <h3>{item.prompt}</h3>
    <div className="game-options">
      {item.options.map((option,index)=><button type="button" key={option} onClick={()=>select(index)} disabled={choice!==null} className={choice!==null&&index===item.answer?'is-correct':choice===index?'is-wrong':''}><span>{String.fromCharCode(65+index)}</span>{option}</button>)}
    </div>
    {choice!==null&&<div className="game-feedback" aria-live="polite"><span>{choice===item.answer?'Nice choice':'Another way'}</span><p>{item.principle}</p><small>{item.lesson}</small><button type="button" onClick={next}>{round===rounds.length-1?'See my result':'Next moment'} →</button></div>}
  </div>;
}
