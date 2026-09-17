'use client';

import {useEffect,useState} from 'react';

const greetings = [
  {text:'Hello',lang:'en'},
  {text:'నమస్తే',lang:'te'},
  {text:'Hello',lang:'en'},
  {text:'ನಮಸ್ಕಾರ',lang:'kn'},
  {text:'नमस्ते',lang:'hi'},
  {text:'வணக்கம்',lang:'ta'},
  {text:'Hola',lang:'es'},
] as const;

const spokenLanguages = 'I speak Kannada · Hindi · Telugu · English · Tamil · Español';

export default function LanguageGreeting(){
  const [phraseIndex,setPhraseIndex] = useState(0);
  const [displayText,setDisplayText] = useState(greetings[0].text);
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

  return <div className="hero-label hero-language-greeting" tabIndex={0} aria-label="Namasté in Kannada, Hindi, Telugu, English, Tamil and Spanish" data-tooltip={spokenLanguages}>
    <span className="hero-language-word" lang={greetings[phraseIndex].lang} aria-hidden="true">{displayText}</span>
    <span className="hero-language-caret" aria-hidden="true">|</span>
  </div>;
}
