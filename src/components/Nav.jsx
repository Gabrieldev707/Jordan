import { useEffect, useRef, useState } from "react";

export default function Nav({ language, copy, onToggleLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const nextHasScrolled = window.scrollY > 12;
      if (nextHasScrolled !== hasScrolledRef.current) {
        hasScrolledRef.current = nextHasScrolled;
        setHasScrolled(nextHasScrolled);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`nav${isMenuOpen ? " menu-open" : ""}${hasScrolled ? " scrolled" : ""}`}>
      <a className="logo" href="#hero" data-cursor="top" onClick={closeMenu}>
        <img className="jumpman-glyph" src="logo/jordanpratalogo.png" alt="" aria-hidden="true" />
        <span>AIR/23</span>
      </a>
      <div className="links" id="site-navigation">
        <a href="#intro" data-cursor="" onClick={closeMenu}>{copy.theFour}</a>
        <a href="#chapter-aj1" data-cursor="" onClick={closeMenu}>I</a>
        <a href="#chapter-aj2" data-cursor="" onClick={closeMenu}>II</a>
        <a href="#chapter-aj3" data-cursor="" onClick={closeMenu}>III</a>
        <a href="#chapter-aj4" data-cursor="" onClick={closeMenu}>IV</a>
        <a href="#contact" data-cursor="" onClick={closeMenu}>{copy.contact}</a>
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
      <button
        type="button"
        className="nav-menu-toggle"
        aria-label={isMenuOpen ? copy.closeMenuLabel : copy.openMenuLabel}
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
        data-cursor={isMenuOpen ? "Close" : "Menu"}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </nav>);
}
