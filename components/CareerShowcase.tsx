import { ReactNode } from "react";

export default function CareerShowcase({ children }: { children?: ReactNode }) {
  return (
    <section className="showcase">
      <div className="container">
        <h2 className="section-title">
          A Career Page That Turns More Qualified Candidates Into Interviews
        </h2>
        <p className="showcase__sub">
          Everything top candidates need to believe they&apos;re making the right
          career move, all in one place, before they even fill in the application
          process.
        </p>
        <div className="showcase__monitor">
          <img
            src="/images/acecurve-monitor.png"
            alt="Acecurve career page shown on a desktop monitor"
          />
        </div>
      </div>
      {children}
    </section>
  );
}