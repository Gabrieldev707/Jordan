const Sneaker = ({ id, palette, variant = "1", asImage = true, src, alt = "Sneaker" }) => {
  if (asImage && src) {
    return (
      <div className="sneaker-photo-wrap">
        <img className="sneaker-photo" src={src} alt={alt} draggable="false" />
      </div>
    );
  }
  // Placeholder fallback - abstract silhouette (kept compact)
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

export default Sneaker;
