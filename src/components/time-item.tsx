'use client';

import { useEffect, useState } from 'react';

interface TimeItemProps {
  label: string;
  zone: string;
}

export default function TimeItem({ label, zone }: TimeItemProps) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    function animateClock() {
      const now = new Date();
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).formatToParts(now);

      const hourValue = parseInt(
        parts.find((p) => p.type === 'hour')?.value || '0',
      );
      const minuteValue = parseInt(
        parts.find((p) => p.type === 'minute')?.value || '0',
      );

      setHour(hourValue);
      setMinute(minuteValue);
    }

    const intervalId = setInterval(animateClock, 1000);
    animateClock();

    return () => {
      clearInterval(intervalId);
    };
  }, [zone]);

  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 20 20" className="shrink-0 size-5">
        <circle
          cx="10"
          cy="10"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="6"
          strokeWidth="1.3"
          stroke="currentColor"
          strokeLinecap="round"
          className="origin-center"
          style={{
            transform: `rotate(${((hour % 12) + minute / 60) * 30}deg)`,
          }}
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="4"
          strokeWidth="1"
          stroke="currentColor"
          strokeLinecap="round"
          className="origin-center"
          style={{
            transform: `rotate(${minute * 6}deg)`,
          }}
        />
      </svg>

      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-secondary font-medium leading-none">{`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`}</span>
        <span className="text-[10px] text-muted leading-none">{label}</span>
      </div>
    </div>
  );
}
