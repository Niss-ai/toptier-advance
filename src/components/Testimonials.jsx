import React from 'react';

const reviews = [
  { name: 'Marcus T.', business: 'Restaurant Owner, NJ', text: 'Top-Tier Advance got me $150K in less than 48 hours. My restaurant was struggling and they saved us. Incredibly professional team.' },
  { name: 'Sandra R.', business: 'Retail Store, NY', text: 'I was skeptical at first, but they found me a rate I couldn\'t believe. The process was smooth and my advisor was available every step of the way.' },
  { name: 'James O.', business: 'Construction Company, NY', text: 'Best funding experience I\'ve had. Got multiple offers and picked the one that suited my cash flow perfectly. Will use them again.' },
  { name: 'Diana L.', business: 'Med Spa Owner, NJ', text: 'Needed equipment fast. Top-Tier made it happen in 24 hours. No runaround, no hidden fees. Just results.' },
];

export default function Testimonials() {
  return (
    <section id="reviews" style={{ padding: '120px 24px', background: '#f9f8f6' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 12, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>Client Reviews</p>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#0a0a0a', margin: 0, letterSpacing: '-0.02em', fontFamily: 'Georgia, serif' }}>
            Trusted by<br />business owners.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: '#fff', padding: '36px 32px',
              border: '1px solid #ebebeb'
            }}>
              <div style={{ fontSize: 40, color: '#C9A84C', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: 20 }}>"</div>
              <p style={{ fontSize: 15, color: '#333', lineHeight: 1.8, margin: '0 0 28px' }}>{r.text}</p>
              <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 20 }}>
                <div style={{ fontWeight: 700, color: '#0a0a0a', fontSize: 14 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>{r.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
