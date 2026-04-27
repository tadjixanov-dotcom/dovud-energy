'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const stats = [
    { value: '200+', label: t('stat1') },
    { value: '5+', label: t('stat2') },
    { value: '30 yil', label: t('stat3') },
    { value: '98.7%', label: t('stat4') },
  ];

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 72,
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 600,
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: 500,
        height: 500,
        background: 'radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div style={{ maxWidth: 800 }}>
          <div className="badge" style={{ marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, background: '#22c55e', borderRadius: '50%', display: 'inline-block' }} />
            {t('badge')}
          </div>

          <h1 style={{
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            marginBottom: 24,
            fontFamily: "'Bebas Neue', 'Inter', sans-serif",
          }}>
            <span style={{ color: '#ffffff', display: 'block' }}>{t('title')}</span>
            <span style={{
              color: '#22c55e',
              display: 'block',
              textShadow: '0 0 80px rgba(34,197,94,0.4)',
            }}>
              {t('titleAccent')}
            </span>
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.6,
            maxWidth: 560,
            marginBottom: 40,
          }}>
            {t('subtitle')}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 80 }}>
            <Link href={`/${locale}/contact`} className="btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
              {t('cta')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link href={`/${locale}/calculator`} className="btn-outline" style={{ fontSize: 16, padding: '16px 32px' }}>
              {t('calcCta')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 6H11M5 9H9M5 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 1,
            background: '#1a1a1a',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid #1a1a1a',
            maxWidth: 700,
          }}>
            {stats.map(({ value, label }, i) => (
              <div key={i} style={{
                background: '#0f0f0f',
                padding: '24px 20px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#22c55e',
                  letterSpacing: '-0.02em',
                  marginBottom: 4,
                }}>
                  {value}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative vertical text */}
        <div style={{
          position: 'absolute',
          right: 48,
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'center',
          fontSize: 11,
          letterSpacing: '0.3em',
          color: 'rgba(34,197,94,0.3)',
          fontWeight: 600,
          textTransform: 'uppercase',
          display: 'none',
        }} className="vertical-text">
          DOVUD ENERGY — SOLAR SYSTEMS
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .vertical-text { display: block !important; }
        }
      `}</style>
    </section>
  );
}
