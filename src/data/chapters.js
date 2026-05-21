// Each variant carries:
//   image   — transparent PNG path
//   glow    — accent color used for the ambient aura behind the photo
//   stage   — base mood color for the per-product stage background
export const CHAPTERS = [
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
      en: {
        title: "A rookie's first contract",
        body: "Built for a 22-year-old shooting guard who hadn't yet won anything. Designed in a hurry, in a meeting room, with a chevron drawn on a side panel. It would change the silhouette of athletic footwear forever — but in the autumn of 1985, it was just a shoe nobody had asked for."
      },
      pt: {
        title: "O primeiro contrato de um novato",
        body: "Criado para um ala-armador de 22 anos que ainda não havia vencido nada. Desenhado às pressas, numa sala de reunião, com um chevron traçado no painel lateral. Ele mudaria para sempre a silhueta dos calçados esportivos — mas no outono de 1985 era apenas um tênis que ninguém tinha pedido."
      }
    },
    cultural: {
      archivalPhoto: "MichaelJordan/MJ1.png",
      archivalPosition: "center 18%",
      en: {
        title: "THE FINE THEY PAID FOR HIM!",
        caption: "In 1985, every on-court appearance in the Air Jordan became an act of defiance. The league considered the model outside the visual rules of the era, and with every game, the punishment helped turn the shoe into legend.",
        footer: "— The beginning of rebellion, 1985",
        body: "In 1985, every on-court appearance in the Air Jordan became an act of defiance. The league considered the model outside the visual rules of the era, and with every game, the punishment helped turn the shoe into legend.",
        archivalAlt: "Michael Jordan on court, 1985 — the season the fines began"
      },
      pt: {
        title: "A MULTA QUE PAGARAM POR ELE!",
        caption: "Em 1985, cada aparição em quadra com o Air Jordan virou um ato de desafio. A liga considerava o modelo fora das regras visuais da época e, a cada jogo, a punição ajudava a transformar o tênis em lenda.",
        footer: "— O começo da rebeldia, 1985",
        body: "Em 1985, cada aparição em quadra com o Air Jordan virou um ato de desafio. A liga considerava o modelo fora das regras visuais da época e, a cada jogo, a punição ajudava a transformar o tênis em lenda.",
        archivalAlt: "Michael Jordan em quadra, 1985 — a temporada em que as multas começaram"
      }
    },
    product: {
      en: {
        title: "Cup-sole construction",
        bullets: [
          "Full-grain leather upper, padded ankle collar",
          "Encapsulated air unit in the heel — invisible from outside",
          "Six original colorways, three asymmetric",
          "Wing-shaped eyelet wrap, decorative chevron quarter panel"
        ]
      },
      pt: {
        title: "Construção cup-sole",
        bullets: [
          "Cabedal em couro integral, colarinho acolchoado no tornozelo",
          "Unidade de ar encapsulada no calcanhar — invisível por fora",
          "Seis colorways originais, três assimétricas",
          "Envolvimento dos ilhoses em forma de asa, painel lateral com chevron decorativo"
        ]
      }
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
      en: {
        title: "Made in Italy",
        body: "Designed by the man behind a different cultural icon, the Two left the wing logo behind. No swoosh on the side. Faux-lizard texture. Hand-finished in northern Italy. It was a luxury experiment — quiet, expensive, and almost universally misunderstood at the time."
      },
      pt: {
        title: "Feito na Itália",
        body: "Desenhado pelo homem por trás de outro ícone cultural, o Two deixou o logo de asas para trás. Sem swoosh na lateral. Textura de falso lagarto. Acabamento manual no norte da Itália. Foi um experimento de luxo — silencioso, caro e quase universalmente incompreendido na época."
      }
    },
    cultural: {
      archivalPhoto: "MichaelJordan/MJ23.png",
      archivalPosition: "center 22%",
      en: {
        title: "TOO SOPHISTICATED FOR ITS TIME.",
        caption: "Rather than follow the obvious formula of the previous success, the Air Jordan 2 leaned into premium finishing and a more mature language. It was misunderstood at launch, but earned respect over time.",
        footer: "— The most underestimated chapter, 1986",
        body: "Rather than follow the obvious formula of the previous success, the Air Jordan 2 leaned into premium finishing and a more mature language. It was misunderstood at launch, but earned respect over time.",
        archivalAlt: "Michael Jordan, 1986"
      },
      pt: {
        title: "SOFISTICADO DEMAIS PARA O SEU TEMPO.",
        caption: "Sem seguir a fórmula óbvia do sucesso anterior, o Air Jordan 2 apostou em acabamento premium e linguagem mais madura. Foi incompreendido no lançamento, mas ganhou respeito com o tempo.",
        footer: "— O capítulo mais subestimado, 1986",
        body: "Sem seguir a fórmula óbvia do sucesso anterior, o Air Jordan 2 apostou em acabamento premium e linguagem mais madura. Foi incompreendido no lançamento, mas ganhou respeito com o tempo.",
        archivalAlt: "Michael Jordan, 1986"
      }
    },
    product: {
      en: {
        title: "Italian craftsmanship",
        bullets: [
          "Tumbled faux-lizard leather quarter panels",
          "First model produced outside Asia",
          "Polyurethane midsole with encapsulated heel air",
          "No external swoosh — premium-positioned silhouette"
        ]
      },
      pt: {
        title: "Artesanato italiano",
        bullets: [
          "Painéis laterais em couro texturizado de falso lagarto",
          "Primeiro modelo produzido fora da Ásia",
          "Entressola de poliuretano com ar encapsulado no calcanhar",
          "Sem swoosh externo — silhueta posicionada como premium"
        ]
      }
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
      en: {
        title: "The save",
        body: "He was about to walk away. Frustrated, underwhelmed, ready to sign with a competitor. A new designer — an architect by training — sketched something with elephant print, a visible air window, and a leaping silhouette stamped on the tongue. It was the meeting that kept him."
      },
      pt: {
        title: "A virada",
        body: "Ele estava prestes a ir embora. Frustrado, pouco impressionado, pronto para assinar com um concorrente. Um novo designer — arquiteto de formação — esboçou algo com elephant print, janela de ar visível e uma silhueta saltando na língua. Foi a reunião que o manteve ali."
      }
    },
    cultural: {
      archivalPhoto: "MichaelJordan/MJ3.png",
      archivalPosition: "center 28%",
      en: {
        title: "THE SHOE THAT MADE HIM STAY!",
        caption: "When the relationship with the brand seemed close to ending, the Air Jordan 3 changed everything. With Tinker Hatfield's design, elephant print, visible Air unit, and a new visual language, it did not just save the line — it saved the story.",
        footer: "— The reunion that changed everything, 1988",
        body: "When the relationship with the brand seemed close to ending, the Air Jordan 3 changed everything. With Tinker Hatfield's design, elephant print, visible Air unit, and a new visual language, it did not just save the line — it saved the story.",
        archivalAlt: "Michael Jordan and Spike Lee, 1988"
      },
      pt: {
        title: "O TÊNIS QUE O FEZ FICAR!",
        caption: "Quando a relação com a marca parecia perto do fim, o Air Jordan 3 mudou tudo. Com design de Tinker Hatfield, elephant print, unidade Air visível e uma nova linguagem visual, ele não apenas salvou a linha — salvou a história.",
        footer: "— O reencontro que mudou tudo, 1988",
        body: "Quando a relação com a marca parecia perto do fim, o Air Jordan 3 mudou tudo. Com design de Tinker Hatfield, elephant print, unidade Air visível e uma nova linguagem visual, ele não apenas salvou a linha — salvou a história.",
        archivalAlt: "Michael Jordan e Spike Lee, 1988"
      }
    },
    product: {
      en: {
        title: "Visible air, visible identity",
        bullets: [
          "First model with a visible Air-Sole window in the heel",
          "Tumbled-leather upper with elephant-print quarter and toe",
          "First appearance of the leaping silhouette on the tongue",
          "Mid-cut profile — lighter and more flexible than the One"
        ]
      },
      pt: {
        title: "Ar visível, identidade visível",
        bullets: [
          "Primeiro modelo com janela Air-Sole visível no calcanhar",
          "Cabedal em couro texturizado com elephant print no quarto e na biqueira",
          "Primeira aparição da silhueta saltando na língua",
          "Perfil mid-cut — mais leve e flexível que o One"
        ]
      }
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
      en: {
        title: "The first global rollout",
        body: "Same architect, one year later. Mesh side panels for breathability. Plastic wings for lockdown. A shoe engineered for performance first — but designed, almost accidentally, to outlive its decade. The first model released worldwide simultaneously."
      },
      pt: {
        title: "O primeiro lançamento global",
        body: "O mesmo arquiteto, um ano depois. Painéis laterais em mesh para respirabilidade. Asas plásticas para travamento. Um tênis pensado primeiro para performance — mas desenhado, quase por acidente, para sobreviver à sua década. O primeiro modelo lançado simultaneamente no mundo todo."
      }
    },
    cultural: {
      archivalPhoto: "MichaelJordan/MJ4.jpg",
      archivalPosition: "center 20%",
      en: {
        title: "WHEN THE SHOE ENTERED THE SCENE.",
        caption: "With the Air Jordan 4, the impact moved beyond the court and into the streets, culture, and cinema. The silhouette stopped being only performance and began to live in the collective imagination of a generation.",
        footer: "— From the court to culture, 1989",
        body: "With the Air Jordan 4, the impact moved beyond the court and into the streets, culture, and cinema. The silhouette stopped being only performance and began to live in the collective imagination of a generation.",
        archivalAlt: "Michael Jordan, 1989"
      },
      pt: {
        title: "QUANDO O TÊNIS ENTROU EM CENA.",
        caption: "Com o Air Jordan 4, o impacto saiu das quadras e ganhou as ruas, a cultura e o cinema. A silhueta deixou de ser só performance e passou a ocupar também o imaginário coletivo de uma geração.",
        footer: "— Da quadra para a cultura, 1989",
        body: "Com o Air Jordan 4, o impacto saiu das quadras e ganhou as ruas, a cultura e o cinema. A silhueta deixou de ser só performance e passou a ocupar também o imaginário coletivo de uma geração.",
        archivalAlt: "Michael Jordan, 1989"
      }
    },
    product: {
      en: {
        title: "Engineered support",
        bullets: [
          "Mesh quarter panels — first major use on a basketball shoe",
          "Plastic 'wing' lace stays for midfoot containment",
          "Encapsulated air, exposed midsole window",
          "Four original colorways — White Cement, Black Cement, Fire Red, Military Blue"
        ]
      },
      pt: {
        title: "Suporte projetado",
        bullets: [
          "Painéis laterais em mesh — primeiro uso marcante em um tênis de basquete",
          "Passadores plásticos em forma de 'asa' para contenção do médio-pé",
          "Ar encapsulado, janela exposta na entressola",
          "Quatro colorways originais — White Cement, Black Cement, Fire Red, Military Blue"
        ]
      }
    },
    variants: [
      { name: "Black Cat",     image: "shoes/aj4-blackcat.png",     glow: "#3a3a3a", stage: "#141414", upper: "#1a1a1a", overlay: "#3a3530", toe: "#1a1a1a", panel: "#3a3530", accent: "#d4ff3a", sole: "#f3efe7", midsole: "#6a655e", lace: "#1a1a1a" },
      { name: "Bred",          image: "shoes/aj4-bred.png",         glow: "#ff2a1f", stage: "#1a1414", upper: "#1a1a1a", overlay: "#ff2a1f", toe: "#1a1a1a", panel: "#3a3530", accent: "#ff2a1f", sole: "#f3efe7", midsole: "#d8d2c4", lace: "#1a1a1a" },
      { name: "Military Blue", image: "shoes/aj4-militaryblue.png", glow: "#3a6ab0", stage: "#16181c", upper: "#f5f1e8", overlay: "#1a3a8c", toe: "#f5f1e8", panel: "#1a3a8c", accent: "#d4ff3a", sole: "#ffffff", midsole: "#d8d2c4", lace: "#1a3a8c" }
    ]
  }
];

export const getShoeImage = (chapter, variantIndex = 0) => {
  const v = chapter.variants[variantIndex];
  return v && v.image ? v.image : null;
};
