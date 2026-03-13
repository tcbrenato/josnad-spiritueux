import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 3rem',
      background: 'rgba(26, 10, 16, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.2)'
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem',
          fontWeight: 300, color: '#fff', letterSpacing: '0.05em'
        }}>JosNad <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>Spiritueux</em></span>
      </Link>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {[['/', 'Accueil'], ['/catalogue', 'Catalogue'], ['/contact', 'Contact']].map(([path, label]) => (
          <li key={path}>
            <Link to={path} style={{
              fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
              letterSpacing: '0.15em', color: '#d4c5b0',
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}>{label}</Link>
          </li>
        ))}
      </ul>

      <Link to="/contact" style={{
        fontFamily: 'Cinzel, serif', fontSize: '0.7rem',
        letterSpacing: '0.15em', background: '#c9a84c',
        color: '#1a0a10', padding: '0.6rem 1.5rem',
        textDecoration: 'none', textTransform: 'uppercase', fontWeight: '600'
      }}>Commander</Link>
    </nav>
  )
}
