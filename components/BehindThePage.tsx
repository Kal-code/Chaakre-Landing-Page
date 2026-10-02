const STEPS = [
  {
    title: "Find Where Candidate Conviction Breaks",
    text: "We audit your job posts, career page, application flow, and candidate touchpoints to find where qualified candidates lose interest or confidence.",
  },
  {
    title: "Understand What Your Best Candidates Need to Believe",
    text: "We research the people you're trying to hire and identify their questions, objections, motivations, and the evidence they need before choosing your company.",
  },
  {
    title: "Turn Those Insights Into Your Hiring Message",
    text: "We develop the story, positioning, proof, role value, culture, and messaging that answer those questions and make your opportunity worth considering.",
  },
  {
    title: "Design the Experience Around the Decision",
    text: "We turn that strategy into the UX, structure, and visual design of your career page so candidates can find the information they need and build confidence as they move through it.",
  },
  {
    title: "Deliver the Finished Candidate Experience",
    text: "You get a complete career page ready to put behind your job posts, LinkedIn, referrals, outreach, and other hiring channels.",
  },
];

export default function BehindThePage() {
  return (
    <section className="behind">
      <div className="container">
        <div className="badge-row badge-row--left">
          <span className="badge">Behind the Page</span>
        </div>
        <h2 className="section-title section-title--left">
          What We Build Behind the Career Page
        </h2>
        <p className="behind__sub">
          The page is the final interface. The real work happens before it.
        </p>

        <div className="steps-card">
          {STEPS.map((s, i) => (
            <div key={s.title} className="step">
              <span className="step__num">{i + 1}</span>
              <div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}