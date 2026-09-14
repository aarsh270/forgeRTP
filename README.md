# Hack Club RTP

The official website for **Hack Club RTP**, a high school student-led coding club meeting at **Eva Perry Regional Library** in Apex, NC (serving the Research Triangle Park area: Apex, Cary, Morrisville, Raleigh, Durham, Chapel Hill).

Built with [Next.js](https://nextjs.org), [Theme UI](https://theme-ui.com), and the official [Hack Club Theme](https://github.com/hackclub/theme). Styled after the iconic [hackclub.com](https://hackclub.com) aesthetic.

---

## Meeting Schedule

- **Monthly In-Person**: Eva Perry Regional Library (`2100 Shepherd’s Vineyard Dr, Apex, NC 27502`).
  - Hands-on maker sessions, project demos, and hardware tinkering.
- **Weekly Online**: Virtual hack sessions & workshops.
- **Interest List**: Sign up at [https://forms.gle/NvaAfaiM31Kk8TKx5](https://forms.gle/NvaAfaiM31Kk8TKx5) to receive updates on upcoming kickoff dates and room bookings.

---

## Local Development

### Prerequisites
- [Node.js](https://nodejs.org) (v18 or newer recommended)
- [Yarn](https://yarnpkg.com) or [npm](https://npmjs.com)

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/aarsh270/forgeRTP.git
cd forgeRTP

# 2. Install dependencies
yarn
# (or: npm install)

# 3. Start local development server
yarn dev
# (or: npm run dev)
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## Project Structure

- `pages/index.js` — Main landing page featuring the animated rainbow hero, email capsule form, airmail postcard, meeting details, and side sticker decorations.
- `pages/_app.js` — Global app wrapper with Phantom Sans `@font-face` definitions and Theme UI provider.
- `pages/_document.js` — Custom Next.js HTML document with theme color mode initializer.
- `components/nav.js` — Navigation bar with Hack Club ribbon logo, smooth anchor links, and theme toggle.
- `components/color-switcher.js` — Light/dark theme toggle button.
- `components/footer.js` — Chapter footer with Hack Club 501(c)(3) disclosure, links to Hack Club Slack, and Code of Conduct.
- `lib/theme.js` — Theme UI configuration extending `@hackclub/theme`.

---

## Deployment

Deploy with one click using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faarsh270%2FforgeRTP)

1. Import this repository on [Vercel](https://vercel.com).
2. Use default build command (`next build`) and output directory.
3. Deploy! Every push to `main` will automatically trigger a new deployment.

---

## Community & Code of Conduct

Hack Club RTP is part of the global [Hack Club](https://hackclub.com) 501(c)(3) nonprofit network. All members, events, and communications follow the [Hack Club Code of Conduct](https://hackclub.com/conduct).
