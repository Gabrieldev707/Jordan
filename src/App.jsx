import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import IntroReveal from "./components/IntroReveal.jsx";
import Chapter from "./components/Chapter.jsx";
import Final from "./components/Final.jsx";
import Footer from "./components/Footer.jsx";
import { CHAPTERS } from "./data/chapters.js";
import { COPY } from "./data/copy.js";
import { useReveal } from "./hooks/useReveal.js";
import { useTweaks, TweaksPanel, TweakSection, TweakToggle } from "./components/TweaksPanel.jsx";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "smoothScroll": true
} /*EDITMODE-END*/;

export default function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("air23-language");
    return saved === "pt" || saved === "en" ? saved : "en";
  });
  const copy = COPY[language];
  useReveal();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = tweaks.smoothScroll ? 'smooth' : 'auto';
  }, [tweaks]);

  useEffect(() => {
    localStorage.setItem("air23-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => current === "en" ? "pt" : "en");
  };

  return (
    <>
      <Nav language={language} copy={copy.nav} onToggleLanguage={toggleLanguage} />
      <Hero copy={copy.hero} />
      <Marquee items={["Air", "23", "One", "23", "Two", "23", "Three", "23", "Four", "23"]} />
      <IntroReveal copy={copy.intro} language={language} />
      {CHAPTERS.map((c, i) =>
      <Chapter key={c.key} chapter={c} index={i} language={language} copy={copy.labels} />
      )}
      <Final copy={copy.final} />
      <Footer copy={copy.footer} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Experience">
          <TweakToggle
            label="Smooth scroll"
            value={tweaks.smoothScroll}
            onChange={(v) => setTweak('smoothScroll', v)} />
        </TweakSection>
      </TweaksPanel>
    </>);
}
