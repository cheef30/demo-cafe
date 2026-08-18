# Ember & Oak — café landing page (demo)

A single-page website for a specialty coffee shop, built as a demo of what a small
hospitality business gets: one scroll, everything a guest needs, and no CMS to maintain.

**Live demo → https://cheef30.github.io/demo-cafe/**

Ember & Oak is a fictional roastery in Shoreditch, London. Every name, price and review
on the page is placeholder content.

## What's on the page

- **Live open/closed badge** that reads the opening hours and updates itself every minute
- **Menu** with category tabs, seasonal labels and a hover preview of every item
- **Gallery** with a full lightbox — keyboard arrows, swipe, thumbnails, focus trap
- **Booking form** with inline validation that hands off to the guest's email app
- **Google Maps embed**, tap-to-call, WhatsApp and Instagram links
- **Guest reviews**, amenities, roasting process and animated counters
- Scroll progress, a filling coffee cup, a custom cursor and magnetic buttons

## Built with

Plain HTML, CSS and JavaScript — no build step, no dependencies to install.
[GSAP + ScrollTrigger](https://gsap.com/) for the animation and [Lenis](https://lenis.darkroom.engineering/)
for smooth scrolling, both from a CDN. Photography from [Unsplash](https://unsplash.com/).

## Rebranding it for another café

Everything a client needs to change lives in the `CONFIG` object at the top of
[`script.js`](script.js) — name, address, phone, opening hours, menu, prices, photos,
reviews. Nothing below `CONFIG` needs touching.

```js
const CONFIG = {
  name: "Ember & Oak",
  address: "42 Redchurch Street, Shoreditch, London E2 7DP",
  currency: "£",          // swap for "$" or "€"
  // …
};
```

Section headings and body copy live in [`index.html`](index.html); the design tokens
(colours, type scale, spacing) sit at the top of [`style.css`](style.css).

## Running it locally

No build step — open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Accessibility & performance

Semantic landmarks, visible keyboard focus, a skip link, ARIA live regions for the
open/closed badge, a focus trap in the lightbox, and full `prefers-reduced-motion`
support that disables every animation. Images are responsive (`srcset`) and lazy-loaded
below the fold.

## Licence

Code is free to reuse. The Unsplash photography follows the
[Unsplash licence](https://unsplash.com/license).
