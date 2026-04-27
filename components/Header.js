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
    { key: 'blog', href: `/${locale}/blog` },
    { key: 'projects', href: `/${locale}/projects` },
    { key: 'certificates', href: `/${locale}/certificates` },
    { key: 'calculator', href: `/${locale}/calculator` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  return (
    <>
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
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
            {navLinks.map(({ key, href }) => (
              <Link key={key} href={href} style={{
                color: pathname === href ? '#55BA16' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                padding: '8px 12px',
                borderRadius: 8,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#55BA16'}
              onMouseLeave={e => e.target.style.color = pathname === href ? '#55BA16' : 'rgba(255,255,255,0.7)'}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Telegram button */}
            <a
              href="https://t.me/Dovudbek_0707"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 14px',
                background: '#229ED9',
                borderRadius: 9,
                color: '#fff',
                fontWeight: 600,
                fontSize: 13,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a8bbf'}
              onMouseLeave={e => e.currentTarget.style.background = '#229ED9'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.43 13.868l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.718.691z"/>
              </svg>
              Telegram
            </a>

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
                    padding: '5px 9px',
                    borderRadius: 7,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    background: locale === code ? '#55BA16' : 'transparent',
                    color: locale === code ? '#000' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

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
                <span style={{ height: 2, background: menuOpen ? '#55BA16' : '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none', display: 'block' }} />
                <span style={{ height: 2, background: '#fff', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s', display: 'block' }} />
                <span style={{ height: 2, background: menuOpen ? '#55BA16' : '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', display: 'block' }} />
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
                  color: pathname === href ? '#55BA16' : 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  fontSize: 16,
                  fontWeight: 500,
                  padding: '14px 0',
                  borderBottom: '1px solid #1a1a1a',
                }}>
                {t(key)}
              </Link>
            ))}
            <a
              href="https://t.me/Dovudbek_0707"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 16,
                color: '#229ED9',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              ✈ Telegram: @Dovudbek_0707
            </a>
          </div>
        )}

        <style jsx global>{`
          @media (max-width: 900px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: flex !important; }
          }
        `}</style>
      </header>

      {/* Floating Telegram button */}
      <a
        href="https://t.me/Dovudbek_0707"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 999,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#229ED9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(34,158,217,0.4)',
          transition: 'all 0.2s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 30px rgba(34,158,217,0.6)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(34,158,217,0.4)';
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.43 13.868l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.718.691z"/>
        </svg>
      </a>
    </>
  );
}
