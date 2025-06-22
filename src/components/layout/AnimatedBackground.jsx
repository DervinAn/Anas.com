import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

const symbols = [
  '{ }', '</>', '()', '[]', '&&', '||', '=>',
  '++', '--', '+=', '*=', '/=',
  'fun', 'val', 'var', 'let', 'const',
  '<View>', '<Layout>', '<Activity>', '<Fragment>',
  'API', 'SDK', 'SQL', 'XML', 'JSON', 'HTTP',
  'MVP', 'MVVM', 'MVC', 'OOP', 'DI',
  '<?>', 'kotlin', 'java', 'android',
  '<RecyclerView>', '<ViewModel>', 'suspend', 'LiveData<>',
  'Room', 'Flow<>', 'Coroutine', 'Retrofit', 'Dagger',
  'Android', '@Composable', 'Intent', 'Bundle',
  '📱', '⚙️', '🔄', '📊', '📈', '🔍', '📝',
  'Material', 'Compose', 'Jetpack'
];

export function AnimatedBackground() {
  const canvasRef = useRef(null);
  const symbolsRef = useRef([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0.5;
    let mouseY = 0.5;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    });

    const count = Math.floor((window.innerWidth * window.innerHeight) / 30000); // Increased density
    symbolsRef.current = Array.from({ length: count }).map(() => {
      const depth = Math.random(); // simulate z-index
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseSize: 14 + Math.random() * 10, // Larger base size
        speed: 0.05 + Math.random() * 0.2,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        opacity: 0.08 + depth * 0.32, // More visible
        direction: Math.random() > 0.5 ? 1 : -1,
        depth
      };
    });

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      symbolsRef.current.forEach((s) => {
        const speed = s.speed * (0.4 + s.depth);
        const size = s.baseSize * (0.6 + s.depth);

        const parallaxX = (mouseX - 0.5) * 50 * s.depth;
        const parallaxY = (mouseY - 0.5) * 50 * s.depth;

        s.x += speed * s.direction;
        s.y += speed * 0.3 * s.direction;

        if (s.x < -100) s.x = canvas.width + 50;
        if (s.x > canvas.width + 100) s.x = -50;
        if (s.y < -100) s.y = canvas.height + 50;
        if (s.y > canvas.height + 100) s.y = -50;

        ctx.save();
        ctx.translate(s.x + parallaxX, s.y + parallaxY);
        ctx.globalAlpha = s.opacity;
        ctx.font = `bold ${size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillStyle = theme === 'dark'
          ? `rgba(255, 255, 255, ${s.opacity})`
          : `rgba(30, 30, 30, ${s.opacity + 0.1})`; // boost contrast in light theme
        ctx.fillText(s.symbol, 0, 0);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', () => {});
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
