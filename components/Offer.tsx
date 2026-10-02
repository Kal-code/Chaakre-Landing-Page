export default function Offer() {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__card">
          <div className="badge-row">
            <span className="badge">Offer</span>
          </div>
          <h2 className="section-title offer__title">
            We&apos;ll Build High Conversion Career Page. You Only Pay If
            You&apos;re Proud to Share
          </h2>
          <p className="offer__sub">
            From strategy and messaging to copywriting, design, and launch, We
            will create a career page that gives qualified candidates a reason
            to choose your company. If you&apos;re not genuinely proud to send
            every candidate to it, you don&apos;t pay.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZe7B8lJSP0tt15G4-006MMRUnTQN6yFb7BgBszg84HflvHA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill cta-pill--offer"
          >
            <img
              src="/images/tg-photo.png"
              alt=""
              width={32}
              height={32}
              className="cta-pill__avatar cta-pill__avatar--offer"
            />
            Get free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
