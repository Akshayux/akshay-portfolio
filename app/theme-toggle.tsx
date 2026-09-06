'use client';

import {useEffect,useState} from 'react';

type Theme='light'|'dark';

export default function ThemeToggle(){
  const [theme,setTheme]=useState<Theme>('light');

  useEffect(()=>{
    setTheme(document.documentElement.dataset.theme==='dark'?'dark':'light');
  },[]);

  function toggleTheme(){
    const next:Theme=theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=next;
    localStorage.setItem('portfolio-theme',next);
    setTheme(next);
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`} aria-pressed={theme==='dark'} data-cursor-label="Theme">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {theme==='dark'
        ? <><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></>
        : <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z"/>}
    </svg>
  </button>;
}
