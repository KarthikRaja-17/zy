'use client';
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let outlineX = 0, outlineY = 0;
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
      }
    };
    document.addEventListener('mousemove', onMouseMove);

    // Lerp outline position for lag effect
    let isAnimating = true;
    const animate = () => {
      if (!isAnimating) return;
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      if (outlineRef.current) {
        outlineRef.current.style.left = outlineX + 'px';
        outlineRef.current.style.top = outlineY + 'px';
      }
      requestAnimationFrame(animate);
    };
    animate();

    const addHover = () => outlineRef.current?.classList.add(styles.hovered);
    const removeHover = () => outlineRef.current?.classList.remove(styles.hovered);

    // Scale on hover over interactive elements
    const attachListeners = () => {
      document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    attachListeners();
    // Use a MutationObserver to attach to new elements easily, or just rely on static elements for now.
    // For simplicity, we just attach once, but in large Next.js apps route changes might need re-attach.
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      isAnimating = false;
      document.querySelectorAll('a, button, [data-cursor="pointer"]').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={outlineRef} className={styles.outline} />
    </>
  );
}
