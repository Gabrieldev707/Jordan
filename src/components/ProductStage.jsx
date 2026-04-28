import Sneaker from "./Sneaker.jsx";
import { getShoeImage } from "../data/chapters.js";

const SIZES_EU = [
  { eu: 36, out: true }, { eu: 37, out: false }, { eu: 38, out: false },
  { eu: 39, out: false }, { eu: 40, out: false }, { eu: 41, out: false },
  { eu: 42, out: false }, { eu: 43, out: true },
];

export default function ProductStage({
  chapter,
  variant,
  outgoing,
  swapKey,
  focused,
  selectedSize,
  productInfoRef,
  onToggleFocus,
  onPickVariant,
  onSelectSize,
  copy,
  product,
}) {
  const v = chapter.variants[variant];

  return (
    <div className={`moment-product${focused ? ' focused' : ''}`}>
      <div className="product-stage" data-swap-key={swapKey} onClick={onToggleFocus}>
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
        <span className="moment-tag">{copy.silhouette}</span>
        <h3>{product.title}</h3>
        <ul>
          {product.bullets.map((b, i) =>
          <li key={i}>
              <span className="li-num">0{i + 1}</span>
              <span>{b}</span>
            </li>
          )}
        </ul>

        <div className="variant-switcher">
          <div className="label-row">
            <span>{copy.colorway}</span>
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
            <span>{copy.size}</span>
            <span className="current">{selectedSize ? `EU ${selectedSize}` : copy.noSize}</span>
          </div>
          <div className="size-row">
            {SIZES_EU.map(({ eu, out }) =>
            <button
              key={eu}
              className={`size-chip${out ? ' sold-out' : ''}${selectedSize === eu ? ' active' : ''}`}
              onClick={() => !out && onSelectSize(eu === selectedSize ? null : eu)}
              disabled={out}
              aria-label={`EU ${eu}${out ? ` — ${copy.soldOut}` : ''}`}>
              {eu}
            </button>
            )}
          </div>
        </div>
      </div>
    </div>);
}
