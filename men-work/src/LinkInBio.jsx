import React from 'react';
import GlassButton from './components/ui/GlassButton';
import { FaYoutube, FaInstagram, FaMeetup, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import goldFoil from './assets/gold-foil.webp';
import heroCoaching from './assets/hero-coaching.webp';
import bootcamp from './assets/bootcamp.png';
import nmmngLogo from './assets/nmmng-logo.png';
import linkinbioBg from './assets/linkinbio-background.webp';
import bootcampFooter from './assets/bootcamp-footer.avif';
import links from './link-in-bio.json';
import icoBootcamp from './assets/ico-bootcamp.webp';
import icoCoaching from './assets/ico-coaching.webp';
import icoLover from './assets/ico-lover.webp';

const GOLD = '#D4AF37';

// Sort as per prompt
const order = [
  'No More Mr. Nice Guy® Community',
  'Executive Coaching',
  'Bootcamp, Oxford UK',
  'Lover Blueprint',
  'NMMNG® WhatsApp General Discussions Group',
  'Become an Ambassador',
];
const mainLinks = order.map(label => links.find(e => e.label === label)).filter(Boolean);
const socialStart = links.findIndex(e => e.label === 'Youtube');
const socialLinks = links.slice(socialStart);

// Icon mapping
const iconMap = {
  'nmmng-logo.png': nmmngLogo,
  'bootcamp.png': bootcamp,
  'lover-hero.webp': nmmngLogo, // fallback or import if available
  'hero-coaching.webp': heroCoaching,
  'phoenix.webp': nmmngLogo, // fallback or import if available
  'ico-bootcamp.webp': icoBootcamp,
  'ico-coaching.webp': icoCoaching,
  'ico-lover.webp': icoLover,
  'Youtube': 'youtube',
  'X': 'x',
  'Instagram': 'instagram',
  'Meetup': 'meetup',
  'Whatsapp': 'whatsapp',
  'Email': 'email',
  'Web': 'web',
};

const socialIconMap = {
  'Youtube': <FaYoutube size={24} />,
  'X': <SiX size={24} />,
  'Instagram': <FaInstagram size={24} />,
  'Meetup': <FaMeetup size={24} />,
  'Whatsapp': <FaWhatsapp size={24} />,
  'Email': <FaEnvelope size={24} />,
  'Web': <FaGlobe size={24} />,
};

const fallbackIcon = nmmngLogo;

export default function LinkInBio() {
  return (
    <div style={{
      minHeight: '100vh',
      background: `url(${goldFoil}) center/cover no-repeat, #010101`,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 16px',
      fontFamily: 'League Spartan, sans-serif',
      lineHeight: 1.3,
    }}>
      {/* Dark overlay for readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)', zIndex: 0 }} />
      <div style={{ width: '100%', maxWidth: 400, margin: '0 auto', marginTop: 48, marginBottom: 24, position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontFamily: 'PT Serif, serif', fontSize: '2.5rem', color: GOLD, fontWeight: 700, textAlign: 'center', marginBottom: 12, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
          Reclaim Your Authentic Power
        </h1>
        <div style={{ textAlign: 'center', color: '#EEE', fontFamily: 'League Spartan, sans-serif', fontSize: '1rem', fontWeight: 500, marginBottom: 40, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.3 }}>
          Links to real transformation, not surface fixes.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, margin: '40px 0' }}>
          {mainLinks.map(link => {
            let icon = fallbackIcon;
            if (link.icon && iconMap[link.icon]) {
              icon = iconMap[link.icon];
            } else if (link.icon && typeof link.icon === 'string') {
              // Try to use as imported asset, fallback to nmmngLogo
              console.warn(`Missing icon asset for: ${link.label}, using fallback.`);
            }
            if (/whatsapp/i.test(link.label)) icon = <FaWhatsapp size={40} color={GOLD} />;
            // Executive Coaching: force black text and dark icon
            const isExec = link.label === 'Executive Coaching';
            const forceWhite = !isExec;
            const execProps = isExec ? { labelColor: '#111', iconColor: '#111', goldFoil: true } : {};
            return (
              <GlassButton
                key={link.label}
                label={link.label}
                url={link.url}
                icon={icon}
                goldFoil={isExec}
                forceWhite={forceWhite}
                {...execProps}
              />
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, margin: '32px 0 0 0' }}>
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.13)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: GOLD,
                transition: 'all 0.18s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.borderColor = GOLD;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)';
                e.currentTarget.style.color = GOLD;
              }}
              aria-label={link.label}
            >
              {socialIconMap[link.label] || <FaGlobe size={24} />}
            </a>
          ))}
        </div>
        <div style={{ color: '#888', textAlign: 'center', fontFamily: 'League Spartan, sans-serif', fontSize: '.875rem', marginTop: 40, lineHeight: 1.3 }}>
          Trusted by 10,000+ men in 50+ countries
        </div>
        <div style={{ color: '#555', textAlign: 'center', fontFamily: 'League Spartan, sans-serif', fontSize: 13, marginTop: 10, marginBottom: 10, lineHeight: 1.3 }}>
          © 2025 No More Mr. Nice Guy®️is a registered trade mark and trading name of RA & Associates Limited
        </div>
      </div>
    </div>
  );
} 