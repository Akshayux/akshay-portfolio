'use client';

import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match the hero section
    const updateCanvasSize = () => {
      const hero = canvas.closest('.personal-hero') as HTMLElement;
      if (hero) {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Pixel size (adjust for desired effect)
    const pixelSize = 8;
    const primaryColor = '#4D80D1';

    let mouseX = 0;
    let mouseY = 0;
    let isMouseOver = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
      pixelsRef.current.clear();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMouseOver) {
        // Create a radius around the mouse cursor
        const radius = 60;
        const pixelsInRadius: number[] = [];

        for (let i = 0; i < canvas.width; i += pixelSize) {
          for (let j = 0; j < canvas.height; j += pixelSize) {
            const dx = i + pixelSize / 2 - mouseX;
            const dy = j + pixelSize / 2 - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < radius) {
              const pixelIndex = (i / pixelSize) * 1000 + (j / pixelSize);
              pixelsInRadius.push(pixelIndex);
              pixelsRef.current.add(pixelIndex);

              // Draw colored pixel
              ctx.fillStyle = primaryColor;
              ctx.fillRect(i, j, pixelSize, pixelSize);
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-pixel-canvas" id="heroPixelCanvas" />;
}
