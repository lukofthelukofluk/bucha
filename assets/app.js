// Helvetia District — landing page sections
// Swap this URL to point to real renders when available.
const HERO_IMG = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80";
const TEAM_IMG = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80";

// Single global styles object for the whole landing page.
const HD = {
  // Layout
  page: {
    background: 'var(--bg)',
    color: 'var(--ink)',
    minHeight: '100vh',
    fontFamily: 'var(--sans)',
    fontFeatureSettings: '"ss01","cv11"',
    WebkitFontSmoothing: 'antialiased'
  },
  shell: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 clamp(20px, 4vw, 56px)'
  },
  rule: {
    height: 1,
    background: 'var(--rule)',
    border: 0,
    margin: 0
  },
  ruleStrong: {
    height: 1,
    background: 'var(--ink)',
    border: 0,
    margin: 0
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Header / language switch
// ─────────────────────────────────────────────────────────────────────────────
function Header({
  t,
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in oklab, var(--bg) 88%, transparent)',
      backdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...HD.shell,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Mark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "bucha.ch"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, "Helvetia District"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    },
    className: "hd-nav"
  }, ['opportunity', 'vision', 'location', 'economics', 'structure', 'team'].map(k => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: `#${k}`,
    style: {
      color: 'var(--ink-2)',
      textDecoration: 'none',
      fontSize: 14,
      letterSpacing: '-0.005em'
    }
  }, t(`nav.${k}`))), /*#__PURE__*/React.createElement(LangSwitch, {
    lang: lang,
    setLang: setLang,
    t: t
  }), /*#__PURE__*/React.createElement("a", {
    href: "#invest",
    style: {
      padding: '9px 14px',
      background: 'var(--ink)',
      color: 'var(--bg)',
      textDecoration: 'none',
      fontSize: 13,
      letterSpacing: '-0.005em',
      borderRadius: 2
    }
  }, t('nav.invest'), " \u2192"))));
}
function Mark() {
  // Original mark — outline square cross. Not the Swiss flag.
  return /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.75",
    y: "0.75",
    width: "26.5",
    height: "26.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11.5",
    y: "6",
    width: "5",
    height: "16",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "11.5",
    width: "16",
    height: "5",
    fill: "var(--accent)"
  }));
}
function LangSwitch({
  lang,
  setLang,
  t
}) {
  const langs = ['en', 'de', 'fr', 'it'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px',
      border: '1px solid var(--rule)',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, t('lang.label')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, langs.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      padding: '2px 6px',
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: lang === l ? 'var(--ink)' : 'transparent',
      color: lang === l ? 'var(--bg)' : 'var(--ink-2)',
      border: 0,
      cursor: 'pointer',
      borderRadius: 2
    }
  }, l))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────
function Hero({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(48px, 8vw, 96px)',
      paddingBottom: 'clamp(40px, 6vw, 72px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, t('hero.eyebrow')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "BUCHA \xB7 UA  \xB7  47\xB0N 30\xB0E")), /*#__PURE__*/React.createElement("hr", {
    style: {
      ...HD.rule,
      marginTop: 14,
      marginBottom: 'clamp(40px, 6vw, 72px)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 500,
      fontSize: 'clamp(48px, 7.6vw, 124px)',
      lineHeight: 0.95,
      letterSpacing: '-0.035em',
      margin: 0,
      textWrap: 'balance'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, t('hero.title.l1')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontFamily: 'var(--display-serif)',
      fontWeight: 400
    }
  }, t('hero.title.l2'))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, t('hero.title.l3'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(24px, 5vw, 80px)',
      marginTop: 'clamp(32px, 5vw, 56px)'
    },
    className: "hd-hero-grid"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(16px, 1.3vw, 19px)',
      lineHeight: 1.5,
      color: 'var(--ink-2)',
      maxWidth: 560,
      textWrap: 'pretty',
      margin: 0
    }
  }, t('hero.lede')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#invest",
    className: "hd-btn hd-btn-primary"
  }, t('hero.cta.primary'), " \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "#opportunity",
    className: "hd-btn hd-btn-ghost"
  }, t('hero.cta.secondary'))), /*#__PURE__*/React.createElement(PlaceholderHero, {
    label: "District render \xB7 forthcoming"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 6vw, 72px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '1px solid var(--ink)'
    },
    className: "hd-meta-row"
  }, ['area', 'location', 'structure', 'stage'].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '18px 18px 18px 0',
      borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
      paddingLeft: i === 0 ? 0 : 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, t(`hero.meta.${k}`)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 18,
      letterSpacing: '-0.01em'
    }
  }, t(`hero.meta.${k}.v`))))));
}
function PlaceholderHero({
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '5/3',
      backgroundImage: `url(${HERO_IMG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid var(--rule)',
      position: 'relative',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 12,
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--ink-2)',
      background: 'var(--bg)',
      padding: '4px 8px',
      border: '1px solid var(--rule)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      top: 12,
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      color: '#fff',
      textTransform: 'uppercase',
      textShadow: '0 1px 6px rgba(0,0,0,0.4)'
    }
  }, "Reference image"));
}

// ─────────────────────────────────────────────────────────────────────────────
// Marquee (silent, decorative band)
// ─────────────────────────────────────────────────────────────────────────────
function Marquee({
  t
}) {
  const items = [1, 2, 3, 4, 5, 6].map(i => t(`marquee.${i}`));
  const all = [...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)',
      borderBottom: '1px solid var(--ink)',
      overflow: 'hidden',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      padding: '14px 0',
      whiteSpace: 'nowrap',
      animation: 'hd-marquee 60s linear infinite'
    }
  }, all.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 32,
      fontFamily: 'var(--mono)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--accent)',
      display: 'inline-block'
    }
  }), it))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Section header
// ─────────────────────────────────────────────────────────────────────────────
function SectionHead({
  eyebrow,
  title,
  body,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("hr", {
    style: {
      ...HD.rule,
      marginTop: 14,
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 500,
      fontSize: 'clamp(34px, 4.2vw, 64px)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      margin: 0,
      maxWidth: 1100,
      textWrap: 'balance',
      whiteSpace: 'pre-line'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 'clamp(16px, 1.15vw, 19px)',
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      maxWidth: 780,
      textWrap: 'pretty'
    }
  }, body));
}

// ─────────────────────────────────────────────────────────────────────────────
// Opportunity
// ─────────────────────────────────────────────────────────────────────────────
function Opportunity({
  t
}) {
  const stats = [1, 2, 3, 4].map(i => ({
    v: t(`opp.stat${i}.v`),
    l: t(`opp.stat${i}.l`)
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "opportunity",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('opp.eyebrow'),
    title: t('opp.title'),
    body: t('opp.body')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      borderTop: '1px solid var(--ink)'
    },
    className: "hd-stats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '24px 20px 24px 0',
      borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
      paddingLeft: i === 0 ? 0 : 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 'clamp(36px, 3.6vw, 56px)',
      letterSpacing: '-0.03em',
      lineHeight: 1,
      fontWeight: 500
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, s.l)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--ink-3)'
    }
  }, t('opp.note')));
}

// ─────────────────────────────────────────────────────────────────────────────
// Vision
// ─────────────────────────────────────────────────────────────────────────────
function Vision({
  t
}) {
  const pillars = [1, 2, 3].map(i => ({
    t: t(`vision.pillar.${i}.t`),
    b: t(`vision.pillar.${i}.b`)
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "vision",
    style: {
      background: 'var(--ink)',
      color: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(72px, 9vw, 128px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, t('vision.eyebrow')), /*#__PURE__*/React.createElement("hr", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.18)',
      border: 0,
      marginTop: 14,
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 500,
      fontSize: 'clamp(34px, 4.6vw, 72px)',
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      margin: 0,
      maxWidth: 1100,
      whiteSpace: 'pre-line'
    }
  }, t('vision.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      fontSize: 'clamp(16px, 1.2vw, 19px)',
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.78)',
      maxWidth: 760,
      textWrap: 'pretty'
    }
  }, t('vision.lede')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(48px, 6vw, 80px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0,
      borderTop: '1px solid rgba(255,255,255,0.25)'
    },
    className: "hd-pillars"
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '28px 24px 28px 0',
      borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
      paddingLeft: i === 0 ? 0 : 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 18,
      fontSize: 'clamp(22px, 1.8vw, 30px)',
      fontWeight: 500,
      letterSpacing: '-0.015em',
      lineHeight: 1.15
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.72)',
      textWrap: 'pretty'
    }
  }, p.b))))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Product (10 specs)
// ─────────────────────────────────────────────────────────────────────────────
function Product({
  t
}) {
  const specs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => t(`product.spec.${i}`));
  return /*#__PURE__*/React.createElement("section", {
    id: "product",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('product.eyebrow'),
    title: t('product.title'),
    body: t('product.body')
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 0,
      listStyle: 'none',
      padding: 0,
      borderTop: '1px solid var(--ink)'
    },
    className: "hd-specs"
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: '20px 20px 20px 0',
      borderBottom: '1px solid var(--rule)',
      borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
      paddingLeft: i % 2 === 0 ? 0 : 24,
      display: 'flex',
      gap: 16,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 12,
      letterSpacing: '0.06em',
      color: 'var(--accent)',
      minWidth: 28
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(15px, 1.05vw, 17px)',
      lineHeight: 1.45,
      letterSpacing: '-0.005em',
      textWrap: 'pretty'
    }
  }, s)))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Location
// ─────────────────────────────────────────────────────────────────────────────
function Location({
  t
}) {
  const facts = [1, 2, 3, 4].map(i => ({
    l: t(`loc.fact.${i}.l`),
    v: t(`loc.fact.${i}.v`)
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "location",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('loc.eyebrow'),
    title: t('loc.title'),
    body: t('loc.body')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'clamp(32px, 4vw, 56px)',
      alignItems: 'start'
    },
    className: "hd-loc-grid"
  }, /*#__PURE__*/React.createElement(SitePlaceholder, {
    label: t('loc.placeholder')
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, facts.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'baseline',
      padding: '18px 0',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, f.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 'clamp(22px, 1.8vw, 30px)',
      letterSpacing: '-0.01em',
      fontWeight: 500
    }
  }, f.v)))))));
}
function SitePlaceholder({
  label
}) {
  // Schematic, abstract — concentric square + dot for Bucha ↔ Kyiv.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      position: 'relative',
      background: `repeating-linear-gradient(135deg, var(--placeholder-a) 0 14px, var(--placeholder-b) 14px 28px)`,
      border: '1px solid var(--rule)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 300",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "hd-grid",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 0 L0 0 0 20",
    fill: "none",
    stroke: "rgba(0,0,0,0.06)",
    strokeWidth: "0.5"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "300",
    fill: "url(#hd-grid)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 96 L210 84 L268 110 L286 168 L246 216 L168 224 L116 196 L98 144 Z",
    fill: "none",
    stroke: "var(--ink)",
    strokeWidth: "1.6",
    strokeDasharray: "6 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 96 L210 84 L268 110 L286 168 L246 216 L168 224 L116 196 L98 144 Z",
    fill: "rgba(190,30,45,0.08)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "190",
    cy: "158",
    r: "3.5",
    fill: "var(--accent)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "200",
    y: "162",
    fontFamily: "ui-monospace, monospace",
    fontSize: "10",
    fill: "var(--ink)"
  }, "Helvetia District"), /*#__PURE__*/React.createElement("line", {
    x1: "286",
    y1: "168",
    x2: "356",
    y2: "232",
    stroke: "var(--ink)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "356",
    cy: "232",
    r: "3",
    fill: "var(--ink)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "304",
    y: "226",
    fontFamily: "ui-monospace, monospace",
    fontSize: "10",
    fill: "var(--ink-2)"
  }, "\u2192 Kyiv \xB7 30 min"), /*#__PURE__*/React.createElement("g", {
    transform: "translate(34,40)"
  }, /*#__PURE__*/React.createElement("text", {
    fontFamily: "ui-monospace, monospace",
    fontSize: "10",
    fill: "var(--ink-2)"
  }, "N"), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "6",
    y2: "28",
    stroke: "var(--ink-2)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "6,4 3,10 9,10",
    fill: "var(--ink-2)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 12,
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--ink-2)',
      background: 'var(--bg)',
      padding: '4px 8px',
      border: '1px solid var(--rule)'
    }
  }, label));
}

// ─────────────────────────────────────────────────────────────────────────────
// Economics
// ─────────────────────────────────────────────────────────────────────────────
function Economics({
  t
}) {
  const pillars = [1, 2, 3].map(i => ({
    t: t(`econ.pillar.${i}.t`),
    b: t(`econ.pillar.${i}.b`)
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "economics",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('econ.eyebrow'),
    title: t('econ.title'),
    body: t('econ.body')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid var(--ink)'
    },
    className: "hd-pillars"
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '28px 24px 28px 0',
      borderRight: i < 2 ? '1px solid var(--rule)' : 'none',
      paddingLeft: i === 0 ? 0 : 24,
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Pillar 0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 16,
      fontSize: 'clamp(22px, 1.9vw, 30px)',
      fontWeight: 500,
      letterSpacing: '-0.015em',
      lineHeight: 1.15
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, p.b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      padding: 'clamp(28px, 3vw, 40px)',
      border: '1px solid var(--rule)',
      background: 'var(--surface)',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'clamp(24px, 4vw, 56px)',
      alignItems: 'start'
    },
    className: "hd-bench"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display-serif)',
      fontStyle: 'italic',
      fontSize: 'clamp(28px, 3.2vw, 48px)',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: 'var(--ink)'
    }
  }, "\u201CAndermatt.\u201D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, t('econ.bench.t')), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 'clamp(15px, 1.05vw, 17px)',
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      textWrap: 'pretty',
      maxWidth: 780,
      margin: '12px 0 0 0'
    }
  }, t('econ.bench.b')))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Structure & Capital Stack
// ─────────────────────────────────────────────────────────────────────────────
function Structure({
  t
}) {
  const rows = [1, 2, 3, 4].map(i => ({
    l: t(`struct.row.${i}.l`),
    v: t(`struct.row.${i}.v`)
  }));
  const askRows = [1, 2, 3, 4].map(i => ({
    l: t(`struct.ask.row.${i}.l`),
    v: t(`struct.ask.row.${i}.v`),
    s: t(`struct.ask.row.${i}.s`)
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "structure",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('struct.eyebrow'),
    title: t('struct.title'),
    body: t('struct.body')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'clamp(32px, 4vw, 64px)'
    },
    className: "hd-struct-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 12
    }
  }, "Corporate"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      padding: '16px 0',
      borderBottom: '1px solid var(--rule)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-2)'
    }
  }, r.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(15px, 1.1vw, 18px)',
      letterSpacing: '-0.005em'
    }
  }, r.v)))), /*#__PURE__*/React.createElement(StackDiagram, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, t('struct.ask.t')), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink)'
    }
  }, askRows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr auto',
      padding: '18px 0',
      borderBottom: '1px solid var(--rule)',
      alignItems: 'baseline',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(14px, 1vw, 16px)',
      color: 'var(--ink)'
    }
  }, r.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 'clamp(20px, 1.8vw, 26px)',
      letterSpacing: '-0.015em',
      fontWeight: 500
    }
  }, r.v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.08em',
      color: 'var(--ink-3)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, r.s)))))));
}
function StackDiagram() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: '20px',
      border: '1px solid var(--rule)',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 16
    }
  }, "Schematic \xB7 holding & operating"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      border: '1.5px solid var(--ink)',
      textAlign: 'center',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-0.005em'
    }
  }, "Helvetia District AG"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'var(--ink-3)',
      marginTop: 4,
      textTransform: 'uppercase'
    }
  }, "Holding \xB7 Horgen, Switzerland")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: 0,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--ink-3)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px',
      border: '1px solid var(--rule)',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '-0.005em'
    }
  }, "TOV Land"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'var(--ink-3)',
      marginTop: 4,
      textTransform: 'uppercase'
    }
  }, "Bucha \xB7 280 ha")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px',
      border: '1px solid var(--rule)',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      letterSpacing: '-0.005em'
    }
  }, "TOV Operations"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'var(--ink-3)',
      marginTop: 4,
      textTransform: 'uppercase'
    }
  }, "District services"))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Roadmap
// ─────────────────────────────────────────────────────────────────────────────
function Roadmap({
  t
}) {
  const phases = [0, 1, 2, 3, 4].map(i => ({
    t: t(`phase.${i}.t`),
    b: t(`phase.${i}.b`)
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "roadmap",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('phase.eyebrow'),
    title: t('phase.title')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      borderTop: '1px solid var(--ink)'
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1.2fr 2fr',
      gap: 'clamp(20px, 3vw, 48px)',
      padding: '28px 0',
      borderBottom: '1px solid var(--rule)',
      alignItems: 'baseline'
    },
    className: "hd-phase-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--accent)'
    }
  }, "0", i), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 'clamp(20px, 1.6vw, 26px)',
      letterSpacing: '-0.015em',
      fontWeight: 500,
      lineHeight: 1.2
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(15px, 1.05vw, 17px)',
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, p.b)))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Team
// ─────────────────────────────────────────────────────────────────────────────
function Team({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(48px, 6vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: t('team.eyebrow'),
    title: t('team.title'),
    body: t('team.body')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px, 5vw, 64px)',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'clamp(32px, 4vw, 56px)'
    },
    className: "hd-team-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 108,
      height: 108,
      flexShrink: 0,
      backgroundImage: `url(${TEAM_IMG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid var(--rule)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--display)',
      fontSize: 'clamp(22px, 1.9vw, 28px)',
      fontWeight: 500,
      letterSpacing: '-0.015em'
    }
  }, t('team.lead.name')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, t('team.lead.role')), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, t('team.lead.bio')))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 14
    }
  }, t('team.advisors.t')), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      borderTop: '1px solid var(--ink)'
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      padding: '14px 0',
      borderBottom: '1px solid var(--rule)',
      fontSize: 'clamp(15px, 1.05vw, 17px)',
      letterSpacing: '-0.005em'
    }
  }, t(`team.advisors.${i}`)))))));
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA / Form
// ─────────────────────────────────────────────────────────────────────────────
function CTA({
  t
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    org: '',
    ticket: t('cta.form.ticket.opt.2'),
    notes: ''
  });
  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "invest",
    style: {
      background: 'var(--ink)',
      color: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...HD.shell,
      paddingTop: 'clamp(72px, 9vw, 128px)',
      paddingBottom: 'clamp(72px, 9vw, 128px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, t('cta.eyebrow')), /*#__PURE__*/React.createElement("hr", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.18)',
      border: 0,
      marginTop: 14,
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px, 5vw, 80px)'
    },
    className: "hd-cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--display)',
      fontWeight: 500,
      fontSize: 'clamp(34px, 4.4vw, 64px)',
      lineHeight: 1.02,
      letterSpacing: '-0.025em',
      margin: 0,
      textWrap: 'balance'
    }
  }, t('cta.title')), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 'clamp(16px, 1.15vw, 19px)',
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.78)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, t('cta.body')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      fontFamily: 'var(--mono)',
      fontSize: 12,
      letterSpacing: '0.06em',
      color: 'rgba(255,255,255,0.65)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      color: 'rgba(255,255,255,0.5)',
      fontSize: 10
    }
  }, t('cta.alt')), /*#__PURE__*/React.createElement("a", {
    href: "mailto:alex@degenhardt.ch",
    style: {
      color: 'var(--bg)',
      textDecoration: 'none',
      borderBottom: '1px solid rgba(255,255,255,0.4)',
      display: 'inline-block',
      marginTop: 6
    }
  }, "alex@degenhardt.ch"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, "+41 78 654 0510"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      borderTop: '1px solid rgba(255,255,255,0.25)'
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: t('cta.form.name'),
    value: form.name,
    onChange: v => setForm(f => ({
      ...f,
      name: v
    }))
  }), /*#__PURE__*/React.createElement(FormField, {
    label: t('cta.form.email'),
    value: form.email,
    onChange: v => setForm(f => ({
      ...f,
      email: v
    })),
    type: "email"
  }), /*#__PURE__*/React.createElement(FormField, {
    label: t('cta.form.org'),
    value: form.org,
    onChange: v => setForm(f => ({
      ...f,
      org: v
    }))
  }), /*#__PURE__*/React.createElement(FormSelect, {
    label: t('cta.form.ticket'),
    value: form.ticket,
    onChange: v => setForm(f => ({
      ...f,
      ticket: v
    })),
    options: [1, 2, 3, 4, 5].map(i => t(`cta.form.ticket.opt.${i}`))
  }), /*#__PURE__*/React.createElement(FormField, {
    label: t('cta.form.notes'),
    value: form.notes,
    onChange: v => setForm(f => ({
      ...f,
      notes: v
    })),
    multiline: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0 0 0'
    }
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      border: '1px solid var(--accent)',
      color: 'var(--bg)',
      fontSize: 14
    }
  }, t('cta.form.submitted')) : /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      padding: '14px 22px',
      background: 'var(--accent)',
      color: '#fff',
      border: 0,
      fontSize: 14,
      letterSpacing: '-0.005em',
      cursor: 'pointer',
      borderRadius: 2,
      fontWeight: 500
    }
  }, t('cta.form.submit'), " \u2192"))))));
}
function FormField({
  label,
  value,
  onChange,
  type = 'text',
  multiline
}) {
  const [focus, setFocus] = React.useState(false);
  const InputTag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      borderBottom: '1px solid rgba(255,255,255,0.18)',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, label), /*#__PURE__*/React.createElement(InputTag, {
    type: type,
    value: value,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => onChange(e.target.value),
    rows: multiline ? 3 : undefined,
    style: {
      width: '100%',
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--bg)',
      fontFamily: 'inherit',
      fontSize: 16,
      marginTop: 6,
      padding: '4px 0',
      resize: 'vertical',
      borderBottom: focus ? '1px solid var(--accent)' : '1px solid transparent'
    }
  }));
}
function FormSelect({
  label,
  value,
  onChange,
  options
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      borderBottom: '1px solid rgba(255,255,255,0.18)',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      width: '100%',
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--bg)',
      fontFamily: 'inherit',
      fontSize: 16,
      marginTop: 6,
      padding: '4px 0',
      appearance: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      background: 'var(--ink)',
      color: 'var(--bg)'
    }
  }, o))));
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────
function Footer({
  t
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      ...HD.shell,
      paddingTop: 'clamp(48px, 6vw, 80px)',
      paddingBottom: 'clamp(40px, 5vw, 64px)'
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: HD.ruleStrong
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'clamp(24px, 4vw, 64px)',
      marginTop: 32
    },
    className: "hd-footer"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.55,
      color: 'var(--ink-3)',
      maxWidth: 780,
      textWrap: 'pretty',
      margin: 0
    }
  }, t('footer.legal')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, t('footer.contact')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--mono)',
      fontSize: 11,
      letterSpacing: '0.06em',
      color: 'var(--ink-3)'
    }
  }, t('footer.copy')))));
}

// ─────────────────────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────────────────────
function App() {
  const [lang, setLang] = React.useState(() => {
    const saved = localStorage.getItem('hd_lang');
    if (saved && window.I18N[saved]) return saved;
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return window.I18N[nav] ? nav : 'en';
  });
  React.useEffect(() => {
    localStorage.setItem('hd_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = React.useCallback(key => {
    const dict = window.I18N[lang] || window.I18N.en;
    return dict[key] ?? window.I18N.en[key] ?? key;
  }, [lang]);
  return /*#__PURE__*/React.createElement("div", {
    style: HD.page
  }, /*#__PURE__*/React.createElement(Header, {
    t: t,
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement(Hero, {
    t: t
  }), /*#__PURE__*/React.createElement(Marquee, {
    t: t
  }), /*#__PURE__*/React.createElement(Opportunity, {
    t: t
  }), /*#__PURE__*/React.createElement(Vision, {
    t: t
  }), /*#__PURE__*/React.createElement(Product, {
    t: t
  }), /*#__PURE__*/React.createElement(Location, {
    t: t
  }), /*#__PURE__*/React.createElement(Economics, {
    t: t
  }), /*#__PURE__*/React.createElement(Structure, {
    t: t
  }), /*#__PURE__*/React.createElement(Roadmap, {
    t: t
  }), /*#__PURE__*/React.createElement(Team, {
    t: t
  }), /*#__PURE__*/React.createElement(CTA, {
    t: t
  }), /*#__PURE__*/React.createElement(Footer, {
    t: t
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));