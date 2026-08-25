import type {Metadata} from 'next';

export const metadata:Metadata={title:'Contact — Akshay Venkata Narayana',description:'Contact Akshay about product design roles, UX projects and collaborations.'};

export default function ContactPage(){return <main className="subpage contact-page">
  <header className="sub-nav shell"><a href="/"><strong>Based in</strong><span>United Kingdom</span></a><a className="sub-back" href="/">Back home ↖</a></header>
  <section className="contact-panel shell">
    <h1>CONTACT</h1>
    <div className="contact-layout">
      <div className="contact-intro">
        <small>Disciplines</small><p className="disciplines">Product Designer<br/>UX Strategist</p>
        <p>Looking for full-time roles where I can work on products that evolve, not just launch and leave. Also taking on freelance projects. I&apos;ve worked across finance, tech, and manufacturing, designing systems that need to make sense to both technical and non-technical audiences.</p>
        <p>Based in the United Kingdom. Open to on-site, remote, or hybrid work — anywhere with WiFi and a problem worth solving.</p>
        <div className="contact-actions"><a href="#">Résumé</a><a className="linkedin" href="https://www.linkedin.com" target="_blank" rel="noreferrer">in&nbsp; LinkedIn</a></div>
      </div>
      <form className="contact-form" action="mailto:hello@akshay.design" method="post" encType="text/plain">
        <label>First Name *<input name="firstName" placeholder="First name" required/></label>
        <label>Last Name *<input name="lastName" placeholder="Last name" required/></label>
        <label>Email Address *<input name="email" type="email" placeholder="email@company.com" required/></label>
        <label>Phone Number<input name="phone" type="tel" placeholder="07000-000000"/></label>
        <label className="full">Enquiry Type *<select name="type" required defaultValue=""><option value="" disabled>Select one…</option><option>Full-time role</option><option>Freelance project</option><option>Collaboration</option></select></label>
        <label className="full">Message *<textarea name="message" placeholder="Your message" required/></label>
        <button type="submit">Send Message <span>↗</span></button>
      </form>
    </div>
    <div className="contact-identity"><span className="available"><i/> Open to New Opportunities</span><a className="contact-id" href="/"><img src="/akshay-portrait.jpg" alt="Akshay Venkata Narayana"/><span><b>AKSHAY VENKATA NARAYANA</b><small>Product Designer | User Experience Designer</small></span><em>☰</em></a></div>
  </section>
  <footer className="sub-footer shell">© 2026 AKSHAY VENKATA NARAYANA — PRODUCT DESIGNER / UX DESIGNER</footer>
</main>}
