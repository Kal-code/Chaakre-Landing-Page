const STATS = [
  {
    num: "70%",
    text: "Job seekers visit the company's website before applying.",
    source: "iHire, 2024",
  },
  {
    num: "60%",
    text: "of candidates abandon applications that feel too long or complicated.",
    source: "Hire DNA",
  },
  {
    num: "40 %",
    text: "of job seekers have encountered job postings they believed were fake.",
    source: "Resume Builder",
  },
];

export default function Research() {
  return (
    <section className="research">
      <div className="container">
        <div className="badge-row">
          <span className="badge">Research</span>
        </div>
        <h2 className="section-title" style={{ marginTop: 8 }}>
          Why Most Companies Lose Qualified Candidates Before the Interview
        </h2>
        <p className="section-sub">
          We found that most top talent is already employed and explores
          opportunities cautiously, wary of ghost jobs, scams, and the
          uncertainty of joining a new company.
        </p>

        <div className="research__card">
          <div className="research__grid">
            {STATS.map((s) => (
              <div key={s.num} className="stat">
                <div className="stat__rail" aria-hidden="true" />
                <div className="stat__content">
                  <div className="stat__num">{s.num}</div>
                  <p className="stat__body">{s.text}</p>
                  <p className="stat__source">Source:</p>
                  <p className="stat__link">{s.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}