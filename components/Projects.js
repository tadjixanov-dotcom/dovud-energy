'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const projectsData = [
  { capacity: '100 kWt', color: '#22c55e', emoji: '🏭' },
  { capacity: '50 kWt', color: '#16a34a', emoji: '🏗' },
  { capacity: '20 kWt', color: '#15803d', emoji: '🏠' },
];

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();

  return (
    <section style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 56,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <div>
            <div className="badge" style={{ marginBottom: 16 }}>{t('badge')}</div>
            <h2 className="section-title">{t('title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginTop: 12, maxWidth: 500 }}>
              {t('subtitle')}
            </p>
          </div>
          <Link href={`/${locale}/projects`} className="btn-outline">
            {t('badge')} →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {projectsData.map(({ capacity, color, emoji }, i) => (
            <div
              key={i}
              className="card-dark"
              style={{
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a1a1a';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Photo placeholder */}
              <div style={{
                height: 220,
                background: `linear-gradient(135deg, #111 0%, #1a2a1a 50%, #0a1a0a 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(ellipse at center, rgba(34,197,94,0.15) 0%, transparent 70%)`,
                }} />
                <span style={{ fontSize: 64 }}>{emoji}</span>
                <div style={{
                  position: 'absolute',
                  top: 16, right: 16,
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${color}`,
                  borderRadius: 8,
                  padding: '6px 14px',
                  fontSize: 13,
                  fontWeight: 700,
                  color,
                }}>
                  {capacity}
                </div>
              </div>

              <div style={{ padding: '24px 20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 8,
                }}>
                  <span style={{ color: '#22c55e', fontSize: 14 }}>📍</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                    {t(`project${i + 1}Location`)}
                  </span>
                </div>
                <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                  {t(`project${i + 1}Name`)}
                </h3>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: 6,
                  padding: '4px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#22c55e',
                }}>
                  {t(`project${i + 1}Type`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
