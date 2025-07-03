import React from 'react';

export default function GlassIcon({ label, url, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md transition-all duration-200"
      style={{ minWidth: 32, minHeight: 32, overflow: 'hidden', boxShadow: '0 0 0 transparent' }}
      onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 0 8px #D4E04F'; }}
      onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 0 transparent'; }}
      aria-label={label}
    >
      {typeof icon === 'string' ? <img src={icon} alt={label} className="w-6 h-6 object-contain" /> : icon}
    </a>
  );
} 