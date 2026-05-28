'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', username: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirm) {
      setError('Passwörter stimmen nicht überein')
      return
    }
    setSuccess(true)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', background: 'rgba(15,27,45,0.6)', padding: '40px', borderRadius: '15px' }}>
        <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>Registrieren</h1>
        {success && <div style={{ background: 'rgba(0,217,126,0.2)', color: '#00D97E', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>✅ Konto erstellt!</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-Mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8B9BB4', background: 'rgba(26,58,92,0.2)', color: '#E8EDF5' }}
            required
          />
          <input
            type="text"
            placeholder="Benutzername"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8B9BB4', background: 'rgba(26,58,92,0.2)', color: '#E8EDF5' }}
            required
          />
          <input
            type="password"
            placeholder="Passwort"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8B9BB4', background: 'rgba(26,58,92,0.2)', color: '#E8EDF5' }}
            required
          />
          <input
            type="password"
            placeholder="Passwort wiederholen"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8B9BB4', background: 'rgba(26,58,92,0.2)', color: '#E8EDF5' }}
            required
          />
          {error && <div style={{ color: '#FF3B5C', marginBottom: '16px' }}>{error}</div>}
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#00D97E', color: '#0A0A0F', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Konto erstellen
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#8B9BB4' }}>
          Schon ein Konto? <Link href="/login" style={{ color: '#00D97E' }}>Einloggen</Link>
        </p>
      </div>
    </div>
  )
}
