import React from 'react';
import goldFoil from '../../assets/gold-foil.webp';

export default function GlassButton({ label, url, icon, goldFoil: isGoldFoil, forceWhite, labelColor, iconColor }) {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 20px',
    borderRadius: 11,
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: labelColor || (forceWhite ? '#FFF' : '#FFF'),
    fontWeight: 700,
    fontSize: 18,
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
    minHeight: 60,
    margin: 0,
    boxShadow: 'none',
    position: 'relative',
    overflow: 'hidden',
    lineHeight: 1.3,
  };
  const goldStyle = isGoldFoil
    ? {
        background: `linear-gradient(rgba(255,255,255,0.10),rgba(255,255,255,0.10)), url(${goldFoil}) center/cover no-repeat, #D4AF37`,
        color: labelColor || '#111',
        boxShadow: '0 0 12px 2px rgba(212,175,55,0.45)', // toned down
        border: '1.5px solid #D4AF37',
      }
    : {};
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...baseStyle, ...goldStyle }}
      onMouseOver={e => {
        e.currentTarget.style.backdropFilter = 'blur(20px)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.backdropFilter = 'blur(16px)';
        e.currentTarget.style.borderColor = isGoldFoil ? '#D4AF37' : 'rgba(255,255,255,0.1)';
      }}
    >
      <span style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, marginRight: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColor || (forceWhite ? '#FFF' : '#FFF') }}>
        {icon && (typeof icon === 'string' ? <img src={icon} alt="icon" style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 8, filter: iconColor ? 'brightness(0) saturate(100%)' : undefined }} /> : icon)}
      </span>
      <span>{label}</span>
    </a>
  );
} 