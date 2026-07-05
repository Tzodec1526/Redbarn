# Redbarn Wood Turning

A beautifully handcrafted static website for Redbarn Wood Turning — a one-man woodturning and custom furniture workshop run by Michael Cedoz in Mount Vernon, Ohio.

## 🌲 About the Site

This editorial-style site showcases hand-turned bowls, pens, live-edge furniture, outdoor kitchens, and custom commissions made from locally salvaged Ohio hardwoods. It emphasizes slow craft, authenticity, and a tactile user experience that mirrors the work itself.

**Key features:**
- Elegant typography and responsive design
- Interactive gallery with lightbox (captions + focus trap) and category filters
- Dedicated Journal index plus a Commissions page
- Blog/journal with RSS feed
- Functional contact form (FormSubmit.co)
- Dark/cream palette toggle with persistence (syncs `aria-pressed` + `theme-color`)
- Strong SEO: structured data (LocalBusiness, Blog, Event, Service, FAQ, Breadcrumbs) and modern `llms.txt`
- PWA-ready with real PNG icons + apple-touch-icon

## 🛠 Tech Stack
- Pure HTML5 / CSS3 (OKLCH colors, custom properties) / Vanilla JS
- No frameworks or build step required
- Hosted on **GitHub Pages** with custom domain (`redbarnwoodturning.com`)

## 🚀 Local Development
```bash
# Clone and open
git clone https://github.com/Tzodec1526/Redbarn.git
cd Redbarn
# Open index.html in browser or use a local server
python -m http.server 8000
# or
npx serve .
```

## 📦 Deployment
Push to `main` — GitHub Pages auto-deploys. Custom domain is configured via CNAME.

## 🖼 Image Guidelines
- Always provide WebP + JPG fallbacks using `<picture>`
- Optimize images (target <250–300 KB where possible)
- Use descriptive `alt` text and `loading="lazy"`
- Add responsive `srcset`/`sizes` for hero images when adding new ones

## ✅ Recent Improvements (July 2026 Audit)
**Performance & images**
- Logo `1.svg` rebuilt from a 140 KB base64 PNG down to ~36 KB (visually identical)
- Gallery re-encoded (1200 px cap, WebP q74): ~5.8 MB → ~3.0 MB, no image over 300 KB
- Responsive hero `srcset` (600/900/1168 w) so phones stop downloading the desktop image
- Removed 12 unused image files (~4 MB); generated `icon-192/512.png` + `apple-touch-icon.png`

**SEO & structure**
- New `journal.html` index (in nav) and `commissions.html` (footer + homepage card), both in the sitemap
- Homepage "From the journal" strip; blog breadcrumbs now Home → Journal
- Added Event, Blog, and Service structured data; `priceRange` `$`→`$$`; local `areaServed` (Columbus/central Ohio)
- Purpose-made 1200×630 `og-card.jpg` social image; consistent trailing-slash canonical; removed dead `meta keywords`; refreshed sitemap `lastmod`

**Accessibility & UX**
- `<nav aria-label="Primary">` landmark; lightbox captions + focus trap
- Palette toggle exposes `aria-pressed` and updates `theme-color`; mobile nav uses `100dvh`
- Fixed: scroll-cue overlap, dead mobile-nav slide, reveal-flash, lightbox loading the full JPG, banner CLS

## 📝 Editing
Edit files directly in the repo. All changes to `main` trigger an automatic deploy.

## 📄 License
© 2026 Michael Cedoz — Personal project. All rights reserved.

---

*Built with care in a red barn in Knox County, Ohio.*