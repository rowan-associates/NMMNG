import React from 'react';
import goldFoil from '../../men-work/src/assets/gold-foil.webp';

export default function GlassButton({ label, url, icon, goldFoil: isGoldFoil }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-4 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200"
      style={{
        background: isGoldFoil
          ? `linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)), url(${goldFoil}) center/cover no-repeat`
          : 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 12,
        color: '#0F4F40',
        boxShadow: isGoldFoil ? '0 0 16px 2px #D4AF3755' : '0 2px 8px rgba(0,0,0,0.10)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 64,
        fontFamily: 'League Spartan, sans-serif',
        marginBottom: 0,
      }}
      onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backdropFilter = 'blur(24px)'; e.currentTarget.style.boxShadow = '0 0 8px #D4E04F99'; }}
      onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.backdropFilter = 'blur(20px)'; e.currentTarget.style.boxShadow = isGoldFoil ? '0 0 16px 2px #D4AF3755' : '0 2px 8px rgba(0,0,0,0.10)'; }}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md mr-2" style={{ minWidth: 32, minHeight: 32, overflow: 'hidden' }}>
        {typeof icon === 'string' ? <img src={icon} alt="icon" className="w-8 h-8 object-contain" /> : icon}
      </span>
      <span>{label}</span>
    </a>
  );
} 