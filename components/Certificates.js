'use client';

import { useTranslations } from 'next-intl';

const certData = [
  { key: 'cert1', org: 'TUV', color: '#1d4ed8' },
  { key: 'cert2', org: 'CE', color: '#16a34a' },
  { key: 'cert3', org: 'ISO', color: '#d97706' },
  { key: 'cert4', org: 'DEYE', color: '#3b82f6' },
  { key: 'cert5', org: 'TUV', color: '#1d4ed8' },
  { key: 'cert6', org: "O'Z", color: '#22c55e' },
];

export default function Certificates() {
  const t = useTranslations('certificates');

  return (
    <section style={{
      padding: '120px 24px',
      background: '#080808',
      borderTop: '1px solid #1a1a1a',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="badge" style={{ marginBottom: 16, justifyContent: 'center' }}>{t('badge')}</div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>{t('title')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
            {t('subtitle')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16,
        }}>
          {certData.map(({ key, org, color }) => (
            <div
              key={key}
              className="card-dark"
              style={{
                padding: '32px 20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${color}60`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: `${color}20`,
                border: `1px solid ${color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: 11,
                fontWeight: 800,
                color,
                letterSpacing: '0.05em',
              }}>
                {org}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 600, lineHeight: 1.5 }}>
                {t(key)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 40,
          padding: '24px 28px',
          background: 'rgba(34,197,94,0.05)',
          border: '1px solid rgba(34,197,94,0.15)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 28 }}>✅</span>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7, flex: 1 }}>
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
