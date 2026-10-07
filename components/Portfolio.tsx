'use client';
import { useEffect, useRef, useState } from 'react';
import { PROJECTS, JOBS, SKILLS, FILTERS, CONTACT, type Project } from './data';

const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
const Download = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12M6 11l6 6 6-6M5 21h14" /></svg>;
const ArrowUR = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M8 7h9v9" /></svg>;
const Plus = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14" /></svg>;
const Close = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6 6 18" /></svg>;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target as HTMLElement;
      el.style.transitionDelay = (el.dataset.reveal || '0') + 'ms';
      el.classList.add('in'); io.unobserve(el);
    }), { threshold: 0.12 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function useAlgiersTime() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Algiers' }));
    tick(); const id = setInterval(tick, 15000); return () => clearInterval(id);
  }, []);
  return t;
}

const Shot = ({ p, ratio }: { p: Project; ratio: string }) => (
  <div className="shot grayscale" style={{ aspectRatio: ratio }}>
    {p.image ? <img src={p.image} alt={p.title} /> : <span>{p.shot}</span>}
  </div>
);

export default function Portfolio({ hero = 'ink', showGrid = true }: { hero?: 'ink' | 'red'; showGrid?: boolean }) {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(0);
  const [project, setProject] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const time = useAlgiersTime();
  const drawer = useRef<HTMLElement>(null);
  useReveal();

  const step = (d: number) => setProject(p => p == null ? p : (p + d + PROJECTS.length) % PROJECTS.length);
  useEffect(() => {
    if (project == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProject(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    drawer.current?.scrollTo({ top: 0 });
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [project]);

  const shown = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => filter === 'All' || p.stack.includes(filter));
  const cur = project != null ? PROJECTS[project] : null;
  const copyEmail = () => {
    navigator.clipboard?.writeText(CONTACT.email).catch(() => {});
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page">
      {showGrid && (
        <div className="grid-overlay" aria-hidden="true">
          <div className="wrap cols">{Array.from({ length: 12 }, (_, i) => <div key={i} />)}</div>
        </div>
      )}

      <header className="topbar">
        <nav className="wrap nav-row">
          <a href="#top" className="brand"><span className="brand-mark" />Youcef Morsi</a>
          <div className="nav-links">
            <a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
          </div>
          <div className="clock"><span className="live-dot" />Algiers · {time}</div>
        </nav>
      </header>

      <main id="top">
        {hero === 'ink' ? (
          <section className="wrap hero">
            <div className="hero-tags" data-reveal="0">
              <span className="tag tag-accent">Software Engineer</span>
              <span className="tag tag-neutral">Backend · Full-stack</span>
              <span className="tag tag-neutral">Open to new roles</span>
            </div>
            <h1 className="hero-title" data-reveal="80">I build <span className="accent">software that matters</span> reliable systems that make a real difference in people&apos;s lives.</h1>
            <div className="hero-meta" data-reveal="200">
              <p className="lead">Hi, I&apos;m Youcef a software engineer from Algiers. I architect APIs, data models and real-time services with NestJS and PostgreSQL, and ship the Next.js frontends on top.</p>
              <div className="meta-block"><span className="eyebrow muted">Currently</span><strong>Software Engineer at Exacode</strong><span className="muted">Since March 2026</span></div>
              <div className="cta-col">
                <a href="#work" className="btn btn-primary btn-wide">See selected work <Arrow /></a>
                <a href="/cv.pdf" download className="btn btn-secondary btn-wide">Download CV <Download /></a>
              </div>
            </div>
          </section>
        ) : (
          <section className="hero-red">
            <div className="wrap hero-red-inner">
              <span className="eyebrow" data-reveal="0">Youcef Morsi Software Engineer, Algiers</span>
              <h1 className="hero-title" data-reveal="80" style={{ maxWidth: '14ch' }}>Software that makes a real difference.</h1>
              <div className="hero-red-foot" data-reveal="200">
                <p className="lead">Healthcare platforms, multi-tenant commerce and contactless payments built with NestJS, PostgreSQL and Next.js.</p>
                <a href="#work" className="btn btn-invert btn-wide">See selected work <Arrow /></a>
              </div>
            </div>
          </section>
        )}

        <section className="wrap">
          <div className="stats" data-reveal="0">
            <div><span className="stat-num">4</span><span className="muted small">engineering roles since 2024</span></div>
            <div><span className="stat-num">2×</span><span className="muted small">hackathon winner</span></div>
            <div><span className="stat-num">3</span><span className="muted small">domains: healthcare, commerce, fintech</span></div>
          </div>
        </section>

        <section id="work" className="wrap section">
          <div className="section-head split" data-reveal="0">
            <div><span className="eyebrow red">01 Selected work</span><h2>Things I&apos;ve architected</h2></div>
            <div className="filters" role="tablist">
              {FILTERS.map(f => <button key={f} role="tab" aria-selected={f === filter} className={f === filter ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}
            </div>
          </div>
          <div className="rule-top">
            {shown.map(({ p, i }) => (
              <article key={p.num} className="project in" onClick={() => setProject(i)}>
                <div className="project-text">
                  <div className="project-kicker"><span className="num">{p.num}</span><span className="eyebrow muted">{p.domain}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <div className="chips">{p.stack.map(t => <span key={t} className="tag tag-neutral tag-bordered">{t}</span>)}</div>
                  <span className="read-more">Read case study <ArrowUR /></span>
                </div>
                <Shot p={p} ratio="16 / 10" />
              </article>
            ))}
            {shown.length === 0 && <p className="muted" style={{ padding: '28px 0' }}>No projects with that stack yet.</p>}
          </div>
        </section>

        <section id="experience" className="wrap section">
          <div className="section-head" data-reveal="0"><span className="eyebrow red">02 Experience</span><h2>Where I&apos;ve shipped</h2></div>
          <div className="rule-top">
            {JOBS.map((j, i) => {
              const isOpen = open === i;
              return (
                <div key={j.company} className={'job' + (isOpen ? ' open' : '')} data-reveal="0">
                  <button className="job-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="muted small tnum">{j.dates}</span>
                    <span className="job-title"><span className="company">{j.company}</span><span className="muted">{j.role}</span>{j.current && <span className="tag tag-accent">Now</span>}</span>
                    <span className="job-icon"><Plus /></span>
                  </button>
                  <div className="job-body"><div>
                    <div className="job-inner"><span />
                      <ul className="bullets">{j.points.map((pt, k) => <li key={k}><span className="sq" />{pt}</li>)}</ul>
                    </div>
                  </div></div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="skills" className="wrap section">
          <div className="section-head" data-reveal="0"><span className="eyebrow red">03 Toolkit</span><h2>What I work with</h2></div>
          <div className="skills rule-top">
            {SKILLS.map(s => (
              <div key={s.group} className="skill-col" data-reveal="0">
                <div className="skill-head"><h4>{s.group}</h4><span className="muted small tnum">{String(s.items.length).padStart(2, '0')}</span></div>
                <div className="chips">{s.items.map(it => <span key={it} className="skill">{it}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="edu" data-reveal="0">
            <span className="muted small">2021 2024</span>
            <div className="edu-text">
              <span className="eyebrow red">Education</span>
              <strong className="edu-title">Licence in Information Systems &amp; Software Engineering</strong>
              <span className="muted">University of Algiers 1 Algorithms &amp; Data Structures, Operating Systems, Databases, Networks, Distributed Systems, System Design</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap contact-inner">
            <span className="eyebrow" data-reveal="0">04 Contact</span>
            <h2 className="contact-title" data-reveal="80">Hiring for backend or full-stack? Let&apos;s talk.</h2>
            <div className="contact-grid" data-reveal="160">
              <button className="contact-cell first" onClick={copyEmail}>
                <span className="eyebrow">{copied ? 'Copied to clipboard ✓' : 'Email click to copy'}</span>
                <span className="contact-val break">{CONTACT.email}</span>
              </button>
              <a className="contact-cell" href={CONTACT.github} target="_blank" rel="noreferrer"><span className="eyebrow">GitHub ↗</span><span className="contact-val">MorsiYoucef</span></a>
              <a className="contact-cell" href={CONTACT.linkedin} target="_blank" rel="noreferrer"><span className="eyebrow">LinkedIn ↗</span><span className="contact-val">youcef-morsi</span></a>
              <a className="contact-cell" href={'tel:' + CONTACT.phone}><span className="eyebrow">Phone</span><span className="contact-val">{CONTACT.phoneLabel}</span></a>
            </div>
          </div>
        </section>
        <footer className="wrap footer"><span>© {new Date().getFullYear()} Youcef Morsi</span><span>El Achour, Algiers</span></footer>
      </main>

      {cur && (
        <div className="backdrop" onClick={() => setProject(null)}>
          <aside ref={drawer} key={cur.num} className="drawer" role="dialog" aria-modal="true" aria-label={cur.title} onClick={e => e.stopPropagation()}>
            <div className="drawer-bar">
              <span className="eyebrow red">Case study {cur.num}</span>
              <button className="btn btn-secondary btn-icon" aria-label="Close" onClick={() => setProject(null)}><Close /></button>
            </div>
            <div className="drawer-body">
              <div className="stack-10"><span className="eyebrow muted">{cur.domain}</span><h2 className="drawer-title">{cur.title}</h2><p className="lead">{cur.summary}</p></div>
              <Shot p={cur} ratio="16 / 9" />
              <div className="facts">
                <div><span className="eyebrow muted">My role</span><strong>{cur.role}</strong></div>
                <div><span className="eyebrow muted">Context</span><strong>{cur.context}</strong></div>
              </div>
              <div className="stack-12"><h4>What I did</h4><ul className="bullets">{cur.points.map((pt, k) => <li key={k}><span className="sq" />{pt}</li>)}</ul></div>
              <div className="stack-12"><h4>Stack</h4><div className="chips">{cur.stack.map(t => <span key={t} className="tag tag-neutral tag-bordered">{t}</span>)}</div></div>
              <div className="drawer-nav">
                <button className="btn btn-secondary btn-pad" onClick={() => step(-1)}>← Previous</button>
                <button className="btn btn-primary btn-wide" onClick={() => step(1)}>Next project →</button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
