import type {Metadata} from 'next';
import {IdentityCard,PageFooter,SiteHeader} from '../components';

export const metadata:Metadata={title:'Contact',description:'Contact Akshay about product design roles, UX projects and meaningful collaborations.'};

export default function ContactPage(){return <main className="contact-page">
  <SiteHeader showContact={false}/>
  <section className="contact-panel page-shell reveal">
    <h1>CONTACT</h1>
    <div className="contact-layout">
      <div className="contact-intro">
        <small>Disciplines</small><h2>Product Designer<br/>UX Strategist</h2>
        <p>Looking for full-time roles where I can work on products that evolve, not just launch and leave. Also taking on freelance projects. Spent 4.5 years designing for different clients every few months. Want to work on something that grows and evolves over time, where I can see how decisions play out and iterate based on what actually happens. I&apos;ve worked across finance, tech, and manufacturing, designing systems that needed to make sense to both technical and non-technical audiences. Ready for somewhere I can dig deeper instead of moving on every few months.</p>
        <p>Based in united kingdom. Looking for On-site, remote,<br/>or hybrid. Put me anywhere with WiFi and a problem worth solving.</p>
        <div className="contact-actions"><a href="mailto:akshayv2310@gmail.com?subject=Resume%20request">Resume</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><b>in</b> LinkedIn</a></div>
      </div>
      <form className="contact-form" action="mailto:akshayv2310@gmail.com" method="post" encType="text/plain">
        <label>First Name *<input name="firstName" placeholder="First name" required/></label>
        <label>Last Name *<input name="lastName" placeholder="Last name" required/></label>
        <label>Email Address *<input name="email" type="email" placeholder="email@company.com" required/></label>
        <label>Phone Number<input name="phone" type="tel" placeholder="07000-000000"/></label>
        <label className="full-field">Enquiry Type *<select name="type" required defaultValue=""><option value="" disabled>Select one...</option><option>Full-time role</option><option>Freelance project</option><option>Collaboration</option></select></label>
        <label className="full-field">Message *<textarea name="message" placeholder="Your message" required/></label>
        <button type="submit">Send Message <span>↗</span></button>
      </form>
    </div>
    <IdentityCard/>
  </section>
  <PageFooter/>
</main>}
