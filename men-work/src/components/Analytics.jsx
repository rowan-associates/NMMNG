import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-SWKVTZ66G5';

export default function Analytics() {
  useEffect(() => {
    // Avoid duplicate script injection
    if (document.getElementById('ga-gtag')) return;
    // Inject gtag.js
    const script = document.createElement('script');
    script.id = 'ga-gtag';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    // Inject gtag config (CSP-compliant: external file only)
    const inlineScript = document.createElement('script');
    inlineScript.id = 'ga-gtag-config';
    inlineScript.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_MEASUREMENT_ID}');`;
    document.head.appendChild(inlineScript);
    return () => {
      // Clean up if needed
      if (script.parentNode) script.parentNode.removeChild(script);
      if (inlineScript.parentNode) inlineScript.parentNode.removeChild(inlineScript);
    };
  }, []);
  return null;
} 