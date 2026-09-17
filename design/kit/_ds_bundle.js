/* @ds-bundle: {"format":4,"namespace":"PowerABADesignSystem_870410","components":[{"name":"CharacterCallout","sourcePath":"components/brand/CharacterCallout.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PetalStrengths","sourcePath":"components/brand/PetalStrengths.jsx"},{"name":"PowerBloom","sourcePath":"components/brand/PowerBloom.jsx"},{"name":"SpeechBubble","sourcePath":"components/brand/SpeechBubble.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CTABand","sourcePath":"components/marketing/CTABand.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"QuoteCard","sourcePath":"components/marketing/QuoteCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"StepItem","sourcePath":"components/marketing/StepItem.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/CharacterCallout.jsx":"6838ed4be3a5","components/brand/Logo.jsx":"ca57a527b9cd","components/brand/PetalStrengths.jsx":"835ec738d31a","components/brand/PowerBloom.jsx":"d6f11a24ecd5","components/brand/SpeechBubble.jsx":"4fc7296e74a8","components/core/Avatar.jsx":"968d63e69745","components/core/Badge.jsx":"08eb05383af3","components/core/Button.jsx":"788de651d068","components/core/Card.jsx":"4ede4b501968","components/core/Icon.jsx":"adaff431c5e0","components/core/IconButton.jsx":"b71aba6a5bcb","components/core/Tag.jsx":"4d8f72c3764a","components/feedback/Dialog.jsx":"55e71aa51607","components/feedback/Toast.jsx":"6c757b0bdbe5","components/feedback/Tooltip.jsx":"3b1952ec2a97","components/forms/Checkbox.jsx":"80702f341823","components/forms/Field.jsx":"6b76d637f097","components/forms/Input.jsx":"f63af4323123","components/forms/Radio.jsx":"d77f87b8cf98","components/forms/Select.jsx":"1d198fdf49b4","components/forms/Switch.jsx":"604377ece85f","components/forms/Textarea.jsx":"7f1a0fb079f2","components/marketing/CTABand.jsx":"0ba83ae4baed","components/marketing/FeatureCard.jsx":"fba4a6b1a158","components/marketing/QuoteCard.jsx":"9b9902fc780f","components/marketing/SectionHeading.jsx":"edd58a3ca526","components/marketing/StepItem.jsx":"19d725e0469d","components/navigation/Accordion.jsx":"01c00ac9e904","components/navigation/Tabs.jsx":"a5d81d870877","ui_kits/social/SocialTemplates.jsx":"3c1b3703b167","ui_kits/website/FocusScreen.jsx":"a3a4aa2120de","ui_kits/website/GetStartedScreen.jsx":"296d1d669d9e","ui_kits/website/HomeScreen.jsx":"4c6d084ade6b","ui_kits/website/ProgramScreen.jsx":"2bd8809a5449","ui_kits/website/SiteChrome.jsx":"a72d84d84139"},"inlinedExternals":[],"unexposedExports":[{"name":"controlBase","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.PowerABADesignSystem_870410 = window.PowerABADesignSystem_870410 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LOCKUPS = {
  digital: "assets/logo/power-aba-logo-digital.png",
  print: "assets/logo/power-aba-logo-print.png",
  compact: "assets/logo/power-aba-logo-compact.png",
  bloom: "assets/logo/power-bloom-circle.jpg"
};
function Logo({
  lockup = "digital",
  height = 56,
  basePath = "",
  href,
  style,
  ...rest
}) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + LOCKUPS[lockup];
  const img = /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Power ABA Therapy",
    style: {
      height: height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-block"
    }
  }, img) : img;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PetalStrengths.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PETALS = [{
  key: "courage",
  label: "Courage",
  color: "var(--petal-1-courage)",
  ink: "#8A6600",
  wash: "var(--brand-yellow-wash)",
  meaning: "Entering a new room, trying one step, returning after a break."
}, {
  key: "curiosity",
  label: "Curiosity",
  color: "var(--petal-2-curiosity)",
  ink: "#C25200",
  wash: "var(--brand-orange-wash)",
  meaning: "Asking a question, exploring a tool, trying a different approach."
}, {
  key: "kindness",
  label: "Kindness",
  color: "var(--petal-3-kindness)",
  ink: "#B93B39",
  wash: "var(--brand-coral-wash)",
  meaning: "Helping, listening, waiting, repairing a mistake."
}, {
  key: "calm",
  label: "Calm & confidence",
  color: "var(--petal-4-calm)",
  ink: "var(--brand-indigo)",
  wash: "var(--brand-indigo-wash)",
  meaning: "Using a break, breathing, preparing, following a visual plan."
}, {
  key: "expression",
  label: "Self-expression",
  color: "var(--petal-5-expression)",
  ink: "var(--brand-magenta)",
  wash: "var(--brand-magenta-wash)",
  meaning: "Sharing a preference, saying no, using a device, gesture, picture, or words."
}];
function PetalStrengths({
  earned = [],
  showMeaning = false,
  layout = "row",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: layout === "row" ? "flex" : "grid",
      flexWrap: "wrap",
      gridTemplateColumns: layout === "row" ? undefined : "1fr",
      gap: showMeaning ? "var(--space-3)" : "var(--space-2)",
      ...style
    }
  }, rest), PETALS.map(p => {
    const on = earned.length === 0 || earned.indexOf(p.key) !== -1;
    return /*#__PURE__*/React.createElement("div", {
      key: p.key,
      style: {
        display: "flex",
        alignItems: showMeaning ? "flex-start" : "center",
        gap: "var(--space-3)",
        padding: showMeaning ? "12px 16px" : "6px 14px 6px 10px",
        borderRadius: showMeaning ? "var(--radius-md)" : "var(--radius-pill)",
        background: on ? p.wash : "var(--surface-sunken)",
        opacity: on ? 1 : 0.45,
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        marginTop: showMeaning ? 5 : 0,
        borderRadius: "var(--radius-circle)",
        background: on ? p.color : "var(--ink-300)",
        flex: "0 0 auto"
      }
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--size-small)",
        fontWeight: "var(--weight-semibold)",
        color: on ? p.ink : "var(--text-muted)"
      }
    }, p.label), showMeaning ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: "var(--size-caption)",
        lineHeight: 1.5,
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, p.meaning) : null));
  }));
}
Object.assign(__ds_scope, { PetalStrengths });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PetalStrengths.jsx", error: String((e && e.message) || e) }); }

// components/brand/PowerBloom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PowerBloom({
  size = 64,
  basePath = "",
  ring = true,
  style,
  ...rest
}) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + "assets/logo/power-bloom-circle.jpg";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": "Power Bloom",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      borderRadius: "var(--radius-circle)",
      overflow: "hidden",
      background: "var(--paper)",
      boxShadow: ring ? "0 0 0 3px var(--paper), var(--shadow-sm)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }));
}
Object.assign(__ds_scope, { PowerBloom });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PowerBloom.jsx", error: String((e && e.message) || e) }); }

// components/brand/SpeechBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  poppy: {
    bg: "var(--brand-yellow-wash)",
    bd: "var(--brand-yellow)",
    fg: "var(--ink-900)"
  },
  parker: {
    bg: "var(--brand-indigo-wash)",
    bd: "var(--brand-indigo)",
    fg: "var(--ink-900)"
  },
  brand: {
    bg: "var(--brand-red-wash)",
    bd: "var(--brand-red)",
    fg: "var(--ink-900)"
  },
  plain: {
    bg: "var(--paper)",
    bd: "var(--border-subtle)",
    fg: "var(--text-body)"
  }
};
function SpeechBubble({
  children,
  tone = "plain",
  tail = "bottom-left",
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.plain;
  const vertical = tail.indexOf("top") === 0 ? "top" : "bottom";
  const horizontal = tail.indexOf("right") !== -1 ? "right" : "left";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "inline-block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      border: "2px solid " + t.bd,
      borderRadius: "var(--radius-lg)",
      padding: "16px 22px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h4)",
      lineHeight: 1.35,
      color: t.fg
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      [vertical]: -13,
      [horizontal]: 34,
      width: 22,
      height: 22,
      background: t.bg,
      borderRight: "2px solid " + t.bd,
      borderBottom: "2px solid " + t.bd,
      transform: vertical === "bottom" ? "rotate(45deg)" : "rotate(225deg)"
    }
  }));
}
Object.assign(__ds_scope, { SpeechBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpeechBubble.jsx", error: String((e && e.message) || e) }); }

// components/brand/CharacterCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ART = {
  pair: "assets/characters/poppy-parker-full-body.png",
  waving: "assets/characters/poppy-parker-waving.png",
  kids: "assets/characters/poppy-parker-kids-live-action.png",
  teens: "assets/characters/poppy-parker-teens-live-action.png"
};
function CharacterCallout({
  art = "waving",
  line,
  tone = "plain",
  height = 220,
  side = "left",
  basePath = "",
  style,
  ...rest
}) {
  const src = (basePath ? basePath.replace(/\/$/, "") + "/" : "") + ART[art];
  const image = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Poppy and Parker, the Power Pals",
    style: {
      height: height,
      width: "auto",
      flex: "0 0 auto"
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: "var(--space-5)",
      flexDirection: side === "right" ? "row-reverse" : "row",
      ...style
    }
  }, rest), image, line ? /*#__PURE__*/React.createElement(__ds_scope.SpeechBubble, {
    tone: tone,
    tail: side === "right" ? "bottom-right" : "bottom-left",
    style: {
      marginBottom: height * 0.18
    }
  }, line) : null);
}
Object.assign(__ds_scope, { CharacterCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CharacterCallout.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RING = {
  poppy: "var(--poppy-glasses)",
  parker: "var(--parker-shirt)",
  brand: "var(--brand-red)",
  none: "transparent"
};
function Avatar({
  src,
  name = "",
  size = 56,
  ring = "none",
  style,
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name || undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-circle)",
      overflow: "hidden",
      background: "var(--brand-indigo-wash)",
      color: "var(--brand-indigo)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: Math.round(size * 0.36),
      boxShadow: ring === "none" ? "none" : "0 0 0 3px var(--paper), 0 0 0 6px " + RING[ring],
      flex: "0 0 auto",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = "plain",
  padding = "var(--card-pad)",
  radius = "var(--radius-lg)",
  hoverable = false,
  as = "div",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const TONE_BG = {
    plain: "var(--surface-card)",
    sunken: "var(--surface-sunken)",
    warm: "var(--paper-warm)",
    red: "var(--brand-red-wash)",
    indigo: "var(--brand-indigo-wash)",
    yellow: "var(--brand-yellow-wash)",
    teal: "var(--brand-teal-wash)",
    solid: "var(--surface-brand)"
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: TONE_BG[tone] || TONE_BG.plain,
      color: tone === "solid" ? "var(--text-on-brand)" : "var(--text-body)",
      border: tone === "plain" ? "1px solid var(--border-subtle)" : "1px solid transparent",
      borderRadius: radius,
      padding: padding,
      boxShadow: hoverable && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hoverable && hover ? "translateY(-3px)" : "none",
      transition: "box-shadow var(--duration-base) var(--ease-out-soft), transform var(--duration-base) var(--ease-out-soft)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_BASE = "https://unpkg.com/lucide-static@0.460.0/icons/";
function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth,
  style,
  ...rest
}) {
  const url = ICON_BASE + name + ".svg";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    "data-icon": name,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      backgroundColor: color,
      WebkitMaskImage: "url(" + url + ")",
      maskImage: "url(" + url + ")",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      opacity: strokeWidth ? 1 : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  red: ["var(--brand-red-wash)", "var(--brand-red)"],
  coral: ["var(--brand-coral-wash)", "#B93B39"],
  indigo: ["var(--brand-indigo-wash)", "var(--brand-indigo)"],
  magenta: ["var(--brand-magenta-wash)", "var(--brand-magenta)"],
  orange: ["var(--brand-orange-wash)", "#C25200"],
  yellow: ["var(--brand-yellow-wash)", "#8A6600"],
  teal: ["var(--brand-teal-wash)", "#1F7C74"],
  neutral: ["var(--ink-100)", "var(--ink-700)"]
};
function Badge({
  children,
  tone = "red",
  solid = false,
  icon,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.red;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: solid ? fg : bg,
      color: solid ? "var(--text-on-brand)" : fg,
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: "var(--control-h-sm)",
    px: 18,
    fs: 14,
    icon: 16
  },
  md: {
    h: "var(--control-h-md)",
    px: 26,
    fs: 16,
    icon: 18
  },
  lg: {
    h: "var(--control-h-lg)",
    px: 34,
    fs: 17,
    icon: 20
  }
};
const VARIANTS = {
  primary: {
    bg: "var(--action-primary)",
    fg: "var(--text-on-brand)",
    bd: "transparent",
    hoverBg: "var(--action-primary-hover)",
    shadow: "var(--shadow-brand)"
  },
  secondary: {
    bg: "var(--action-secondary)",
    fg: "var(--text-on-brand)",
    bd: "transparent",
    hoverBg: "var(--action-secondary-hover)",
    shadow: "var(--shadow-indigo)"
  },
  outline: {
    bg: "var(--paper)",
    fg: "var(--brand-red)",
    bd: "var(--brand-red)",
    hoverBg: "var(--brand-red-wash)",
    shadow: "var(--shadow-xs)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--brand-red)",
    bd: "transparent",
    hoverBg: "var(--brand-red-wash)",
    shadow: "none"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      minHeight: s.h,
      padding: "0 " + s.px + "px",
      fontFamily: "var(--font-body)",
      fontSize: s.fs,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      textDecoration: "none",
      whiteSpace: "nowrap",
      color: v.fg,
      background: hover && !disabled ? v.hoverBg : v.bg,
      border: "2px solid " + v.bd,
      borderRadius: "var(--radius-pill)",
      boxShadow: variant === "ghost" ? "none" : v.shadow,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? "scale(var(--press-scale))" : hover && !disabled ? "translateY(var(--hover-lift))" : "none",
      transition: "background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: s.icon
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOXES = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const box = BOXES[size] || BOXES.md;
  const [hover, setHover] = React.useState(false);
  const solid = variant === "primary" || variant === "secondary";
  const bg = variant === "primary" ? "var(--action-primary)" : variant === "secondary" ? "var(--action-secondary)" : variant === "soft" ? "var(--brand-red-wash)" : "transparent";
  const hoverBg = variant === "primary" ? "var(--action-primary-hover)" : variant === "secondary" ? "var(--action-secondary-hover)" : "var(--brand-red-wash)";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: box,
      height: box,
      borderRadius: "var(--radius-circle)",
      border: variant === "outline" ? "2px solid var(--brand-red)" : "2px solid transparent",
      background: hover && !disabled ? hoverBg : bg,
      color: solid ? "var(--text-on-brand)" : "var(--brand-red)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(box * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  icon,
  onRemove,
  active = false,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      minHeight: 34,
      padding: "0 14px",
      borderRadius: "var(--radius-pill)",
      border: "2px solid " + (active ? "var(--brand-red)" : "var(--border-subtle)"),
      background: active ? "var(--brand-red-wash)" : "var(--paper)",
      color: active ? "var(--brand-red)" : "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-small)",
      fontWeight: "var(--weight-medium)",
      cursor: onClick ? "pointer" : "default",
      transition: "all var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      cursor: "pointer",
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-5)",
      background: "rgba(43,37,35,.45)",
      backdropFilter: "blur(3px)",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-7)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      lineHeight: "var(--lh-h3)",
      color: "var(--brand-red)",
      margin: 0
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      justifyContent: "flex-end",
      marginTop: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    bg: "var(--status-success-wash)",
    fg: "var(--status-success)",
    icon: "circle-check"
  },
  info: {
    bg: "var(--status-info-wash)",
    fg: "var(--status-info)",
    icon: "info"
  },
  warning: {
    bg: "var(--status-warning-wash)",
    fg: "#8A6600",
    icon: "triangle-alert"
  },
  error: {
    bg: "var(--status-error-wash)",
    fg: "var(--status-error)",
    icon: "circle-alert"
  }
};
function Toast({
  tone = "success",
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      maxWidth: 460,
      padding: "16px 18px",
      background: t.bg,
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.fg,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--size-small)",
      color: t.fg
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-small)",
      lineHeight: "var(--lh-small)",
      color: "var(--text-body)",
      marginTop: 2
    }
  }, children) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 2,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "var(--text-muted)"
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 20,
      padding: "8px 12px",
      background: "var(--ink-900)",
      color: "#FFFFFF",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? internal : checked;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      color: "var(--text-body)",
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: isOn,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInternal(e.target.checked);
      if (onChange) onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      marginTop: 2,
      flex: "0 0 auto",
      borderRadius: "var(--radius-xs)",
      border: "2px solid " + (isOn ? "var(--brand-red)" : "var(--border-strong)"),
      background: isOn ? "var(--brand-red)" : "var(--paper)",
      transition: "all var(--duration-base) var(--ease-standard)"
    }
  }, isOn ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--text-on-brand)"
  }) : null), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-small)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--ink-900)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-red)"
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--status-error)",
      fontWeight: "var(--weight-medium)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlBase = {
  width: "100%",
  minHeight: "var(--control-h-md)",
  padding: "0 16px",
  fontFamily: "var(--font-body)",
  fontSize: "var(--size-body)",
  color: "var(--ink-900)",
  background: "var(--paper)",
  border: "2px solid var(--border-subtle)",
  borderRadius: "var(--radius-md)",
  outline: "none",
  transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)"
};
function Input({
  icon,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--status-error)" : focus ? "var(--brand-indigo)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-muted)"
  })) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlBase,
      paddingLeft: icon ? 44 : 16,
      borderColor: border,
      boxShadow: focus ? "0 0 0 4px var(--brand-indigo-wash)" : "none",
      background: disabled ? "var(--surface-sunken)" : "var(--paper)",
      opacity: disabled ? 0.7 : 1,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { controlBase, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      color: "var(--text-body)",
      minHeight: "var(--tap-min)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      marginTop: 2,
      flex: "0 0 auto",
      borderRadius: "var(--radius-circle)",
      border: "2px solid " + (checked ? "var(--brand-red)" : "var(--border-strong)"),
      background: "var(--paper)",
      transition: "all var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "var(--radius-circle)",
      background: checked ? "var(--brand-red)" : "transparent",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  })), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlBase,
      appearance: "none",
      paddingRight: 44,
      cursor: "pointer",
      borderColor: invalid ? "var(--status-error)" : focus ? "var(--brand-indigo)" : "var(--border-subtle)",
      boxShadow: focus ? "0 0 0 4px var(--brand-indigo-wash)" : "none",
      ...style
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-muted)"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked === undefined ? internal : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    if (onChange) onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: toggle,
    role: "switch",
    "aria-checked": isOn,
    tabIndex: 0,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      color: "var(--text-body)",
      minHeight: "var(--tap-min)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 52,
      height: 30,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: isOn ? "var(--brand-red)" : "var(--ink-200)",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: isOn ? 25 : 3,
      width: 24,
      height: 24,
      borderRadius: "var(--radius-circle)",
      background: "var(--paper)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-base) var(--ease-out-soft)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlBase,
      minHeight: "auto",
      padding: "14px 16px",
      lineHeight: "var(--lh-body)",
      resize: "vertical",
      borderColor: invalid ? "var(--status-error)" : focus ? "var(--brand-indigo)" : "var(--border-subtle)",
      boxShadow: focus ? "0 0 0 4px var(--brand-indigo-wash)" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTABand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTABand({
  title,
  lead,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  tone = "red",
  style,
  ...rest
}) {
  const solid = tone === "red" ? "var(--brand-red)" : tone === "indigo" ? "var(--brand-indigo)" : "var(--paper-warm)";
  const onDark = tone !== "warm";
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-8) var(--space-8)",
      background: solid,
      borderRadius: "var(--radius-xl)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      minWidth: 0,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h2)",
      lineHeight: "var(--lh-h2)",
      color: onDark ? "#FFFFFF" : "var(--brand-red)",
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      lineHeight: "var(--lh-lead)",
      color: onDark ? "rgba(255,255,255,.92)" : "var(--text-body)"
    }
  }, lead) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)"
    }
  }, primaryLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: primaryHref,
    size: "lg",
    variant: onDark ? "outline" : "primary",
    style: onDark ? {
      background: "#FFFFFF",
      borderColor: "#FFFFFF",
      color: tone === "red" ? "var(--brand-red)" : "var(--brand-indigo)"
    } : undefined
  }, primaryLabel) : null, secondaryLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: secondaryHref,
    size: "lg",
    variant: "ghost",
    style: onDark ? {
      color: "#FFFFFF",
      border: "2px solid rgba(255,255,255,.55)"
    } : undefined
  }, secondaryLabel) : null));
}
Object.assign(__ds_scope, { CTABand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTABand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  red: ["var(--brand-red-wash)", "var(--brand-red)"],
  coral: ["var(--brand-coral-wash)", "var(--brand-coral)"],
  indigo: ["var(--brand-indigo-wash)", "var(--brand-indigo)"],
  magenta: ["var(--brand-magenta-wash)", "var(--brand-magenta)"],
  orange: ["var(--brand-orange-wash)", "var(--brand-orange)"],
  yellow: ["var(--brand-yellow-wash)", "var(--brand-yellow)"],
  teal: ["var(--brand-teal-wash)", "var(--brand-teal)"]
};
function FeatureCard({
  icon,
  tone = "red",
  title,
  children,
  href,
  style,
  ...rest
}) {
  const [wash, solid] = TONES[tone] || TONES.red;
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--card-pad)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "box-shadow var(--duration-base) var(--ease-out-soft), transform var(--duration-base) var(--ease-out-soft)",
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 56,
      height: 56,
      borderRadius: "var(--radius-circle)",
      background: wash,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    color: solid
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h4)",
      lineHeight: "var(--lh-h4)",
      color: "var(--ink-900)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuoteCard({
  quote,
  attribution,
  tone = "warm",
  basePath = "",
  style,
  ...rest
}) {
  const BG = {
    warm: ["var(--paper-warm)", "var(--ink-900)"],
    red: ["var(--brand-red)", "#FFFFFF"],
    indigo: ["var(--brand-indigo)", "#FFFFFF"],
    yellow: ["var(--brand-yellow-wash)", "var(--ink-900)"]
  };
  const [bg, fg] = BG[tone] || BG.warm;
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      margin: 0,
      padding: "var(--space-7)",
      background: bg,
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PowerBloom, {
    size: 44,
    basePath: basePath,
    ring: false
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h3)",
      lineHeight: "var(--lh-h3)",
      color: fg
    }
  }, quote), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-small)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: fg,
      opacity: 0.75
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  eyebrowTone = "red",
  title,
  accent,
  lead,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align === "center" ? "center" : "left",
      maxWidth: align === "center" ? "var(--container-narrow)" : 720,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: eyebrowTone
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h1)",
      lineHeight: "var(--lh-h1)",
      color: "var(--brand-red)",
      margin: 0
    }
  }, title, accent ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, " ", accent) : null), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      lineHeight: "var(--lh-lead)",
      color: "var(--text-body)"
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StepItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepItem({
  number,
  title,
  children,
  tone = "red",
  last = false,
  style,
  ...rest
}) {
  const COLORS = {
    red: "var(--brand-red)",
    indigo: "var(--brand-indigo)",
    orange: "var(--brand-orange)",
    magenta: "var(--brand-magenta)",
    teal: "var(--brand-teal)"
  };
  const color = COLORS[tone] || COLORS.red;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-circle)",
      background: color,
      color: "var(--text-on-brand)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: 20
    }
  }, number), last ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 2,
      background: "var(--border-subtle)",
      marginTop: 6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--size-h4)",
      lineHeight: "var(--lh-h4)",
      color: "var(--ink-900)",
      margin: "8px 0 6px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, children)));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: on ? "var(--brand-red-wash)" : "var(--surface-card)",
        border: "1px solid " + (on ? "transparent" : "var(--border-subtle)"),
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        transition: "background var(--duration-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        width: "100%",
        minHeight: 60,
        padding: "16px 22px",
        border: "none",
        background: "transparent",
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-bold)",
        fontSize: "var(--size-h4)",
        color: on ? "var(--brand-red)" : "var(--ink-900)"
      }
    }, it.question, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? "minus" : "plus",
      size: 20,
      color: on ? "var(--brand-red)" : "var(--text-muted)"
    })), on ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 22px 20px",
        fontSize: "var(--size-body)",
        lineHeight: "var(--lh-body)",
        color: "var(--text-body)"
      }
    }, it.answer) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const first = items.length ? typeof items[0] === "string" ? items[0] : items[0].value : "";
  const [internal, setInternal] = React.useState(defaultValue || first);
  const active = value === undefined ? internal : value;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: "var(--space-1)",
      padding: 6,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), items.map(it => {
    const val = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        if (value === undefined) setInternal(val);
        if (onChange) onChange(val);
      },
      style: {
        minHeight: 40,
        padding: "0 20px",
        border: "none",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--brand-red)" : "transparent",
        color: on ? "var(--text-on-brand)" : "var(--text-body)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-small)",
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        boxShadow: on ? "var(--shadow-sm)" : "none",
        transition: "background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialTemplates.jsx
try { (() => {
const {
  Logo,
  PowerBloom,
  Badge,
  Button,
  Icon,
  PetalStrengths,
  SpeechBubble,
  StepItem
} = window.PowerABADesignSystem_870410;
const BASE = "../..";
function Frame({
  w,
  h,
  label,
  children,
  bg
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      background: bg || "var(--paper)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, label));
}

/* Square 1080 carousel — adult-facing tip. Rendered at 420px. */
function CarouselSlide() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 420,
    label: "Instagram carousel 1080\xD71080 \u2014 Parker's One-Step Plan"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--paper-warm)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "indigo"
  }, "Parker\u2019s One-Step Plan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      lineHeight: 1.08,
      marginTop: 16,
      color: "var(--brand-red)"
    }
  }, "Preparing for a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, "schedule change")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink-700)",
      maxWidth: 300
    }
  }, "A change in routine can feel easier when a child knows what is changing, what will stay the same, and what choices are available."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BASE + "/assets/characters/poppy-parker-waving.png",
    alt: "",
    style: {
      height: 130
    }
  }), /*#__PURE__*/React.createElement(Logo, {
    lockup: "compact",
    height: 30,
    basePath: BASE
  }))));
}

/* Vertical 1080×1920 Reel cover. Rendered at 236×420. */
function ReelCover() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 236,
    h: 420,
    label: "Reel / Story cover 1080\xD71920"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BASE + "/assets/photos/play-time.jpg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(43,37,35,0) 30%,rgba(43,37,35,.88) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: "auto",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(PowerBloom, {
    size: 38,
    basePath: BASE,
    ring: false
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      lineHeight: 1.1,
      color: "#fff"
    }
  }, "A break can be part of the plan."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--brand-yellow)"
    }
  }, "Power Pal Tip")));
}

/* Square quote card — Power Bloom Friday. */
function BloomFridayCard() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 420,
    label: "Power Bloom Friday quote card 1080\xD71080",
    bg: "var(--brand-red)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(PowerBloom, {
    size: 52,
    basePath: BASE,
    ring: false
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      lineHeight: 1.08,
      marginTop: "auto",
      color: "#fff"
    }
  }, "Courage can look like asking for help."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      opacity: .85
    }
  }, "Power Bloom Friday"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 16
    }
  }, "Growing stronger every day."))));
}

/* Three-step printable graphic. */
function ThreeStepGraphic() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 420,
    label: "3-step graphic / printable 1080\xD71080"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, "Power Tool"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      lineHeight: 1.1,
      marginTop: 12
    }
  }, "Three ways to prepare for a schedule change"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(StepItem, {
    number: 1,
    tone: "red",
    title: "Preview the change"
  }, "Say what is different and what stays the same."), /*#__PURE__*/React.createElement(StepItem, {
    number: 2,
    tone: "indigo",
    title: "Show one clear next step"
  }, "First\u2013then, or a simple picture sequence."), /*#__PURE__*/React.createElement(StepItem, {
    number: 3,
    tone: "orange",
    title: "Leave room for questions",
    last: true
  }, "A break can be part of the plan."))));
}

/* Landscape email header / LinkedIn banner, echoing the supplied bio-builder banner. */
function EmailHeader() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 640,
    h: 256,
    label: "Email header / LinkedIn banner 1600\xD7640"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 10,
      background: "var(--paper-warm)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 34,
      lineHeight: 1.05
    }
  }, "Fill Out ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, "Your Bio Form")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--ink-900)"
    }
  }, "Your story makes our team stronger."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      alignSelf: "flex-start",
      background: "var(--brand-indigo)",
      color: "#fff",
      borderRadius: "var(--radius-md)",
      padding: "10px 16px",
      fontSize: 13,
      fontWeight: 600,
      maxWidth: 280,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notebook-pen",
    size: 20,
    color: "#fff"
  }), "Help families get to know the heroes behind Power ABA!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BASE + "/assets/photos/learning-corner.jpg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement(PowerBloom, {
    size: 40,
    basePath: BASE
  })))));
}

/* LinkedIn / community post — restrained, no characters. */
function LinkedInCard() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 300,
    label: "LinkedIn post 1200\xD7627 \u2014 restrained, characters sit out"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      background: "var(--brand-indigo)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "compact",
    height: 28,
    basePath: BASE,
    style: {
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      lineHeight: 1.15,
      color: "#fff"
    }
  }, "Power ABA helps families build meaningful skills through individualized support."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.8)"
    }
  }, "Jackson, New Jersey \xB7 Now hiring")));
}

/* In-clinic Petal Log take-home card. */
function PetalLogCard() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 300,
    label: "Petal Log take-home card 5\xD73.5in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24
    }
  }, "Petal Log"), /*#__PURE__*/React.createElement(PowerBloom, {
    size: 38,
    basePath: BASE,
    ring: false
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: "var(--text-muted)"
    }
  }, "Note the petal moments you notice at home. They feed the same flower as the ones earned in clinic."), /*#__PURE__*/React.createElement(PetalStrengths, {
    earned: ["courage", "curiosity"]
  }), /*#__PURE__*/React.createElement(SpeechBubble, {
    tone: "poppy",
    style: {
      alignSelf: "flex-start",
      marginTop: "auto"
    }
  }, "Celebrate the try.")));
}
Object.assign(window, {
  CarouselSlide,
  ReelCover,
  BloomFridayCard,
  ThreeStepGraphic,
  EmailHeader,
  LinkedInCard,
  PetalLogCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialTemplates.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FocusScreen.jsx
try { (() => {
const {
  SectionHeading,
  FeatureCard,
  Card,
  Badge,
  Icon,
  PetalStrengths,
  SpeechBubble,
  CTABand
} = window.PowerABADesignSystem_870410;
const FOCUS = [{
  icon: "messages-square",
  tone: "indigo",
  title: "Communication",
  body: "Building expressive and receptive language, conversation skills, and functional communication."
}, {
  icon: "heart-handshake",
  tone: "red",
  title: "Behavior Support",
  body: "Using positive, evidence-based strategies to build meaningful skills and reduce challenging behaviors."
}, {
  icon: "users",
  tone: "orange",
  title: "Social Development",
  body: "Helping children build friendships, share, take turns, and engage with confidence."
}, {
  icon: "sparkles",
  tone: "magenta",
  title: "Independence & Routines",
  body: "Encouraging daily living skills, self-care, and independence through consistent, supportive routines."
}, {
  icon: "school",
  tone: "teal",
  title: "Transitions & School-Readiness",
  body: "Supporting smoother transitions and building the social and emotional skills needed for school success."
}, {
  icon: "hand-heart",
  tone: "yellow",
  title: "Family Partnership",
  body: "Collaboration between educators, clinicians, and families throughout your child's day."
}];
function FocusScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper-warm)",
      padding: "var(--space-9) var(--gutter) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Areas of Focus",
    eyebrowTone: "indigo",
    title: "Skills that grow",
    accent: "with your child",
    lead: "The early years are an important time for developing communication, social, play, learning, and everyday life skills. Early ABA support can help children build meaningful skills while creating a strong foundation for greater independence and confidence."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y-tight) var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, FOCUS.map(f => /*#__PURE__*/React.createElement(FeatureCard, {
    key: f.title,
    icon: f.icon,
    tone: f.tone,
    title: f.title
  }, f.body)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper-warm)",
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.15fr",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "yellow"
  }, "The Power Bloom"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h1)",
      lineHeight: "var(--lh-h1)"
    }
  }, "Five strengths we ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, "notice and celebrate")), /*#__PURE__*/React.createElement("p", {
    style: {
      lineHeight: "var(--lh-body)"
    }
  }, "The Power Bloom brightens when a child communicates, practices, asks for help, shows kindness, tries a strategy, or celebrates meaningful progress \u2014 not because someone was perfect."), /*#__PURE__*/React.createElement(SpeechBubble, {
    tone: "parker"
  }, "One step at a time!")), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement(PetalStrengths, {
    showMeaning: true,
    layout: "stack"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, [["visual plan", "list-checks", "Shows what is happening now and what comes next."], ["meaningful choice", "split", "Offers two real, available options."], ["break request", "pause", "Communicates a need to pause without shame."], ["practice and preview", "repeat", "Builds familiarity before a new experience."], ["ask for help", "hand", "Models self-advocacy and trusted support."], ["calm body support", "wind", "Uses individualized regulation tools."]].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t[0],
    tone: "sunken",
    padding: "var(--card-pad-sm)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t[1],
    size: 22,
    color: "var(--brand-red)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ink-900)",
      textTransform: "capitalize"
    }
  }, t[0])), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-small)",
      lineHeight: "var(--lh-small)",
      color: "var(--text-muted)"
    }
  }, t[2]))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(CTABand, {
    tone: "warm",
    title: "Ask your care team how a strategy can be individualized.",
    lead: "This page is general education, not individualized clinical guidance.",
    primaryLabel: "Talk With Our Team"
  }))));
}
Object.assign(window, {
  FocusScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FocusScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GetStartedScreen.jsx
try { (() => {
const {
  SectionHeading,
  StepItem,
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Toast,
  Icon,
  Badge,
  CharacterCallout
} = window.PowerABADesignSystem_870410;
const STEPS = [["Reach Out", "Call us or complete our online form and tell us a little about your child.", "red"], ["Talk With Our Team", "We'll answer questions, learn about your needs, and help determine the best fit.", "indigo"], ["We'll Verify Your Insurance Coverage", "We'll help with insurance verification, paperwork, and next steps.", "orange"], ["Build a Plan Together & Begin", "Your child's strengths and goals guide an individualized ABA plan.", "magenta"]];
function GetStartedScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper-warm)",
      padding: "var(--space-9) var(--gutter) var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "We are with you every step of the way",
    title: "Getting Started",
    accent: "Is Simple",
    lead: "We'll guide your family from the first conversation through your child's first day in the Power Prep Program."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y-tight) var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, STEPS.map((s, i) => /*#__PURE__*/React.createElement(StepItem, {
    key: s[0],
    number: i + 1,
    tone: s[2],
    title: s[0],
    last: i === STEPS.length - 1
  }, s[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(CharacterCallout, {
    art: "waving",
    height: 160,
    tone: "poppy",
    line: "Celebrate the try.",
    basePath: "../.."
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)",
    style: {
      position: "sticky",
      top: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      margin: 0
    }
  }, "Start with a conversation"), /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    icon: "check"
  }, "Insurance accepted")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      marginBottom: "var(--space-5)"
    }
  }, "You don\u2019t need to have everything figured out before contacting us."), sent ? /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Thanks \u2014 we got your request.",
    onDismiss: () => setSent(false)
  }, "A team member will call within one business day.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "First and last name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Best phone number",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "phone",
    placeholder: "(555) 555-5555"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "mail",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Child's age"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select an age",
    options: ["2 – 3 years old", "4 – 6 years old", "7 – 10 years old", "11 – 13 years old"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Program of interest"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Choose a program",
    options: ["Before Care", "Preschool Day Program", "After-School Care", "Not sure yet"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tell us a little about your child",
    style: {
      gridColumn: "span 2"
    },
    hint: "Strengths, routines, and anything you'd like us to know."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "A few sentences is plenty."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 2",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd prefer a Spanish-speaking team member to call me."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Request a call back"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-5)",
      marginTop: "var(--space-6)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-subtle)",
      fontSize: "var(--size-small)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 17,
    color: "var(--brand-red)"
  }), "1-855-376-5020"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 17,
    color: "var(--brand-red)"
  }), "109 E Pleasant Grove Rd, Jackson, NJ 08527"))))));
}
Object.assign(window, {
  GetStartedScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GetStartedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon,
  SectionHeading,
  FeatureCard,
  QuoteCard,
  CTABand,
  Card
} = window.PowerABADesignSystem_870410;
const FOCUS = [{
  icon: "messages-square",
  tone: "indigo",
  title: "Communication",
  body: "Building expressive and receptive language, conversation skills, and functional communication."
}, {
  icon: "heart-handshake",
  tone: "red",
  title: "Behavior Support",
  body: "Using positive, evidence-based strategies to build meaningful skills and reduce challenging behaviors."
}, {
  icon: "users",
  tone: "orange",
  title: "Social Development",
  body: "Helping children build friendships, share, take turns, and engage with confidence."
}, {
  icon: "sparkles",
  tone: "magenta",
  title: "Independence & Routines",
  body: "Encouraging daily living skills, self-care, and independence through consistent, supportive routines."
}, {
  icon: "school",
  tone: "teal",
  title: "Transitions & School-Readiness",
  body: "Supporting smoother transitions and building the social and emotional skills needed for school success."
}, {
  icon: "hand-heart",
  tone: "yellow",
  title: "Family Partnership",
  body: "Collaboration between educators, clinicians, and families throughout your child's day."
}];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg,var(--paper) 0%,var(--paper-warm) 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--size-display-2)",
      lineHeight: "var(--lh-display-2)",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, "ABA Therapy"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-red)"
    }
  }, "in New Jersey")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 26,
      lineHeight: 1.35,
      color: "var(--ink-900)",
      maxWidth: 420
    }
  }, "Together we unlock the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-red)"
    }
  }, "power"), " within every child."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("start")
  }, "Get Started Today"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go("focus")
  }, "Learn More")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      marginTop: "var(--space-3)"
    }
  }, [["user-round-check", "Personalized Care", "var(--brand-indigo)"], ["target", "Evidence-Based", "var(--brand-red)"], ["heart", "Compassionate Team", "var(--brand-coral)"]].map(t => /*#__PURE__*/React.createElement("span", {
    key: t[1],
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--size-small)",
      fontWeight: 500,
      color: "var(--ink-700)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t[0],
    size: 20,
    color: t[2]
  }), t[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 420
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/circle-time.jpg",
    alt: "Children and a clinician at circle time",
    style: {
      width: "100%",
      height: 420,
      objectFit: "cover",
      borderRadius: "var(--radius-blob)",
      boxShadow: "var(--shadow-lg)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/characters/poppy-parker-full-body.png",
    alt: "Poppy and Parker",
    style: {
      position: "absolute",
      left: -70,
      bottom: -24,
      height: 300,
      width: "auto",
      filter: "drop-shadow(0 14px 26px rgba(43,37,35,.22))"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-brand)",
      padding: "18px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      color: "#fff",
      fontSize: "var(--size-small)",
      fontWeight: 600
    }
  }, [["shield-check", "Insurance & Medicaid accepted"], ["languages", "English & Spanish services available"], ["map-pin", "Jackson, New Jersey"], ["phone", "1-855-376-5020"]].map(t => /*#__PURE__*/React.createElement("span", {
    key: t[1],
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t[0],
    size: 18,
    color: "#fff"
  }), t[1])))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Areas of Focus",
    eyebrowTone: "indigo",
    title: "Skills that grow",
    accent: "with your child",
    lead: "The early years are an important time for developing communication, social, play, learning, and everyday life skills."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, FOCUS.map(f => /*#__PURE__*/React.createElement(FeatureCard, {
    key: f.title,
    icon: f.icon,
    tone: f.tone,
    title: f.title
  }, f.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper-warm)",
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/learning-corner.jpg",
    alt: "",
    style: {
      width: "100%",
      height: 300,
      objectFit: "cover",
      borderRadius: "var(--radius-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/play-time.jpg",
    alt: "",
    style: {
      width: "100%",
      height: 142,
      objectFit: "cover",
      borderRadius: "var(--radius-lg)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/outside-kitchen.jpg",
    alt: "",
    style: {
      width: "100%",
      height: 142,
      objectFit: "cover",
      borderRadius: "var(--radius-lg)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "Early Intervention"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--size-h1)",
      lineHeight: "var(--lh-h1)"
    }
  }, "Early Support Creates ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, "More Opportunities to Grow")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      lineHeight: "var(--lh-lead)"
    }
  }, "Early intervention meets your child where they are, helping them build new skills, routines, and confidence during an important stage of development."), /*#__PURE__*/React.createElement("p", {
    style: {
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, "Early ABA support can help children build meaningful skills while creating a strong foundation for greater independence and confidence."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconAfter: "arrow-right",
    onClick: () => go("prep")
  }, "See the Power Prep Program")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    tone: "warm",
    basePath: "../..",
    quote: "Every try, every step, and every success helps us grow stronger.",
    attribution: "Core Power Pals belief"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/characters/poppy-parker-waving.png",
    alt: "Poppy and Parker",
    style: {
      height: 190,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h2)",
      lineHeight: "var(--lh-h2)"
    }
  }, "Meet Poppy & Parker, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, "the Power Pals")), /*#__PURE__*/React.createElement("p", {
    style: {
      lineHeight: "var(--lh-body)"
    }
  }, "Poppy and Parker help families learn, practice, and celebrate growth together. Whether they are learning a new skill, facing an unexpected change, or finding the courage to try again, these two friends know that real power comes from patience, practice, communication, and believing in what is possible.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(CTABand, {
    tone: "red",
    title: "Questions? Start with a conversation.",
    lead: "You don't need to have everything figured out before contacting us.",
    primaryLabel: "Call 1-855-376-5020",
    secondaryLabel: "Request Information"
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProgramScreen.jsx
try { (() => {
const {
  Badge,
  Button,
  Card,
  Icon,
  Tabs,
  SectionHeading,
  CTABand,
  Accordion
} = window.PowerABADesignSystem_870410;
const DAYPARTS = {
  "Before Care": {
    ages: "2 – 13 years old",
    time: "6:30 AM – Jackson bus route pickup available",
    lead: "A calm, supportive start to the day with structured routines, play, social interaction, and opportunities to practice communication and independence skills.",
    points: ["Morning routines and transitions", "Communication and requesting", "Independent play and peer interaction"],
    tone: "orange"
  },
  "Preschool Day Program": {
    ages: "2 – 3 years old",
    time: "8:30 AM – Parent or Jackson bus route pickup",
    lead: "A full-day learning environment where education, play, social development, and individualized ABA support come together.",
    points: ["Communication and social development", "Classroom participation and routines", "Independence and school-readiness"],
    tone: "indigo"
  },
  "After-School Care": {
    ages: "School age – 13 years old",
    time: "Jackson bus drop-off after school – 6:30 PM",
    lead: "A supportive place to continue learning, connecting, and building independence through peer interaction, play, structured activities, and everyday routines.",
    points: ["Social and friendship skills", "Communication and conversation", "Emotional regulation", "Independence and daily living skills", "Homework and routine completion"],
    tone: "magenta"
  }
};
function ProgramScreen({
  go
}) {
  const [day, setDay] = React.useState("Before Care");
  const d = DAYPARTS[day];
  const TONE = {
    orange: "var(--brand-orange)",
    indigo: "var(--brand-indigo)",
    magenta: "var(--brand-magenta)"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper-warm)",
      padding: "var(--space-9) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, "Introducing the"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--size-display-2)",
      lineHeight: "var(--lh-display-2)",
      margin: 0
    }
  }, "Power Prep ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-indigo)"
    }
  }, "Program")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 1.3,
      color: "var(--ink-900)"
    }
  }, "Where Children with Autism Learn, Connect & Grow"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      lineHeight: "var(--lh-lead)"
    }
  }, "Learn. Play. Build friendships while receiving individualized ABA support in one nurturing educational environment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("start")
  }, "Call Today to Learn More"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => go("focus")
  }, "Areas of Focus"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/learning-corner.jpg",
    alt: "The Preparatory Academy classroom",
    style: {
      width: "100%",
      height: 430,
      objectFit: "cover",
      borderRadius: "var(--radius-blob)",
      boxShadow: "var(--shadow-lg)"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The Power Prep Difference",
    title: "Education + ABA Therapy",
    accent: "Working Together",
    lead: "Power ABA Therapy and The Preparatory Academy in Jackson, NJ have come together to create the Power Prep Program, a supportive educational environment where children on the autism spectrum can learn alongside their peers while receiving individualized ABA therapy."
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "indigo",
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      color: "var(--brand-indigo)",
      marginBottom: "var(--space-4)"
    }
  }, "One Team. One Environment. Shared Goals."), /*#__PURE__*/React.createElement("p", {
    style: {
      lineHeight: "var(--lh-body)",
      marginBottom: "var(--space-4)"
    }
  }, "Rather than separating therapy from a child's educational day, Power Prep creates opportunities for ABA strategies to be practiced where children naturally learn, play, communicate, transition, and interact with peers."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["Skills practiced in real-life routines", "Collaboration between clinicians, educators & families", "Greater consistency throughout the child's day"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      gap: 10,
      fontSize: "var(--size-small)",
      color: "var(--ink-900)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--brand-indigo)"
  }), t)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper-warm)",
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Flexible ABA support",
    title: "Before, During &",
    accent: "After the School Day"
  }), /*#__PURE__*/React.createElement(Tabs, {
    items: Object.keys(DAYPARTS),
    value: day,
    onChange: setDay
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      width: "100%",
      maxWidth: 900
    },
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      alignItems: "center",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--size-h3)",
      color: TONE[d.tone],
      margin: 0
    }
  }, day), /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.ages), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--size-small)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: TONE[d.tone]
  }), d.time)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      lineHeight: "var(--lh-lead)",
      marginBottom: "var(--space-5)"
    }
  }, d.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "var(--space-3)"
    }
  }, d.points.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      display: "flex",
      gap: 10,
      padding: "12px 16px",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      fontSize: "var(--size-small)",
      color: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 18,
    color: TONE[d.tone]
  }), p)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Support that grows with your child",
    title: "More Than Care.",
    accent: "Skills for Everyday Life."
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: "What does a Power Prep day include?",
      answer: "ABA support integrated into the school day, with before and after care available."
    }, {
      question: "How do you support school readiness?",
      answer: "School readiness, support for routines, and transitions — practiced inside natural classroom routines."
    }, {
      question: "Who is on my child's team?",
      answer: "Collaboration between educators, clinicians, and families."
    }, {
      question: "What goals does the program work on?",
      answer: "Communication, social, behavioral, and independence goals."
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--gutter) var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(CTABand, {
    tone: "indigo",
    title: "Together, we unlock the power within every child.",
    lead: "English & Spanish services available. Insurance & Medicaid accepted.",
    primaryLabel: "Call 1-855-376-5020"
  }))));
}
Object.assign(window, {
  ProgramScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProgramScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon,
  PowerBloom
} = window.PowerABADesignSystem_870410;
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "focus",
  label: "Areas of Focus"
}, {
  id: "prep",
  label: "Power Prep Program"
}, {
  id: "start",
  label: "Getting Started"
}];
function SiteHeader({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(255,255,255,.94)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "14px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "digital",
    height: 46,
    basePath: "../.."
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      fontSize: "var(--size-small)",
      fontWeight: "var(--weight-semibold)",
      color: route === n.id ? "var(--brand-red)" : "var(--ink-700)",
      textDecoration: "none",
      paddingBottom: 3,
      borderBottom: "2px solid " + (route === n.id ? "var(--brand-red)" : "transparent")
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:18553765020",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--size-small)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--ink-900)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--brand-red)"
  }), "1-855-376-5020"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: () => go("start")
  }, "Get Started Today"))));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-footer)",
      color: "rgba(255,255,255,.82)",
      padding: "var(--space-9) var(--gutter) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PowerBloom, {
    size: 40,
    basePath: "../..",
    ring: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 24,
      color: "#fff"
    }
  }, "Power ABA Therapy")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-small)",
      lineHeight: 1.7
    }
  }, "Together we unlock the potential in every child."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, ["facebook", "instagram", "linkedin", "youtube"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18,
    color: "#fff"
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 12
    }
  }, "Explore"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: "var(--size-small)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("li", {
    key: n.id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      color: "rgba(255,255,255,.82)"
    }
  }, n.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 12
    }
  }, "Services"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: "var(--size-small)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Early Intervention"), /*#__PURE__*/React.createElement("li", null, "Before Care"), /*#__PURE__*/React.createElement("li", null, "Preschool Day Program"), /*#__PURE__*/React.createElement("li", null, "After-School Care"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 12
    }
  }, "Visit or Call"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: "var(--size-small)",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--brand-yellow)"
  }), "109 E Pleasant Grove Rd, Jackson, NJ 08527"), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--brand-yellow)"
  }), "1-855-376-5020"), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "languages",
    size: 16,
    color: "var(--brand-yellow)"
  }), "English & Spanish services available")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-7) auto 0",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid rgba(255,255,255,.15)",
      fontSize: "var(--size-caption)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Power ABA Therapy. Insurance & Medicaid accepted."), /*#__PURE__*/React.createElement("span", null, "General education \u2014 not individualized clinical guidance.")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CharacterCallout = __ds_scope.CharacterCallout;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PetalStrengths = __ds_scope.PetalStrengths;

__ds_ns.PowerBloom = __ds_scope.PowerBloom;

__ds_ns.SpeechBubble = __ds_scope.SpeechBubble;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CTABand = __ds_scope.CTABand;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
