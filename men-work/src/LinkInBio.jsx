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
  'No More Mr. Nice Guy® Community': nmmngLogo,
  'Bootcamp, Oxford UK': bootcamp,
  'Executive Coaching': heroCoaching,
  'Lover Blueprint': nmmngLogo,
  'NMMNG® WhatsApp General Discussions Group': nmmngLogo,
  'Become an Ambassador': nmmngLogo,
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-12 relative overflow-hidden" style={{ background: `url(${linkinbioBg}) center/cover no-repeat`, backgroundColor: 'rgba(13,33,45,0.85)', border: `2px solid ${BRASS}`, boxShadow: `0 8px 40px ${BRASS}33` }}>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center" style={{ fontFamily: 'PT Serif, serif', background: 'linear-gradient(90deg, #D4E04F 0%, #BFFF4A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.01em' }}>
        Reclaim Your Authentic Power
      </h1>
      <p className="text-gray-200 mb-2 uppercase tracking-wider text-sm">
        Explore our flagship programmes & community:
      </p>
      <div className="w-full max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {mainLinks.map(link => (
          <GlassButton key={link.label} label={link.label} url={link.url} icon={iconMap[link.label]} goldFoil={link.label === 'Executive Coaching'} />
        ))}
      </div>
      <div className="flex gap-4 mb-8">
        {socialLinks.map(link => (
          <GlassIcon key={link.label} label={link.label} url={link.url} icon={iconMap[link.label]} />
        ))}
      </div>
      <footer className="w-full max-w-2xl mx-auto mt-8 pt-8 border-t" style={{ borderColor: BRASS, background: `url(${bootcampFooter}) center/cover no-repeat` }}>
        <div className="text-center mb-2" style={{ color: BRASS, fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>
          Trusted by men worldwide to transform their lives
        </div>
        <div className="w-full h-px mb-2" style={{ background: BRASS, opacity: 0.7 }} />
      </footer>
    </div>
  );
} 