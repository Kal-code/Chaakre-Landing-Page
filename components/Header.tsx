import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#" className="brand">
          <img
            src="/images/logo-header.png"
            alt="Chaakre logo"
            width={62}
            height={62}
            className="brand__logo"
          />
          <span className="brand__name">Chaakre</span>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdZe7B8lJSP0tt15G4-006MMRUnTQN6yFb7BgBszg84HflvHA/viewform?usp=preview"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pill cta-pill--header"
        >
          <Image
            src="/images/tg-photo.png"
            alt=""
            width={30}
            height={30}
            className="cta-pill__avatar cta-pill__avatar--header"
          />
          Get free Audit
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdZe7B8lJSP0tt15G4-006MMRUnTQN6yFb7BgBszg84HflvHA/viewform?usp=preview"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-mail"
          aria-label="Get free Audit"
        >
          <img
            src="/images/mail.png"
            alt="Contact"
            width={40}
            height={40}
          />
        </a>
      </div>
    </header>
  );
}
