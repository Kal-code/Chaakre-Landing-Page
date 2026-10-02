export default function Letter() {
  return (
    <section className="letter">
      <div className="container">
        <h2 className="section-title">A Letter to the Founders</h2>
        <div className="letter__wrap">
          <img className="letter__pin" src="/images/pushpin.png" alt="" />
          <div className="letter__card">
            <div className="letter__block">
              <p>Dear Founder,</p>
              <p>
                You&apos;re <strong>in the middle of building something difficult.</strong>
              </p>
              <p>
                From shipping products to chasing growth, every day demands
                something from you. And in the middle of it all, another battle
                quietly drains your time and energy.
              </p>
              <p>
                <strong>Hiring.</strong>
              </p>
            </div>
            <div className="letter__block">
              <p>
                You publish a role. Applications flood in. Yet{" "}
                <strong>the people you actually want never seem to apply.</strong>
              </p>
              <p>
                Maybe you hire a recruitment agency. They post the role on more
                job boards, cold call candidates, and search harder.
              </p>
              <p>But the problem isn&apos;t finding great people.</p>
              <p>
                <strong>It&apos;s convincing them.</strong>
              </p>
            </div>
            <div className="letter__block">
              <p>
                The{" "}
                <strong>
                  top talent you want already has multiple companies competing
                  for their attention.
                </strong>
              </p>
              <p>
                They don&apos;t choose based on salary alone. They compare,
                evaluate, and look for enough information to believe they&apos;re
                making the right choice.
              </p>
              <p>
                The problem is, most companies never give candidates enough
                information to make that decision confidently.
              </p>
              <p>
                That&apos;s the problem <strong>Chaakre was built to solve.</strong>
              </p>
            </div>
          <img
            src="/images/signature.png"
            alt="Signed"
            className="letter__sign"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
