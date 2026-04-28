import { useEffect, useRef } from "react";
import Sneaker from "./Sneaker.jsx";
import { CHAPTERS, getShoeImage } from "../data/chapters.js";

export default function Hero({ copy }) {
  const heroRef = useRef(null);
  const shoeRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current || !shoeRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      if (r.bottom < 0) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      shoeRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-8deg)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-atmosphere" style={{ '--aura': CHAPTERS[0].variants[0].glow }}></div>
      <div className="hero-grain"></div>
      <h1 className="hero-title">
        <span className="line line-back">
          <span className="word">{copy.title.line1[0]}</span>{" "}
          <span className="word italic">{copy.title.line1[1]}</span>
        </span>
        <span className="line line-back">
          <span className="word">{copy.title.line2[0]}</span>{" "}
          <span className="word">{copy.title.line2[1]}</span>{" "}
          <span className="word italic">{copy.title.line2[2]}</span>
        </span>
      </h1>

      <div className="hero-shoe" ref={shoeRef} style={{ transform: 'translate(-50%,-50%) rotate(-8deg)' }}>
        <div className="hero-shoe-aura" style={{ '--aura': CHAPTERS[0].variants[0].glow }}></div>
        <div className="hero-shoe-floor"></div>
        <Sneaker palette={CHAPTERS[0].variants[0]} variant="1" id="hero" src={getShoeImage(CHAPTERS[0], 0)} alt={`${CHAPTERS[0].name} — ${CHAPTERS[0].variants[0].name}`} />
      </div>

      <div className="hero-sub">
        <p>{copy.body}</p>
        <div className="scroll-cue">
          <span>{copy.scroll}</span>
          <span className="arrow"></span>
          <span>{copy.chapters}</span>
        </div>
      </div>
    </section>);
}
