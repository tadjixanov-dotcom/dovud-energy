'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#080808',
    border: '1px solid #2a2a2a',
    borderRadius: 10,
    color: '#fff',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const infoItems = [
    { icon: '📞', label: t('phone'), value: '+998 99 977 99 95', href: 'tel:+998999779995', green: true },
    { icon: '📍', label: t('address'), value: t('addressValue') },
    { icon: '🕐', label: t('workHours'), value: t('workHoursValue') },
  ];

  return (
    <section style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="badge" style={{ marginBottom: 16, justifyContent: 'center' }}>{t('badge')}</div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>{t('title')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>{t('subtitle')}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
        }}>
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {infoItems.map(({ icon, label, value, href, green }) => (
              <div key={label} className="card-dark" style={{ padding: '24px 20px' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 4, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} style={{ color: green ? '#22c55e' : '#fff', fontWeight: 700, fontSize: 18, textDecoration: 'none' }}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ color: '#fff', fontSize: 14, lineHeight: 1.6 }}>{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="card-dark" style={{
              height: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 8,
              background: 'linear-gradient(135deg, #0f0f0f, #0a1a0a)',
            }}>
              <span style={{ fontSize: 40 }}>🗺️</span>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>Zangiota, Toshkent</p>
              <a
                href="https://maps.google.com/?q=Zangiota+Tashkent"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#22c55e', fontSize: 13, fontWeight: 600 }}
              >
                Google Maps →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="card-dark" style={{ padding: '36px 32px' }}>
            {sent ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 300,
                gap: 16,
                textAlign: 'center',
              }}>
                <span style={{ fontSize: 56 }}>✅</span>
                <p style={{ color: '#22c55e', fontWeight: 700, fontSize: 18 }}>
                  Xabaringiz yuborildi!
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
                  Tez orada siz bilan bog'lanamiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                    {t('formName')}
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder={t('namePlaceholder')}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#22c55e'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                    {t('formPhone')}
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder={t('phonePlaceholder')}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#22c55e'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                    {t('formMessage')}
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={t('messagePlaceholder')}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => e.target.style.borderColor = '#22c55e'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: 4 }}>
                  {t('formSubmit')}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8L14 8M8 2L14 8L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
