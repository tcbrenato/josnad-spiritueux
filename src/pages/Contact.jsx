import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '22997834807'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const infos = [
  { icon: '📞', titre: 'Téléphone', info: '01 97 83 48 07', lien: 'tel:+22901978348 07' },
  { icon: '💬', titre: 'WhatsApp', info: '97 83 48 07', lien: `${WHATSAPP_URL}` },
  { icon: '📧', titre: 'Email', info: 'josnadspiritueux@gmail.com', lien: 'mailto:josnadspiritueux@gmail.com' },
  { icon: '📍', titre: 'Localisation', info: 'Cotonou, Bénin', lien: null },
  { icon: '🕐', titre: 'Horaires', info: 'Lun – Sam : 8h à 20h', lien: null },
]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', telephone: '', produit: '', message: '' })
  const [envoye, setEnvoye] = useState(false)
  const [visible, setVisible] = useState(false)
  const [focused, setFocused] = useState(null)

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Bonjour JosNad Spiritueux ! 🥃\n\n` +
      `👤 Nom : ${form.nom}\n` +
      `📞 Téléphone : ${form.telephone}\n` +
      `🍾 Produit souhaité : ${form.produit}\n` +
      `💬 Message : ${form.message || 'Aucun message'}`
    )
    window.open(`${WHATSAPP_URL}?text=${msg}`, '_blank')
    setEnvoye(true)
  }

  const inputStyle = (name) => ({
    width: '100%',
    background: focused === name ? 'rgba(201,168,76,0.05)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === name ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.2)'}`,
    color: '#f5f0e8',
    padding: '0.9rem 1.2rem',
    fontSize: '0.95rem',
    fontFamily: 'Cormorant Garamond, serif',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  })

  const labelStyle = {
    fontFamily: 'Cinzel, serif',
    fontSize: '0.58rem',
    letterSpacing: '0.25em',
    color: '#c9a84c',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.6rem',
  }

  return (
    <main style={{ paddingTop: '90px', minHeight: '100vh', background: '#110608' }}>

      {/* EN-TÊTE */}
      <div style={{
        padding: '5rem 2rem 4rem',
        textAlign: 'center',
        background: 'linear-gradient(160deg, #3e0f25 0%, #1a0a10 60%, #110608 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease',
          position: 'relative', zIndex: 1,
        }}>
          <span style={{
            fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.45em',
            color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '1rem'
          }}>Parlons-nous</span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
            fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '1rem'
          }}>Nous <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Contacter</em></h1>
          <div style={{ width: '60px', height: '1px', background: '#c9a84c', margin: '1.5rem auto' }} />
          <p style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem',
            fontStyle: 'italic', color: '#d4c5b0',
          }}>Une question ? Une commande ? Nous sommes à votre écoute.</p>
        </div>
      </div>

      {/* CORPS */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '5rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '5rem',
        alignItems: 'start',
      }}>

        {/* INFOS DE CONTACT */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'all 1s ease 0.2s',
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem',
            fontWeight: 300, color: '#fff', marginBottom: '0.5rem',
          }}>
            Informations de{' '}
            <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Contact</em>
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#c9a84c', marginBottom: '2.5rem' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {infos.map((item) => (
              <div key={item.titre} style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem',
                padding: '1.3rem 1.5rem',
                border: '1px solid rgba(201,168,76,0.12)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.04)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{
                    fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.22em',
                    color: '#c9a84c', textTransform: 'uppercase', marginBottom: '0.3rem'
                  }}>{item.titre}</p>
                  {item.lien ? (
                    <a href={item.lien} target={item.lien.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      style={{
                        color: '#f5f0e8', fontSize: '0.95rem',
                        fontFamily: 'Cormorant Garamond, serif',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => e.target.style.color = '#e4c97e'}
                      onMouseLeave={e => e.target.style.color = '#f5f0e8'}
                    >{item.info}</a>
                  ) : (
                    <p style={{ color: '#f5f0e8', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif' }}>
                      {item.info}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA WhatsApp direct */}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
            marginTop: '2.5rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#fff',
            textDecoration: 'none',
            fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', fontWeight: '600',
            transition: 'opacity 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            💬 &nbsp; Écrire sur WhatsApp
          </a>
        </div>

        {/* FORMULAIRE */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'all 1s ease 0.4s',
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem',
            fontWeight: 300, color: '#fff', marginBottom: '0.5rem',
          }}>
            Passer une{' '}
            <em style={{ fontStyle: 'italic', color: '#e4c97e' }}>Commande</em>
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#c9a84c', marginBottom: '2.5rem' }} />

          {envoye ? (
            <div style={{
              padding: '3.5rem 2rem', textAlign: 'center',
              border: '1px solid rgba(201,168,76,0.25)',
              background: 'rgba(201,168,76,0.04)',
            }}>
              <p style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>✅</p>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem',
                color: '#fff', fontStyle: 'italic', lineHeight: 1.4,
              }}>Votre commande a été<br />envoyée via WhatsApp !</p>
              <p style={{ color: '#d4c5b0', marginTop: '1rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Nous vous contacterons dans les plus brefs délais.
              </p>
              <button onClick={() => { setEnvoye(false); setForm({ nom: '', telephone: '', produit: '', message: '' }) }} style={{
                marginTop: '2rem',
                fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.22em',
                background: '#c9a84c', color: '#1a0a10',
                padding: '0.9rem 2.2rem', border: 'none', cursor: 'pointer',
                textTransform: 'uppercase', fontWeight: '600',
              }}>Nouvelle Commande</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Votre Nom *</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  value={form.nom}
                  onChange={e => setForm({ ...form, nom: e.target.value })}
                  onFocus={() => setFocused('nom')}
                  onBlur={() => setFocused(null)}
                  required
                  style={inputStyle('nom')}
                />
              </div>

              <div>
                <label style={labelStyle}>Téléphone *</label>
                <input
                  type="tel"
                  placeholder="+229 XX XX XX XX"
                  value={form.telephone}
                  onChange={e => setForm({ ...form, telephone: e.target.value })}
                  onFocus={() => setFocused('telephone')}
                  onBlur={() => setFocused(null)}
                  required
                  style={inputStyle('telephone')}
                />
              </div>

              <div>
                <label style={labelStyle}>Produit Souhaité *</label>
                <input
                  type="text"
                  placeholder="Ex: Whisky Premium, Cognac XO..."
                  value={form.produit}
                  onChange={e => setForm({ ...form, produit: e.target.value })}
                  onFocus={() => setFocused('produit')}
                  onBlur={() => setFocused(null)}
                  required
                  style={inputStyle('produit')}
                />
              </div>

              <div>
                <label style={labelStyle}>Message (optionnel)</label>
                <textarea
                  placeholder="Quantité, occasion, livraison..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  style={{ ...inputStyle('message'), resize: 'vertical' }}
                />
              </div>

              <button type="submit" style={{
                width: '100%',
                fontFamily: 'Cinzel, serif', fontSize: '0.72rem', letterSpacing: '0.22em',
                background: '#c9a84c', color: '#1a0a10',
                padding: '1.2rem', border: 'none', cursor: 'pointer',
                textTransform: 'uppercase', fontWeight: '700',
                transition: 'all 0.3s',
                marginTop: '0.5rem',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#e4c97e'
                  e.currentTarget.style.letterSpacing = '0.3em'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#c9a84c'
                  e.currentTarget.style.letterSpacing = '0.22em'
                }}
              >💬 &nbsp; Commander via WhatsApp</button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}