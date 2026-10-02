const QUESTIONS = [
  "Can I actually trust this company and the people behind it?",
  "Why should I choose this company over my other options?",
  "Will this role help me grow or just give me another job?",
  "What happens after I apply, and will my time be respected?",
  "Is this company financially sound and on a growth path?",
  "What are the people here actually like to work with?",
  "Is this opportunity worth the risk of leaving where I am now?",
];

function Check() {
  return (
    <svg className="questions__check" viewBox="0 0 22 22" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="#00a264" />
      <path
        d="M6.4 11.5l3 3 6.2-6.7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CandidateQuestions() {
  return (
    <div className="questions">
      <div className="container">
        <div className="questions__grid">
          <div>
            <h3 className="questions__title">
              Your hiring team knows the role. Your candidate needs to understand
              the opportunity.
            </h3>
            <p className="questions__text">
              Before a great candidate applies, they&apos;re trying to answer
              questions your job description usually doesn&apos;t.
            </p>
          </div>
          <ul className="questions__list">
            {QUESTIONS.map((q) => (
              <li key={q} className="questions__item">
                <Check />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}