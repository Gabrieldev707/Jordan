export default function Nav({ language, copy, onToggleLanguage }) {
  return (
    <nav className="nav">
      <a className="logo" href="#hero" data-cursor="top">
        <img className="jumpman-glyph" src="logo/jordanpratalogo.png" alt="" aria-hidden="true" />
        <span>AIR/23</span>
      </a>
      <div className="links">
        <a href="#intro" data-cursor="">{copy.theFour}</a>
        <a href="#chapter-aj1" data-cursor="">I</a>
        <a href="#chapter-aj2" data-cursor="">II</a>
        <a href="#chapter-aj3" data-cursor="">III</a>
        <a href="#chapter-aj4" data-cursor="">IV</a>
        <a href="#contact" data-cursor="">{copy.contact}</a>
      </div>
      <button
        type="button"
        className="language-toggle"
        onClick={onToggleLanguage}
        aria-label={copy.languageLabel}
        data-cursor={language === "en" ? "PT" : "EN"}>
        <span className={language === "en" ? "active" : ""}>EN</span>
        <span aria-hidden="true">/</span>
        <span className={language === "pt" ? "active" : ""}>PT</span>
      </button>
    </nav>);
}
