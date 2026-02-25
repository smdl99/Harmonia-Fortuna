'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cx = window.innerWidth / 2,
      cy = window.innerHeight / 2,
      tx = cx,
      ty = cy;

    let isFocus = false;

    function onMouseMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;

      isFocus = !!(e.target as HTMLElement).closest('a,button');
    }

    function animateCursor() {
      const cursor = cursorRef.current;
      if (!cursor) {
        return;
      }

      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;

      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';

      cursor.style.scale = isFocus ? '1.5' : '1';

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden md:block size-2 bg-cursor rounded-full pointer-events-none fixed -translate-1/2 z-9999 transition-transform duration-300"
      ref={cursorRef}
    />
  );
}
