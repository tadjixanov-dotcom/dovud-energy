'use client';

import { useTranslations } from 'next-intl';

const partners = [
  { name: 'JinkoSolar', color: '#22c55e' },
  { name: 'LONGi', color: '#dc2626' },
  { name: 'ERA Solar', color: '#f97316' },
  { name: 'Growatt', color: '#22c55e' },
  { name: 'INVT', color: '#3b82f6' },
  { name: 'Deye', color: '#3b82f6' },
  { name: 'TTNergy', color: '#ffffff' },
];

export default function Partners() {
  const t = useTranslations('partners');

  return (
    <section style={{
      padding: '80px 24px',
      borderTop: '1px solid #1a1a1a',
      borderBottom: '1px solid #1a1a1a',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="badge" style={{ marginBottom: 16, justifyContent: 'center' }}>{t('badge')}</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#fff' }}>
            {t('title')}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 16,
        }}>
          {partners.map(({ name, color }) => (
            <div
              key={name}
              className="card-dark"
              style={{
                padding: '28px 20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
                cursor: 'default',
                minHeight: 100,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(34,197,94,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: 40, height: 40,
                borderRadius: '50%',
                background: `rgba(${color === '#ffffff' ? '255,255,255' : color === '#dc2626' ? '220,38,38' : color === '#f97316' ? '249,115,22' : color === '#3b82f6' ? '59,130,246' : '34,197,94'}, 0.15)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
                marginBottom: 4,
              }}>
                ⚡
              </div>
              <span style={{ color, fontWeight: 700, fontSize: 15, letterSpacing: '0.02em' }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
