import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What credit score do I need?', a: 'We work with a wide range of credit profiles. Many lenders can approve businesses with scores as low as 500. We focus on your overall business health, not just your score.' },
  { q: 'How fast can I get funded?', a: 'Many clients receive funding within 24-48 hours of approval. If speed is critical, let us know and we will prioritize the fastest options for you.' },
  { q: 'Is there a hard credit pull when I apply?', a: 'No. The initial application only involves a soft credit pull which does not affect your credit score. A hard pull may only occur if you choose to move forward with a specific lender.' },
  { q: 'How much funding can I qualify for?', a: 'Funding amounts range from $10,000 to over $5,000,000 depending on your revenue, time in business, and the type of product.' },
  { q: 'What documents do I need?', a: 'To get started you typically need your last 3 months of business bank statements and a government-issued ID. We will tell you exactly what is needed for the products you qualify for.' },
  { q: 'How is Top-Tier Advance paid?', a: 'Top-Tier Advance earns a broker fee from the lender when a deal is funded. In most cases this does not come out of your pocket. We are fully transparent about all costs upfront.' },
  { q: 'Can I apply with existing business debt?', a: 'Yes. Having existing debt does not automatically disqualify you. Some programs can even consolidate existing positions. We look at your full picture and find what works.' },
  { q: 'What industries do you work with?', a: 'We work with businesses across nearly every industry — restaurants, retail, medical, construction, transportation, e-commerce, and more. Reach out and we will let you know what is available.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #f0f0f0' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16
      }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#0a0a0a' }}>{q}</span>
        {open ? <Minus size={18} color="#C9A84C" /> : <Plus size={18} color="#C9A84C" />}
      </button>
      {open && (
        <div style={{ paddingBottom: 24 }}>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: '120px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 100 }}>
          <p style={{ fontSize: 12, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, color: '#0a0a0a', margin: '0 0 24px', letterSpacing: '-0.02em', fontFamily: 'Georgia, serif' }}>
            Common questions,<br />straight answers.
          </h2>
          <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, margin: 0 }}>
            Everything you want to know before applying — answered honestly and without jargon.
          </p>
        </div>
        <div style={{ borderTop: '1px solid #f0f0f0' }}>
          {faqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #faq > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #faq > div > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
