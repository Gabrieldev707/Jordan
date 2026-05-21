import { useEffect, useRef } from "react";

export default function Marquee({ items }) {
  const trackRef = useRef(null);
  const offset = useRef(0);
  const velocity = useRef(0);
  const scrollV = useRef(0);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    const shouldStayStatic = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 768px)");
    if (shouldStayStatic.matches) {
      return undefined;
    }

    const onScroll = () => {
      const dy = window.scrollY - lastScroll.current;
      scrollV.current = dy;
      lastScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let active = false;
    let inView = false;

    const tick = () => {
      const baseSpeed = 0.6;
      const boost = scrollV.current * 0.4;
      velocity.current += (baseSpeed + boost - velocity.current) * 0.1;
      offset.current -= velocity.current;
      scrollV.current *= 0.9;
      if (trackRef.current) {
        const w = trackRef.current.scrollWidth / 2;
        if (offset.current <= -w) offset.current += w;
        if (offset.current > 0) offset.current -= w;
        trackRef.current.style.transform = `translate3d(${offset.current}px, 0, 0)`;
      }
      raf = active ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (raf) return;
      active = true;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      active = false;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting);
      if (inView && !document.hidden) {
        start();
      } else {
        stop();
      }
    }, { rootMargin: "120px" });

    if (trackRef.current) {
      io.observe(trackRef.current);
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else if (inView) {
        start();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-label="Air 23 chapters">
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((it, i) =>
        <span key={i} className={it === "23" ? "star" : i % 4 === 2 ? "outline" : ""}>{it}</span>
        )}
      </div>
    </div>);
}
