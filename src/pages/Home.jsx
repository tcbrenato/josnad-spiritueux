import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import prod1 from '../assets/prod1.jpg'
import prod2 from '../assets/prod2.jpg'
import prod3 from '../assets/prod3.jpg'
import prod4 from '../assets/prod4.jpg'
import prod5 from '../assets/prod5.jpg'
import prod6 from '../assets/prod6.jpg'

const produits = [
  { id: 1, nom: 'Whisky Premium', categorie: 'Whisky', img: prod1 },
  { id: 2, nom: 'Cognac XO', categorie: 'Cognac', img: prod2 },
  { id: 3, nom: 'Rhum Vieux', categorie: 'Rhum', img: prod3 },
  { id: 4, nom: 'Gin London', categorie: 'Gin', img: prod4 },
  { id: 5, nom: 'Champagne Brut', categorie: 'Champagne', img: prod5 },
  { id: 6, nom: 'Vodka Crystal', categorie: 'Vodka', img: prod6 },
]

export default function Home() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <main>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '2rem',
        background: 'linear-gradient(135deg, #3e0f25 0%, #1a0a10 50%, #3e0f25 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(107,32,66,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 40%)'
        }} />
        <div style={{
          position: 'relative', zIndex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1.2s ease'
        }}>
          <p style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.7rem',
            letterSpacing: '0.4em', color: '#c9a84c',
            textTransform: 'uppercase', marginBottom: '1.5rem'
          }}>Bienvenue chez</p>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 300, lineHeight: 1.05, color: '#fff', marginBottom: '1rem'
          }}>JosNad <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Spiritueux</em></h1>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontWeight: 300, fontStyle: 'italic', color: '#d4c5b0',
            marginBottom: '3rem', letterSpacing: '0.05em'
          }}>L'art de savourer les meilleurs spiritueux</p>

          <div style={{ width: '80px', height: '1px', background: '#c9a84c', margin: '0 auto 3rem' }} />

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/catalogue" style={{
              fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.2em',
              background: '#c9a84c', color: '#1a0a10', padding: '1rem 2.5rem',
              textDecoration: 'none', textTransform: 'uppercase', fontWeight: '600'
            }}>Voir le Catalogue</Link>
            <Link to="/contact" style={{
              fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.2em',
              background: 'transparent', color: '#f5f0e8', padding: '1rem 2.5rem',
              border: '1px solid rgba(245,240,232,0.4)',
              textDecoration: 'none', textTransform: 'uppercase'
            }}>Nous Contacter</Link>
          </div>
        </div>
      </section>

      {/* BANNIERE */}
      <div style={{
        background: '#c9a84c', padding: '1rem', textAlign: 'center'
      }}>
        <p style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.7rem', letterSpacing: '0.25em',
          color: '#1a0a10', textTransform: 'uppercase'
        }}>⭐ Livraison à domicile à Cotonou &nbsp;&nbsp;|&nbsp;&nbsp; ⭐ Commande WhatsApp disponible &nbsp;&nbsp;|&nbsp;&nbsp; ⭐ Spiritueux authentiques garantis</p>
      </div>

      {/* PRODUITS VEDETTES */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.4em',
            color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
          }}>Notre Sélection</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300, color: '#fff'
          }}>Produits <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Vedettes</em></h2>
          <div style={{ width: '60px', height: '1px', background: '#c9a84c', margin: '1.5rem auto 0' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem'
        }}>
          {produits.map(p => (
            <div key={p.id} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,168,76,0.15)',
              overflow: 'hidden', cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ height: '300px', overflow: 'hidden', background: '#2a1020' }}>
                <img src={p.img} alt={p.nom} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{
                  fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em',
                  color: '#c9a84c', textTransform: 'uppercase'
                }}>{p.categorie}</span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem',
                  fontWeight: 400, color: '#fff', margin: '0.5rem 0 1rem'
                }}>{p.nom}</h3>
                <Link to="/contact" style={{
                  fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em',
                  background: '#c9a84c', color: '#1a0a10', padding: '0.5rem 1rem',
                  textDecoration: 'none', textTransform: 'uppercase', fontWeight: '600',
                  display: 'inline-block'
                }}>Commander</Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/catalogue" style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.2em',
            background: 'transparent', color: '#c9a84c', padding: '1rem 2.5rem',
            border: '1px solid rgba(201,168,76,0.4)',
            textDecoration: 'none', textTransform: 'uppercase'
          }}>Voir tout le catalogue →</Link>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #3e0f25 0%, #2a0f1a 100%)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.4em',
            color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
          }}>Pourquoi nous choisir</span>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300, color: '#fff', marginBottom: '4rem'
          }}>Notre <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Engagement</em></h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
            {[
              { icon: '🍾', titre: 'Produits Authentiques', desc: 'Tous nos spiritueux sont soigneusement sélectionnés et garantis 100% authentiques.' },
              { icon: '🚚', titre: 'Livraison Rapide', desc: 'Livraison à domicile disponible sur Cotonou et ses environs.' },
              { icon: '💎', titre: 'Qualité Premium', desc: 'Une sélection exclusive des meilleures marques mondiales.' },
              { icon: '📱', titre: 'Commande Facile', desc: 'Commandez facilement via WhatsApp ou notre formulaire en ligne.' },
            ].map(item => (
              <div key={item.titre} style={{ padding: '2rem', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.15em',
                  color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1rem'
                }}>{item.titre}</h3>
                <p style={{ color: '#d4c5b0', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}