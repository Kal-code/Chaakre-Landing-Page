const YES = [
  "Hiring skilled or experienced professionals",
  "Getting applicants, but not enough of the right ones",
  "Competing with other companies for the same talent",
  "Want better candidates, not simply more applicants",
  "See hiring the right people as a competitive advantage",
  "Will invest in how your company is presented to candidates",
];

const NO = [
  "Hiring primarily entry level or high volume roles",
  "Struggling to generate any applicants at all",
  "Have an unlimited pool of suitable candidates",
  "Need to maximize application volume",
  "Need a recruitment agency to source candidates",
  "Only want a basic careers page at the lowest price",
];

function CheckIcon() {
  return (
    <svg className="fit__icon" viewBox="0 0 22 22" aria-hidden="true">
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

function XIcon() {
  return (
    <svg className="fit__icon" viewBox="0 0 22 22" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="#ff383c" />
      <path
        d="M7.6 7.6l6.8 6.8M14.4 7.6l-6.8 6.8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Row({ yes, no }: { yes: string; no: string }) {
  return (
    <div className="fit__row">
      <div className="fit__cell">
        <CheckIcon />
        <span>{yes}</span>
      </div>
      <div className="fit__cell">
        <XIcon />
        <span>{no}</span>
      </div>
    </div>
  );
}

const ROWS: Array<[string, string]> = YES.map((yes, i) => [yes, NO[i]]);

export default function FitCheck() {
  return (
    <section className="fit">
      <div className="container">
        <div className="badge-row">
          <span className="badge">Is this for you?</span>
        </div>
        <h2 className="section-title" style={{ marginTop: 16 }}>
          Is Chaakre the Right Solution for Your Hiring?
        </h2>
        <p className="section-sub" style={{ maxWidth: 700 }}>
          Chaakre is built for companies that already have opportunities worth
          applying for, but need to turn more qualified visitors into confident
          applicants.
        </p>

        {/* Mobile: the table (2 × 212px columns + borders = 426px) is wider than
            the content box at the 402px design width — this scroller lets the whole
            table be dragged left/right instead of clipping the right column off the
            way the Figma frame does. It is focusable so keyboards can scroll it too. */}
        <div
          className="fit__scroller"
          role="region"
          aria-label="Fit comparison table"
          tabIndex={0}
        >
          <div className="fit__card">
            <div className="fit__row">
              <div className="fit__cell fit__head">
                <CheckIcon />
                Great Fit
              </div>
              <div className="fit__cell fit__head">
                <XIcon />
                Probably Not
              </div>
            </div>
            {ROWS.map(([yes, no]) => (
              <Row key={yes} yes={yes} no={no} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}