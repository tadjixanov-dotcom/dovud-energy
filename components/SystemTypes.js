'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const systems = [
  {
    key: 'ongrid',
    icon: '☀',
    components: ['component1', 'component2', 'component3', 'component4'],
    diagram: [
      { label: 'Quyosh panellari', x: 15, y: 15 },
      { label: 'Invertor', x: 45, y: 40 },
      { label: 'Smart Meter', x: 25, y: 70 },
      { label: 'Davlat tarmog\'i', x: 65, y: 70 },
    ]
  },
  {
    key: 'hybrid',
    icon: '⚡',
    components: ['component1', 'component2', 'component5', 'component3'],
    diagram: []
  },
  {
    key: 'offgrid',
    icon: '🔋',
    components: ['component1', 'component2', 'component5'],
    diagram: []
  },
];

export default function SystemTypes() {
  const t = useTranslations('systems');
  const locale = useLocale();
  const [active, setActive] = useState('ongrid');

  const activeSystem = systems.find(s => s.key === active);

  return (
    <section style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        right: 0,
        top: '30%',
        width: 500,
        height: 500,
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="badge" style={{ marginBottom: 16, justifyContent: 'center' }}>{t('badge')}</div>
          <h2 className="section-title">{t('title')}</h2>
        </div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 48,
          flexWrap: 'wrap',
        }}>
          {systems.map(({ key }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                padding: '12px 28px',
                borderRadius: 10,
                border: active === key ? '1px solid #22c55e' : '1px solid #1a1a1a',
                background: active === key ? 'rgba(34,197,94,0.1)' : '#0f0f0f',
                color: active === key ? '#22c55e' : 'rgba(255,255,255,0.5)',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {t(`${key}Title`)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 40,
          alignItems: 'center',
        }}>
          {/* Diagram */}
          <div className="card-dark" style={{
            padding: 40,
            minHeight: 360,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 48,
              }}>
                {activeSystem?.icon}
              </div>
            </div>

            {/* Corner labels */}
            {[
              { label: t('component1'), pos: { top: 30, left: 30 } },
              { label: t('component2'), pos: { top: 30, right: 30 } },
              { label: t(activeSystem?.components[2] || 'component3'), pos: { bottom: 30, left: 30 } },
              { label: t(activeSystem?.components[3] || 'component4'), pos: { bottom: 30, right: 30 } },
            ].map(({ label, pos }, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...pos,
                background: '#1a1a1a',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 8,
                padding: '8px 14px',
                fontSize: 12,
                color: '#22c55e',
                fontWeight: 600,
              }}>
                {label}
              </div>
            ))}

            {/* Connection lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <line x1="30%" y1="20%" x2="50%" y2="50%" stroke="rgba(34,197,94,0.2)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="70%" y1="20%" x2="50%" y2="50%" stroke="rgba(34,197,94,0.2)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="rgba(34,197,94,0.2)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="rgba(34,197,94,0.2)" strokeWidth="1" strokeDasharray="4,4" />
            </svg>
          </div>

          {/* Description */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}>
              <span style={{ fontSize: 40 }}>{activeSystem?.icon}</span>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#fff' }}>
                {t(`${active}Title`)}
              </h3>
            </div>

            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              {t(`${active}Desc`)}
            </p>

            {/* Components list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {activeSystem?.components.map((comp, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}>
                  <div style={{
                    width: 6, height: 6,
                    background: '#22c55e',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>
                    {t(comp)}
                  </span>
                </div>
              ))}
            </div>

            <Link href={`/${locale}/contact`} className="btn-primary">
              {t('learnMore')}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
