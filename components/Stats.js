'use client';

import { useTranslations } from 'next-intl';

const monthlyData = [4900, 6400, 9600, 13200, 18000, 20900, 20800, 18500, 14100, 9300, 5500, 3900];
const maxVal = Math.max(...monthlyData);

export default function Stats() {
  const t = useTranslations('stats');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const benefits = ['benefit1', 'benefit2', 'benefit3', 'benefit4'];

  return (
    <section style={{
      padding: '120px 24px',
      background: '#080808',
      borderTop: '1px solid #1a1a1a',
      borderBottom: '1px solid #1a1a1a',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="badge" style={{ marginBottom: 16, justifyContent: 'center' }}>{t('badge')}</div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>{t('title')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>{t('subtitle')}</p>
        </div>

        {/* Chart */}
        <div className="card-dark" style={{ padding: '40px 32px', marginBottom: 48 }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 'clamp(4px, 1.5vw, 16px)',
            height: 280,
          }}>
            {monthlyData.map((val, i) => {
              const heightPct = (val / maxVal) * 100;
              const isTop = val === maxVal;
              return (
                <div key={i} style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  height: '100%',
                  justifyContent: 'flex-end',
                }}>
                  <span style={{
                    fontSize: 'clamp(7px, 1vw, 11px)',
                    color: isTop ? '#22c55e' : 'rgba(255,255,255,0.4)',
                    fontWeight: isTop ? 700 : 400,
                    whiteSpace: 'nowrap',
                  }}>
                    {(val / 1000).toFixed(1)}k
                  </span>
                  <div style={{
                    width: '100%',
                    height: `${heightPct}%`,
                    background: isTop
                      ? 'linear-gradient(180deg, #22c55e, #16a34a)'
                      : 'linear-gradient(180deg, rgba(34,197,94,0.7), rgba(34,197,94,0.3))',
                    borderRadius: '6px 6px 0 0',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    boxShadow: isTop ? '0 0 20px rgba(34,197,94,0.4)' : 'none',
                  }}>
                    {isTop && (
                      <div style={{
                        position: 'absolute',
                        top: -32,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#22c55e',
                        color: '#000',
                        fontSize: 9,
                        fontWeight: 700,
                        padding: '3px 6px',
                        borderRadius: 4,
                        whiteSpace: 'nowrap',
                      }}>
                        MAX
                      </div>
                    )}
                  </div>
                  <span style={{
                    fontSize: 'clamp(7px, 1vw, 11px)',
                    color: 'rgba(255,255,255,0.4)',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                  }}>
                    {months[i]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}>
          {/* Payback card */}
          <div className="card-dark" style={{
            padding: '32px 28px',
            borderColor: 'rgba(34,197,94,0.2)',
            gridColumn: 'span 1',
          }}>
            <div style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 900,
              color: '#22c55e',
              marginBottom: 8,
            }}>
              2.5–3
            </div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
              {t('payback')}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>
              {t('paybackDesc')}
            </p>
          </div>

          {/* Benefits */}
          <div style={{
            gridColumn: 'span 2',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
          }}>
            {benefits.map((key, i) => (
              <div key={key} className="card-dark" style={{ padding: '24px 20px' }}>
                <div style={{
                  width: 36, height: 36,
                  background: 'rgba(34,197,94,0.1)',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 12,
                  fontSize: 16,
                }}>
                  {['📊', '💰', '🔌', '🎉'][i]}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6 }}>
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
