import { Link } from 'react-router-dom'
import { T } from '../tokens'
import { useViewport } from '../hooks/useViewport'
import logoImg from '/assets/ekarbina-logo.png'

export function Footer() {
  const { mobile } = useViewport()
  const s = {
    footer: { background: '#111', borderTop: '1px solid #222', padding: mobile ? '48px 24px 28px' : '56px 48px 32px' },
    top: { display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr', gap: mobile ? '32px 24px' : 32, marginBottom: 40 },
    logoRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 },
    logoImg: { width: 30, height: 30, borderRadius: '50%' },
    wordmark: { fontFamily: T.display, fontSize: 17, fontWeight: 300, color: T.white, letterSpacing: '0.14em', textTransform: 'uppercase' },
    tagline: { fontFamily: T.body, fontSize: 12, color: '#555', lineHeight: 1.65, maxWidth: 200 },
    colHead: { fontFamily: T.body, fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.gold, marginBottom: 14 },
    colLink: { display: 'block', fontFamily: T.body, fontSize: 13, color: '#555', marginBottom: 9, cursor: 'pointer', textDecoration: 'none' },
    bottom: { borderTop: '1px solid #1E1E1E', paddingTop: 22, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', alignItems: 'center' },
    copy: { fontFamily: T.body, fontSize: 11, color: '#3A3A3A' },
  }

  return (
    <footer style={s.footer}>
      <div style={s.top}>
        <div style={{ gridColumn: mobile ? '1 / -1' : 'auto' }}>
          <div style={s.logoRow}>
            <img src={logoImg} alt="Ekarbina" style={s.logoImg} />
            <span style={s.wordmark}>Ekarbina</span>
          </div>
          <div style={s.tagline}>Precision signage and fabrication — LED, metal, acrylic, dimensional. Est. 1988.</div>
        </div>
        <div>
          <div style={s.colHead}>Services</div>
          {['LED Signage', 'Panaflex', '3D Lettering', 'Pylon Signs', 'Metal Signage'].map(l => (
            <Link key={l} to="/#services" style={s.colLink}
              onMouseEnter={e => e.currentTarget.style.color = '#999'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}>{l}</Link>
          ))}
        </div>
        <div>
          <div style={s.colHead}>Company</div>
          <Link to="/about" style={s.colLink}
            onMouseEnter={e => e.currentTarget.style.color = '#999'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}>About Us</Link>
          <Link to="/#portfolio" style={s.colLink}
            onMouseEnter={e => e.currentTarget.style.color = '#999'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}>Portfolio</Link>
          {['Process', 'Careers'].map(l => (
            <a key={l} href="#" style={s.colLink}
              onMouseEnter={e => e.currentTarget.style.color = '#999'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}>{l}</a>
          ))}
        </div>
        <div>
          <div style={s.colHead}>Contact</div>
          <a href="mailto:jenlee0511@gmail.com" style={s.colLink}
            onMouseEnter={e => e.currentTarget.style.color = '#999'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}>jenlee0511@gmail.com</a>
          <a href="tel:+60176783166" style={s.colLink}
            onMouseEnter={e => e.currentTarget.style.color = '#999'}
            onMouseLeave={e => e.currentTarget.style.color = '#555'}>+60 17-678 3166</a>
          <span style={s.colLink}>Salak South, Kuala Lumpur</span>
        </div>
      </div>
      <div style={s.bottom}>
        <div style={s.copy}>© 2024 Ekarbina Advertising &amp; Trading. All rights reserved.</div>
        <div style={s.copy}>Crafted with precision.</div>
      </div>
    </footer>
  )
}
