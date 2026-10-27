import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance or just style direct
      requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-3 h-3 bg-[#4B7876] rounded-full pointer-events-none z-[9999] hidden lg:block -ml-1.5 -mt-1.5"
      style={{ willChange: 'transform' }}
    />
  );
}
