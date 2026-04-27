import { useState } from 'react'
import { Link } from 'react-router-dom'
import { T } from '../tokens'
import { Fade } from '../components/Fade'
import { useViewport } from '../hooks/useViewport'
import foundersImg from '/assets/founders.jpg'

const TIMELINE = [
  { year: '1988', datetime: '1988', title: 'Founded in Kuala Lumpur', desc: 'Wong Fook Kong opens the first workshop in Salak South, specialising in hand-crafted fascia and flat-cut lettering for local retail clients under the name Wong Advertising & Trading.' },
  { year: 'Mid-1990s', datetime: '1996', title: 'Expanding into Illuminated Signage', desc: 'Adoption of neon and early fluorescent box signage, serving growing commercial districts across the Klang Valley.' },
  { year: 'Early 2000s', datetime: '2001', title: 'Incorporated as Ekarbina', desc: 'Rebranded and incorporated on 16 August 2001 as Ekarbina Advertising & Trading (Reg. 001310901K). Investment in CNC routing and early LED technology.' },
  { year: '2010s', datetime: '2015', title: 'Premium Metal & Architectural Work', desc: 'Growth into stainless steel and brass dimensional lettering for luxury hospitality and corporate headquarters.' },
  { year: 'Today', datetime: '2024', title: '800+ Projects, Still Growing', desc: 'A full-service signage studio — design through installation — trusted by Malaysia\'s leading brands.' },
]

const SPECS = [
  { tag: 'Illuminated', name: 'LED Signage', desc: 'Energy-efficient modules with programmable output, bespoke dimensions, and weatherproof construction for exterior applications.' },
  { tag: 'Printed', name: 'Panaflex Signs', desc: 'Large-format flex-face printing for high-visibility commercial frontages, backlit cabinets, and roadside banners.' },
  { tag: 'Dimensional', name: '3D Lettering', desc: 'Raised letterforms in foam, acrylic, or metal — precision CNC-cut edges with UV-stable, lasting finishes.' },
  { tag: 'Structural', name: 'Pylon Structures', desc: 'Steel-framed freestanding pylons engineered to local wind-load specifications, with branded panel systems.' },
  { tag: 'Fabricated', name: 'Acrylic Signage', desc: 'Crystal-clear or tinted acrylic routed and polished to shape, mounted on standoffs or flush to any substrate.' },
  { tag: 'Premium', name: 'Metal Lettering', desc: 'Stainless steel, brass, and aluminium dimensional text — architectural finishes for corporate lobbies and luxury frontages.' },
]

const VALUES = [
  { num: '01', title: 'Precision above all', desc: 'Tolerances measured in millimetres. Every cut, weld, and finish is held to the same exacting standard — regardless of project size.' },
  { num: '02', title: 'In-house, end-to-end', desc: 'We never subcontract fabrication. Design, production, and installation are all performed by our own team — no handoffs, no loss of quality.' },
  { num: '03', title: 'Materials that endure', desc: 'We specify only materials built to outlast the warranty. Because a sign that fades or corrodes within five years reflects on your brand, not ours.' },
]

export function About() {
  const { mobile, tablet } = useViewport()
  const sectionBase = {
    padding: mobile ? '64px 0' : '88px 0',
    borderTop: `1px solid ${T.border}`,
  }
  const container = {
    maxWidth: 1160,
    margin: '0 auto',
    padding: mobile ? '0 20px' : '0 48px',
  }
  const twoCol = (gap = 72) => ({
    display: 'grid',
    gridTemplateColumns: tablet ? '1fr' : '1fr 1fr',
    gap: tablet ? 40 : gap,
    alignItems: 'start',
  })
  const threeCol = {
    display: 'grid',
    gridTemplateColumns: mobile ? '1fr' : tablet ? '1fr 1fr' : 'repeat(3, 1fr)',
    gap: mobile ? 1 : 2,
  }

  return (
    <>
      {/* ── Schema.org JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.ekarbina.com/#business",
            "name": "Ekarbina Advertising & Trading",
            "legalName": "Ekarbina Advertising & Trading",
            "taxID": "001310901K",
            "description": "Precision signage and fabrication specialists. LED, Panaflex, 3D dimensional, pylon, acrylic, stainless steel, and brass signage solutions.",
            "foundingDate": "1988",
            "url": "https://www.ekarbina.com",
            "logo": "https://www.ekarbina.com/assets/ekarbina-logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Salak South",
              "addressLocality": "Kuala Lumpur",
              "addressRegion": "Wilayah Persekutuan",
              "addressCountry": "MY"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "jenlee0511@gmail.com",
              "telephone": "+60176783166",
              "contactOption": "Jennifer Lee",
              "availableLanguage": ["English", "Malay", "Chinese"]
            },
            "areaServed": { "@type": "Country", "name": "Malaysia" }
          },
          {
            "@type": "AboutPage",
            "@id": "https://www.ekarbina.com/about#page",
            "name": "About Ekarbina",
            "description": "The story, values, and founders behind Ekarbina — precision signage fabrication since 1988.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ekarbina.com" },
                { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.ekarbina.com/about" }
              ]
            }
          }
        ]
      })}} />

      {/* ── PAGE HEADER ── */}
      <div style={{ background: T.dark, padding: mobile ? '64px 20px 56px' : '80px 48px 72px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #222' }}>
        <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', width: 400, height: 400, background: T.crimson, borderRadius: '50%', opacity: 0.04, filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, listStyle: 'none', padding: 0 }}>
              <li>
                <Link to="/" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', textDecoration: 'none' }}>Home</Link>
              </li>
              <li aria-hidden="true"><span style={{ color: '#333', fontSize: 11 }}>—</span></li>
              <li>
                <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.gold }}>About Us</span>
              </li>
            </ol>
          </nav>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.gold, marginBottom: 16 }}>Our Story</p>
          <h1 style={{ fontFamily: T.display, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, color: T.white, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Built on <em style={{ fontStyle: 'italic', color: T.gold }}>precision.</em><br />Rooted in craft.
          </h1>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.7, maxWidth: 520 }}>
            Three decades of fabricating signage that outlasts trends — serving Malaysia's most demanding brands from our Kuala Lumpur workshop.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28, padding: '10px 18px', border: '1px solid rgba(201,169,110,0.25)', borderRadius: 3 }}>
            <span style={{ fontFamily: T.display, fontSize: 28, fontWeight: 300, color: T.gold, lineHeight: 1 }}>1988</span>
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#555', lineHeight: 1.4 }}>Established<br />Kuala Lumpur, MY</span>
          </div>
        </div>
      </div>

      <main id="main-content">
        {/* ── OUR STORY ── */}
        <section style={{ ...sectionBase, background: T.white }}>
          <div style={container}>
            <div style={twoCol(72)}>
              <Fade>
                <article>
                  <div style={{ width: 36, height: 2, background: T.gold, marginBottom: 20 }} />
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.crimson, marginBottom: 12 }}>Who We Are</p>
                  <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, color: T.dark, lineHeight: 1.08, letterSpacing: '-0.01em', marginBottom: 28 }}>
                    From a single workshop<br />to Malaysia's trusted<br />fabrication partner.
                  </h2>
                  <div style={{ fontSize: 15, color: T.charcoal, lineHeight: 1.8 }}>
                    <p>Ekarbina was founded in <strong style={{ color: T.dark, fontWeight: 600 }}>1988</strong> with a single premise: that signage should be treated as architecture — permanent, precise, and worthy of the brand it carries. What began as a small workshop in Kuala Lumpur has grown into one of Malaysia's most respected signage fabrication specialists.</p>
                    <p style={{ marginTop: 18 }}>Over more than <strong style={{ color: T.dark, fontWeight: 600 }}>three decades</strong>, we have completed over 800 projects spanning corporate towers, luxury retail, hospitality, healthcare, and public infrastructure. Our work spans every material — from energy-efficient LED modules to hand-finished brass letterforms — all produced in-house.</p>
                    <p style={{ marginTop: 18 }}>We do not subcontract fabrication. Every sign that leaves our workshop was designed, built, and quality-checked by our own team. That is the Ekarbina standard, and it has not changed since 1988.</p>
                  </div>
                </article>
              </Fade>

              <Fade delay={0.1}>
                <aside>
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: 32 }}>
                    {[
                      { num: '36+', label: 'Years of expertise', sub: 'Continuously operating since 1988 with no gaps in service.' },
                      { num: '800+', label: 'Projects completed', sub: 'Commercial, corporate, hospitality, and retail installations across Malaysia.' },
                      { num: '12', label: 'Material specialisations', sub: 'LED, Panaflex, acrylic, steel, brass, aluminium, and more.' },
                      { num: '100%', label: 'In-house production', sub: 'Design, fabrication, and installation — no third-party subcontracting.' },
                    ].map((f, i) => (
                      <li key={f.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 0', borderBottom: `1px solid ${T.border}`, ...(i === 0 ? { borderTop: `1px solid ${T.border}` } : {}) }}>
                        <span style={{ fontFamily: T.display, fontSize: 34, fontWeight: 300, color: T.crimson, lineHeight: 1, flexShrink: 0, width: 72 }}>{f.num}</span>
                        <span style={{ fontSize: 13, color: T.muted, lineHeight: 1.55, paddingTop: 2 }}>
                          <strong style={{ display: 'block', fontSize: 14, fontWeight: 500, color: T.charcoal, marginBottom: 2 }}>{f.label}</strong>
                          {f.sub}
                        </span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ ...sectionBase, background: T.page }}>
          <div style={container}>
            <Fade>
              <div style={twoCol(72)}>
                <div>
                  <div style={{ width: 36, height: 2, background: T.gold, marginBottom: 20 }} />
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.crimson, marginBottom: 12 }}>Our History</p>
                  <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, color: T.dark, lineHeight: 1.08, letterSpacing: '-0.01em' }}>Three decades,<br />one standard.</h2>
                  <p style={{ marginTop: 20, fontSize: 15, color: T.muted, lineHeight: 1.75, maxWidth: 400 }}>
                    From hand-painted fascias to precision LED arrays — our craft has evolved, but our commitment to quality has remained unchanged since the day we opened.
                  </p>
                </div>
                <ol style={{ listStyle: 'none', padding: '0 0 0 32px', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 1, background: `linear-gradient(to bottom, ${T.gold}, rgba(201,169,110,0.1))` }} />
                  {TIMELINE.map((item) => (
                    <li key={item.year} style={{ position: 'relative', marginBottom: 36 }}>
                      <div style={{ position: 'absolute', left: -28, top: 5, width: 9, height: 9, borderRadius: '50%', background: T.gold, border: `2px solid ${T.page}` }} />
                      <time style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.gold, marginBottom: 4, display: 'block' }} dateTime={item.datetime}>{item.year}</time>
                      <h3 style={{ fontFamily: T.display, fontSize: 20, fontWeight: 400, color: T.dark, marginBottom: 4 }}>{item.title}</h3>
                      <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6 }}>{item.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Fade>
          </div>
        </section>

        {/* ── SPECIALISATIONS ── */}
        <section style={{ ...sectionBase, background: T.white }}>
          <div style={container}>
            <Fade>
              <div style={{ width: 36, height: 2, background: T.gold, marginBottom: 20 }} />
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.crimson, marginBottom: 12 }}>What We Build</p>
              <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, color: T.dark, lineHeight: 1.08, letterSpacing: '-0.01em' }}>Six specialisations.<br />One workshop.</h2>
            </Fade>
            <div style={{ ...threeCol, marginTop: 48, background: '#E8E4DE', borderRadius: 4, overflow: 'hidden' }}>
              {SPECS.map((sp) => (
                <SpecItem key={sp.name} sp={sp} />
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ ...sectionBase, background: T.page }}>
          <div style={container}>
            <Fade>
              <div style={{ width: 36, height: 2, background: T.gold, marginBottom: 20 }} />
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.crimson, marginBottom: 12 }}>How We Work</p>
              <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, color: T.dark, lineHeight: 1.08, letterSpacing: '-0.01em' }}>The principles behind<br />every project.</h2>
            </Fade>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : tablet ? '1fr 1fr' : 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
              {VALUES.map((v, i) => (
                <Fade key={v.title} delay={i * 0.08}>
                  <ValueCard v={v} />
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDERS / TEAM ── */}
        <section style={{ ...sectionBase, background: T.white }}>
          <div style={container}>
            <Fade>
              <div style={{ width: 36, height: 2, background: T.gold, marginBottom: 20 }} />
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.crimson, marginBottom: 12 }}>Our People</p>
              <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 300, color: T.dark, lineHeight: 1.08, letterSpacing: '-0.01em' }}>Built by two.<br />Sustained by one vision.</h2>
            </Fade>

            <div style={{ display: 'grid', gridTemplateColumns: tablet ? '1fr' : '1fr 1fr', gap: tablet ? 40 : 64, alignItems: 'center', marginTop: 48 }}>
              <Fade>
                <figure style={{ margin: 0, position: 'relative' }}>
                  <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                    <img src={foundersImg} alt="Wong Fook Kong and Jennifer Lee, founders of Ekarbina"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 12, border: '1px solid rgba(201,169,110,0.3)', borderRadius: 2, pointerEvents: 'none' }} />
                  </div>
                  <figcaption style={{ marginTop: 14, fontSize: 11, color: T.muted, letterSpacing: '0.08em', textAlign: 'center', textTransform: 'uppercase', fontWeight: 500 }}>
                    Wong Fook Kong &amp; Jennifer Lee — Salak South, Kuala Lumpur
                  </figcaption>
                </figure>
              </Fade>

              <Fade delay={0.1}>
                <div>
                  <div style={{ marginBottom: 6 }}>
                    <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.gold, marginBottom: 4 }}>Founder</p>
                    <h3 style={{ fontFamily: T.display, fontSize: 26, fontWeight: 400, color: T.dark, marginBottom: 2 }}>Wong Fook Kong</h3>
                    <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted }}>Founder &amp; Master Craftsman</p>
                  </div>

                  <div style={{ width: 36, height: 1.5, background: T.gold, margin: '18px 0' }} />

                  <div style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.gold, marginBottom: 4 }}>Co-Founder</p>
                    <h3 style={{ fontFamily: T.display, fontSize: 26, fontWeight: 400, color: T.dark, marginBottom: 2 }}>Jennifer Lee</h3>
                    <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted }}>Co-Founder &amp; Operations Director</p>
                  </div>

                  <div style={{ width: 36, height: 1.5, background: T.border, marginBottom: 24 }} />

                  <div style={{ fontSize: 14, color: T.charcoal, lineHeight: 1.85 }}>
                    <p>In 1988, Fook Kong started with a pair of skilled hands, a modest workshop in Salak South, and a conviction that every business — no matter how small — deserves a sign worthy of its name.</p>
                    <p style={{ marginTop: 14 }}>Jennifer came into his life and into the business not long after. She brought order, warmth, and an eye for what clients truly needed. He shaped metal and light into signs that lasted decades. She made sure those signs reached the people who needed them most. Together, they built something neither could have built alone.</p>
                    <p style={{ marginTop: 14 }}>More than three decades on, they are still here — in the same workshop, holding the same standard. Not because it is easy. But because when you build something with the person you love, you build it to last.</p>
                  </div>

                  <div style={{ marginTop: 28, padding: '18px 20px', borderLeft: `2px solid ${T.gold}`, background: T.page, borderRadius: '0 3px 3px 0' }}>
                    <p style={{ fontFamily: T.display, fontSize: 20, fontWeight: 400, fontStyle: 'italic', color: T.dark, lineHeight: 1.45 }}>"We do not just make signs. We make things that last."</p>
                    <p style={{ fontSize: 11, color: T.muted, marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>— Wong Fook Kong, Founder</p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <aside style={{ background: T.crimson, padding: mobile ? '48px 20px' : '64px 48px', display: 'flex', justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'center', flexDirection: mobile ? 'column' : 'row', flexWrap: 'wrap', gap: 32 }}>
          <h2 style={{ fontFamily: T.display, fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, color: T.white, lineHeight: 1.1, maxWidth: 480 }}>
            Ready to make your brand<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>impossible to ignore?</em>
          </h2>
          <Link to="/#contact" style={{ background: T.white, color: T.crimson, border: 'none', padding: '14px 36px', borderRadius: 3, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block' }}>
            Request a Quote
          </Link>
        </aside>
      </main>
    </>
  )
}

function SpecItem({ sp }) {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      style={{ background: hovered ? '#FDFCFA' : T.white, padding: '28px 24px', transition: 'background 0.2s', cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.crimson, marginBottom: 8 }}>{sp.tag}</p>
      <h3 style={{ fontFamily: T.display, fontSize: 20, fontWeight: 400, color: T.dark, marginBottom: 6 }}>{sp.name}</h3>
      <div style={{ width: 20, height: 1.5, background: T.gold, marginBottom: 10 }} />
      <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6 }}>{sp.desc}</p>
    </article>
  )
}

function ValueCard({ v }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ padding: '28px 24px', border: `1px solid ${T.border}`, borderRadius: 4, background: T.white, position: 'relative', overflow: 'hidden', boxShadow: hovered ? '0 4px 24px rgba(0,0,0,0.08)' : 'none', transform: hovered ? 'translateY(-2px)' : 'none', transition: 'all 0.25s ease', cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: T.gold, transform: `scaleX(${hovered ? 1 : 0})`, transformOrigin: 'left', transition: 'transform 0.3s ease' }} />
      <div style={{ fontFamily: T.display, fontSize: 48, fontWeight: 300, color: 'rgba(184,16,58,0.08)', lineHeight: 1, marginBottom: 12 }}>{v.num}</div>
      <h3 style={{ fontFamily: T.display, fontSize: 22, fontWeight: 400, color: T.dark, marginBottom: 8 }}>{v.title}</h3>
      <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.65 }}>{v.desc}</p>
    </div>
  )
}

