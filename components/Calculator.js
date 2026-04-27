'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const KWH_PER_KW_MONTHLY = 140;
const PRICE_PER_KWH = 500;
const COST_PER_KW_MIN = 3800000;
const COST_PER_KW_MAX = 4500000;

export default function Calculator() {
  const t = useTranslations('calculator');
  const locale = useLocale();
  const [usage, setUsage] = useState('');
  const [bill, setBill] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let monthlyKwh = parseFloat(usage);
    if (!monthlyKwh && bill) {
      monthlyKwh = parseFloat(bill) / PRICE_PER_KWH;
    }
    if (!monthlyKwh || monthlyKwh <= 0) return;

    const systemKw = Math.ceil(monthlyKwh / KWH_PER_KW_MONTHLY);
    const costMin = systemKw * COST_PER_KW_MIN;
    const costMax = systemKw * COST_PER_KW_MAX;
    const savings = monthlyKwh * PRICE_PER_KWH;
    const payback = ((costMin + costMax) / 2) / (savings * 12);

    setResult({ systemKw, costMin, costMax, savings, payback: payback.toFixed(1) });
  };

  const formatNum = (n) => n.toLocaleString('uz-UZ');

  return (
    <section style={{
      padding: '120px 24px',
      borderTop: '1px solid #1a1a1a',
    }}>
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
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {/* Input card */}
          <div className="card-dark" style={{ padding: '36px 32px' }}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 8, fontWeight: 500 }}>
                {t('monthlyUsage')}
              </label>
              <input
                type="number"
                value={usage}
                onChange={e => { setUsage(e.target.value); setBill(''); setResult(null); }}
                placeholder={t('usagePlaceholder')}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: '#080808',
                  border: '1px solid #2a2a2a',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: 16,
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = '#22c55e'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              margin: '20px 0',
              color: 'rgba(255,255,255,0.3)',
              fontSize: 13,
            }}>
              <div style={{ flex: 1, height: 1, background: '#1a1a1a' }} />
              {t('orText')}
              <div style={{ flex: 1, height: 1, background: '#1a1a1a' }} />
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 8, fontWeight: 500 }}>
                {t('monthlyBill')}
              </label>
              <input
                type="number"
                value={bill}
                onChange={e => { setBill(e.target.value); setUsage(''); setResult(null); }}
                placeholder={t('billPlaceholder')}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: '#080808',
                  border: '1px solid #2a2a2a',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: 16,
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = '#22c55e'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />
            </div>

            <button
              onClick={calculate}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {t('calculate')}
            </button>

            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, marginTop: 16, lineHeight: 1.6 }}>
              {t('disclaimer')}
            </p>
          </div>

          {/* Result card */}
          <div className="card-dark" style={{
            padding: '36px 32px',
            borderColor: result ? 'rgba(34,197,94,0.3)' : '#1a1a1a',
            transition: 'border-color 0.3s',
          }}>
            {result ? (
              <>
                <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: 16, marginBottom: 28 }}>
                  {t('recommended')}
                </h3>
                {[
                  { label: t('systemSize'), value: `${result.systemKw} kW`, big: true },
                  { label: t('estimatedCost'), value: `${formatNum(result.costMin)} – ${formatNum(result.costMax)} so'm` },
                  { label: t('monthlySavings'), value: `${formatNum(result.savings)} ${t('perMonth')}` },
                  { label: t('paybackPeriod'), value: `${result.payback} ${t('years')}` },
                ].map(({ label, value, big }) => (
                  <div key={label} style={{
                    padding: '16px 0',
                    borderBottom: '1px solid #1a1a1a',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{label}</span>
                    <span style={{
                      color: big ? '#22c55e' : '#fff',
                      fontWeight: 700,
                      fontSize: big ? 22 : 15,
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
                <Link href={`/${locale}/contact`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}>
                  {t('contactUs')}
                </Link>
              </>
            ) : (
              <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: 16,
                minHeight: 280,
              }}>
                <div style={{
                  width: 80, height: 80,
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 36,
                }}>
                  ☀️
                </div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, maxWidth: 220, lineHeight: 1.7 }}>
                  {t('subtitle')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
