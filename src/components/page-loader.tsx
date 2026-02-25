'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.animation =
      'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    document.body.style.animationDelay = '0.6s';

    setTimeout(() => {
      setIsVisible(false);
    }, 1200);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-99 bg-background flex items-center justify-center"
      style={{
        animation: 'fadeOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        animationDelay: '0.6s',
      }}
    >
      <svg viewBox="0 0 160 160" className="size-24">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="50%" stopColor="#9a9a9a" />
            <stop offset="100%" stopColor="#d6d6d6" />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="70"
          fill="none"
          stroke="url(#grad)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray={440}
          strokeDashoffset={440}
          style={{
            animation:
              'draw 0.55s cubic-bezier(0.4, 0, 0.2, 1) forwards,subtleShift 1s linear infinite',
          }}
        />
      </svg>
    </div>
  );
}
