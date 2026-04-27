// Ekarbina — Shared UI Components
// Load via <script type="text/babel" src="Components.jsx">

const EK = {
  crimson: '#B8103A',
  crimsonHover: '#7A0D28',
  gold: '#C9A96E',
  dark: '#1A1A1A',
  darkSurface: '#1F1F1F',
  charcoal: '#2E2E2E',
  muted: '#717171',
  border: '#EEEBE6',
  pageBg: '#F7F5F2',
  white: '#FFFFFF',
};

// ─── NAV ────────────────────────────────────────────────────────────────────
function Header({ activePage, onNav }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navItems = ['Services', 'Portfolio', 'About', 'Contact'];
  const s = {
    nav: { background: EK.dark, borderBottom: `1px solid #2E2E2E`, padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, position: 'relative', zIndex: 10 },
    logo: { display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' },
    logoImg: { width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' },
    wordmark: { fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: EK.white, letterSpacing: '0.12em', textTransform: 'uppercase' },
    links: { display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 },
    link: (active) => ({ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: active ? EK.gold : '#C0BCBA', cursor: 'pointer', textDecoration: 'none', borderBottom: active ? `1px solid ${EK.gold}` : '1px solid transparent', paddingBottom: 2, transition: 'color 200ms' }),
    cta: { background: EK.crimson, color: EK.white, border: 'none', padding: '9px 22px', borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' },
  };
  return (
    <nav style={s.nav}>
      <div style={s.logo} onClick={() => onNav && onNav('Home')}>
        <img src="../assets/ekarbina-logo.png" alt="Ekarbina" style={s.logoImg} />
        <span style={s.wordmark}>Ekarbina</span>
      </div>
      <ul style={s.links}>
        {navItems.map(item => (
          <li key={item}>
            <a style={s.link(activePage === item)} onClick={() => onNav && onNav(item)}>{item}</a>
          </li>
        ))}
      </ul>
      <button style={s.cta} onClick={() => onNav && onNav('Contact')}>Get a Quote</button>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero({ onNav }) {
  const s = {
    section: { background: EK.dark, minHeight: 560, display: 'flex', alignItems: 'center', padding: '80px 48px', position: 'relative', overflow: 'hidden' },
    inner: { maxWidth: 640, position: 'relative', zIndex: 2 },
    overline: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: EK.gold, marginBottom: 20 },
    rule: { width: 40, height: 2, background: EK.gold, marginBottom: 24 },
    h1: { fontFamily: "'Cormorant Garamond', serif", fontSize: 58, fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.02em', color: EK.white, marginBottom: 24 },
    em: { fontStyle: 'italic', color: EK.gold },
    body: { fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: '#A0A0A0', lineHeight: 1.65, marginBottom: 36, maxWidth: 480 },
    actions: { display: 'flex', gap: 14 },
    btnPrimary: { background: EK.crimson, color: EK.white, border: 'none', padding: '13px 32px', borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' },
    btnGhost: { background: 'transparent', color: EK.white, border: '1.5px solid #3D3D3D', padding: '13px 32px', borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' },
    accent: { position: 'absolute', right: 48, top: '50%', transform: 'translateY(-50%)', width: 260, height: 260, borderRadius: '50%', background: EK.crimson, opacity: 0.07, filter: 'blur(60px)', zIndex: 1 },
    badge: { position: 'absolute', right: 100, top: '50%', transform: 'translateY(-50%)', width: 200, height: 200, borderRadius: '50%', border: `1px solid rgba(201,169,110,0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  };
  return (
    <section style={s.section}>
      <div style={s.accent}></div>
      <div style={s.inner}>
        <div style={s.overline}>Signage & Fabrication</div>
        <div style={s.rule}></div>
        <h1 style={s.h1}>Your brand,<br /><em style={s.em}>rendered</em> in<br />steel and light.</h1>
        <p style={s.body}>From LED illumination to architectural metalwork — Ekarbina fabricates and installs precision signage for brands that demand excellence.</p>
        <div style={s.actions}>
          <button style={s.btnPrimary} onClick={() => onNav && onNav('Contact')}>Request a Quote</button>
          <button style={s.btnGhost} onClick={() => onNav && onNav('Portfolio')}>View Portfolio</button>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES GRID ───────────────────────────────────────────────────────────
const SERVICES = [
  { label: 'LED Signage', desc: 'Energy-efficient illuminated displays with programmable output and weather-resistant construction.', tag: 'Illuminated' },
  { label: 'Panaflex Signs', desc: 'Large-format printed flex faces for commercial frontages, roadside banners, and backlit displays.', tag: 'Printed' },
  { label: '3D Dimensional', desc: 'Raised letterforms and logo marks in foam, acrylic, or metal — precise edges, lasting finish.', tag: 'Dimensional' },
  { label: 'Pylon Structures', desc: 'Freestanding steel-framed pylons with branded panels — engineered for wind load and visibility.', tag: 'Structural' },
  { label: 'Acrylic Signage', desc: 'Crystal-clear or tinted acrylic cut and routed to shape, paired with standoffs or face-mounted.', tag: 'Fabricated' },
  { label: 'Metal Lettering', desc: 'Stainless steel, brass, and aluminium dimensional text — architectural finishes for premium locations.', tag: 'Premium' },
];

function Services() {
  const s = {
    section: { background: EK.pageBg, padding: '80px 48px' },
    head: { marginBottom: 48 },
    overline: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: EK.crimson, marginBottom: 12 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: EK.dark, lineHeight: 1.1, letterSpacing: '-0.01em' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
    card: { background: EK.white, border: `1px solid ${EK.border}`, borderRadius: 4, padding: '24px 22px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
    tag: { fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: EK.crimson, marginBottom: 10 },
    rule: { width: 24, height: 1.5, background: EK.gold, margin: '10px 0 12px' },
    title: { fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: EK.dark, marginBottom: 8 },
    desc: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: EK.muted, lineHeight: 1.6 },
  };
  return (
    <section style={s.section}>
      <div style={s.head}>
        <div style={s.overline}>What We Do</div>
        <h2 style={s.h2}>Every sign,<br />every material.</h2>
      </div>
      <div style={s.grid}>
        {SERVICES.map(sv => (
          <div key={sv.label} style={s.card}>
            <div style={s.tag}>{sv.tag}</div>
            <div style={s.title}>{sv.label}</div>
            <div style={s.rule}></div>
            <div style={s.desc}>{sv.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── STATS BAR ───────────────────────────────────────────────────────────────
function Stats() {
  const items = [
    { val: '15+', label: 'Years in Fabrication' },
    { val: '800+', label: 'Projects Completed' },
    { val: '12', label: 'Material Specializations' },
    { val: '100%', label: 'In-house Production' },
  ];
  const s = {
    section: { background: EK.crimson, padding: '40px 48px', display: 'flex', justifyContent: 'space-around' },
    item: { textAlign: 'center' },
    val: { fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 300, color: EK.white, lineHeight: 1 },
    label: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginTop: 6 },
    divider: { width: 1, background: 'rgba(255,255,255,0.15)', margin: '0 0' },
  };
  return (
    <section style={s.section}>
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && <div style={s.divider}></div>}
          <div style={s.item}>
            <div style={s.val}>{item.val}</div>
            <div style={s.label}>{item.label}</div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}

// ─── PORTFOLIO STRIP ─────────────────────────────────────────────────────────
const PROJECTS = [
  { title: 'Corporate Tower Pylon', location: 'Kuala Lumpur', type: 'Pylon · Stainless Steel', bg: '#1F1F1F' },
  { title: 'Retail LED Fascia', location: 'Petaling Jaya', type: 'LED · Panaflex', bg: '#2A1015' },
  { title: 'Hotel Lobby Lettering', location: 'Putrajaya', type: 'Brass · Dimensional', bg: '#191714' },
  { title: 'Mall Directory System', location: 'Shah Alam', type: 'Acrylic · Backlit', bg: '#111820' },
];

function Portfolio() {
  const s = {
    section: { background: EK.dark, padding: '80px 48px' },
    head: { marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' },
    overline: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: EK.gold, marginBottom: 12 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: EK.white, lineHeight: 1.1 },
    viewAll: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: EK.gold, cursor: 'pointer', borderBottom: `1px solid ${EK.gold}`, paddingBottom: 2 },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 },
    card: (bg) => ({ background: bg, borderRadius: 4, height: 240, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: '1px solid #2E2E2E', position: 'relative', overflow: 'hidden' }),
    corner: { position: 'absolute', top: 16, right: 16, width: 24, height: 24, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: 2 },
    type: { fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: EK.gold, marginBottom: 6 },
    title: { fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: EK.white, marginBottom: 4 },
    loc: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#717171' },
  };
  return (
    <section style={s.section}>
      <div style={s.head}>
        <div>
          <div style={s.overline}>Our Work</div>
          <h2 style={s.h2}>Selected projects.</h2>
        </div>
        <span style={s.viewAll}>View all projects →</span>
      </div>
      <div style={s.grid}>
        {PROJECTS.map(p => (
          <div key={p.title} style={s.card(p.bg)}>
            <div style={s.corner}></div>
            <div style={s.type}>{p.type}</div>
            <div style={s.title}>{p.title}</div>
            <div style={s.loc}>{p.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT CTA ─────────────────────────────────────────────────────────────
function ContactCTA({ onNav }) {
  const s = {
    section: { background: EK.pageBg, padding: '80px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${EK.border}` },
    left: {},
    overline: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: EK.muted, marginBottom: 12 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 300, color: EK.dark, lineHeight: 1.1, maxWidth: 420 },
    rule: { width: 40, height: 2, background: EK.gold, margin: '16px 0 0' },
    right: { display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' },
    btn: { background: EK.crimson, color: EK.white, border: 'none', padding: '14px 36px', borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' },
    detail: { fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: EK.muted },
  };
  return (
    <section style={s.section}>
      <div style={s.left}>
        <div style={s.overline}>Start a Project</div>
        <h2 style={s.h2}>Ready to make your brand impossible to ignore?</h2>
        <div style={s.rule}></div>
      </div>
      <div style={s.right}>
        <button style={s.btn} onClick={() => onNav && onNav('Contact')}>Request a Quote</button>
        <span style={s.detail}>Or call us: +60 3-XXXX XXXX</span>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  const s = {
    footer: { background: EK.dark, borderTop: '1px solid #2A2A2A', padding: '48px 48px 32px' },
    top: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 32, marginBottom: 40 },
    brand: {},
    logoRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 },
    logoImg: { width: 32, height: 32, borderRadius: '50%' },
    wordmark: { fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 300, color: EK.white, letterSpacing: '0.12em', textTransform: 'uppercase' },
    tagline: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#717171', lineHeight: 1.6, maxWidth: 200 },
    colHead: { fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: EK.gold, marginBottom: 14 },
    colLink: { display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#717171', marginBottom: 8, cursor: 'pointer', textDecoration: 'none' },
    bottom: { borderTop: '1px solid #2A2A2A', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    copy: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#555' },
  };
  return (
    <footer style={s.footer}>
      <div style={s.top}>
        <div style={s.brand}>
          <div style={s.logoRow}>
            <img src="../assets/ekarbina-logo.png" alt="Ekarbina" style={s.logoImg} />
            <span style={s.wordmark}>Ekarbina</span>
          </div>
          <div style={s.tagline}>Precision signage and fabrication — LED, metal, acrylic, and beyond.</div>
        </div>
        <div>
          <div style={s.colHead}>Services</div>
          {['LED Signage', 'Panaflex', '3D Lettering', 'Pylon Signs', 'Metal Signage'].map(l => <a key={l} style={s.colLink}>{l}</a>)}
        </div>
        <div>
          <div style={s.colHead}>Company</div>
          {['About Us', 'Portfolio', 'Process', 'Careers'].map(l => <a key={l} style={s.colLink}>{l}</a>)}
        </div>
        <div>
          <div style={s.colHead}>Contact</div>
          <a style={s.colLink}>info@ekarbina.com</a>
          <a style={s.colLink}>+60 3-XXXX XXXX</a>
          <a style={s.colLink}>Kuala Lumpur, Malaysia</a>
        </div>
      </div>
      <div style={s.bottom}>
        <div style={s.copy}>© 2024 Ekarbina Sdn. Bhd. All rights reserved.</div>
        <div style={s.copy}>Crafted with precision.</div>
      </div>
    </footer>
  );
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function ContactPage() {
  const s = {
    page: { background: EK.pageBg, padding: '72px 48px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 },
    overline: { fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: EK.crimson, marginBottom: 12 },
    h2: { fontFamily: "'Cormorant Garamond', serif", fontSize: 42, fontWeight: 300, color: EK.dark, lineHeight: 1.1, marginBottom: 16 },
    rule: { width: 36, height: 2, background: EK.gold, marginBottom: 20 },
    body: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: EK.muted, lineHeight: 1.7, marginBottom: 28 },
    infoBlock: { marginBottom: 16 },
    infoLabel: { fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: EK.gold, marginBottom: 4 },
    infoVal: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: EK.charcoal },
    form: { background: EK.white, border: `1px solid ${EK.border}`, borderRadius: 4, padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
    fieldGroup: { marginBottom: 18 },
    label: { display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: EK.charcoal, marginBottom: 6 },
    input: { width: '100%', padding: '10px 14px', border: `1px solid ${EK.border}`, borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: EK.dark, background: EK.white, outline: 'none', boxSizing: 'border-box' },
    textarea: { width: '100%', padding: '10px 14px', border: `1px solid ${EK.border}`, borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: EK.dark, background: EK.white, outline: 'none', boxSizing: 'border-box', resize: 'vertical', minHeight: 100 },
    btn: { background: EK.crimson, color: EK.white, border: 'none', padding: '12px 28px', borderRadius: 3, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', width: '100%' },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  };
  return (
    <div style={s.page}>
      <div style={s.grid}>
        <div>
          <div style={s.overline}>Get in Touch</div>
          <h2 style={s.h2}>Let's build something remarkable.</h2>
          <div style={s.rule}></div>
          <p style={s.body}>Tell us about your project and we'll get back to you within one business day with a tailored proposal.</p>
          <div style={s.infoBlock}><div style={s.infoLabel}>Email</div><div style={s.infoVal}>info@ekarbina.com</div></div>
          <div style={s.infoBlock}><div style={s.infoLabel}>Phone</div><div style={s.infoVal}>+60 3-XXXX XXXX</div></div>
          <div style={s.infoBlock}><div style={s.infoLabel}>Location</div><div style={s.infoVal}>Kuala Lumpur, Malaysia</div></div>
        </div>
        <div style={s.form}>
          <div style={s.row}>
            <div style={s.fieldGroup}><label style={s.label}>First Name</label><input style={s.input} placeholder="Ahmad" /></div>
            <div style={s.fieldGroup}><label style={s.label}>Last Name</label><input style={s.input} placeholder="Razali" /></div>
          </div>
          <div style={s.fieldGroup}><label style={s.label}>Company</label><input style={s.input} placeholder="Your company name" /></div>
          <div style={s.fieldGroup}><label style={s.label}>Sign Type</label>
            <select style={s.input}><option>Select a sign type</option><option>LED / Illuminated</option><option>Pylon</option><option>Acrylic</option><option>Metal Lettering</option></select>
          </div>
          <div style={s.fieldGroup}><label style={s.label}>Project Brief</label><textarea style={s.textarea} placeholder="Describe your signage needs..." /></div>
          <button style={s.btn}>Send Enquiry</button>
        </div>
      </div>
    </div>
  );
}

// Export all
Object.assign(window, { Header, Hero, Services, Stats, Portfolio, ContactCTA, Footer, ContactPage });
