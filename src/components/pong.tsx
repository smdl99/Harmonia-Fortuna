'use client';

import { useEffect, useRef } from 'react';

interface PongProps {
  theme: 'dark' | 'light';
}

export default function Pong({ theme }: PongProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current!.getContext('2d')!;

    let WIDTH = 0,
      HEIGHT = 0,
      DPR = 0;

    function resize() {
      const rect = canvasRef.current!.getBoundingClientRect();
      DPR = window.devicePixelRatio || 1;
      WIDTH = rect.width;
      HEIGHT = rect.height;
      canvasRef.current!.width = WIDTH * DPR;
      canvasRef.current!.height = HEIGHT * DPR;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    }
    resize();
    window.addEventListener('resize', resize);

    /* Configuration */
    function getNodeCount() {
      if (WIDTH < 320) return 5;
      if (WIDTH < 480) return 6;
      if (WIDTH < 768) return 7;
      return 8;
    }

    let NODE_COUNT = getNodeCount();
    const MAX_DIST_FACTOR = 0.45;
    const SAFE_PADDING_FACTOR = 0.06;
    const LOOP_DURATION = 28000;

    const mouse: Record<string, number | null> = { x: null, y: null };

    canvasRef.current!.addEventListener('mousemove', (e) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvasRef.current!.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    canvasRef.current!.addEventListener('touchmove', (e) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    });

    canvasRef.current!.addEventListener('touchend', () => {
      mouse.x = null;
      mouse.y = null;
    });

    let nodes: Record<string, number>[] = [];

    function initNodes() {
      NODE_COUNT = getNodeCount();
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          ampX: WIDTH * 0.22 + Math.random() * WIDTH * 0.08,
          ampY: HEIGHT * 0.22 + Math.random() * HEIGHT * 0.08,
          freqX: 1 + Math.floor(Math.random() * 2),
          freqY: 1 + Math.floor(Math.random() * 2),
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          x: WIDTH / 2,
          y: HEIGHT / 2,
          vx: 0,
          vy: 0,
        });
      }
    }
    initNodes();
    window.addEventListener('resize', initNodes);

    function animate(timestamp: number) {
      const progress = (timestamp % LOOP_DURATION) / LOOP_DURATION;
      const t = progress * Math.PI * 2;

      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      const MAX_DIST = WIDTH * MAX_DIST_FACTOR;
      const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
      const SAFE_PADDING = WIDTH * SAFE_PADDING_FACTOR;

      for (const n of nodes) {
        const targetX = WIDTH / 2 + Math.sin(t * n.freqX + n.phaseX) * n.ampX;
        const targetY = HEIGHT / 2 + Math.cos(t * n.freqY + n.phaseY) * n.ampY;

        n.vx += (targetX - n.x) * 0.03;
        n.vy += (targetY - n.y) * 0.03;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = WIDTH * 0.35;

          if (dist < influenceRadius && dist > 0) {
            const force = (influenceRadius - dist) / influenceRadius;
            n.vx += (dx / dist) * force * 1.8;
            n.vy += (dy / dist) * force * 1.8;
          }
        }

        n.vx *= 0.92;
        n.vy *= 0.92;

        n.x += n.vx;
        n.y += n.vy;

        n.x = Math.max(SAFE_PADDING, Math.min(WIDTH - SAFE_PADDING, n.x));
        n.y = Math.max(SAFE_PADDING, Math.min(HEIGHT - SAFE_PADDING, n.y));
      }

      /* Lines */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DIST_SQ) {
            const alpha = 0.25 * (1 - distSq / MAX_DIST_SQ);
            ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* Nodes */
      ctx.fillStyle = '#000';
      const radius = WIDTH < 400 ? 3 : 3.6;

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [theme]);

  return (
    <div className="w-65 aspect-3/2 relative mb-8 -z-10">
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-1/2 w-150 h-112.5"
      />
    </div>
  );
}
