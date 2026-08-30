import type {Metadata} from 'next';
import {Arrow,Button,SiteFooter,SiteHeader,Status} from '../components';
import {profile,socials} from '../data';

export const metadata:Metadata={title:'Contact',description:'Contact Akshay about product design roles, UX projects and meaningful collaborations.'};

export default function ContactPage(){return <main id="top" className="contact-page">
  <SiteHeader/>
  <section className="contact-hero shell">
    <div className="contact-heading reveal"><Status/><span className="eyebrow">Contact</span><h1 data-parallax-layer data-parallax-speed="10">Say hello.<br/>Tell me what you&apos;re building.</h1></div>
    <div className="contact-content reveal">
      <p>I&apos;m looking for a Product or UX Design role where I can stay close to the work, learn from what ships and improve it over time. I&apos;m also open to selected freelance projects.</p>
      <div className="contact-primary"><span>Best way to reach me</span><a href={`mailto:${profile.email}`} data-cursor-label="Email">{profile.email} <Arrow/></a><small>I usually reply within two working days.</small></div>
      <div className="contact-buttons"><Button href={`mailto:${profile.email}?subject=Design%20opportunity`} cursorLabel="Email">Email me</Button><Button href="/resume" secondary cursorLabel="Download">View resume</Button></div>
    </div>
  </section>
  <section className="contact-details shell reveal">
    <div><span>Location</span><strong>United Kingdom</strong><p>Open to on-site, hybrid and remote roles.</p></div>
    <div><span>Disciplines</span><strong>Product Design · UX Design</strong><p>Complex systems, web products and mobile experiences.</p></div>
    <div><span>Elsewhere</span><div className="contact-socials">{socials.map(item=><a key={item.label} href={item.href} target="_blank" rel="noreferrer" data-cursor-label="Open">{item.label} <Arrow/></a>)}</div><p>Work, writing and life outside the screen.</p></div>
  </section>
  <section className="contact-close shell reveal"><p>If you include the role, team, product challenge and expected timeline, I can give you a useful response faster.</p></section>
  <SiteFooter/>
</main>}
