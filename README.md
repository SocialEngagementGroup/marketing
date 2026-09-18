# Social Engagement Group (SEG) - Marketing Platform

A high-performance, visually stunning marketing platform for **Social Engagement Group**, featuring immersive landing pages for modern industries and specialized legal marketing.

## 🚀 Key Features

### 🌟 Immersive Experience

- **Full-Screen Transitions**: Elastic, desktop-optimized transitions between sections.
- **Dynamic Hero Section**: AI-powered growth headline with floating parallax elements and a custom scroll indicator.
- **Mobile-First Design**: Fully responsive across all devices, with specialized mobile layouts for complex sections.

### 📈 Marketing Components

- **Interactive Services**: Multi-slide desktop services section and an auto-rotating mobile carousel.
- **Dynamic SEO**: Per-page title and meta description updates for optimal search engine visibility.
- **Conversion Focused**: Strategically placed CTAs, including Calendly integration for lead generation.

### ⚖️ Specialized Landing Pages

- **Lawyer Landing Page**: A dedicated, high-conversion page specifically for legal marketing experts.
- **Healthcare & Doctor Landing Page**: Tailored for medical practices focusing on targeted high-intent patients and HIPAA-compliant lead generation.
- **Restaurant Landing Page**: Engaging visuals and functional layouts for modern diners and restaurant marketing.
- **Industry Solutions**: Tailored content for various modern industries.

### 🔌 Integrations

- **Webhooks & Lead Capture**: Fully integrated with n8n to automatically capture contact forms and directly route leads into CRMs seamlessly.

## 🛠️ Technology Stack

- **Frontend**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Display fonts for a premium, agency-grade look.

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SocialEngagementGroup/marketing.git
   cd marketing
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file and add any necessary keys (e.g., Google Drive links or API keys).
4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Build for production**:

   ```bash
   npm run build
   ```

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (Common, Homepage, Lawyer)
├── pages/          # Full page components (Homepage, Lawyer landing)
├── hooks/          # Custom React hooks (media queries, etc.)
├── lib/            # Utility libraries and helpers
└── App.tsx         # Main routing and application structure
```

## 🔒 Security

`vercel.json` owns the site's security posture. Two things in it are load-bearing
and easy to undo by accident.

### Unmatched paths must 404

There is deliberately **no catch-all rewrite**. Only the thank-you pages — real
client-side routes with no prerendered file of their own — are listed under
`rewrites`; everything else falls through to `dist/404.html`, which Vercel serves
with an actual HTTP 404.

The previous catch-all answered *every* URL on the domain with HTTP 200 and a
full page of content, so a path like `/paypal-login-verify` resolved happily.
Safe Browsing crawls URLs it finds linked in the wild, and a host that returns
200 for every invented path is a standing invitation to be classified as a
deceptive site. If you add a client-side route, add it to `rewrites` — do not
reintroduce a wildcard.

`dist/404.html` is the same SPA shell as `fallback.html`, so React still boots
and renders the branded `NotFoundPage`: correct status code *and* a designed
page, not one or the other.

### Content Security Policy

The CSP is enforcing, and it is tuned to the tags this site actually runs —
GTM `GTM-TRPG9JZW`, GA4 `G-2WZGGVK5QF`, Google Ads `AW-17918518460`, the Meta
Pixel, reCAPTCHA v3 and the YouTube embeds. Every allowlisted origin is there
because something broke without it.

Two directives are looser than they look, on purpose:

- `img-src ... https:` — Google Ads remarketing pixels fire against the user's
  local Google ccTLD (`www.google.com.bd/ads/ga-audiences` and friends). There
  are ~190 of those and no wildcard syntax that spans TLDs. Images cannot
  execute, so this is the cheap trade.
- `script-src` allows `https://www.google.com` and `https://www.gstatic.com`
  whole-host rather than path-scoped, because reCAPTCHA and the Ads conversion
  scripts move paths between releases.

`script-src`, `connect-src`, `frame-src`, `object-src`, `base-uri`,
`form-action` and `frame-ancestors` stay tight — those are the ones that stop
XSS and clickjacking.

**If you add a tag in GTM, verify it against the CSP before you publish.** A
blocked tag fails silently in production; the only symptom is missing
conversions. Load the page, open DevTools and check for
`Refused to connect / Refused to load` errors.

## 🎨 Design Principles

- **Premium Aesthetics**: Using rich gradients, glassmorphism elements, and smooth micro-animations.
- **Readability**: Clear contrast and optimized typography for professional services.
- **Engagement**: Interactive elements that guide the user through the conversion funnel.

---

© 2026 Social Engagement Group. All rights reserved.
