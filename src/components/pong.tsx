'use client';

import { useEffect, useRef } from 'react';

interface PongProps {
  theme: 'dark' | 'light';
}

export default function Pong({ theme }: PongProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.canvas.width = 400 * 1.5;
    ctx.canvas.height = 300 * 1.5;

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const NODE_COUNT = 8;
    const MAX_DIST = 170;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
    const LOOP_DURATION = 30000;

    const nodes: {
      ampX: number;
      ampY: number;
      freqX: number;
      freqY: number;
      phaseX: number;
      phaseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
    }[] = [];
    const mouse = { x: WIDTH / 2, y: HEIGHT / 2 };

    function onMouseMove(e: MouseEvent) {
      if (!canvas) {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (WIDTH / rect.width);
      mouse.y = (e.clientY - rect.top) * (HEIGHT / rect.height);
    }

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        ampX: 60 + Math.random() * 80,
        ampY: 45 + Math.random() * 70,
        freqX: 1 + Math.floor(Math.random() * 3),
        freqY: 1 + Math.floor(Math.random() * 3),
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        x: WIDTH / 2,
        y: HEIGHT / 2,
        vx: 0,
        vy: 0,
      });
    }

    function animate(timestamp: number) {
      if (!ctx) {
        return;
      }

      const progress = (timestamp % LOOP_DURATION) / LOOP_DURATION;
      const t = progress * Math.PI * 2;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      const gameColor = getComputedStyle(document.body)
        .getPropertyValue('--primary')
        .trim();

      for (const n of nodes) {
        const targetX = WIDTH / 2 + Math.sin(t * n.freqX + n.phaseX) * n.ampX;
        const targetY = HEIGHT / 2 + Math.cos(t * n.freqY + n.phaseY) * n.ampY;

        n.vx += (targetX - n.x) * 0.02;
        n.vy += (targetY - n.y) * 0.02;

        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 120;

        if (dist > 0 && dist < radius) {
          const force = 1 - dist / radius;
          const strength = 2.0;
          n.vx += (dx / dist) * force * strength;
          n.vy += (dy / dist) * force * strength;
        }

        n.vx *= 0.9;
        n.vy *= 0.9;
        n.x += n.vx;
        n.y += n.vy;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DIST_SQ) {
            const alpha = 0.28 * (1 - distSq / MAX_DIST_SQ);
            ctx.strokeStyle =
              theme !== 'dark'
                ? `rgba(0,0,0,${alpha})`
                : `rgba(242,242,242,${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = gameColor;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4.2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    canvas.addEventListener('mousemove', onMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
    };
  }, [theme]);

  return (
    <div className="w-65 aspect-3/2 relative mb-8">
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-1/2 w-[calc(400px*1.5)] h-[calc(300px*1.5)]"
      />
    </div>
  );
}
