const AVATARS = [
  "/images/avatar-shanu.png",
  "/images/avatar-trisha.png",
  "/images/avatar-harsh.png",
];

const QUOTES = [
  {
    quote: (
      <>
        &ldquo;Many companies ask why I am a good fit,{" "}
        <strong>but they give so little information beyond the job description</strong>{" "}
        that I cannot even tell if they&rsquo;re a good fit for me.&rdquo;
      </>
    ),
    name: "Shanu | Candidate",
  },
  {
    quote: (
      <>
        &ldquo; There are so{" "}
        <strong>many scam postings out there I wouldn&rsquo;t want to send in a video</strong>{" "}
        for some scammer to steal my voice from. It&rsquo;s not that I am lazy or low
        effort it&rsquo;s that I am protecting myself.&rdquo;
      </>
    ),
    name: "Trisha A. | Employee",
  },
  {
    quote: (
      <>
        &ldquo; <strong>Some companies feel low trust</strong>. If I see a long form with
        very little information, I will not fill it out. &rdquo;
      </>
    ),
    name: "Harsh | Candidate",
  },
];

export default function Interviews() {
  return (
    <section className="interviews">
      <div className="container">
        <div className="badge-row badge-row--left">
          <span className="badge">Candidate Interviews</span>
        </div>
        <h2 className="section-title section-title--left" style={{ marginTop: 8 }}>
          Candidates Are Evaluating You Too
        </h2>
        <p className="interviews__sub">
          Before they apply, candidates are deciding whether the opportunity is
          worth their time, energy, and career risk.
        </p>

        <div className="quote-cards">
          {QUOTES.map((q, i) => (
              <div key={q.name} className="quote-card">
                <div className="quote-card__rail" aria-hidden="true" />
                <div className="quote-card__content">
                  <p className="quote-card__quote">{q.quote}</p>
                  <div className="quote-card__person">
                    <img className="quote-card__avatar" src={AVATARS[i]} alt={q.name} />
                    <span className="quote-card__name">{q.name}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
