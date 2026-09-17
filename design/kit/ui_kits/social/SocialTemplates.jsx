const { Logo, PowerBloom, Badge, Button, Icon, PetalStrengths, SpeechBubble, StepItem } = window.PowerABADesignSystem_870410;

const BASE = "../..";

function Frame({ w, h, label, children, bg }) {
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ width: w, height: h, background: bg || "var(--paper)", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-md)", position: "relative", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
      <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{label}</figcaption>
    </figure>
  );
}

/* Square 1080 carousel — adult-facing tip. Rendered at 420px. */
function CarouselSlide() {
  return (
    <Frame w={420} h={420} label="Instagram carousel 1080×1080 — Parker's One-Step Plan">
      <div style={{ padding: 28, display: "flex", flexDirection: "column", height: "100%", background: "var(--paper-warm)" }}>
        <Badge tone="indigo">Parker&rsquo;s One-Step Plan</Badge>
        <h2 style={{ fontSize: 38, lineHeight: 1.08, marginTop: 16, color: "var(--brand-red)" }}>
          Preparing for a <span style={{ color: "var(--brand-indigo)" }}>schedule change</span>
        </h2>
        <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: "var(--ink-700)", maxWidth: 300 }}>
          A change in routine can feel easier when a child knows what is changing, what will stay the same, and what choices are available.
        </p>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <img src={BASE + "/assets/characters/poppy-parker-waving.png"} alt="" style={{ height: 130 }} />
          <Logo lockup="compact" height={30} basePath={BASE} />
        </div>
      </div>
    </Frame>
  );
}

/* Vertical 1080×1920 Reel cover. Rendered at 236×420. */
function ReelCover() {
  return (
    <Frame w={236} h={420} label="Reel / Story cover 1080×1920">
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={BASE + "/assets/photos/play-time.jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(43,37,35,0) 30%,rgba(43,37,35,.88) 100%)" }} />
      </div>
      <div style={{ position: "relative", marginTop: "auto", padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        <PowerBloom size={38} basePath={BASE} ring={false} />
        <h2 style={{ fontSize: 26, lineHeight: 1.1, color: "#fff" }}>A break can be part of the plan.</h2>
        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--brand-yellow)" }}>Power Pal Tip</span>
      </div>
    </Frame>
  );
}

/* Square quote card — Power Bloom Friday. */
function BloomFridayCard() {
  return (
    <Frame w={420} h={420} label="Power Bloom Friday quote card 1080×1080" bg="var(--brand-red)">
      <div style={{ padding: 32, display: "flex", flexDirection: "column", height: "100%", color: "#fff" }}>
        <PowerBloom size={52} basePath={BASE} ring={false} />
        <h2 style={{ fontSize: 40, lineHeight: 1.08, marginTop: "auto", color: "#fff" }}>Courage can look like asking for help.</h2>
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", opacity: .85 }}>Power Bloom Friday</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16 }}>Growing stronger every day.</span>
        </div>
      </div>
    </Frame>
  );
}

/* Three-step printable graphic. */
function ThreeStepGraphic() {
  return (
    <Frame w={420} h={420} label="3-step graphic / printable 1080×1080">
      <div style={{ padding: 28, display: "flex", flexDirection: "column", height: "100%" }}>
        <Badge tone="red">Power Tool</Badge>
        <h2 style={{ fontSize: 30, lineHeight: 1.1, marginTop: 12 }}>Three ways to prepare for a schedule change</h2>
        <div style={{ marginTop: 18 }}>
          <StepItem number={1} tone="red" title="Preview the change">Say what is different and what stays the same.</StepItem>
          <StepItem number={2} tone="indigo" title="Show one clear next step">First&ndash;then, or a simple picture sequence.</StepItem>
          <StepItem number={3} tone="orange" title="Leave room for questions" last>A break can be part of the plan.</StepItem>
        </div>
      </div>
    </Frame>
  );
}

/* Landscape email header / LinkedIn banner, echoing the supplied bio-builder banner. */
function EmailHeader() {
  return (
    <Frame w={640} h={256} label="Email header / LinkedIn banner 1600×640">
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", height: "100%" }}>
        <div style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, background: "var(--paper-warm)" }}>
          <h2 style={{ fontSize: 34, lineHeight: 1.05 }}>Fill Out <span style={{ color: "var(--brand-indigo)" }}>Your Bio Form</span></h2>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--ink-900)" }}>Your story makes our team stronger.</p>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, alignSelf: "flex-start", background: "var(--brand-indigo)", color: "#fff", borderRadius: "var(--radius-md)", padding: "10px 16px", fontSize: 13, fontWeight: 600, maxWidth: 280, lineHeight: 1.4 }}>
            <Icon name="notebook-pen" size={20} color="#fff" />
            Help families get to know the heroes behind Power ABA!
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <img src={BASE + "/assets/photos/learning-corner.jpg"} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <span style={{ position: "absolute", right: 14, bottom: 14 }}><PowerBloom size={40} basePath={BASE} /></span>
        </div>
      </div>
    </Frame>
  );
}

/* LinkedIn / community post — restrained, no characters. */
function LinkedInCard() {
  return (
    <Frame w={420} h={300} label="LinkedIn post 1200×627 — restrained, characters sit out">
      <div style={{ padding: 28, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", background: "var(--brand-indigo)" }}>
        <Logo lockup="compact" height={28} basePath={BASE} style={{ filter: "brightness(0) invert(1)" }} />
        <h2 style={{ fontSize: 30, lineHeight: 1.15, color: "#fff" }}>Power ABA helps families build meaningful skills through individualized support.</h2>
        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.8)" }}>Jackson, New Jersey &middot; Now hiring</span>
      </div>
    </Frame>
  );
}

/* In-clinic Petal Log take-home card. */
function PetalLogCard() {
  return (
    <Frame w={420} h={300} label="Petal Log take-home card 5×3.5in">
      <div style={{ padding: 24, display: "flex", flexDirection: "column", height: "100%", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ fontSize: 24 }}>Petal Log</h3>
          <PowerBloom size={38} basePath={BASE} ring={false} />
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--text-muted)" }}>Note the petal moments you notice at home. They feed the same flower as the ones earned in clinic.</p>
        <PetalStrengths earned={["courage", "curiosity"]} />
        <SpeechBubble tone="poppy" style={{ alignSelf: "flex-start", marginTop: "auto" }}>Celebrate the try.</SpeechBubble>
      </div>
    </Frame>
  );
}

Object.assign(window, { CarouselSlide, ReelCover, BloomFridayCard, ThreeStepGraphic, EmailHeader, LinkedInCard, PetalLogCard });
