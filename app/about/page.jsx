'use client';

import { useState } from 'react';

const Arrow = () => <span aria-hidden="true">→</span>;

const values = [
  ['diamond', "Do What's Right", 'Ethical and transparent work.'],
  ['people', 'Be a Partner', 'Your success matters.'],
  ['gear', 'Keep It Simple', 'Clear communication.'],
  ['growth', 'Always Improve', 'Continuous growth.'],
];

const principles = [
  ['01', 'Strategy-led', 'We start with a clear understanding of your goals and challenges.'],
  ['02', 'Design-driven', 'Thoughtful, modern design that reflects your brand and connects with your audience.'],
  ['03', 'Reliable Development', 'Scalable, high-performance solutions built for the real world.'],
  ['04', 'Long-term Partnership', 'Ongoing support to help you grow and adapt over time.'],
];

const disciplines = [
  ['Strategy', '/images/kalpixs/process/process-define.webp', 'Strategic workshop materials on a desk'],
  ['Design', '/images/kalpixs/work/concept-digital-experience.webp', 'Digital design work displayed on a screen'],
  ['Development', '/images/kalpixs/hero/hero-code-preview.webp', 'Code and interface development preview'],
  ['Marketing', '/images/kalpixs/work/concept-motion-campaigns.webp', 'Creative campaign workspace'],
];

function ValueIcon({ type }) {
  const paths = {
    diamond: <><path d="m12 3 9 6-9 12L3 9l9-6Z"/><path d="m3 9 18 0M12 3l0 18M7 6l5 3 5-3"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6M21 20v-2a6 6 0 0 0-4-5.65"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.04 2.04-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56v.09h-2.9v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-2.04-2.04.06-.06A1.7 1.7 0 0 0 7.3 15a1.7 1.7 0 0 0-1.56-1.04h-.09v-2.9h.09A1.7 1.7 0 0 0 7.3 10a1.7 1.7 0 0 0-.34-1.88L6.9 8.06l2.04-2.04.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.04-1.56v-.09h2.9v.09A1.7 1.7 0 0 0 15.86 6.4a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.04 2.04-.06.06A1.7 1.7 0 0 0 19.44 10 1.7 1.7 0 0 0 21 11.04h.09v2.9H21A1.7 1.7 0 0 0 19.4 15Z"/></>,
    growth: <><path d="M4 20V10M10 20V5M16 20v-8M22 20H2"/><path d="m15 7 3-3 3 3M18 4v8"/></>,
  };
  return <svg className="about-value-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Services', '/services'], ['Capabilities', '/#capabilities'], ['Process', '/process'], ['About', '/about'], ['Insights', '/#faq']];
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="Kalpixs home">KALPIXS</a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <a className={label === 'About' ? 'active' : ''} href={href} key={label}>{label}</a>)}</nav>
    <a className="header-cta" href="mailto:hello@kalpixs.com?subject=New%20Kalpixs%20project">Start a Project <Arrow /></a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}<a href="mailto:hello@kalpixs.com?subject=New%20Kalpixs%20project" onClick={() => setOpen(false)}>Start a Project <Arrow /></a></nav>}
  </header>;
}

function Footer() {
  return <footer className="footer section-shell"><div><a className="wordmark" href="/">KALPIXS</a><p>Digital design, development and marketing solutions for ambitious businesses.</p></div><div><b>Services</b><a href="/services">Web &amp; CMS Development</a><a href="/services">Custom Development</a><a href="/services">SEO &amp; Organic Growth</a><a href="/services">Digital Marketing</a><a href="/services">Motion Graphics &amp; Video</a></div><div><b>Company</b><a href="/about">About Us</a><a href="/process">Our Process</a><a href="/#capabilities">Capabilities</a><a href="/#faq">Insights</a><a href="mailto:hello@kalpixs.com">Contact</a></div><form onSubmit={(event) => event.preventDefault()}><b>Stay in Touch</b><p>Newsletter integration coming soon.</p><label htmlFor="about-email">Email address</label><div><input id="about-email" type="email" placeholder="Your email address" required /><button aria-label="Newsletter integration is not configured" type="submit"><Arrow /></button></div></form><small className="copyright">© {new Date().getFullYear()} Kalpixs. All rights reserved.</small></footer>;
}

export default function AboutPage() {
  return <><Header /><main>
    <div className="crumb section-shell"><a href="/">Home</a><span>/</span>About</div>
    <section className="about-hero section-shell">
      <div className="about-hero-copy about-enter">
        <p className="eyebrow">ABOUT KALPIXS</p><h1>A digital partner<br />invested in<br />your <mark>growth.</mark></h1>
        <p>Kalpixs is a digital agency combining design, development, marketing and motion to help ambitious businesses build meaningful digital experiences and grow with confidence.</p>
        <a className="button black" href="#story">Our Story <Arrow /></a>
      </div>
      <figure className="about-hero-image about-image-reveal"><img src="/images/kalpixs/about/about-architecture.webp" alt="Modern concrete architecture with geometric forms and natural shadows" width="1600" height="900" /><figcaption>IDEAS<br />TECHNOLOGY<br />MARKETING<br />GROWTH<i /></figcaption></figure>
    </section>
    <section className="about-values"><div className="section-shell about-values-grid">{values.map(([icon, title, copy]) => <article key={title}><ValueIcon type={icon} /><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></section>
    <section id="story" className="about-story section-shell">
      <div><p className="eyebrow">OUR STORY</p><h2>Built on ideas,<br />people and<br />possibilities.</h2><p>Kalpixs started with a simple belief — that great digital work can help ambitious businesses create real opportunities. We combine strategic thinking, creative design and reliable development to deliver solutions that make a lasting impact.</p><a className="button outline" href="/services">Learn More About Us <Arrow /></a></div>
      <figure className="about-workspace"><img src="/images/kalpixs/work/concept-performance-website.webp" alt="Modern creative workspace for planning and collaboration" width="720" height="570" loading="lazy" /><span aria-hidden="true"><b>↗</b><small>STRATEGY · DESIGN ·<br />DEVELOPMENT · GROWTH</small></span></figure>
      <ol className="about-principles">{principles.map(([number, title, copy]) => <li key={number}><small>{number}</small><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
    </section>
    <section className="about-impact"><div className="section-shell"><div className="impact-copy"><p className="eyebrow">OUR IMPACT</p><h2>Helping brands<br />build <mark>what&apos;s next.</mark></h2></div><p className="impact-lead">We aim to help ambitious founders, businesses and teams create digital experiences that make a real difference.</p><ul>{['Purposeful Strategy', 'Thoughtful Design', 'Reliable Execution', 'Continuous Improvement'].map((item) => <li key={item}>{item}</li>)}</ul><img src="/images/kalpixs/decorative/concrete-texture.webp" alt="" width="600" height="400" loading="lazy" /></div></section>
    <section className="about-team section-shell"><div><p className="eyebrow">OUR TEAM</p><h2>Small-team thinking.<br />Big-picture ambition.</h2><p>We bring design, development, marketing and problem-solving together to create digital experiences that work for real businesses.</p><a className="button black" href="/services">Explore Our Services <Arrow /></a></div><div className="discipline-grid">{disciplines.map(([label, image, alt]) => <a href="/services" className="discipline-card" key={label}><div><img src={image} alt={alt} width="520" height="480" loading="lazy" /></div><span>{label}<b aria-hidden="true">→</b></span></a>)}</div></section>
    <section className="about-cta"><div className="section-shell"><div><p className="eyebrow">LET&apos;S WORK TOGETHER</p><h2>Ideas, creativity<br />and technology<br />for <mark>what&apos;s next.</mark></h2></div><div className="about-cta-copy"><p>Tell us about your project and let&apos;s explore how we can work together to bring your ideas to life and create meaningful growth.</p><a className="button lime" href="mailto:hello@kalpixs.com?subject=New%20Kalpixs%20project">Start a Project <Arrow /></a></div><img src="/images/kalpixs/about/about-architecture.webp" alt="" width="900" height="600" loading="lazy" /><svg viewBox="0 0 700 320" aria-hidden="true"><path d="M-20 310C143 261 167 271 286 154S420 121 718 3" /></svg></div></section>
  </main><Footer /></>;
}
