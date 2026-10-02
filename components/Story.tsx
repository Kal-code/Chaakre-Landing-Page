export default function Story() {
  return (
    <section className="story">
      <div className="container">
        <div className="story__grid">
          <div className="story__head">
            <div className="badge-row badge-row--left">
              <span className="badge">Story</span>
            </div>
            <h2
              className="section-title section-title--left"
              style={{ marginTop: 16 }}
            >
              Why Chaakre Was Built to Solve This Problem
            </h2>
          </div>
          <img
            className="story__photo"
            src="/images/tg-photo.png"
            alt="TG - Founder of Chaakre"
            width={460}
            height={424}
          />
          <div className="story__text">
            <p>
              Hey, I&apos;m TG. I first came across this problem while hiring for my
              own marketing agency. We could attract applicants, but struggled
              to attract the people we really wanted.
            </p>
            <p>
              Years later, as a product designer working with growing
              companies, I realized why the best candidates often never enter
              the hiring funnel.
            </p>
            <p>
              So I studied what makes experienced candidates trust a company
              enough to consider leaving their current job for another. I
              found the mechanism behind that decision and turned it into a
              system companies can use to attract and convince the right
              candidates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
