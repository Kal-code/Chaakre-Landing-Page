# Chaakre Landing Page

A pixel-perfect clone of the Chaakre SaaS landing page, built with Next.js and TypeScript. Matches the Figma redesign for both desktop (1440px) and mobile (402px) viewports.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** CSS (vanilla)
- **Font:** DM Sans

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/CyberScythe1/Chaakre-Landing-Page.git
cd Chaakre-Landing-Page
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # All styles (desktop + mobile responsive)
│   ├── layout.tsx       # Root layout, fonts, viewport meta
│   └── page.tsx         # Main page — section order
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx          # Hero + trapezoid funnel SVG
│   ├── Letter.tsx        # Letter to founders
│   ├── CareerShowcase.tsx # Showcase (wraps questions + testimonial)
│   ├── CandidateQuestions.tsx
│   ├── Testimonial.tsx
│   ├── UseCaseJourney.tsx # Hiring journey + phone mockups
│   ├── Research.tsx       # Stats section
│   ├── Interviews.tsx     # Candidate quotes
│   ├── Story.tsx          # Founder story
│   ├── BehindThePage.tsx  # Process steps
│   ├── FitCheck.tsx       # Is this for you? comparison
│   ├── Offer.tsx          # CTA card
│   └── Footer.tsx
└── public/images/         # All image assets
```
