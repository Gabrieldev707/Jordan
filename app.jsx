/* global React, ReactDOM, Sneaker, CHAPTERS, getShoeImage, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor */
const { useEffect, useRef, useState, useMemo } = React;

/* =====================================================
   CUSTOM CURSOR
   ===================================================== */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    };
    let raf;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t && ringRef.current) {
        ringRef.current.classList.add("hover");
        if (labelRef.current) labelRef.current.textContent = t.getAttribute("data-cursor") || "";
      }
    };
    const onOut = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t && ringRef.current) {
        ringRef.current.classList.remove("hover");
        if (labelRef.current) labelRef.current.textContent = "";
      }
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef}>
        <span className="label" ref={labelRef}></span>
      </div>
    </>);

}

/* =====================================================
   NAV
   ===================================================== */
function Nav() {
  return (
    <nav className="nav">
      <div className="logo" data-cursor="top">
        <img className="jumpman-glyph" src="logo/jordanpratalogo.png" alt="" aria-hidden="true" />
        <span>AIR/23</span>
      </div>
      <div className="links">
        <a href="#intro" data-cursor="">The Four</a>
        <a href="#chapter-aj1" data-cursor="">I</a>
        <a href="#chapter-aj2" data-cursor="">II</a>
        <a href="#chapter-aj3" data-cursor="">III</a>
        <a href="#chapter-aj4" data-cursor="">IV</a>
        <a href="#contact" data-cursor="">Contact</a>
      </div>
    </nav>);

}

/* =====================================================
   HERO
   ===================================================== */
function Hero() {
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
    <section className="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="hero-atmosphere" style={{ '--aura': CHAPTERS[0].variants[0].glow }}></div>
      <div className="hero-grain"></div>
      <h1 className="hero-title">
        <span className="line line-back">
          <span className="word">The</span>{" "}
          <span className="word italic">Air</span>
        </span>
        <span className="line line-back">
          <span className="word">Below</span>{" "}
          <span className="word">Their</span>{" "}
          <span className="word italic">Feet.</span>
        </span>
      </h1>

      <div className="hero-shoe" ref={shoeRef} style={{ transform: 'translate(-50%,-50%) rotate(-8deg)' }}>
        <div className="hero-shoe-aura" style={{ '--aura': CHAPTERS[0].variants[0].glow }}></div>
        <div className="hero-shoe-floor"></div>
        <Sneaker palette={CHAPTERS[0].variants[0]} variant="1" id="hero" src={getShoeImage(CHAPTERS[0], 0)} alt={`${CHAPTERS[0].name} — ${CHAPTERS[0].variants[0].name}`} />
      </div>

      <div className="hero-sub">
        <p>Four silhouettes. Four years. The arc that turned a basketball shoe into a cultural artifact — told in the language of tongues, eyelets, and air.</p>
        <div className="scroll-cue">
          <span>Scroll</span>
          <span className="arrow"></span>
          <span>04 chapters</span>
        </div>
      </div>
    </section>);}
/* =====================================================
   MARQUEE
   ===================================================== */
function Marquee({ items }) {
  const trackRef = useRef(null);
  const offset = useRef(0);
  const velocity = useRef(0);
  const scrollV = useRef(0);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      const dy = window.scrollY - lastScroll.current;
      scrollV.current = dy;
      lastScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    let raf;
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
        trackRef.current.style.transform = `translateX(${offset.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((it, i) =>
        <span key={i} className={it === "★" ? "star" : i % 4 === 2 ? "outline" : ""}>{it}</span>
        )}
      </div>
    </div>);

}

/* =====================================================
   INTRO REVEAL — 4 sneakers appear one by one
   ===================================================== */
function IntroReveal() {
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
          Four <em>silhouettes</em>,<br />
          one decade.
        </h2>
        <p className="reveal">
          Between 1985 and 1989, four shoes redrew what a sneaker could be —
          a court tool, a luxury object, a cultural mirror, an engineered system.
          Each chapter that follows belongs to one of them.
        </p>
      </div>
      <div className="intro-grid" ref={gridRef}>
        {CHAPTERS.map((c, i) =>
        <a
          key={c.key}
          href={`#chapter-${c.key}`}
          className="intro-card"
          data-cursor="enter"
          style={{ '--card-glow': c.variants[0].glow }}>
          
            <div className="card-num">No. {c.model}</div>
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

const SIZES_EU = [
  { eu: 36, out: true }, { eu: 37, out: false }, { eu: 38, out: false },
  { eu: 39, out: false }, { eu: 40, out: false }, { eu: 41, out: false },
  { eu: 42, out: false }, { eu: 43, out: true },
];

function Chapter({ chapter, index }) {
  const [variant, setVariant] = useState(0);
  const [outgoing, setOutgoing] = useState(null);
  const [swapKey, setSwapKey] = useState(0);
  const [focused, setFocused] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const productInfoRef = useRef(null);
  const swapInFlight = useRef(false);

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

  const culturalLoop = ["Worn", "•", chapter.tagline, "•", chapter.taglineItalic, "•", chapter.year, "•"];
  const culturalDoubled = [...culturalLoop, ...culturalLoop];

  return (
    <section
      className="chapter"
      id={`chapter-${chapter.key}`}
      style={moodStyle}
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
          <h3>{chapter.origin.title}</h3>
          <p>{chapter.origin.body}</p>
          <div className="meta">
            <div><span>Year</span><span>{chapter.year}</span></div>
            <div><span>Designed by</span><span>{chapter.designer}</span></div>
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
            {chapter.cultural.title.split(' ').map((w, i, arr) =>
            i === arr.length - 1 ?
            <em key={i}>{w}</em> :
            <span key={i}>{w}{' '}</span>
            )}
          </div>
          <div className="visual-tile reveal">
            {chapter.cultural.archivalPhoto && (
              <>
                <img className="archival-tile-img" src={chapter.cultural.archivalPhoto} alt={chapter.cultural.archivalAlt || ""} draggable="false" />
                <div className="archival-tile-overlay" aria-hidden="true" />
              </>
            )}
            <div className="tile-num">{chapter.model}</div>
            <div className="tile-cap">{chapter.cultural.body.split('.')[0]}.</div>
          </div>
          <div className="credit reveal">
            — Cultural moment, {chapter.year}
          </div>
          <div className="cultural-marquee">
            <div className="cultural-marquee-track">
              {culturalDoubled.map((w, i) =>
              <span key={i} className={w === "•" ? "dot" : ""}>{w}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="chapter-divider"></div>

      <div className={`moment-product${focused ? ' focused' : ''}`}>
        <div className="product-stage" data-swap-key={swapKey} onClick={() => setFocused(f => !f)}>
          <div className="stage-focus-hint" aria-hidden="true">{focused ? '×' : '+'}</div>
          <div key={`brand-${swapKey}`} className="stage-brand" aria-hidden="true">
            <img src="logo/jordanpratalogo.png" alt="" draggable="false" />
          </div>
          <div className="stage-aura"></div>
          <div className="stage-haze"></div>
          <div key={`burst-${swapKey}`} className="color-burst" style={{ '--burst': v.glow }}></div>
          <div className="stage-ground"></div>

          {outgoing !== null &&
          <div
            key={`out-${outgoing.key}`}
            className="product-shoe layer outgoing"
            style={{ '--layer-glow': chapter.variants[outgoing.index].glow }}>
            
              <Sneaker
              palette={chapter.variants[outgoing.index]}
              variant={chapter.silhouette}
              id={`product-${chapter.key}-out-${outgoing.key}`}
              src={getShoeImage(chapter, outgoing.index)}
              alt={chapter.variants[outgoing.index].name} />
            
            </div>
          }
          <div
            key={`in-${swapKey}`}
            className={`product-shoe layer incoming ${outgoing !== null ? 'animating' : 'rested'}`}
            style={{ '--layer-glow': v.glow }}>
            
            <Sneaker
              palette={v}
              variant={chapter.silhouette}
              id={`product-${chapter.key}-${variant}`}
              src={getShoeImage(chapter, variant)}
              alt={v.name} />
            
          </div>
        </div>
        <div className="product-info" ref={productInfoRef}>
          <h3>{chapter.product.title}</h3>
          <ul>
            {chapter.product.bullets.map((b, i) =>
            <li key={i}>
                <span className="li-num">0{i + 1}</span>
                <span>{b}</span>
              </li>
            )}
          </ul>

          <div className="variant-switcher">
            <div className="label-row">
              <span>Colorway</span>
              <span className="current">{v.name}</span>
            </div>
            <div className="variant-row">
              {chapter.variants.map((vv, i) =>
              <button
                key={vv.name}
                className={`variant-chip ${i === variant ? "active" : ""}`}
                onClick={() => onPickVariant(i)}
                data-cursor={vv.name}
                title={vv.name}
                aria-label={vv.name}
                style={{ '--chip-glow': vv.glow }}>
                
                  <div className="swatch" style={{ background: vv.upper }}>
                    <div className="half" style={{ background: vv.overlay }}></div>
                    <img className="swatch-photo" src={vv.image} alt="" aria-hidden="true" draggable="false" />
                  </div>
                  <div className="ring"></div>
                </button>
              )}
            </div>
          </div>

          <div className="size-selector">
            <div className="label-row">
              <span>Size</span>
              <span className="current">{selectedSize ? `EU ${selectedSize}` : '—'}</span>
            </div>
            <div className="size-row">
              {SIZES_EU.map(({ eu, out }) =>
              <button
                key={eu}
                className={`size-chip${out ? ' sold-out' : ''}${selectedSize === eu ? ' active' : ''}`}
                onClick={() => !out && setSelectedSize(eu === selectedSize ? null : eu)}
                disabled={out}
                aria-label={`Size EU ${eu}${out ? ' — sold out' : ''}`}>
                {eu}
              </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* =====================================================
   FINAL
   ===================================================== */
function Final() {
  return (
    <section className="final">
      <div className="tag">— end of journey</div>
      <h2 className="reveal">
        Four chapters.<br />
        One <em>obsession</em>.<br />
        Forever in <em>rotation</em>.
      </h2>
    </section>);

}

/* =====================================================
   FOOTER
   ===================================================== */
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-wordmark">
          <img className="footer-jumpman-logo" src="logo/jordanpratalogo.png" alt="" aria-hidden="true" />
          AIR/23
        </div>
        <div className="footer-socials">
          <a href="https://github.com/gabrielazevedoxx" target="_blank" rel="noopener noreferrer"
             className="social-link" data-cursor="follow" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/gabrielazevedoxx" target="_blank" rel="noopener noreferrer"
             className="social-link" data-cursor="follow" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-rule"></div>

      <div className="footer-body">
        <div className="footer-col">
          <span className="footer-label">Chapters</span>
          <ul>
            <li><a href="#chapter-aj1" data-cursor="">I — Air One · 1985</a></li>
            <li><a href="#chapter-aj2" data-cursor="">II — Air Two · 1986</a></li>
            <li><a href="#chapter-aj3" data-cursor="">III — Air Three · 1988</a></li>
            <li><a href="#chapter-aj4" data-cursor="">IV — Air Four · 1989</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-label">Contact</span>
          <a href="mailto:gabrielazevedoxx@gmail.com" className="footer-email" data-cursor="email">
            gabrielazevedoxx<br />@gmail.com
          </a>
        </div>
        <div className="footer-col">
          <p className="footer-statement">
            Four silhouettes.<br />
            Four years.<br />
            <em>Zero compromise.</em>
          </p>
        </div>
      </div>

      <div className="footer-rule"></div>

      <div className="footer-base">
        <div>© AIR/23 — Editorial concept. Not affiliated with any brand.</div>
        <div className="footer-stamp">NO AFFILIATION · ORIGINAL WORK · ALWAYS</div>
      </div>
      <div className="footer-flag">23</div>
    </footer>);

}

/* =====================================================
   REVEAL HOOK
   ===================================================== */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* =====================================================
   APP
   ===================================================== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "smoothScroll": true
} /*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = tweaks.smoothScroll ? 'smooth' : 'auto';
  }, [tweaks]);

  return (
    <>
      <Nav />
      <Hero />
      <Marquee items={["Air", "★", "One", "★", "Two", "★", "Three", "★", "Four", "★"]} />
      <IntroReveal />
      {CHAPTERS.map((c, i) =>
      <Chapter key={c.key} chapter={c} index={i} />
      )}
      <Final />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Experience">
          <TweakToggle
            label="Smooth scroll"
            value={tweaks.smoothScroll}
            onChange={(v) => setTweak('smoothScroll', v)} />
        </TweakSection>
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);