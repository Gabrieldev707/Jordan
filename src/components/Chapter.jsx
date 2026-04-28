import { useEffect, useMemo, useRef, useState } from "react";
import Sneaker from "./Sneaker.jsx";
import ProductStage from "./ProductStage.jsx";
import { getShoeImage } from "../data/chapters.js";

export default function Chapter({ chapter, language, copy }) {
  const [variant, setVariant] = useState(0);
  const [outgoing, setOutgoing] = useState(null);
  const [swapKey, setSwapKey] = useState(0);
  const [focused, setFocused] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const productInfoRef = useRef(null);
  const swapInFlight = useRef(false);

  const origin = chapter.origin[language];
  const cultural = chapter.cultural[language];
  const product = chapter.product[language];
  const v = chapter.variants[variant];
  const moodStyle = {
    "--mood-bg": chapter.mood.bg,
    "--mood-ink": chapter.mood.ink,
    "--mood-accent": chapter.mood.accent,
    "--mood-soft": chapter.mood.soft,
    "--mood-glow": v.glow,
    "--mood-stage": v.stage
  };

  // Detect dark mood for ground-shadow contrast
  const isDarkMood = useMemo(() => {
    const c = chapter.mood.bg.replace('#', '');
    const r = parseInt(c.slice(0, 2), 16),g = parseInt(c.slice(2, 4), 16),b = parseInt(c.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 < 128;
  }, [chapter.mood.bg]);

  const onPickVariant = (i) => {
    if (i === variant || swapInFlight.current) return;
    swapInFlight.current = true;
    const prev = variant;
    setOutgoing({ index: prev, key: swapKey });
    setSwapKey((k) => k + 1);
    setVariant(i);
    window.setTimeout(() => {
      setOutgoing(null);
      swapInFlight.current = false;
    }, 1200);
  };

  useEffect(() => {
    if (!productInfoRef.current) return;
    const items = productInfoRef.current.querySelectorAll("li");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          items.forEach((li) => li.classList.add("in"));
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(productInfoRef.current);
    return () => io.disconnect();
  }, []);

  const culturalLoop = [copy.worn, "23", chapter.tagline, "23", chapter.taglineItalic, "23", chapter.year, "23"];
  const culturalDoubled = [...culturalLoop, ...culturalLoop];

  return (
    <section
      className="chapter"
      id={`chapter-${chapter.key}`}
      style={moodStyle}
      data-chapter={chapter.key}
      data-mood={isDarkMood ? "dark" : "light"}>
      
      <div className="section-field" style={{ '--field': v.glow }} aria-hidden="true"></div>
      <div key={`section-flood-${swapKey}`} className="section-flood" style={{ '--flood': v.glow }} aria-hidden="true"></div>
      <div className="section-grain" aria-hidden="true"></div>
      <div className="chapter-mark" aria-hidden="true">23</div>

      <div className="moment-origin">
        <div className="bg-year">{chapter.year}</div>
        <div className="text reveal">
          <div className="chap-tag">
            {chapter.tagline}<br />
            <em>{chapter.taglineItalic}</em>
          </div>
          <h3>{origin.title}</h3>
          <p>{origin.body}</p>
          <div className="meta">
            <div><span>{copy.year}</span><span>{chapter.year}</span></div>
            <div><span>{copy.designedBy}</span><span>{chapter.designer}</span></div>
          </div>
        </div>
        <div className="shoe-stage reveal">
          <div className="shoe-aura origin-aura" style={{ '--aura': chapter.variants[0].glow }}></div>
          <div className="shoe-img">
            <Sneaker palette={chapter.variants[0]} variant={chapter.silhouette} id={`origin-${chapter.key}`} src={getShoeImage(chapter, 0)} alt={`${chapter.name} — ${chapter.variants[0].name}`} />
          </div>
          <div className="ground"></div>
        </div>
      </div>

      <div className="chapter-divider"></div>

      <div className="moment-cultural">
        {chapter.cultural.archivalAmbient && (
          <div className="cultural-ambient-wrap" aria-hidden="true">
            <img className="cultural-ambient-img" src={chapter.cultural.archivalAmbient} alt="" draggable="false" />
          </div>
        )}
        <div className="moment-cultural-grid">
          <div className="quote reveal">
            {cultural.title.split(' ').map((w, i, arr) =>
            i === arr.length - 1 ?
            <em key={i}>{w}</em> :
            <span key={i}>{w}{' '}</span>
            )}
          </div>
          <div className="visual-tile reveal">
            {chapter.cultural.archivalPhoto && (
              <>
                <img className="archival-tile-img" src={chapter.cultural.archivalPhoto} alt={cultural.archivalAlt || ""} draggable="false" style={chapter.cultural.archivalPosition ? { objectPosition: chapter.cultural.archivalPosition } : undefined} />
                <div className="archival-tile-overlay" aria-hidden="true" />
              </>
            )}
            <div className="tile-num">{chapter.model}</div>
            <div className="tile-cap">{cultural.body.split('.')[0]}.</div>
          </div>
          <div className="credit reveal">
            - {copy.culturalMoment}, {chapter.year}
          </div>
          <div className="cultural-marquee">
            <div className="cultural-marquee-track">
              {culturalDoubled.map((w, i) =>
              <span key={i} className={w === "23" ? "dot" : ""}>{w}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="chapter-divider"></div>

      <ProductStage
        chapter={chapter}
        variant={variant}
        outgoing={outgoing}
        swapKey={swapKey}
        focused={focused}
        selectedSize={selectedSize}
        productInfoRef={productInfoRef}
        onToggleFocus={() => setFocused(f => !f)}
        onPickVariant={onPickVariant}
        onSelectSize={setSelectedSize}
        copy={copy}
        product={product} />
    </section>);
}
