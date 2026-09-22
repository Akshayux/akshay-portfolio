'use client';

import {useEffect,useState} from 'react';

const greetings = [
  {text:'Hello',lang:'en'},
  {text:'Hola',lang:'es'},
  {text:'नमस्ते',lang:'hi',label:'Hindi'},
  {text:'నమస్తే',lang:'te',label:'Telugu'},
  {text:'ನಮಸ್ಕಾರ',lang:'kn',label:'Kannada'},
  {text:'வணக்கம்',lang:'ta',label:'Tamil'},
] as const;

const spokenLanguages = 'English, Spanish, Hindi, Telugu, Kannada and Tamil';

export default function LanguageGreeting({className=''}:{className?:string}){
  const [phraseIndex,setPhraseIndex] = useState(0);
  const [displayText,setDisplayText] = useState<string>(greetings[0].text);
  const [deleting,setDeleting] = useState(false);
  const [reducedMotion,setReducedMotion] = useState<boolean | null>(null);

  useEffect(()=>{
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = ()=>setReducedMotion(media.matches);
    syncMotion();
    media.addEventListener?.('change',syncMotion);
    return ()=>media.removeEventListener?.('change',syncMotion);
  },[]);

  useEffect(()=>{
    if(reducedMotion === null || reducedMotion){
      return;
    }

    const phrase = greetings[phraseIndex].text;
    const complete = !deleting && displayText === phrase;
    const empty = deleting && displayText === '';
    const delay = complete ? 1550 : deleting ? 65 : 105;
    const timer = window.setTimeout(()=>{
      if(complete){
        setDeleting(true);
      } else if(empty){
        setPhraseIndex(index=>(index + 1) % greetings.length);
        setDeleting(false);
      } else {
        setDisplayText(current=>deleting ? current.slice(0,-1) : phrase.slice(0,current.length + 1));
      }
    },delay);

    return ()=>window.clearTimeout(timer);
  },[displayText,deleting,phraseIndex,reducedMotion]);

  const greeting = greetings[phraseIndex];

  return <div className={`hero-label hero-language-greeting${className ? ` ${className}` : ''}`} tabIndex={0} aria-label={`Greeting cycling through ${spokenLanguages}`}>
    <span className="hero-language-word" lang={greeting.lang} aria-hidden="true">{displayText}</span>
    {('label' in greeting) && <span className="hero-language-name" aria-hidden="true">{greeting.label}</span>}
    <span className="hero-language-caret" aria-hidden="true">|</span>
    <span className="hero-language-tooltip" role="tooltip"><strong>These are the languages that I speak</strong><span>English · Español · Hindi · Telugu · Kannada · Tamil</span><em>“Knowledge of languages is the doorway to wisdom.”</em></span>
  </div>;
}
