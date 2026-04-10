import React from 'react';

const services = [
  { title: 'Merchant Cash Advance', desc: 'Get capital fast based on your future sales. Flexible repayments that move with your revenue.', tag: 'Most Popular' },
  { title: 'Business Term Loans', desc: 'Fixed monthly payments with competitive rates. Perfect for planned investments and growth.', tag: null },
  { title: 'Line of Credit', desc: 'Draw funds as needed, only pay interest on what you use. Ultimate flexibility for your business.', tag: null },
  { title: 'SBA Loans', desc: 'Government-backed loans with the lowest rates available. Ideal for established businesses.', tag: 'Best Rates' },
  { title: 'Equipment Financing', desc: 'Finance the equipment your business needs without draining your cash reserves.', tag: null },
  { title: 'Invoice Factoring', desc: 'Turn your outstanding invoices into immediate cash. Stop waiting on slow-paying clients.', tag: null },
];

export default function FundingOptions() {
  return (
    <section id="services" style={{ padding: '120px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 12, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Our Services</p>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#0a0a0a', margin: 0, letterSpacing: '-0.02em', fontFamily: 'Georgia, serif' }}>
            Funding solutions<br />for every business.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: '#f0f0f0' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: '#fff', padding: '40px 36px', position: 'relative',
              transition: 'background 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              {s.tag && (
                <div style={{
                  display: 'inline-block', background: '#C9A84C', color: '#0a0a0a',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', padding: '4px 10px', marginBottom: 20
                }}>{s.tag}</div>
              )}
              <div style={{ fontSize: 32, fontWeight: 800, color: '#0a0a0a', marginBottom: 8, fontFamily: 'Georgia, serif' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0a0a0a', margin: '0 0 12px' }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
