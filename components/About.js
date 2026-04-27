'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const values = [
    { key: 'v1', icon: '◆', color: '#22c55e' },
    { key: 'v2', icon: '◆', color: '#16a34a' },
    { key: 'v3', icon: '◆', color: '#22c55e' },
    { key: 'v4', icon: '◆', color: '#16a34a' },
  ];

  return (
    <section style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 400,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Left content */}
          <div>
            <div className="badge" style={{ marginBottom: 24 }}>{t('badge')}</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              {t('title')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              {t('desc')}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.8 }}>
              {t('desc2')}
            </p>
          </div>

          {/* Right: values grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}>
            {values.map(({ key, icon, color }) => (
              <div key={key} className="card-dark" style={{
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%',
                  height: 2,
                  background: `linear-gradient(90deg, ${color}, transparent)`,
                }} />
                <div style={{
                  fontSize: 28,
                  color,
                  marginBottom: 12,
                }}>
                  {icon}
                </div>
                <p style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
