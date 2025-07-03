import React from 'react';
import GlassButton from './components/ui/GlassButton';
import GlassIcon from './components/ui/GlassIcon';
import goldFoil from './assets/gold-foil.webp';
import heroCoaching from './assets/hero-coaching.webp';
import bootcamp from './assets/bootcamp.png';
import nmmngLogo from './assets/nmmng-logo.png';
import linkinbioBg from './assets/linkinbio-background.webp';
import bootcampFooter from './assets/bootcamp-footer.avif';
import links from './link-in-bio.json';

const BRASS = '#A67C52';
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
  'Youtube': 'youtube',
  'X': 'x',
  'Instagram': 'instagram',
  'Meetup': 'meetup',
  'Whatsapp': 'whatsapp',
  'Email': 'email',
  'Web': 'web',
};

export default function LinkInBio() {
  return (
    <div style={{ minHeight: '100vh', background: '#010101', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0 16px' }}>
      <div style={{ width: '100%', maxWidth: 400, margin: '0 auto', marginTop: 48, marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'PT Serif, serif', fontSize: '2.5rem', color: GOLD, fontWeight: 700, textAlign: 'center', marginBottom: 12, letterSpacing: '-0.01em' }}>
          Reclaim Your Authentic Power
        </h1>
        <div style={{ textAlign: 'center', color: '#EEE', fontFamily: 'League Spartan, sans-serif', fontSize: '1rem', fontWeight: 500, marginBottom: 40, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          EXPLORE OUR FLAGSHIP PROGRAMMES & COMMUNITY:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20, margin: '40px 0' }}>
          {mainLinks.map(link => (
            <GlassButton
              key={link.label}
              label={link.label}
              url={link.url}
              icon={link.icon ? iconMap[link.icon] || link.icon : undefined}
              goldFoil={link.label === 'Executive Coaching'}
            />
          ))}
        </div>
        <div style={{ color: '#888', textAlign: 'center', fontFamily: 'League Spartan, sans-serif', fontSize: 15, marginTop: 40 }}>
          Trusted by 10,000+ men in 50+ countries
        </div>
      </div>
    </div>
  );
} 