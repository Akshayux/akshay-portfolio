import type {Metadata} from 'next';
import Link from 'next/link';
import {Arrow,SiteFooter,SiteHeader} from '../../components';

export const metadata:Metadata={
  title:'Simpo AI Case Study - Making AI Onboarding Clearer',
  description:'How Akshay Venkata Narayana redesigned Simpo AI’s website-creation onboarding to reduce directional drop-off from about 65% to 13%.',
};

function Kicker({children}:{children:React.ReactNode}){return <span className="eyebrow case-eyebrow">{children}</span>}

export default function SimpoAIPage(){return <main id="top" className="case-page simpo-case">
  <SiteHeader/>
  <aside className="case-toc" aria-label="Case study contents"><span>On this page</span><a href="#overview" data-cursor-label="Jump">Overview</a><a href="#problem" data-cursor-label="Jump">Problem</a><a href="#research" data-cursor-label="Jump">Investigation</a><a href="#redesign" data-cursor-label="Jump">Redesign</a><a href="#outcome" data-cursor-label="Jump">Outcome</a><a href="#learning" data-cursor-label="Jump">Reflection</a></aside>

  <section className="case-hero shell" id="overview">
    <div className="case-hero-copy reveal"><Kicker>Proficon Labs · Simpo AI</Kicker><h1 data-parallax-layer data-parallax-speed="10">Making an AI website builder feel less like a black box.</h1><p>Simpo AI helps people create a website with AI. The early onboarding asked people to make unfamiliar choices before they understood what the system would do for them. I redesigned that first session around clearer progress, smaller decisions and visible feedback.</p></div>
    <dl className="case-summary reveal"><div><dt>Role</dt><dd>UX Designer</dd></div><div><dt>Scope</dt><dd>Research, journey design and UI</dd></div><div><dt>Timeline</dt><dd>Oct 2024 - Sept 2025</dd></div><div><dt>Context</dt><dd>AI website creation</dd></div><div><dt>Team</dt><dd>Product and engineering</dd></div><div><dt>Read time</dt><dd>6 minutes</dd></div></dl>
  </section>

  <section className="case-hero-media simpo-hero-media reveal" data-parallax><img src="/simpo-ai-flow.svg" alt="Abstract illustration of the Simpo AI onboarding flow"/></section>

  <section className="lux-skim case-wide reveal" aria-label="Simpo AI case study at a glance"><div><Kicker>At a glance</Kicker><small>90-second summary</small></div><ul><li><b>The problem</b><p>People were leaving before they could see a useful first result.</p></li><li><b>The constraint</b><p>The flow needed to make AI guidance clearer without taking control away from the person creating the site.</p></li><li><b>My ownership</b><p>I investigated abandonment, mapped the first session and designed the new progression.</p></li><li><b>The outcome</b><p>Directional onboarding drop-off moved from about 65% to 13%.</p></li></ul></section>

  <section className="case-section case-narrow" id="problem"><div className="case-split"><div className="reveal"><Kicker>The original problem</Kicker><h2>People had to make decisions before they had enough context to make them.</h2></div><div className="reveal"><p>The existing flow exposed several choices at once, including choices about the site and choices about what the AI should generate. That made the first session feel like setup work instead of a path to an outcome.</p><blockquote><small>Design question</small>How might the flow explain the next useful choice, show what the AI is doing and keep the person moving towards a first website?</blockquote></div></div></section>

  <section className="case-section case-wide" id="research"><div className="case-section-heading reveal"><Kicker>What I investigated</Kicker><h2>I traced abandonment back to the moments where progress disappeared.</h2><p>I reviewed the existing website-creation journey, looked for the decisions people met before receiving value and benchmarked familiar staged-creation patterns. The aim was to find where the interaction became unclear, not just where the interface looked busy.</p></div><div className="responsibility-grid reveal"><article><span>01 · Entry</span><h3>What does the AI need from me?</h3><p>Early prompts needed a clearer purpose so people could understand why each answer mattered.</p></article><article><span>02 · Progress</span><h3>What has happened so far?</h3><p>The journey needed a visible sense of movement and an understandable next step.</p></article><article><span>03 · Control</span><h3>Can I change this later?</h3><p>People need reassurance that a first choice is a starting point, not an irreversible commitment.</p></article><article><span>04 · Output</span><h3>When will I see something useful?</h3><p>The flow needed to bring the first visible result closer to the decisions that created it.</p></article></div></section>

  <section className="case-section case-narrow" id="redesign"><div className="case-split"><div className="reveal"><Kicker>What changed</Kicker><h2>I turned a broad setup flow into a sequence of small, explainable decisions.</h2></div><div className="reveal"><p>The redesign focused each step on one question, kept the next action visible and used progress cues to show where the person was in the journey. The language shifted from system-first instructions to outcome-first prompts, with feedback that made the AI&apos;s contribution more legible.</p><h3 className="measure-title">The design decisions</h3><ul className="measure-list"><li>Break initial setup into a task-focused sequence</li><li>Explain why each input affects the generated website</li><li>Show progress and preserve a clear route to edit earlier choices</li><li>Bring an early generated result into the journey sooner</li></ul></div></div></section>

  <section className="lux-impact case-wide reveal" id="outcome" aria-label="Simpo AI project outcome"><div><strong>~65% → 13%</strong><span>Onboarding drop-off</span></div><div><strong>25%</strong><span>Faster task completion</span></div><div><strong>Clearer</strong><span>Task progression</span></div><div><strong>Earlier</strong><span>Visible AI feedback</span></div></section>

  <section className="case-section case-narrow reveal"><Kicker>Outcome</Kicker><h2>The first session became easier to understand and finish.</h2><p className="case-lead">The reported onboarding drop-off moved from nearly 65% to 13% after the journey was rebuilt around simpler choices and clearer task progression. This was a directional product metric from the team&apos;s existing analytics, not a controlled A/B test.</p></section>

  <section className="case-section case-narrow" id="learning"><div className="case-split"><div className="reveal"><Kicker>Reflection</Kicker><h2>AI needs to make its reasoning visible at the moment a person has to decide.</h2></div><div className="reveal"><p>The useful shift was treating onboarding as a conversation with a clear destination, not a form that happens to have AI behind it. Every question had to answer a practical need: what am I choosing, why does it matter and what will happen next?</p><p>That became the standard I carried into later AI interaction work: show enough of the system&apos;s intent to build confidence, then get out of the person&apos;s way.</p></div></div></section>

  <section className="case-closing shell reveal"><span>More work</span><h2>Explore the case studies behind the outcomes.</h2><p>Customer journeys, partner operations, digital health and AI-assisted product flows.</p><div><Link href="/work" data-cursor-label="Back">← All work</Link><Link href="/work/luxtj" data-cursor-label="View">Read LUXTJ <Arrow/></Link></div></section>
  <SiteFooter/>
</main>}
