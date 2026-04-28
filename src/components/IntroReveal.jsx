import { useEffect, useRef } from "react";
import Sneaker from "./Sneaker.jsx";
import { CHAPTERS, getShoeImage } from "../data/chapters.js";

export default function IntroReveal({ copy }) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".intro-card");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.25 });
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="intro-head">
        <h2 className="reveal">
          {copy.titlePrefix} <em>{copy.titleEmphasis}</em>,<br />
          {copy.titleSuffix}
        </h2>
        <p className="reveal">{copy.body}</p>
      </div>
      <div className="intro-grid" ref={gridRef}>
        {CHAPTERS.map((c) =>
        <a
          key={c.key}
          href={`#chapter-${c.key}`}
          className="intro-card"
          data-cursor="enter"
          style={{ '--card-glow': c.variants[0].glow }}>
          
            <div className="card-num">{copy.cardNumber} {c.model}</div>
            <div className="card-shoe">
              <div className="card-shoe-aura" style={{ '--aura': c.variants[0].glow }}></div>
              <Sneaker palette={c.variants[0]} variant={c.silhouette} id={`intro-${c.key}`} src={getShoeImage(c, 0)} alt={`${c.name} — ${c.variants[0].name}`} />
            </div>
            <div className="card-foot">
              <div className="card-name">{c.name}</div>
              <div className="card-year">{c.year} · {c.designer}</div>
            </div>
          </a>
        )}
      </div>
    </section>);
}
