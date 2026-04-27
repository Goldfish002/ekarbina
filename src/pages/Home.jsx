import { useState, useRef } from 'react'
import { T } from '../tokens'
import { useViewport } from '../hooks/useViewport'
import { Fade } from '../components/Fade'
import logoImg from '/assets/ekarbina-logo.png'
import sign1 from '/assets/sign1.jpg'
import sign2 from '/assets/sign2.jpg'
import sign3 from '/assets/sign3.jpg'

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero({ onContact }) {
  const { mobile, tablet } = useViewport()
  const s = {
    section: {
      background: T.dark,
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: mobile ? '120px 24px 80px' : tablet ? '120px 48px 80px' : '0 48px',
      position: 'relative', overflow: 'hidden',
    },
    inner: { maxWidth: 680, position: 'relative', zIndex: 2 },
    overline: { fontFamily: T.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.gold, marginBottom: 20 },
    rule: { width: 40, height: 2, background: T.gold, marginBottom: 28 },
    h1: { fontFamily: T.display, fontSize: mobile ? 44 : tablet ? 56 : 72, fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: T.white, marginBottom: 24 },
    em: { fontStyle: 'italic', color: T.gold },
    body: { fontFamily: T.body, fontSize: mobile ? 15 : 16, color: '#9A9A9A', lineHeight: 1.7, marginBottom: 40, maxWidth: 480 },
    actions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
    btnPrimary: { background: T.crimson, color: T.white, border: 'none', padding: mobile ? '13px 28px' : '14px 36px', borderRadius: 3, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s' },
    btnGhost: { background: 'transparent', color: T.white, border: '1.5px solid #3A3A3A', padding: mobile ? '13px 28px' : '14px 36px', borderRadius: 3, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'border-color 0.2s', cursor: 'pointer' },
    glow: { position: 'absolute', right: mobile ? -100 : 80, top: '50%', transform: 'translateY(-50%)', width: mobile ? 300 : 480, height: mobile ? 300 : 480, background: T.crimson, borderRadius: '50%', opacity: 0.05, filter: 'blur(80px)', zIndex: 1 },
    ring: { position: 'absolute', right: mobile ? -60 : 160, top: '50%', transform: 'translateY(-50%)', width: mobile ? 220 : 360, height: mobile ? 220 : 360, borderRadius: '50%', border: '1px solid rgba(201,169,110,0.1)', zIndex: 1 },
    ring2: { position: 'absolute', right: mobile ? -100 : 100, top: '50%', transform: 'translateY(-50%)', width: mobile ? 320 : 500, height: mobile ? 320 : 500, borderRadius: '50%', border: '1px solid rgba(201,169,110,0.05)', zIndex: 1 },
    logoMark: { position: 'absolute', right: mobile ? 20 : 160, top: '50%', transform: 'translateY(-50%)', opacity: mobile ? 0.04 : 0.07, zIndex: 1 },
    logoMarkImg: { width: mobile ? 200 : 320, height: mobile ? 200 : 320 },
    scrollHint: { position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2 },
    scrollLabel: { fontFamily: T.body, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3D3D3D' },
    scrollLine: { width: 1, height: 40, background: 'linear-gradient(to bottom, #3D3D3D, transparent)' },
  }

  return (
    <section id="hero" style={s.section}>
      <div style={s.glow} />
      <div style={s.ring} />
      <div style={s.ring2} />
      <div style={s.logoMark}><img src={logoImg} alt="" style={s.logoMarkImg} /></div>

      <div style={s.inner}>
        <div style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.1s forwards' }}>
          <div style={s.overline}>Signage &amp; Fabrication</div>
          <div style={s.rule} />
        </div>
        <div style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.25s forwards' }}>
          <h1 style={s.h1}>
            Your brand,<br />
            <em style={s.em}>rendered</em><br />
            in steel and light.
          </h1>
        </div>
        <div style={{ opacity: 0, animation: 'fadeUp 0.7s ease 0.4s forwards' }}>
          <p style={s.body}>
            From LED illumination to architectural metalwork — Ekarbina fabricates and installs precision signage for brands that demand excellence.
          </p>
          <div style={s.actions}>
            <button style={s.btnPrimary} onClick={onContact}
              onMouseEnter={e => e.currentTarget.style.background = T.crimsonDark}
              onMouseLeave={e => e.currentTarget.style.background = T.crimson}>
              Request a Quote
            </button>
            <button style={s.btnGhost}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#6A6A6A'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#3A3A3A'}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ block: 'start' })}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <div style={s.scrollHint}>
        <span style={s.scrollLabel}>Scroll</span>
        <div style={s.scrollLine} />
      </div>
    </section>
  )
}

/* ─── STATS ─────────────────────────────────────────────────────── */
function Stats() {
  const { mobile } = useViewport()
  const items = [
    { val: '36+', label: 'Years fabricating' },
    { val: '800+', label: 'Projects installed' },
    { val: '12', label: 'Material types' },
    { val: '100%', label: 'In-house production' },
  ]
  const s = {
    section: { background: T.crimson, padding: mobile ? '32px 24px' : '40px 48px' },
    grid: { display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: mobile ? '28px 0' : 0 },
    item: { textAlign: 'center', position: 'relative' },
    divider: { position: 'absolute', right: 0, top: '10%', height: '80%', width: 1, background: 'rgba(255,255,255,0.12)' },
    val: { fontFamily: T.display, fontSize: mobile ? 38 : 48, fontWeight: 300, color: T.white, lineHeight: 1 },
    label: { fontFamily: T.body, fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: 6 },
  }
  return (
    <section style={s.section}>
      <div style={s.grid}>
        {items.map((it, i) => (
          <div key={it.label} style={s.item}>
            {i < items.length - 1 && !mobile && <div style={s.divider} />}
            <div style={s.val}>{it.val}</div>
            <div style={s.label}>{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── SERVICES ──────────────────────────────────────────────────── */
const SERVICES = [
  { tag: 'Illuminated', title: 'LED Signage', desc: 'Energy-efficient illuminated displays engineered for all weather conditions — programmable output, bespoke dimensions.' },
  { tag: 'Printed', title: 'Panaflex Signs', desc: 'Large-format flex-face printing for commercial frontages, backlit cabinets, and high-visibility roadside banners.' },
  { tag: 'Dimensional', title: '3D Lettering', desc: 'Raised letterforms in foam, acrylic, or metal — precision CNC-cut edges with lasting UV-stable finishes.' },
  { tag: 'Structural', title: 'Pylon Structures', desc: 'Freestanding steel-framed pylons with branded panels, engineered to specification for wind load and longevity.' },
  { tag: 'Fabricated', title: 'Acrylic Signage', desc: 'Crystal-clear or coloured acrylic, routed and polished, mounted on standoffs or flush to any substrate.' },
  { tag: 'Premium', title: 'Metal Lettering', desc: 'Stainless steel, brass, and aluminium dimensional text in architectural finishes for lobbies and luxury frontages.' },
]

function ServiceCard({ sv, delay }) {
  const [hovered, setHovered] = useState(false)
  const s = {
    card: { background: T.white, border: `1px solid ${hovered ? 'rgba(201,169,110,0.4)' : T.border}`, borderRadius: 4, padding: '26px 22px 22px', boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.10)' : '0 2px 8px rgba(0,0,0,0.04)', transform: hovered ? 'translateY(-4px)' : 'none', transition: 'all 0.25s ease', cursor: 'default', height: '100%' },
    tag: { fontFamily: T.body, fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.crimson, marginBottom: 8 },
    title: { fontFamily: T.display, fontSize: 22, fontWeight: 400, color: T.dark, marginBottom: 0 },
    rule: { width: hovered ? 36 : 20, height: 1.5, background: T.gold, margin: '10px 0 12px', transition: 'width 0.25s ease' },
    desc: { fontFamily: T.body, fontSize: 13, color: T.muted, lineHeight: 1.65 },
  }
  return (
    <Fade delay={delay}>
      <div style={s.card} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div style={s.tag}>{sv.tag}</div>
        <div style={s.title}>{sv.title}</div>
        <div style={s.rule} />
        <div style={s.desc}>{sv.desc}</div>
      </div>
    </Fade>
  )
}

function Services() {
  const { mobile, tablet } = useViewport()
  const cols = mobile ? 1 : tablet ? 2 : 3
  const s = {
    section: { background: T.page, padding: mobile ? '72px 24px' : '96px 48px' },
    head: { marginBottom: 48 },
    overline: { fontFamily: T.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.crimson, marginBottom: 14 },
    h2: { fontFamily: T.display, fontSize: mobile ? 36 : 48, fontWeight: 300, color: T.dark, lineHeight: 1.08, letterSpacing: '-0.01em', maxWidth: 420 },
    grid: { display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 18 },
  }
  return (
    <section id="services" style={s.section}>
      <Fade>
        <div style={s.head}>
          <div style={s.overline}>What We Do</div>
          <h2 style={s.h2}>Every sign.<br />Every material.</h2>
        </div>
      </Fade>
      <div style={s.grid}>
        {SERVICES.map((sv, i) => (
          <ServiceCard key={sv.title} sv={sv} delay={i * 0.07} />
        ))}
      </div>
    </section>
  )
}

/* ─── PORTFOLIO ─────────────────────────────────────────────────── */
const PROJECTS = [
  { title: 'Aviana — Luxury Lobby', location: 'Klang Valley', type: 'Gold Dimensional · Acrylic', bg: '#111', img: sign1 },
  { title: 'Polis Diraja Malaysia Crest', location: 'Kuala Lumpur', type: 'Brushed Aluminium · Metal', bg: '#1A1A1F', img: sign2 },
  { title: 'Mixed Rice — LED Fascia', location: 'Salak South', type: 'LED Illuminated · Panaflex', bg: '#0F1510', img: sign3 },
  { title: 'Dimensional Lettering', location: 'Malaysia', type: 'Box-up · 3D Letters', bg: '#1A1410', img: null },
]

function Portfolio() {
  const { mobile, tablet } = useViewport()
  const cols = mobile ? 1 : tablet ? 2 : 4
  const s = {
    section: { background: T.dark, padding: mobile ? '72px 24px' : '96px 48px' },
    head: { marginBottom: 40, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'flex-end' },
    overline: { fontFamily: T.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.gold, marginBottom: 12 },
    h2: { fontFamily: T.display, fontSize: mobile ? 36 : 48, fontWeight: 300, color: T.white, lineHeight: 1.08 },
    viewAll: { fontFamily: T.body, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.gold, cursor: 'pointer', borderBottom: `1px solid ${T.gold}`, paddingBottom: 2, alignSelf: 'flex-end', whiteSpace: 'nowrap' },
    grid: { display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 14 },
    card: (bg) => ({ background: bg, borderRadius: 4, height: mobile ? 200 : 260, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #252525', position: 'relative', overflow: 'hidden', cursor: 'pointer' }),
    corner: { position: 'absolute', top: 14, right: 14, width: 18, height: 18, border: '1px solid rgba(201,169,110,0.3)', borderRadius: 2 },
    type: { fontFamily: T.body, fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.gold, marginBottom: 5 },
    title: { fontFamily: T.display, fontSize: 18, fontWeight: 400, color: T.white, marginBottom: 4 },
    loc: { fontFamily: T.body, fontSize: 11, color: '#555' },
  }
  return (
    <section id="portfolio" style={s.section}>
      <Fade>
        <div style={s.head}>
          <div>
            <div style={s.overline}>Our Work</div>
            <h2 style={s.h2}>Selected projects.</h2>
          </div>
          <span style={s.viewAll}>View all →</span>
        </div>
      </Fade>
      <div style={s.grid}>
        {PROJECTS.map((p, i) => (
          <Fade key={p.title} delay={i * 0.08}>
            <div style={s.card(p.bg)}>
              <div style={s.corner} />
              {p.img && (
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4, borderRadius: 4 }} />
              )}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={s.type}>{p.type}</div>
                <div style={s.title}>{p.title}</div>
                <div style={s.loc}>{p.location}</div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}

/* ─── CONTACT ───────────────────────────────────────────────────── */
function Contact() {
  const { mobile, tablet } = useViewport()
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  const field = (id, label, el, extra = {}) => {
    const isErr = !!errors[id]
    const base = { width: '100%', padding: '11px 14px', border: `1px solid ${isErr ? T.crimson : '#DDD'}`, borderRadius: 3, fontSize: 14, color: T.dark, background: T.white, boxSizing: 'border-box', transition: 'border-color 0.2s, box-shadow 0.2s' }
    return (
      <div style={{ marginBottom: 18 }}>
        <label style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.charcoal, marginBottom: 6 }}>{label}</label>
        {el === 'input' && <input style={base} value={form[id]} onChange={e => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: null })) }} {...extra} />}
        {el === 'select' && (
          <select style={base} value={form[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}>
            <option value="">Select a sign type</option>
            <option>LED / Illuminated</option>
            <option>Panaflex</option>
            <option>3D / Dimensional</option>
            <option>Pylon</option>
            <option>Acrylic</option>
            <option>Metal / Brass</option>
          </select>
        )}
        {el === 'textarea' && <textarea style={{ ...base, resize: 'vertical', minHeight: 110 }} value={form[id]} onChange={e => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: null })) }} {...extra} />}
        {isErr && <div style={{ fontSize: 11, color: T.crimson, marginTop: 4 }}>{errors[id]}</div>}
      </div>
    )
  }

  const s = {
    section: { background: T.page, padding: mobile ? '72px 24px' : '96px 48px', borderTop: `1px solid ${T.border}` },
    grid: { display: 'grid', gridTemplateColumns: mobile || tablet ? '1fr' : '1fr 1fr', gap: mobile ? 48 : 64 },
    overline: { fontFamily: T.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.muted, marginBottom: 14 },
    h2: { fontFamily: T.display, fontSize: mobile ? 36 : 48, fontWeight: 300, color: T.dark, lineHeight: 1.08, marginBottom: 16 },
    rule: { width: 36, height: 2, background: T.gold, marginBottom: 22 },
    body: { fontFamily: T.body, fontSize: 14, color: T.muted, lineHeight: 1.75, marginBottom: 36 },
    infoLabel: { fontFamily: T.body, fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.gold, marginBottom: 3 },
    infoVal: { fontFamily: T.body, fontSize: 14, color: T.charcoal, marginBottom: 18 },
    formBox: { background: T.white, border: `1px solid ${T.border}`, borderRadius: 4, padding: mobile ? 24 : 36, boxShadow: '0 2px 20px rgba(0,0,0,0.06)' },
    twoCol: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
    submit: { background: T.crimson, color: T.white, border: 'none', padding: '13px', borderRadius: 3, fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', width: '100%', marginTop: 4, transition: 'background 0.2s' },
    success: { textAlign: 'center', padding: '48px 24px' },
    successIcon: { width: 56, height: 56, borderRadius: '50%', background: '#EEF6F1', border: '1px solid #C3E0CE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 },
    successH: { fontFamily: T.display, fontSize: 28, fontWeight: 400, color: T.dark, marginBottom: 10 },
    successP: { fontFamily: T.body, fontSize: 14, color: T.muted, lineHeight: 1.7 },
  }

  return (
    <section id="contact" style={s.section}>
      <div style={s.grid}>
        <Fade>
          <div>
            <div style={s.overline}>Start a Project</div>
            <h2 style={s.h2}>Let's build something remarkable.</h2>
            <div style={s.rule} />
            <p style={s.body}>Tell us about your signage project and we'll respond within one business day with a tailored proposal.</p>
            <div style={s.infoLabel}>Email</div>
            <div style={s.infoVal}>jenlee0511@gmail.com</div>
            <div style={s.infoLabel}>Phone</div>
            <div style={s.infoVal}>+60 17-678 3166 (Jennifer)</div>
            <div style={s.infoLabel}>Location</div>
            <div style={s.infoVal}>Salak South, Kuala Lumpur, Malaysia</div>
          </div>
        </Fade>

        <Fade delay={0.1}>
          <div style={s.formBox}>
            {submitted ? (
              <div style={s.success}>
                <div style={s.successIcon}>✓</div>
                <div style={s.successH}>Enquiry received.</div>
                <p style={s.successP}>Thank you — we'll be in touch within one business day with a tailored proposal.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={s.twoCol}>
                  {field('name', 'Full Name', 'input', { placeholder: 'Ahmad Razali' })}
                  {field('company', 'Company', 'input', { placeholder: 'Your company' })}
                </div>
                <div style={s.twoCol}>
                  {field('email', 'Email Address', 'input', { type: 'email', placeholder: 'you@company.com' })}
                  {field('phone', 'Phone', 'input', { type: 'tel', placeholder: '+60 1X-XXX XXXX' })}
                </div>
                {field('type', 'Sign Type', 'select')}
                {field('message', 'Project Brief', 'textarea', { placeholder: 'Describe your signage requirements, dimensions, location, timeline...' })}
                <button type="submit" style={s.submit}
                  onMouseEnter={e => e.currentTarget.style.background = T.crimsonDark}
                  onMouseLeave={e => e.currentTarget.style.background = T.crimson}>
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ─── HOME PAGE ─────────────────────────────────────────────────── */
export function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <>
      <Hero onContact={scrollToContact} />
      <Stats />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
}
