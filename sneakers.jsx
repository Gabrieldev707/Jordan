/* global React */

const Sneaker = ({ id, palette, variant = "1", asImage = true, src, alt = "Sneaker" }) => {
  if (asImage && src) {
    return (
      <div className="sneaker-photo-wrap">
        <img className="sneaker-photo" src={src} alt={alt} draggable="false" />
      </div>
    );
  }
  // Placeholder fallback — abstract silhouette (kept compact)
  return (
    <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`upper-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.upper}/>
          <stop offset="100%" stopColor={palette.upper} stopOpacity="0.88"/>
        </linearGradient>
      </defs>
      <g>
        <path d="M 60 280 Q 50 295 60 305 L 545 305 Q 560 305 560 290 L 560 275 Q 560 265 545 263 L 80 263 Q 60 265 60 280 Z" fill={palette.sole}/>
        <rect x="60" y="263" width="500" height="10" fill={palette.midsole}/>
        <path d="M 460 100 Q 545 110 560 200 Q 562 245 545 263 L 460 263 Z" fill={`url(#upper-${id})`}/>
        <path d="M 60 258 Q 60 200 100 180 L 200 165 Q 280 150 360 140 L 460 115 L 470 258 Z" fill={`url(#upper-${id})`}/>
      </g>
    </svg>
  );
};

// Each variant carries:
//   image   — transparent PNG path
//   glow    — accent color used for the ambient aura behind the photo
//   stage   — base mood color for the per-product stage background
const CHAPTERS = [
  {
    key: "aj1",
    name: "Air One",
    model: "01",
    year: "1985",
    designer: "Peter Moore",
    silhouette: "1",
    mood: { bg: "#f3efe7", ink: "#0e0e0e", accent: "#ff2a1f", soft: "#ebe6da" },
    tagline: "Banned.",
    taglineItalic: "Iconic.",
    origin: {
      title: "A rookie's first contract",
      body: "Built for a 22-year-old shooting guard who hadn't yet won anything. Designed in a hurry, in a meeting room, with a chevron drawn on a side panel. It would change the silhouette of athletic footwear forever — but in the autumn of 1985, it was just a shoe nobody had asked for."
    },
    cultural: {
      title: "The fine they paid for him",
      body: "A reported $5,000 per game whenever he laced them — a violation of the league's color rules at the time. The league's letter became the marketing campaign. Banned became a verb. A counterculture was suddenly wearing high-tops.",
      archivalPhoto: "MichaelJordan/MJ1.png",
      archivalAlt: "Michael Jordan on court, 1985 — the season the fines began"
    },
    product: {
      title: "Cup-sole construction",
      bullets: [
        "Full-grain leather upper, padded ankle collar",
        "Encapsulated air unit in the heel — invisible from outside",
        "Six original colorways, three asymmetric",
        "Wing-shaped eyelet wrap, decorative chevron quarter panel"
      ]
    },
    variants: [
      { name: "Chicago", image: "shoes/aj1-chicago.png", glow: "#ff2a1f", stage: "#f6e9e3", upper: "#ffffff", overlay: "#ff2a1f", toe: "#ff2a1f", panel: "#ff2a1f", accent: "#1a1a1a", sole: "#ffffff", midsole: "#e8e3d8", lace: "#ff2a1f" },
      { name: "Royal",   image: "shoes/aj1-royal.png",   glow: "#2554d4", stage: "#e6ecf6", upper: "#1a1a1a", overlay: "#1a3a8c", toe: "#1a3a8c", panel: "#1a1a1a", accent: "#1a1a1a", sole: "#ffffff", midsole: "#e8e3d8", lace: "#1a1a1a" },
      { name: "Shadow",  image: "shoes/aj1-shadow.png",  glow: "#7a7570", stage: "#ecebe9", upper: "#1a1a1a", overlay: "#6a655e", toe: "#6a655e", panel: "#1a1a1a", accent: "#1a1a1a", sole: "#ffffff", midsole: "#e8e3d8", lace: "#1a1a1a" }
    ]
  },
  {
    key: "aj2",
    name: "Air Two",
    model: "02",
    year: "1986",
    designer: "Bruce Kilgore",
    silhouette: "2",
    mood: { bg: "#f5f1e8", ink: "#1a1a1a", accent: "#9a1a14", soft: "#ede7d8" },
    tagline: "Italian",
    taglineItalic: "leather.",
    origin: {
      title: "Made in Italy",
      body: "Designed by the man behind a different cultural icon, the Two left the wing logo behind. No swoosh on the side. Faux-lizard texture. Hand-finished in northern Italy. It was a luxury experiment — quiet, expensive, and almost universally misunderstood at the time."
    },
    cultural: {
      title: "The shoe that was 'too quiet'",
      body: "Coming after the loudest debut in the history of the sport, the Two whispered. Sales disappointed. Collectors today call it the most underrated of the early line — the moment the brand tried to grow up before its audience was ready.",
      archivalPhoto: "MichaelJordan/MJ23.png",
      archivalAlt: "Michael Jordan, 1986"
    },
    product: {
      title: "Italian craftsmanship",
      bullets: [
        "Tumbled faux-lizard leather quarter panels",
        "First model produced outside Asia",
        "Polyurethane midsole with encapsulated heel air",
        "No external swoosh — premium-positioned silhouette"
      ]
    },
    variants: [
      { name: "Chicago", image: "shoes/aj2-chicago.png", glow: "#d62828", stage: "#f6ece6", upper: "#ffffff", overlay: "#1a1a1a", toe: "#1a1a1a", panel: "#9a1a14", accent: "#1a1a1a", sole: "#ffffff", midsole: "#e8e3d8", lace: "#1a1a1a" },
      { name: "Bred",    image: "shoes/aj2-bred.png",    glow: "#9a1a14", stage: "#efe6e3", upper: "#1a1a1a", overlay: "#9a1a14", toe: "#9a1a14", panel: "#1a1a1a", accent: "#9a1a14", sole: "#ffffff", midsole: "#e8e3d8", lace: "#1a1a1a" },
      { name: "Wing It", image: "shoes/aj2-wingit.png",  glow: "#3a3530", stage: "#ecebe7", upper: "#e8e3d8", overlay: "#3a3530", toe: "#3a3530", panel: "#9a1a14", accent: "#3a3530", sole: "#f5f1e8", midsole: "#d8d2c4", lace: "#3a3530" }
    ]
  },
  {
    key: "aj3",
    name: "Air Three",
    model: "03",
    year: "1988",
    designer: "Tinker Hatfield",
    silhouette: "3",
    mood: { bg: "#1a1a1a", ink: "#f3efe7", accent: "#ff2a1f", soft: "#2a2620" },
    tagline: "Mars",
    taglineItalic: "blackmon.",
    origin: {
      title: "The save",
      body: "He was about to walk away. Frustrated, underwhelmed, ready to sign with a competitor. A new designer — an architect by training — sketched something with elephant print, a visible air window, and a leaping silhouette stamped on the tongue. It was the meeting that kept him."
    },
    cultural: {
      title: "Spike and the elephant",
      body: "A filmmaker as the campaign's voice. A character named Mars. A side-panel print borrowed from the savannah. The shoe walked off-court and into rotation as a cultural artifact — the first sneaker designed to be looked at, not just played in.",
      archivalPhoto: "MichaelJordan/MJ3.png",
      archivalAlt: "Michael Jordan and Spike Lee, 1988"
    },
    product: {
      title: "Visible air, visible identity",
      bullets: [
        "First model with a visible Air-Sole window in the heel",
        "Tumbled-leather upper with elephant-print quarter and toe",
        "First appearance of the leaping silhouette on the tongue",
        "Mid-cut profile — lighter and more flexible than the One"
      ]
    },
    variants: [
      { name: "White Cement", image: "shoes/aj3-whitecement.png", glow: "#d44a3a", stage: "#2a2620", upper: "#f5f1e8", overlay: "#1a1a1a", toe: "#f5f1e8", panel: "#1a1a1a", accent: "#ff2a1f", sole: "#ffffff", midsole: "#d8d2c4", lace: "#1a1a1a" },
      { name: "Black Cement", image: "shoes/aj3-blackcement.png", glow: "#ff2a1f", stage: "#241f1c", upper: "#1a1a1a", overlay: "#3a3530", toe: "#1a1a1a", panel: "#3a3530", accent: "#ff2a1f", sole: "#f3efe7", midsole: "#8a8580", lace: "#1a1a1a" },
      { name: "True Blue",    image: "shoes/aj3-trueblue.png",    glow: "#2554d4", stage: "#1f242e", upper: "#f5f1e8", overlay: "#1a3a8c", toe: "#f5f1e8", panel: "#1a3a8c", accent: "#1a3a8c", sole: "#ffffff", midsole: "#d8d2c4", lace: "#1a3a8c" }
    ]
  },
  {
    key: "aj4",
    name: "Air Four",
    model: "04",
    year: "1989",
    designer: "Tinker Hatfield",
    silhouette: "4",
    mood: { bg: "#0e0e0e", ink: "#f3efe7", accent: "#d4ff3a", soft: "#1a1a1a" },
    tagline: "Mesh.",
    taglineItalic: "Plastic. Glory.",
    origin: {
      title: "The first global rollout",
      body: "Same architect, one year later. Mesh side panels for breathability. Plastic wings for lockdown. A shoe engineered for performance first — but designed, almost accidentally, to outlive its decade. The first model released worldwide simultaneously."
    },
    cultural: {
      title: "Do the right thing",
      body: "A pivotal scene in a generational film. A pair of white-cement Fours scuffed on a Brooklyn stoop. The shoe became shorthand for a moment, a borough, an argument about value and what's worth defending. Pop culture had folded the silhouette in.",
      archivalPhoto: "MichaelJordan/MJ4.jpg",
      archivalAlt: "Michael Jordan, 1989"
    },
    product: {
      title: "Engineered support",
      bullets: [
        "Mesh quarter panels — first major use on a basketball shoe",
        "Plastic 'wing' lace stays for midfoot containment",
        "Encapsulated air, exposed midsole window",
        "Four original colorways — White Cement, Black Cement, Fire Red, Military Blue"
      ]
    },
    variants: [
      { name: "Black Cat",     image: "shoes/aj4-blackcat.png",     glow: "#3a3a3a", stage: "#141414", upper: "#1a1a1a", overlay: "#3a3530", toe: "#1a1a1a", panel: "#3a3530", accent: "#d4ff3a", sole: "#f3efe7", midsole: "#6a655e", lace: "#1a1a1a" },
      { name: "Bred",          image: "shoes/aj4-bred.png",         glow: "#ff2a1f", stage: "#1a1414", upper: "#1a1a1a", overlay: "#ff2a1f", toe: "#1a1a1a", panel: "#3a3530", accent: "#ff2a1f", sole: "#f3efe7", midsole: "#d8d2c4", lace: "#1a1a1a" },
      { name: "Military Blue", image: "shoes/aj4-militaryblue.png", glow: "#3a6ab0", stage: "#16181c", upper: "#f5f1e8", overlay: "#1a3a8c", toe: "#f5f1e8", panel: "#1a3a8c", accent: "#d4ff3a", sole: "#ffffff", midsole: "#d8d2c4", lace: "#1a3a8c" }
    ]
  }
];

// helper: resolve image src for a (chapter, variant) pair
const getShoeImage = (chapter, variantIndex = 0) => {
  const v = chapter.variants[variantIndex];
  return v && v.image ? v.image : null;
};

window.Sneaker = Sneaker;
window.CHAPTERS = CHAPTERS;
window.getShoeImage = getShoeImage;
