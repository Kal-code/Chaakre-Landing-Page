const STEPS = [
  {
    title: "Candidate discovers the opportunity",
    desc: "They find your role through LinkedIn, Job boards, or referrals.",
    phone: "/images/phone-discover.png",
    alt: "Job post on LinkedIn phone mockup",
  },
  {
    title: "Candidate Visits Your Career Page",
    desc: "Link it wherever candidates find you, before they apply: LinkedIn, job posts, referrals, or outreach.",
    phone: "/images/phone-visits.png",
    alt: "Career page on a phone mockup",
  },
  {
    title: "Candidate Chooses to Apply",
    desc: "They reach the application knowing they want to be a part of your company.",
    phone: "/images/phone-applies.png",
    alt: "Application form on a phone mockup",
  },
];

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="phone-mockup">
      <div className="phone-mockup__frame">
        <img src={src} alt={alt} className="phone-mockup__screen" />
      </div>
    </div>
  );
}

export default function UseCaseJourney() {
  return (
    <section className="usecase">
      <div className="container">
        <div className="usecase__header">
          <span className="pill pill--sm">Use Case</span>
          <h2 className="section-title" style={{ marginTop: 4 }}>
            Where Your Career Page Fits in the Hiring Journey
          </h2>
           <p className="section-sub">
            Your job post gets candidates interested in the role. Your career
            page helps them understand the company behind it, build trust, and
            decide whether the opportunity is worth pursuing.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="usecase__desktop">
          <div className="usecase__phones">
            {STEPS.map((step) => (
              <PhoneMockup key={step.title} src={step.phone} alt={step.alt} />
            ))}
          </div>
          <div className="usecase__timeline">
            <span className="usecase__dot usecase__dot--filled" style={{ left: "2.73%" }} />
            <span className="usecase__timeline-line" style={{ left: "4.3%", right: "51.56%" }} />
            <span className="usecase__dot usecase__dot--hollow" style={{ left: "50%" }} />
            <span className="usecase__timeline-line" style={{ left: "51.56%", right: "4.3%" }} />
            <span className="usecase__dot usecase__dot--hollow" style={{ left: "97.27%" }} />
          </div>
          <div className="usecase__cols">
            {STEPS.map((step) => (
              <div key={step.title} className="usecase__col">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="usecase__mobile">
          <div className="journey-wrap">
            <div className="journey-timeline">
              <span className="journey-dot journey-dot--filled" style={{ top: 0 }} />
              <span className="journey-line" style={{ top: 19, height: 279 }} />
              <span className="journey-dot journey-dot--hollow" style={{ top: 300 }} />
              <span className="journey-line" style={{ top: 320, height: 309 }} />
              <span className="journey-dot journey-dot--gradient" style={{ top: 632 }} />
            </div>
            <div className="journey-steps">
              {STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className="journey-step"
                  style={{ top: [-3, 299, 627][i] }}
                >
                  <div className="journey-step__text">
                    <p className="journey-step__title">{step.title}</p>
                    <p className="journey-step__desc">{step.desc}</p>
                  </div>
                  <img
                    src={step.phone}
                    alt={step.alt}
                    width={122}
                    height={248}
                    className="journey-step__phone"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
