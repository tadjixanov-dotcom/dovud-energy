'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { key: 'home', href: `/${locale}` },
    { key: 'blog', href: `/${locale}/blog` },
    { key: 'projects', href: `/${locale}/projects` },
    { key: 'certificates', href: `/${locale}/certificates` },
    { key: 'calculator', href: `/${locale}/calculator` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid #1a1a1a',
      padding: '60px 24px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}>
          <div>
            <Logo size={36} />
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginTop: 16, maxWidth: 260 }}>
              {t('desc')}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['tg', 'ig', 'yt'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36,
                  background: '#0f0f0f',
                  border: '1px solid #1a1a1a',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#22c55e',
                  fontSize: 14,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}>
                  {s === 'tg' ? '✈' : s === 'ig' ? '◻' : '▶'}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 15 }}>
              {t('pages')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(({ key, href }) => (
                <Link key={key} href={href} style={{
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#22c55e'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {nav(key)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 15 }}>
              {t('contacts')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="tel:+998999779995" style={{
                color: '#22c55e', textDecoration: 'none', fontSize: 14, fontWeight: 600
              }}>
                +998 99 977 99 95
              </a>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6 }}>
                Toshkent viloyati, Zangiota tumani,<br />
                Ark Buloq Xalqaro Savdo Markazi, D1-13
              </p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                Dushanba–Shanba: 9:00–18:00
              </p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #1a1a1a',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
            © {new Date().getFullYear()} Dovud Energy. {t('rights')}
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['🌿', '☀️', '⚡'].map((icon, i) => (
              <span key={i} style={{ fontSize: 16 }}>{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
