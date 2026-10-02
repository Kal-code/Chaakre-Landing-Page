const MAIL_PATH = "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7";

export default function Footer() {
  return (
    <footer className="footer" id="footer-contact">
      {/* Zeplin footer: black panel, 35px / 24px rounded top corners */}
      <div className="footer__main container">
        {/* Brand column — 415px wide, logo + wordmark + tagline */}
        <div className="footer__brand">
          <div className="footer__brandmark">
            <img
              className="footer__logo"
              src="/images/footer-logo.svg"
              alt="Chaakre logo"
              width={62}
              height={62}
            />
            <p className="footer__name">Chaakre</p>
          </div>
          <p className="footer__tagline">
            Career pages designed to earn candidate trust and attract people
            worth interviewing.
          </p>
        </div>

        {/* Contact column — hugs the right gutter on desktop, sits below the
            brand on mobile */}
        <div className="footer__contact">
          <h3>Contact</h3>
          <a className="footer__row" href="mailto:tg@chaakre.com">
            <svg className="footer__icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <path
                d={MAIL_PATH}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>tg@chaakre.com</span>
          </a>
          <a
            className="footer__row footer__row--linkedin"
            href="https://www.linkedin.com/company/chaakre/"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="footer__icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="3.75" fill="#ffffff" />
              <path
                d="M6.6 9.4h2.6v6.9H6.6zM7.9 5.6a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1zM10.9 9.4h2.5v1h.05a2.75 2.75 0 0 1 2.45-1.35c2.6 0 3.1 1.7 3.1 3.95v3.3h-2.6v-3c0-.72-.01-1.65-1-1.65s-1.15.8-1.15 1.6v3.05h-2.6z"
                fill="#000000"
              />
            </svg>
            <span>
              LinkedIn
              <svg className="footer__arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5.9 18.1 18.1 5.9M10.4 5.9h7.7v7.7"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Copyright bar — 1px #cccccc top rule, 24px / 80px padding */}
      <div className="footer__bar">
        <svg className="footer__icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          />
          <path
            d="M14.83 14.83a4 4 0 1 1 0-5.66"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>2026 Copyright. All Rights Reserved</span>
      </div>
    </footer>
  );
}
