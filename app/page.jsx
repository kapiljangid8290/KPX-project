'use client';

import { useState } from 'react';

const services = [
  ['01', 'Web & CMS Development', 'Conversion-focused websites built on platforms that fit your business.', '⌘'],
  ['02', 'Custom Development', 'Purpose-built applications and scalable digital products.', '</>'],
  ['03', 'SEO & Organic Growth', 'Technical foundations and search strategies designed to improve visibility.', '↗'],
  ['04', 'Digital Marketing', 'Campaigns that connect your brand with the right audience.', '◉'],
  ['05', 'Motion & Content', 'Creative content that brings brands and campaigns to life.', '▷'],
];

const work = [
  ['concept-digital-experience.webp', 'Digital Experience', 'Modern, high-performance web experiences for ambitious brands.'],
  ['concept-commerce-cms.webp', 'Commerce & CMS', 'Flexible, scalable solutions using Shopify, WordPress, Webflow and more.'],
  ['concept-motion-campaigns.webp', 'Motion & Campaigns', 'Engaging motion, video and creative campaigns for digital marketing.'],
];

const process = [
  ['01', 'Discover', 'Understand your goals, challenges and requirements.', 'process-discover.webp'],
  ['02', 'Define', 'Create a strategy, roadmap and technical plan.', 'process-define.webp'],
  ['03', 'Build', 'Design, develop and bring your vision to life.', 'process-build.webp'],
  ['04', 'Improve', 'Launch, measure and continuously optimize.', 'process-improve.webp'],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Services', '#services'], ['Capabilities', '#capabilities'], ['Process', '#process'], ['About', '#about'], ['Insights', '#faq']];
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Kalpixs home">KALPIXS</a>
    <nav className="desktop-nav" aria-label="Primary">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
    <a className="header-cta" href="#contact">Start a Project <Arrow /></a>
    <button className="menu-toggle" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}<Arrow /></a>)}<a href="#contact" onClick={() => setOpen(false)}>Start a Project <Arrow /></a></nav>}
  </header>;
}

function Hero() { return <section id="top" className="hero section-shell">
  <div className="hero-copy reveal">
    <p className="eyebrow">DIGITAL DESIGN · DEVELOPMENT · GROWTH</p>
    <h1>Your <span>digital</span><br />team. Without<br />the overhead.</h1>
    <p className="lead">Websites, custom platforms, search, marketing and motion — built to move your business forward.</p>
    <div className="hero-actions"><a className="button black" href="#contact">Let&apos;s Talk <Arrow /></a><a className="button outline" href="#capabilities">Explore Capabilities</a></div>
    <ul className="hero-values"><li>◎ <b>Strategy-led</b><br />solutions</li><li>✧ <b>Built around</b><br />your goals</li><li>◌ <b>One connected</b><br />team</li></ul>
  </div>
  <div className="hero-art" aria-label="Conceptual web design previews">
    <svg className="hero-swoop" viewBox="0 0 600 480" aria-hidden="true"><path d="M10 160 C130 55, 205 360, 415 315 S515 70, 595 110" /></svg>
    <img className="hero-laptop" src="/images/kalpixs/hero/hero-laptop.webp" alt="Conceptual architecture website shown on a laptop" width="1000" height="700" />
    <img className="hero-code" src="/images/kalpixs/hero/hero-code-preview.webp" alt="Decorative code preview" width="550" height="360" />
    <img className="hero-mobile" src="/images/kalpixs/hero/hero-mobile.webp" alt="Conceptual responsive mobile website preview" width="360" height="640" />
    <span className="art-note note-one">Websites<br />Marketing<br />SEO<br />Development<br />Motion</span>
  </div>
</section>; }

function Services() { return <section id="services" className="services section-shell">
  <div className="section-intro"><div><p className="eyebrow">WHAT WE DO</p><h2>Everything your<br />digital presence needs.</h2></div><div className="intro-side"><p>We combine design, technology and marketing to create digital experiences that help you attract customers, build trust and grow.</p><a href="#capabilities" className="text-link">Explore All Services <Arrow /></a></div></div>
  <div className="services-grid">{services.map(([no, title, body, icon]) => <a href="#contact" className="service" key={no}><small>{no}</small><strong className="service-icon">{icon}</strong><h3>{title}</h3><p>{body}</p><Arrow /></a>)}</div>
</section>; }

function Approach() { return <section className="approach"><div className="section-shell approach-grid"><div><p className="eyebrow">OUR APPROACH</p><h2>From first impression<br />to <em>long-term growth.</em></h2><p>We don&apos;t just build websites — we create complete digital ecosystems that are designed to perform, scale and deliver real business value.</p><a className="button white" href="#process">Our Process <Arrow /></a></div><div className="kmark" aria-label="Kalpixs graphic"><b>K</b><i></i></div><ul>{[['◈', 'Strategic thinking', 'Strategy before execution.'], ['⌘', 'Design and engineering', 'Working together.'], ['▢', 'Clear communication', 'Clear and transparent communication.'], ['↗', 'Measurable improvement', 'Purposeful, measurable improvements.']].map(([icon,title,body]) => <li key={title}><span>{icon}</span><div><b>{title}</b><p>{body}</p></div></li>)}</ul></div></section>; }

function Featured() { return <section id="capabilities" className="featured section-shell"><div className="section-intro"><div><p className="eyebrow">A RANGE OF CAPABILITIES</p><h2>Different challenges.<br />Thoughtful digital solutions.</h2></div><p className="intro-side">Three concept explorations that demonstrate our design and development capabilities across a range of digital needs.</p></div><div className="work-grid">{work.map(([image,title,body], index) => <article className="work-card" key={title}><div className="work-image"><img src={`/images/kalpixs/work/${image}`} alt={`${title} concept exploration`} width="720" height="500" loading="lazy" /></div><small>0{index + 1}</small><h3>{title} <Arrow /></h3><p>Concept exploration — {body}</p></article>)}</div></section>; }

function Process() { return <section id="process" className="process section-shell"><div className="section-intro"><div><p className="eyebrow">OUR PROCESS</p><h2>A clear path from brief to launch.</h2></div><p className="intro-side">We keep the process simple, collaborative and transparent at every stage.</p></div><ol>{process.map(([no,title,body,image]) => <li key={title}><span>{no}</span><img src={`/images/kalpixs/process/${image}`} alt="" width="100" height="70" loading="lazy" /><h3>{title}</h3><p>{body}</p><Arrow /></li>)}</ol></section>; }

function About() { return <section id="about" className="about section-shell"><div><p className="eyebrow">ABOUT KALPIXS</p><h2>Senior-level thinking.<br />Practical execution.</h2><p>Kalpixs is a full-service digital agency helping businesses turn ideas into high-performing digital experiences. We bring together design, technology, marketing and motion to deliver solutions built for today and ready for tomorrow.</p><a className="button outline" href="#contact">More About Us <Arrow /></a></div><img src="/images/kalpixs/about/about-architecture.webp" alt="Architectural concept representing technology and growth" width="800" height="980" loading="lazy" /><ul>{['Websites that perform', 'Scalable technology', 'Growth-focused strategy', 'Creative content & motion'].map(x => <li key={x}>{x}</li>)}</ul></section>; }

function FAQ() { const [active,setActive]=useState(null); const faqs=[['What types of businesses do you work with?', 'We partner with ambitious businesses that need a clearer, stronger digital presence — from focused website projects to ongoing growth work.'],['Which platforms do you develop on?', 'We recommend the platform that best suits your business, existing systems, project scope and growth goals — including Shopify, WordPress, Webflow, Framer and custom React or Next.js applications.'],['Do you also handle marketing and SEO?', 'Yes. SEO, content strategy, paid campaigns and digital marketing can be planned alongside your website or as a focused engagement.'],['How do we get started?', 'Tell us about your goals and current challenge. We will map the right next step together.']]; return <section id="faq" className="faq section-shell"><div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Got questions?<br />We&apos;ve got answers.</h2></div><div>{faqs.map(([q,a],i)=><article className="faq-item" key={q}><button aria-expanded={active===i} onClick={()=>setActive(active===i?null:i)}>{q}<span>{active===i?'−':'+'}</span></button>{active===i&&<p>{a}</p>}</article>)}</div></section>; }

function Footer() { return <><section id="contact" className="final-cta"><div className="section-shell"><div><p className="eyebrow">LET&apos;S BUILD TOGETHER</p><h2>Have a challenge<br /><em>worth solving?</em></h2></div><div><p>Tell us where you want to go.<br />We&apos;ll help map the next step.</p><a className="button lime" href="mailto:hello@kalpixs.com">Start a Project <Arrow /></a></div></div></section><footer className="footer section-shell"><div><a className="wordmark" href="#top">KALPIXS</a><p>Digital design, development and marketing solutions for ambitious businesses.</p></div><div><b>Services</b><a href="#services">Web & CMS Development</a><a href="#services">Custom Development</a><a href="#services">SEO & Organic Growth</a><a href="#services">Digital Marketing</a></div><div><b>Company</b><a href="#about">About Us</a><a href="#process">Our Process</a><a href="#capabilities">Capabilities</a><a href="#contact">Contact</a></div><form onSubmit={(e)=>e.preventDefault()}><b>Stay in Touch</b><p>Newsletter integration coming soon.</p><label htmlFor="email">Email address</label><div><input id="email" type="email" placeholder="Your email address" required /><button aria-label="Newsletter integration is not configured" type="submit">→</button></div></form><small className="copyright">© {new Date().getFullYear()} Kalpixs. All rights reserved.</small></footer></>; }

export default function Home() { return <><Header /><main><Hero /><Services /><Approach /><Featured /><Process /><About /><FAQ /></main><Footer /></>; }
