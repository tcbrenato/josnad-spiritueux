import { useState } from 'react'

import prod1 from '../assets/prod1.jpg'
import prod2 from '../assets/prod2.jpg'
import prod3 from '../assets/prod3.jpg'
import prod4 from '../assets/prod4.jpg'
import prod5 from '../assets/prod5.jpg'
import prod6 from '../assets/prod6.jpg'
import prod7 from '../assets/prod7.jpg'
import prod8 from '../assets/prod8.jpg'
import prod9 from '../assets/prod9.jpg'
import prod10 from '../assets/prod10.jpg'
import prod11 from '../assets/prod11.jpg'
import prod12 from '../assets/prod12.jpg'
import prod13 from '../assets/prod13.jpg'
import prod14 from '../assets/prod14.jpg'
import prod15 from '../assets/prod15.jpg'
import prod16 from '../assets/prod16.jpg'
import prod17 from '../assets/prod17.jpg'
import prod18 from '../assets/prod18.jpg'
import prod19 from '../assets/prod19.jpg'
import prod20 from '../assets/prod20.jpg'
import prod21 from '../assets/prod21.jpg'
import prod22 from '../assets/prod22.jpg'
import prod23 from '../assets/prod23.jpg'
import prod24 from '../assets/prod24.jpg'
import prod25 from '../assets/prod25.jpg'
import prod26 from '../assets/prod26.jpg'

const tousLesProduits = [
  { id: 1, nom: 'Whisky Premium', categorie: 'Whisky', img: prod1, desc: "Un whisky d'exception aux arômes boisés et fumés." },
  { id: 2, nom: 'Cognac XO', categorie: 'Cognac', img: prod2, desc: 'Cognac extra vieux aux notes de fruits secs et de vanille.' },
  { id: 3, nom: 'Rhum Vieux', categorie: 'Rhum', img: prod3, desc: 'Rhum vieilli en fût de chêne, doux et parfumé.' },
  { id: 4, nom: 'Gin London Dry', categorie: 'Gin', img: prod4, desc: 'Gin classique aux botaniques soigneusement sélectionnés.' },
  { id: 5, nom: 'Champagne Brut', categorie: 'Champagne', img: prod5, desc: 'Champagne brut élégant aux bulles fines et persistantes.' },
  { id: 6, nom: 'Vodka Crystal', categorie: 'Vodka', img: prod6, desc: 'Vodka pure distillée cinq fois pour une pureté absolue.' },
  { id: 7, nom: 'Tequila Reposado', categorie: 'Tequila', img: prod7, desc: 'Tequila reposado 100% agave bleue, dorée et complexe.' },
  { id: 8, nom: 'Brandy Select', categorie: 'Brandy', img: prod8, desc: 'Brandy sélectionné aux arômes chauds et caramélisés.' },
  { id: 9, nom: 'Bourbon Reserve', categorie: 'Whisky', img: prod9, desc: 'Bourbon américain réservé, vanillé et légèrement épicé.' },
  { id: 10, nom: 'Rum Blanc', categorie: 'Rhum', img: prod10, desc: 'Rhum blanc léger et fruité, parfait pour les cocktails.' },
  { id: 11, nom: 'Armagnac VSOP', categorie: 'Cognac', img: prod11, desc: 'Armagnac VSOP aux notes florales et épicées.' },
  { id: 12, nom: 'Whisky Single Malt', categorie: 'Whisky', img: prod12, desc: 'Single malt aux arômes tourbés et iodés.' },
  { id: 13, nom: 'Gin Floral', categorie: 'Gin', img: prod13, desc: 'Gin aux botaniques floraux et citronnés.' },
  { id: 14, nom: 'Prosecco Extra Dry', categorie: 'Champagne', img: prod14, desc: 'Prosecco fruité et léger, idéal pour vos apéritifs.' },
  { id: 15, nom: 'Mezcal Artisanal', categorie: 'Tequila', img: prod15, desc: 'Mezcal artisanal fumé produit selon les méthodes ancestrales.' },
  { id: 16, nom: 'Calvados AOC', categorie: 'Brandy', img: prod16, desc: 'Calvados AOC aux arômes de pommes et de poires mûres.' },
  { id: 17, nom: 'Rhum Agricole', categorie: 'Rhum', img: prod17, desc: 'Rhum agricole au caractère végétal et terreux.' },
  { id: 18, nom: 'Cognac VS', categorie: 'Cognac', img: prod18, desc: 'Cognac VS jeune et fruité, idéal pour débuter.' },
  { id: 19, nom: 'Vodka Aromatisée', categorie: 'Vodka', img: prod19, desc: 'Vodka aromatisée aux agrumes frais.' },
  { id: 20, nom: 'Whisky Blended', categorie: 'Whisky', img: prod20, desc: 'Whisky blended doux et accessible.' },
  { id: 21, nom: 'Gin Premium', categorie: 'Gin', img: prod21, desc: 'Gin premium aux 12 botaniques rares.' },
  { id: 22, nom: 'Tequila Silver', categorie: 'Tequila', img: prod22, desc: 'Tequila blanche cristalline et légèrement sucrée.' },
  { id: 23, nom: 'Rhum Épicé', categorie: 'Rhum', img: prod23, desc: 'Rhum épicé aux notes de cannelle et de vanille.' },
  { id: 24, nom: 'Brandy Gold', categorie: 'Brandy', img: prod24, desc: 'Brandy doré aux arômes chaleureux et boisés.' },
  { id: 25, nom: 'Champagne Rosé', categorie: 'Champagne', img: prod25, desc: 'Champagne rosé aux notes de fraises et framboises.' },
  { id: 26, nom: 'Whisky Irish', categorie: 'Whisky', img: prod26, desc: 'Whisky irlandais triple distillé, doux et sans aspérités.' },
]

const categories = ['Tous', ...new Set(tousLesProduits.map(p => p.categorie))]

const WHATSAPP_URL = 'https://wa.me/+22997834807'

export default function Catalogue() {
  const [categorie, setCategorie] = useState('Tous')
  const [recherche, setRecherche] = useState('')

  const produitsFiltres = tousLesProduits.filter(p => {
    const matchCat = categorie === 'Tous' || p.categorie === categorie
    const matchSearch = p.nom.toLowerCase().includes(recherche.toLowerCase())
    return matchCat && matchSearch
  })

  const commanderViaWhatsApp = (nomProduit) => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander : ${nomProduit}`)
    window.open(`${WHATSAPP_URL}?text=${message}`, '_blank')
  }

  return (
    <main style={{ paddingTop: '90px', minHeight: '100vh' }}>
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
          Découvrez notre sélection de {tousLesProduits.length} spiritueux
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={recherche}
            onChange={e => setRecherche(e.target.value)}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.3)',
              color: '#f5f0e8', padding: '0.8rem 2rem', fontSize: '0.9rem',
              fontFamily: 'Lato, sans-serif', width: '100%', maxWidth: '400px', outline: 'none'
            }}
          />
        </div>

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
                <p style={{ color: '#d4c5b0', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>{p.desc}</p>
                <button
                  onClick={() => commanderViaWhatsApp(p.nom)}
                  style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em',
                    background: '#c9a84c', color: '#1a0a10', padding: '0.5rem 1rem',
                    border: 'none', textTransform: 'uppercase', fontWeight: '600',
                    cursor: 'pointer', display: 'inline-block'
                  }}
                >Commander</button>
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