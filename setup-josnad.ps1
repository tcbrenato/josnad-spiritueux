# ============================================================
# SCRIPT DE CREATION DU SITE JOSNAD SPIRITUEUX
# Copiez-collez ce script entier dans le terminal PowerShell
# ============================================================

# --- index.css ---
@"
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400&display=swap');

:root {
  --bordeaux: #6B2042;
  --bordeaux-dark: #3e0f25;
  --gold: #c9a84c;
  --gold-light: #e4c97e;
  --cream: #f5f0e8;
  --dark: #1a0a10;
  --text-light: #d4c5b0;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Lato', sans-serif;
  background: var(--dark);
  color: var(--cream);
  overflow-x: hidden;
}
"@ | Set-Content src\index.css

# --- App.jsx ---
@"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Contact from './pages/Contact'
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
"@ | Set-Content src\App.jsx

# --- Navbar.jsx ---
@"
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
"@ | Set-Content src\components\Navbar.jsx

# --- Footer.jsx ---
@"
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
"@ | Set-Content src\components\Footer.jsx

# --- Home.jsx ---
@"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const produits = [
  { id: 1, nom: 'Whisky Premium', categorie: 'Whisky', prix: '15 000 FCFA', img: '/src/assets/prod1.jpg' },
  { id: 2, nom: 'Cognac XO', categorie: 'Cognac', prix: '25 000 FCFA', img: '/src/assets/prod2.jpg' },
  { id: 3, nom: 'Rhum Vieux', categorie: 'Rhum', prix: '10 000 FCFA', img: '/src/assets/prod3.jpg' },
  { id: 4, nom: 'Gin London', categorie: 'Gin', prix: '12 000 FCFA', img: '/src/assets/prod4.jpg' },
  { id: 5, nom: 'Champagne Brut', categorie: 'Champagne', prix: '30 000 FCFA', img: '/src/assets/prod5.jpg' },
  { id: 6, nom: 'Vodka Crystal', categorie: 'Vodka', prix: '8 000 FCFA', img: '/src/assets/prod6.jpg' },
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
        background: '#c9a84c', padding: '1rem', textAlign: 'center', overflow: 'hidden'
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
                  fontWeight: 400, color: '#fff', margin: '0.5rem 0'
                }}>{p.nom}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem',
                    color: '#e4c97e', fontStyle: 'italic'
                  }}>{p.prix}</span>
                  <Link to="/contact" style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em',
                    background: '#c9a84c', color: '#1a0a10', padding: '0.5rem 1rem',
                    textDecoration: 'none', textTransform: 'uppercase', fontWeight: '600'
                  }}>Commander</Link>
                </div>
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
"@ | Set-Content src\pages\Home.jsx

# --- Catalogue.jsx ---
@"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const tousLesProduits = [
  { id: 1, nom: 'Whisky Premium', categorie: 'Whisky', prix: '15 000 FCFA', img: '/src/assets/prod1.jpg', desc: 'Un whisky d\'exception aux arômes boisés et fumés.' },
  { id: 2, nom: 'Cognac XO', categorie: 'Cognac', prix: '25 000 FCFA', img: '/src/assets/prod2.jpg', desc: 'Cognac extra vieux aux notes de fruits secs et de vanille.' },
  { id: 3, nom: 'Rhum Vieux', categorie: 'Rhum', prix: '10 000 FCFA', img: '/src/assets/prod3.jpg', desc: 'Rhum vieilli en fût de chêne, doux et parfumé.' },
  { id: 4, nom: 'Gin London Dry', categorie: 'Gin', prix: '12 000 FCFA', img: '/src/assets/prod4.jpg', desc: 'Gin classique aux botaniques soigneusement sélectionnés.' },
  { id: 5, nom: 'Champagne Brut', categorie: 'Champagne', prix: '30 000 FCFA', img: '/src/assets/prod5.jpg', desc: 'Champagne brut élégant aux bulles fines et persistantes.' },
  { id: 6, nom: 'Vodka Crystal', categorie: 'Vodka', prix: '8 000 FCFA', img: '/src/assets/prod6.jpg', desc: 'Vodka pure distillée cinq fois pour une pureté absolue.' },
  { id: 7, nom: 'Tequila Reposado', categorie: 'Tequila', prix: '18 000 FCFA', img: '/src/assets/prod7.jpg', desc: 'Tequila reposado 100% agave bleue, dorée et complexe.' },
  { id: 8, nom: 'Brandy Select', categorie: 'Brandy', prix: '9 000 FCFA', img: '/src/assets/prod8.jpg', desc: 'Brandy sélectionné aux arômes chauds et caramelisés.' },
  { id: 9, nom: 'Bourbon Reserve', categorie: 'Whisky', prix: '20 000 FCFA', img: '/src/assets/prod9.jpg', desc: 'Bourbon américain réservé, vanillé et légèrement épicé.' },
  { id: 10, nom: 'Rum Blanc', categorie: 'Rhum', prix: '7 000 FCFA', img: '/src/assets/prod10.jpg', desc: 'Rhum blanc léger et fruité, parfait pour les cocktails.' },
  { id: 11, nom: 'Armagnac VSOP', categorie: 'Cognac', prix: '22 000 FCFA', img: '/src/assets/prod11.jpg', desc: 'Armagnac VSOP aux notes florales et épicées d\'exception.' },
  { id: 12, nom: 'Whisky Single Malt', categorie: 'Whisky', prix: '35 000 FCFA', img: '/src/assets/prod12.jpg', desc: 'Single malt d\'exception aux arômes tourbés et iodés.' },
  { id: 13, nom: 'Gin Floral', categorie: 'Gin', prix: '14 000 FCFA', img: '/src/assets/prod13.jpg', desc: 'Gin aux botaniques floraux et citronnés, très rafraîchissant.' },
  { id: 14, nom: 'Prosecco Extra Dry', categorie: 'Champagne', prix: '16 000 FCFA', img: '/src/assets/prod14.jpg', desc: 'Prosecco fruité et léger, idéal pour vos apéritifs.' },
  { id: 15, nom: 'Mezcal Artisanal', categorie: 'Tequila', prix: '28 000 FCFA', img: '/src/assets/prod15.jpg', desc: 'Mezcal artisanal fumé produit selon les méthodes ancestrales.' },
  { id: 16, nom: 'Calvados AOC', categorie: 'Brandy', prix: '17 000 FCFA', img: '/src/assets/prod16.jpg', desc: 'Calvados AOC aux arômes de pommes et de poires mûres.' },
  { id: 17, nom: 'Rhum Agricole', categorie: 'Rhum', prix: '11 000 FCFA', img: '/src/assets/prod17.jpg', desc: 'Rhum agricole au caractère végétal et terreux prononcé.' },
  { id: 18, nom: 'Cognac VS', categorie: 'Cognac', prix: '13 000 FCFA', img: '/src/assets/prod18.jpg', desc: 'Cognac VS jeune et fruité, idéal pour débuter.' },
  { id: 19, nom: 'Vodka Aromatisée', categorie: 'Vodka', prix: '9 500 FCFA', img: '/src/assets/prod19.jpg', desc: 'Vodka aromatisée aux agrumes frais et zestes de citron.' },
  { id: 20, nom: 'Whisky Blended', categorie: 'Whisky', prix: '11 000 FCFA', img: '/src/assets/prod20.jpg', desc: 'Whisky blended doux et accessible, parfait pour tous.' },
  { id: 21, nom: 'Gin Premium', categorie: 'Gin', prix: '19 000 FCFA', img: '/src/assets/prod21.jpg', desc: 'Gin premium aux 12 botaniques rares et précieuses.' },
  { id: 22, nom: 'Tequila Silver', categorie: 'Tequila', prix: '15 000 FCFA', img: '/src/assets/prod22.jpg', desc: 'Tequila blanche cristalline, agréable et légèrement sucrée.' },
  { id: 23, nom: 'Rhum Épicé', categorie: 'Rhum', prix: '8 500 FCFA', img: '/src/assets/prod23.jpg', desc: 'Rhum épicé aux notes de cannelle, de vanille et de noix.' },
  { id: 24, nom: 'Brandy Gold', categorie: 'Brandy', prix: '10 000 FCFA', img: '/src/assets/prod24.jpg', desc: 'Brandy doré aux arômes chaleureux et légèrement boisés.' },
  { id: 25, nom: 'Champagne Rosé', categorie: 'Champagne', prix: '32 000 FCFA', img: '/src/assets/prod25.jpg', desc: 'Champagne rosé romantique aux notes de fraises et framboises.' },
  { id: 26, nom: 'Whisky Irish', categorie: 'Whisky', prix: '13 500 FCFA', img: '/src/assets/prod26.jpg', desc: 'Whisky irlandais triple distillé, doux et sans aspérités.' },
]

const categories = ['Tous', ...new Set(tousLesProduits.map(p => p.categorie))]

export default function Catalogue() {
  const [categorie, setCategorie] = useState('Tous')
  const [recherche, setRecherche] = useState('')

  const produitsFiltres = tousLesProduits.filter(p => {
    const matchCat = categorie === 'Tous' || p.categorie === categorie
    const matchSearch = p.nom.toLowerCase().includes(recherche.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main style={{ paddingTop: '90px', minHeight: '100vh' }}>
      {/* EN-TETE */}
      <div style={{
        padding: '4rem 2rem', textAlign: 'center',
        background: 'linear-gradient(135deg, #3e0f25 0%, #1a0a10 100%)'
      }}>
        <span style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.4em',
          color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
        }}>Notre Collection</span>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 300, color: '#fff'
        }}>Catalogue <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Complet</em></h1>
        <div style={{ width: '60px', height: '1px', background: '#c9a84c', margin: '1.5rem auto' }} />
        <p style={{ color: '#d4c5b0', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontStyle: 'italic' }}>
          Découvrez notre sélection de {tousLesProduits.length} spiritueux d'exception
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* RECHERCHE */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)',
              color: '#f5f0e8', padding: '0.8rem 2rem', fontSize: '0.9rem',
              fontFamily: 'Lato, sans-serif', width: '100%', maxWidth: '400px',
              outline: 'none'
            }}
          />
        </div>

        {/* FILTRES */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setCategorie(cat)} style={{
              fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em',
              padding: '0.6rem 1.5rem', border: '1px solid rgba(201,168,76,0.3)',
              background: categorie === cat ? '#6B2042' : 'transparent',
              borderColor: categorie === cat ? '#6B2042' : 'rgba(201,168,76,0.3)',
              color: categorie === cat ? '#fff' : '#d4c5b0',
              cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s'
            }}>{cat}</button>
          ))}
        </div>

        {/* GRILLE */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem'
        }}>
          {produitsFiltres.map(p => (
            <div key={p.id} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.15)',
              overflow: 'hidden', transition: 'all 0.4s ease'
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
              <div style={{ height: '280px', overflow: 'hidden', background: '#2a1020' }}>
                <img src={p.img} alt={p.nom} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{
                  fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em',
                  color: '#c9a84c', textTransform: 'uppercase'
                }}>{p.categorie}</span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem',
                  fontWeight: 400, color: '#fff', margin: '0.4rem 0'
                }}>{p.nom}</h3>
                <p style={{ color: '#d4c5b0', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem',
                    color: '#e4c97e', fontStyle: 'italic'
                  }}>{p.prix}</span>
                  <Link to="/contact" style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em',
                    background: '#c9a84c', color: '#1a0a10', padding: '0.5rem 1rem',
                    textDecoration: 'none', textTransform: 'uppercase', fontWeight: '600'
                  }}>Commander</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {produitsFiltres.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#d4c5b0' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontStyle: 'italic' }}>
              Aucun produit trouvé
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
"@ | Set-Content src\pages\Catalogue.jsx

# --- Contact.jsx ---
@"
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', telephone: '', produit: '', message: '' })
  const [envoye, setEnvoye] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      "Bonjour JosNad Spiritueux!\n\n" +
      "Nom: " + form.nom + "\n" +
      "Téléphone: " + form.telephone + "\n" +
      "Produit souhaité: " + form.produit + "\n" +
      "Message: " + form.message
    )
    window.open("https://wa.me/22900000000?text=" + msg, '_blank')
    setEnvoye(true)
  }

  return (
    <main style={{ paddingTop: '90px', minHeight: '100vh' }}>
      {/* EN-TETE */}
      <div style={{
        padding: '4rem 2rem', textAlign: 'center',
        background: 'linear-gradient(135deg, #3e0f25 0%, #1a0a10 100%)'
      }}>
        <span style={{
          fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.4em',
          color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
        }}>Parlons-nous</span>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 300, color: '#fff'
        }}>Nous <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Contacter</em></h1>
        <div style={{ width: '60px', height: '1px', background: '#c9a84c', margin: '1.5rem auto' }} />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem'
      }}>
        {/* INFOS */}
        <div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300,
            color: '#fff', marginBottom: '2rem'
          }}>Informations de <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Contact</em></h2>

          {[
            { icon: '📞', titre: 'Téléphone', info: '+229 XX XX XX XX' },
            { icon: '💬', titre: 'WhatsApp', info: '+229 XX XX XX XX' },
            { icon: '📧', titre: 'Email', info: 'contact@josnad.com' },
            { icon: '📍', titre: 'Localisation', info: 'Cotonou, Bénin' },
            { icon: '🕐', titre: 'Horaires', info: 'Lun - Sam: 8h - 20h' },
          ].map(item => (
            <div key={item.titre} style={{
              display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
              marginBottom: '2rem', padding: '1.5rem', border: '1px solid rgba(201,168,76,0.15)',
              background: 'rgba(255,255,255,0.02)'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <div>
                <p style={{
                  fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.2em',
                  color: '#c9a84c', textTransform: 'uppercase', marginBottom: '0.3rem'
                }}>{item.titre}</p>
                <p style={{ color: '#f5f0e8', fontSize: '0.95rem' }}>{item.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORMULAIRE */}
        <div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300,
            color: '#fff', marginBottom: '2rem'
          }}>Passer une <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Commande</em></h2>

          {envoye ? (
            <div style={{
              padding: '3rem', textAlign: 'center', border: '1px solid rgba(201,168,76,0.3)',
              background: 'rgba(201,168,76,0.05)'
            }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</p>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem',
                color: '#fff', fontStyle: 'italic'
              }}>Votre commande a été envoyée via WhatsApp !</p>
              <p style={{ color: '#d4c5b0', marginTop: '1rem', fontSize: '0.9rem' }}>
                Nous vous contacterons dans les plus brefs délais.
              </p>
              <button onClick={() => setEnvoye(false)} style={{
                marginTop: '2rem', fontFamily: 'Cinzel, serif', fontSize: '0.65rem',
                letterSpacing: '0.2em', background: '#c9a84c', color: '#1a0a10',
                padding: '0.8rem 2rem', border: 'none', cursor: 'pointer', textTransform: 'uppercase'
              }}>Nouvelle Commande</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {[
                { name: 'nom', label: 'Votre Nom', type: 'text', placeholder: 'Jean Dupont' },
                { name: 'telephone', label: 'Téléphone', type: 'tel', placeholder: '+229 XX XX XX XX' },
                { name: 'produit', label: 'Produit Souhaité', type: 'text', placeholder: 'Ex: Whisky Premium, Cognac XO...' },
              ].map(field => (
                <div key={field.name} style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em',
                    color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem'
                  }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                    required
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(201,168,76,0.3)', color: '#f5f0e8',
                      padding: '0.8rem 1rem', fontSize: '0.9rem',
                      fontFamily: 'Lato, sans-serif', outline: 'none'
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.2em',
                  color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem'
                }}>Message (optionnel)</label>
                <textarea
                  placeholder="Quantité, occasion, livraison..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  style={{
                    width: '100%', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,168,76,0.3)', color: '#f5f0e8',
                    padding: '0.8rem 1rem', fontSize: '0.9rem',
                    fontFamily: 'Lato, sans-serif', outline: 'none', resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" style={{
                width: '100%', fontFamily: 'Cinzel, serif', fontSize: '0.75rem',
                letterSpacing: '0.2em', background: '#c9a84c', color: '#1a0a10',
                padding: '1.1rem', border: 'none', cursor: 'pointer',
                textTransform: 'uppercase', fontWeight: '600', fontSize: '0.75rem'
              }}>💬 Commander via WhatsApp</button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
"@ | Set-Content src\pages\Contact.jsx

Write-Host ""
Write-Host "✅ TOUS LES FICHIERS ONT ETE CREES AVEC SUCCES !" -ForegroundColor Green
Write-Host ""
Write-Host "Lancez maintenant : npm run dev" -ForegroundColor Yellow
