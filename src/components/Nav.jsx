import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { T } from '../tokens'
import { useViewport } from '../hooks/useViewport'
import logoImg from '/assets/ekarbina-logo.png'

export function Nav({ onContact, transparent = false }) {
  const { mobile } = useViewport()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isAbout = location.pathname === '/about'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const showDark = !transparent || scrolled || isAbout

  const s = {
    nav: {
      position: isAbout ? 'sticky' : 'fixed',
      top: 0, left: 0, right: 0, zIndex: 100,
      background: showDark ? 'rgba(26,26,26,0.97)' : 'transparent',
      backdropFilter: showDark ? 'blur(12px)' : 'none',
      borderBottom: showDark ? '1px solid #2A2A2A' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: mobile ? '0 20px' : '0 48px',
      height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
    logo: { display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer', textDecoration: 'none' },
    logoImg: { width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' },
    wordmark: { fontFamily: T.display, fontSize: 19, fontWeight: 300, color: T.white, letterSpacing: '0.14em', textTransform: 'uppercase' },
    links: { display: 'flex', gap: 32, listStyle: 'none' },
    link: { fontFamily: T.body, fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C0BCBA', cursor: 'pointer', transition: 'color 0.2s', textDecoration: 'none' },
    linkActive: { color: T.gold, borderBottom: `1px solid ${T.gold}`, paddingBottom: 2 },
    cta: { background: T.crimson, color: T.white, border: 'none', padding: '8px 20px', borderRadius: 3, fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'background 0.2s' },
    burger: { background: 'none', border: 'none', color: T.white, fontSize: 22, cursor: 'pointer', padding: '4px 0' },
    mobileMenu: { position: 'fixed', top: 68, left: 0, right: 0, background: 'rgba(20,20,20,0.98)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #2A2A2A', zIndex: 99, padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', gap: 0 },
    mobileLink: { fontFamily: T.body, fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C0BCBA', padding: '14px 0', borderBottom: '1px solid #2A2A2A', cursor: 'pointer', textDecoration: 'none', display: 'block' },
    mobileCta: { background: T.crimson, color: T.white, border: 'none', padding: '14px', borderRadius: 3, fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 20, width: '100%' },
  }

  const navLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'About', href: '/about' },
  ]

  return (
    <>
      <nav style={s.nav}>
        <Link to="/" style={s.logo}>
          <img src={logoImg} alt="Ekarbina" style={s.logoImg} />
          <span style={s.wordmark}>Ekarbina</span>
        </Link>
        {!mobile ? (
          <>
            <ul style={s.links}>
              {navLinks.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    style={{ ...s.link, ...(l.href === '/about' && isAbout ? s.linkActive : {}) }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button style={s.cta} onClick={onContact}
              onMouseEnter={e => e.currentTarget.style.background = T.crimsonDark}
              onMouseLeave={e => e.currentTarget.style.background = T.crimson}>
              Get a Quote
            </button>
          </>
        ) : (
          <button style={s.burger} onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>
      {mobile && menuOpen && (
        <div style={s.mobileMenu}>
          {navLinks.map(l => (
            <Link key={l.label} to={l.href} style={s.mobileLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <button style={s.mobileCta} onClick={() => { onContact(); setMenuOpen(false) }}>Get a Quote</button>
        </div>
      )}
    </>
  )
}
