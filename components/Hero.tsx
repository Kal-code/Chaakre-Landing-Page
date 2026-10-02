export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          Make Top Candidates Believe Your Company Is Worth Applying To
        </h1>
        <p className="hero__sub">
          Top talent doesn&apos;t apply everywhere. They choose companies they
          believe in. We help you become one of them.
        </p>

        <div className="hero__cta-desktop">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZe7B8lJSP0tt15G4-006MMRUnTQN6yFb7BgBszg84HflvHA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill cta-pill--hero"
          >
            <img
              src="/images/tg-photo.png"
              alt=""
              width={34}
              height={34}
              className="cta-pill__avatar cta-pill__avatar--hero"
            />
            Get free Audit
          </a>
        </div>

        <div className="hero__cta-mobile">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZe7B8lJSP0tt15G4-006MMRUnTQN6yFb7BgBszg84HflvHA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            <img
              src="/images/tg-photo.png"
              alt=""
              width={24}
              height={24}
              className="cta-btn__avatar"
            />
            Get free Audit
          </a>
        </div>

        <div className="hero__funnel-desktop">
          <div className="funnel-card">
            <div className="funnel-inner">
              <div className="funnel-line" />

              <div className="funnel-step" style={{ width: 400, height: 92 }}>
                <svg width={400} height={92} viewBox="0 0 400 92" className="funnel-svg" preserveAspectRatio="none">
                  <path
                    d="M20,0 L380,0 C391,0 400,9 400,20 L358,76 C355,85 346,92 337,92 L63,92 C54,92 45,85 42,76 L0,20 C0,9 9,0 20,0 Z"
                    fill="#DDE0E5"
                    stroke="#CCCCCC"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="funnel-label" style={{ fontSize: 24 }}>Attract</span>
              </div>

              <div className="funnel-step" style={{ width: 309, height: 92 }}>
                <svg width={309} height={92} viewBox="0 0 309 92" className="funnel-svg" preserveAspectRatio="none">
                  <path
                    d="M20,0 L289,0 C300,0 309,9 309,20 L272,76 C269,85 260,92 251,92 L58,92 C49,92 40,85 37,76 L0,20 C0,9 9,0 20,0 Z"
                    fill="#DDE0E5"
                    stroke="#CCCCCC"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="funnel-label" style={{ fontSize: 24 }}>Convince</span>
              </div>

              <div className="funnel-step" style={{ width: 220, height: 84 }}>
                <svg width={220} height={84} viewBox="0 0 220 84" className="funnel-svg" preserveAspectRatio="none">
                  <path
                    d="M20,0 L200,0 C211,0 220,9 220,20 L188,68 C185,77 176,84 167,84 L53,84 C44,84 35,77 32,68 L0,20 C0,9 9,0 20,0 Z"
                    fill="#DDE0E5"
                    stroke="#CCCCCC"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="funnel-label" style={{ fontSize: 24 }}>Interview</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__funnel-mobile">
          <div className="funnel-card">
            <div className="funnel-inner">
              <div className="funnel-line" />

              <div className="funnel-step" style={{ width: 238, height: 68 }}>
                <svg width={238} height={68} viewBox="0 0 238 68" className="funnel-svg" preserveAspectRatio="none">
                  <path
                    d="M16,0 L222,0 C230,0 238,8 238,16 L210,56 C208,64 200,68 192,68 L46,68 C38,68 30,64 28,56 L0,16 C0,8 8,0 16,0 Z"
                    fill="#DDE0E5"
                    stroke="#CCCCCC"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="funnel-label" style={{ fontSize: 16 }}>Attract</span>
              </div>

              <div className="funnel-step" style={{ width: 184, height: 68 }}>
                <svg width={184} height={68} viewBox="0 0 184 68" className="funnel-svg" preserveAspectRatio="none">
                  <path
                    d="M16,0 L168,0 C176,0 184,8 184,16 L160,56 C158,64 150,68 144,68 L40,68 C34,68 26,64 24,56 L0,16 C0,8 8,0 16,0 Z"
                    fill="#DDE0E5"
                    stroke="#CCCCCC"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="funnel-label" style={{ fontSize: 16 }}>Convince</span>
              </div>

              <div className="funnel-step" style={{ width: 142, height: 62 }}>
                <svg width={142} height={62} viewBox="0 0 142 62" className="funnel-svg" preserveAspectRatio="none">
                  <path
                    d="M16,0 L126,0 C134,0 142,8 142,16 L122,48 C120,56 112,62 106,62 L36,62 C30,62 22,56 20,48 L0,16 C0,8 8,0 16,0 Z"
                    fill="#DDE0E5"
                    stroke="#CCCCCC"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="funnel-label" style={{ fontSize: 14, lineHeight: "21px" }}>Interview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
