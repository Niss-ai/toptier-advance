import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const APPLY_URL = "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAkHhIgfrUSateTnE3SplG3EwN4iz6oXPR4Nw9g3YxmjvqpL1wUauGSoX_9bZ1pzIY*";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? '#fff' : 'rgba(255,255,255,0.97)',
      borderBottom: scrolled ? '1px solid #e5e5e5' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="#home">
            <img src="/logo.png" alt="Top-Tier Advance" style={{ height: 48, width: 'auto' }} />
          </a>
          <div style={{ display: 'none', gap: 32 }} className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{
                fontSize: 14, color: '#444', textDecoration: 'none', fontWeight: 500,
                letterSpacing: '0.02em', transition: 'color 0.2s'
              }}
                onMouseEnter={e => e.target.style.color = '#C9A84C'}
                onMouseLeave={e => e.target.style.color = '#444'}
              >{link.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="tel:+12014720550" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: 13, color: '#666', textDecoration: 'none'
            }}>
              <Phone size={14} color="#C9A84C" />
              201-472-0550
            </a>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{
              background: '#1a1a1a', color: '#fff', padding: '10px 20px',
              fontSize: 13, fontWeight: 600, textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}>Apply Now</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer', color: '#1a1a1a'
          }} className="mobile-menu-btn">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div style={{
          background: '#fff', borderTop: '1px solid #f0f0f0', padding: '16px 24px 24px'
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{
              display: 'block', padding: '12px 0', color: '#333', textDecoration: 'none',
              fontSize: 15, fontWeight: 500, borderBottom: '1px solid #f5f5f5'
            }}>{link.label}</a>
          ))}
          <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:+12014720550" style={{
              display: 'flex', alignItems: 'center', gap: 8, color: '#666', textDecoration: 'none'
            }}>
              <Phone size={14} color="#C9A84C" /> 201-472-0550
            </a>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" style={{
              textAlign: 'center', background: '#1a1a1a', color: '#fff',
              padding: '14px', fontWeight: 600, textDecoration: 'none',
              letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: 13
            }}>Apply Now</a>
          </div>
        </div>
      )}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
