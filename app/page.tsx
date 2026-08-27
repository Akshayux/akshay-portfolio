import {ConnectPanel,IdentityCard,PageFooter,ProjectCard,SiteHeader} from './components';

const skills=[
  ['Design Systems','skill-one'],['User Research','skill-two'],['Strategy','skill-three'],
  ['Experience Design','skill-four'],['Story telling','skill-five'],['Problem Solving','skill-six'],
  ['Problem Solving','skill-seven'],['Problem Solving','skill-eight'],['AI Tools','skill-nine'],
];

const testimonials=[
  ['Sarah Johnson','CEO','His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.'],
  ['Sarah Johnson','CEO','His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.'],
  ['Sarah Johnson','CEO','His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.'],
  ['Sarah Johnson','CEO','His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.'],
];

export default function Home(){return <main className="home-page">
  <SiteHeader/>
  <section className="home-hero" aria-labelledby="home-title">
    <span className="hero-im">I&apos;m</span>
    <h1 id="home-title"><span>PRODUCT</span><span>DESIGNER</span></h1>
    <div className="hero-portrait parallax-card"><img src="/akshay-portrait.jpg" alt="Akshay, Product Designer"/><small>©</small></div>
    <div className="hero-hand" aria-hidden="true">♨</div>
    <p className="hero-summary">4.5+ years turning ambiguous problems into products<br/>people can actually use.</p>
    <IdentityCard/>
  </section>

  <section className="home-work page-shell" id="work">
    <div className="list-heading"><span>Selected casestudies</span><a href="/work">All Case studies</a></div>
    <div className="home-card-stack"><i/><i/><ProjectCard index={2} laptop/></div>
  </section>

  <section className="skill-orbit page-shell reveal" aria-labelledby="skills-title">
    <div className="orbit-center"><h2 id="skills-title">What I bring to the table</h2><p>Ideas into experiences worth remembering</p></div>
    {skills.map(([label,position],i)=><span className={`orbit-pill ${position}`} key={`${label}-${i}`}>{label}</span>)}
  </section>

  <section className="home-about page-shell reveal">
    <div className="home-about-copy"><h2>About me</h2><p>Hi, I&apos;m Akshay — a product designer and UX Strategist<br/>passionate about crafting meaningful and impactful digital<br/>experiences.</p>
      <div className="home-stats"><div><b data-count="4.5" data-decimals="1">4.5</b><span>Years of Experience</span></div><div><b data-count="20" data-suffix="+">20+</b><span>Completed Projects</span></div><div><b data-count="10" data-suffix="+">10+</b><span>Clients</span></div></div>
      <div className="home-contact"><p><strong>Call Today :</strong><br/>+44 7810120379</p><p><strong>Email :</strong><br/>akshayv2310@gmail.com</p></div>
      <div className="social-row"><a href="https://www.linkedin.com" aria-label="LinkedIn">in</a><a href="https://www.instagram.com" aria-label="Instagram">◎</a><a href="https://x.com" aria-label="X">𝕏</a></div>
      <a className="round-link outline-link" href="/about">View my story <b>↗</b></a>
    </div>
    <div className="stonehenge parallax-card"><img src="/figma/home/raw-02.jpeg" alt="Akshay visiting Stonehenge"/></div>
  </section>

  <section className="testimonials page-shell reveal">
    <div className="dot-map" aria-hidden="true"/>
    <h2>Endorsed by industry leaders and colleagues</h2><p>Words from those who&apos;ve worked alongside me</p>
    <div className="testimonial-grid">
      <article className="testimonial-card testimonial-a"><strong>★★★★★</strong><p>{testimonials[0][2]}</p><div><span className="avatar">SJ</span><b>{testimonials[0][0]}<small>{testimonials[0][1]}</small></b></div></article>
      <article className="testimonial-card testimonial-b"><strong>★★★★★</strong><p>{testimonials[1][2]}</p><div><span className="avatar">SJ</span><b>{testimonials[1][0]}<small>{testimonials[1][1]}</small></b></div></article>
      <article className="testimonial-metric metric-right"><small>I&apos;ve worked with 10+ happy clients</small><b data-count="98" data-suffix="%">98%</b><span>Satisfaction Rate</span></article>
      <article className="testimonial-metric metric-left"><small>My work helped clients grow their revenue<br/>by 200%</small><b data-count="200" data-suffix="%">200%</b><span>Growth</span></article>
      <article className="testimonial-card testimonial-c"><strong>★★★★★</strong><p>{testimonials[2][2]}</p><div><span className="avatar">SJ</span><b>{testimonials[2][0]}<small>{testimonials[2][1]}</small></b></div></article>
      <article className="testimonial-card testimonial-d"><strong>★★★★★</strong><p>{testimonials[3][2]}</p><div><span className="avatar">SJ</span><b>{testimonials[3][0]}<small>{testimonials[3][1]}</small></b></div></article>
    </div>
  </section>

  <div className="page-shell home-connect"><ConnectPanel/><PageFooter/></div>
</main>}
