export default function Logo({ size = 40 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#0f0f0f" />
        <path d="M20 4 C20 4 12 10 12 20 C12 26 15.5 29 20 29 C20 29 20 20 20 4Z" fill="#22c55e"/>
        <path d="M20 4 C20 4 28 10 28 20 C28 26 24.5 29 20 29 C20 29 20 20 20 4Z" fill="#16a34a"/>
        <path d="M4 20 C4 20 10 12 20 12 C26 12 29 15.5 29 20 C29 20 20 20 4 20Z" fill="#22c55e"/>
        <path d="M4 20 C4 20 10 28 20 28 C26 28 29 24.5 29 20 C29 20 20 20 4 20Z" fill="#15803d"/>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontWeight: 800,
          fontSize: size * 0.42,
          color: '#22c55e',
          letterSpacing: '0.08em',
          fontFamily: 'Inter, sans-serif'
        }}>DOVUD</span>
        <span style={{
          fontWeight: 600,
          fontSize: size * 0.3,
          color: '#22c55e',
          letterSpacing: '0.12em',
          fontFamily: 'Inter, sans-serif'
        }}>ENERGY</span>
      </div>
    </div>
  );
}
