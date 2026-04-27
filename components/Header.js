'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const languages = [
  { code: 'uz', label: "O'z" },
  { code: 'ru', label: 'Ру' },
  { code: 'en', label: 'En' },
  { code: 'zh', label: '中' },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = (newLocale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  const navLinks = [
    { key: 'home', href: `/${locale}` },
    { key: 'systems', href: `/${locale}/systems` },
    { key: 'projects', href: `/${locale}/projects` },
    { key: 'certificates', href: `/${locale}/certificates` },
    { key: 'calculator', href: `/${locale}/calculator` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 24px',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href={`/${locale}`} style={{ textDecoration: 'none' }}>
          <Logo size={36} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          {navLinks.map(({ key, href }) => (
            <Link key={key} href={href} style={{
              color: pathname === href ? '#22c55e' : 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              padding: '8px 14px',
              borderRadius: 8,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.target.style.color = '#22c55e'}
            onMouseLeave={e => e.target.style.color = pathname === href ? '#22c55e' : 'rgba(255,255,255,0.7)'}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Language switcher */}
          <div style={{
            display: 'flex',
            background: '#0f0f0f',
            border: '1px solid #1a1a1a',
            borderRadius: 10,
            padding: 3,
            gap: 2,
          }}>
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => switchLocale(code)}
                style={{
                  padding: '5px 10px',
                  borderRadius: 7,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: locale === code ? '#22c55e' : 'transparent',
                  color: locale === code ? '#000' : 'rgba(255,255,255,0.5)',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Link href={`/${locale}/contact`} className="btn-primary" style={{ display: 'none' }}>
            {t('consultation')}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'none',
            }}
            className="mobile-menu-btn"
          >
            <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ height: 2, background: menuOpen ? '#22c55e' : '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ height: 2, background: '#fff', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
              <span style={{ height: 2, background: menuOpen ? '#22c55e' : '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(({ key, href }) => (
            <Link key={key} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: pathname === href ? '#22c55e' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 500,
                padding: '14px 0',
                borderBottom: '1px solid #1a1a1a',
              }}>
              {t(key)}
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .btn-primary { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
