import React from 'react';
import { ArrowRight } from 'lucide-react';

const APPLY_URL = "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAkHhIgfrUSateTnE3SplG3EwN4iz6oXPR4Nw9g3YxmjvqpL1wUauGSoX_9bZ1pzIY*";

const steps = [
  { num: '01', title: 'Apply in Minutes', desc: 'Fill out our simple application. No hard credit pull, no obligation. Just basic info about your business.' },
  { num: '02', title: 'Get Your Offers', desc: 'Within hours, a funding advisor will present you with multiple offers from our network of lenders.' },
  { num: '03', title: 'Choose Your Terms', desc: 'Compare your options side by side. Pick the offer that works best for your business needs.' },
  { num: '04', title: 'Get Funded Fast', desc: 'Once approved, funds can hit your account in as little as 24 hours. Get back to building your business.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '120px 24px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 12, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>The Process</p>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em', fontFamily: 'Georgia, serif' }}>
            Funding made<br />simple.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32, marginBottom: 64 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.3)', paddingTop: 32 }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: 'rgba(201,168,76,0.2)', fontFamily: 'Georgia, serif', marginBottom: 24 }}>{step.num}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#C9A84C', color: '#0a0a0a', padding: '16px 32px',
          fontWeight: 700, textDecoration: 'none', fontSize: 14,
          letterSpacing: '0.05em', textTransform: 'uppercase'
        }}>
          Start Your Application <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
