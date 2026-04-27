"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealStaggerProps = {
  children: ReactNode;
  className?: string;
  /**
   * Kéo vùng quan sát để bắt đầu hiệu ứng sớm hơn (px). Ví dụ "0px 0px -8% 0px".
   */
  rootMargin?: string;
  /** Ngưỡng 0–1, phần nào của phần tử phải vào viewport. */
  threshold?: number;
};

export default function ScrollRevealStagger({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.08,
}: ScrollRevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setActive(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            break;
          }
        }
      },
      { root: null, rootMargin, threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-stagger${active ? " reveal-stagger-active" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
