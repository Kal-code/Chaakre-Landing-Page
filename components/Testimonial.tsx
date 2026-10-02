export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container">
        <h2 className="section-title">
          A High Conversion Career Page Changes Who Applies
        </h2>
        <div className="testimonial__card">
          <p className="testimonial__quote">
            &ldquo; When we were hiring, we were getting applications,{" "}
            <strong>but not the kind of candidates we actually wanted to interview</strong>
            . TG helped us{" "}
            <strong>
              understand what was missing from the candidate&rsquo;s perspective
            </strong>{" "}
            and turn that into our career page.{" "}
            <strong>The quality of candidates improved after that</strong> &rdquo;
          </p>
          <img
            className="testimonial__avatar"
            src="/images/avatar-abhradeep.png"
            alt="Abhradeep Ghosh"
          />
          <p className="testimonial__name">Abhradeep Ghosh</p>
          <p className="testimonial__role">Co-founded Ace Curve</p>
        </div>
      </div>
    </div>
  );
}