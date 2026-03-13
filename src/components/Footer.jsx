export default function Footer() {
  return (
    <footer style={{
      background: '#0d0508', borderTop: '1px solid rgba(201,168,76,0.2)',
      padding: '4rem 2rem 2rem', textAlign: 'center'
    }}>
      <p style={{
        fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem',
        fontWeight: 300, color: '#fff', marginBottom: '0.5rem'
      }}>JosNad <em style={{ fontStyle: 'italic', color: '#c9a84c' }}>Spiritueux</em></p>

      <p style={{
        fontFamily: 'Cinzel, serif', fontSize: '0.6rem',
        letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase',
        marginBottom: '2rem'
      }}>L'art de savourer</p>

      <div style={{
        display: 'flex', justifyContent: 'center', gap: '4rem',
        flexWrap: 'wrap', marginBottom: '3rem'
      }}>
        <div>
          <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem',
            letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>Navigation</p>
          {['Accueil', 'Catalogue', 'Contact'].map(item => (
            <p key={item} style={{ color: '#d4c5b0', fontSize: '0.85rem',
              marginBottom: '0.5rem', fontFamily: 'Lato, sans-serif'
            }}>{item}</p>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem',
            letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>Contact</p>
          {['📞 +229 XX XX XX XX', '📧 contact@josnad.com', '📍 Cotonou, Bénin'].map(item => (
            <p key={item} style={{ color: '#d4c5b0', fontSize: '0.85rem',
              marginBottom: '0.5rem', fontFamily: 'Lato, sans-serif'
            }}>{item}</p>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '2rem' }}>
        <p style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem',
          letterSpacing: '0.2em', color: '#6b5040', textTransform: 'uppercase'
        }}>© 2026 JosNad Spiritueux — Tous droits réservés — L'abus d'alcool est dangereux pour la santé</p>
      </div>
    </footer>
  )
}
