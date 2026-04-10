import React from 'react';

const stats = [
  { value: '$500M+', label: 'Funded to Businesses' },
  { value: '24hrs', label: 'Average Approval Time' },
  { value: '1,000+', label: 'Happy Clients' },
  { value: '50+', label: 'Lending Partners' },
];

const industries = ['Automotive', 'Construction', 'Retail', 'Hospitality', 'Real Estate', 'Legal', 'Restaurants', 'Healthcare', 'Transportation', 'E-Commerce'];

export default function StatsSection() {
  return (
    <section style={{ background: '#fff', padding: '80px 24px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid #ebebeb', borderLeft: '1px solid #ebebeb' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '40px 32px', borderRight: '1px solid #ebebeb', borderBottom: '1px solid #ebebeb' }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: '#0a0a0a', fontFamily: 'Georgia, serif', marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#999', letterSpacing: '0.03em' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '48px 0', borderBottom: '1px solid #ebebeb', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: 8 }}>Industries We Fund:</span>
          {industries.map(ind => (
            <span key={ind} style={{
              fontSize: 12, color: '#555', padding: '6px 14px',
              border: '1px solid #e0e0e0', letterSpacing: '0.03em'
            }}>{ind}</span>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          section > div > div:first-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
