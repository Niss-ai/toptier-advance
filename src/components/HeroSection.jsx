import React from 'react';
import { ArrowRight } from 'lucide-react';

const APPLY_URL = "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAkHhIgfrUSateTnE3SplG3EwN4iz6oXPR4Nw9g3YxmjvqpL1wUauGSoX_9bZ1pzIY*";

export default function HeroSection() {
  return (
    <section id="home" style={{
      minHeight: '100vh', background: '#0a0a0a', display: 'flex',
      alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 72
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '-5%', width: 500, height: 500,
        border: '1px solid rgba(201,168,76,0.1)', borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '5%', width: 300, height: 300,
        border: '1px solid rgba(201,168,76,0.08)', borderRadius: '50%', pointerEvents: 'none'
      }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div style={{ maxWidth: 750 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
            padding: '6px 16px', marginBottom: 40
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C' }} />
            <span style={{ fontSize: 12, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Premium Business Funding
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 800, lineHeight: 1.0,
            color: '#fff', margin: '0 0 24px', letterSpacing: '-0.03em',
            fontFamily: 'Georgia, serif'
          }}>
            Capital<br />
            <span style={{ color: '#C9A84C' }}>up to</span><br />
            $5M.
          </h1>
          <p style={{
            fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 520,
            lineHeight: 1.7, margin: '0 0 48px'
          }}>
            Apply once. We bring you offers from multiple funders, banks, and SBA lenders to get you the best possible terms.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#C9A84C', color: '#0a0a0a', padding: '16px 32px',
              fontWeight: 700, textDecoration: 'none', fontSize: 14,
              letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'all 0.2s'
            }}>
              Apply Now <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
              padding: '16px 32px', fontWeight: 600, textDecoration: 'none',
              fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase'
            }}>
              How It Works
            </a>
          </div>
          <div style={{ display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap' }}>
            {[
              { value: '$500M+', label: 'Funded to Businesses' },
              { value: '24hrs', label: 'Average Approval Time' },
              { value: '1,000+', label: 'Happy Clients' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#C9A84C', fontFamily: 'Georgia, serif' }}>{stat.value}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4, letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
