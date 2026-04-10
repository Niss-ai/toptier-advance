import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const APPLY_URL = "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAkHhIgfrUSateTnE3SplG3EwN4iz6oXPR4Nw9g3YxmjvqpL1wUauGSoX_9bZ1pzIY*";

export default function CTASection() {
  return (
    <>
      <section id="contact" style={{ padding: '120px 24px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
          background: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 12, color: '#C9A84C', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 24 }}>Get Started</p>
            <h2 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, color: '#fff', margin: '0 0 24px', letterSpacing: '-0.03em', lineHeight: 1.0, fontFamily: 'Georgia, serif' }}>
              Ready to grow<br />your business?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 40px', maxWidth: 420 }}>
              Apply in minutes and let Top-Tier Advance find the best funding options for your business. No obligation, no hard credit pull.
            </p>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#C9A84C', color: '#0a0a0a', padding: '18px 36px',
              fontWeight: 700, textDecoration: 'none', fontSize: 14,
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}>
              Apply Now <ArrowRight size={16} />
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 24 }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Phone</div>
              <a href="tel:+12014720550" style={{ fontSize: 20, color: '#fff', textDecoration: 'none', fontWeight: 600 }}>201-472-0550</a>
            </div>
            <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 24 }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Email</div>
              <a href="mailto:kevin@toptieradv.com" style={{ fontSize: 18, color: '#fff', textDecoration: 'none', fontWeight: 600 }}>kevin@toptieradv.com</a>
            </div>
            <div style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 24 }}>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Office</div>
              <div style={{ fontSize: 16, color: '#fff', fontWeight: 500 }}>359 W Broadway<br />New York, NY</div>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              Funding advisors available Monday – Friday, 9am – 6pm EST
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            #contact > div > div:last-child { display: none; }
            #contact > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
      <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <svg width="200" height="48" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="120" fill="#0a0a0a"/><line x1="30" y1="25" x2="30" y2="95" stroke="#C9A84C" strokeWidth="2"/><line x1="44" y1="15" x2="44" y2="105" stroke="#C9A84C" strokeWidth="2.5"/><line x1="59" y1="8" x2="59" y2="112" stroke="#C9A84C" strokeWidth="3"/><line x1="74" y1="15" x2="74" y2="105" stroke="#C9A84C" strokeWidth="2.5"/><line x1="88" y1="25" x2="88" y2="95" stroke="#C9A84C" strokeWidth="2"/><text x="108" y="62" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#ffffff" dominantBaseline="middle" letterSpacing="3">TOP-TIER</text><text x="110" y="88" fontFamily="Georgia, serif" fontSize="13" fill="#C9A84C" dominantBaseline="middle" letterSpacing="8">ADVANCE</text></svg>

          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Top-Tier Advance. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="/PrivacyPolicy" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/TermsAndConditions" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
}
