# Launchpad Community

A premium, responsive landing page for a student career acceleration community. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and `next-themes`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this directory to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected framework preset as **Next.js**.
4. Deploy. No environment variables are required.

For the Vercel CLI:

```bash
npx vercel
```

## Customize

- Replace the placeholder WhatsApp URL in `app/page.tsx`.
- Update social links in the footer.
- Edit metadata and production domain in `app/layout.tsx`.
- Community content, schedule, offers, and testimonials live in `app/page.tsx`.

## Architecture

```text
app/
  globals.css        Global design system and responsive styles
  layout.tsx         Fonts, metadata, theme provider
  page.tsx           Page sections and content
  icon.svg           App favicon
  opengraph-image.tsx Dynamic social sharing image
components/
  community-panel.tsx Hero community product preview
  faq.tsx             Interactive accordion
  logo.tsx            Reusable brand lockup
  motion.tsx          Reveal and animated counter primitives
  navbar.tsx          Floating responsive navigation
  theme-provider.tsx  Dark/light theme support
public/
  community-network.png Generated brand artwork
```
