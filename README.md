# Redbarn Wood Turning

A beautifully handcrafted static website for Redbarn Wood Turning — a one-man woodturning and custom furniture workshop run by Michael Cedoz in Mount Vernon, Ohio.

## 🌲 About the Site

This editorial-style site showcases hand-turned bowls, pens, live-edge furniture, outdoor kitchens, and custom commissions made from locally salvaged Ohio hardwoods. It emphasizes slow craft, authenticity, and a tactile user experience that mirrors the work itself.

**Key features:**
- Elegant typography and responsive design
- Interactive gallery with lightbox and (new) category filters
- Blog/journal with RSS feed
- Functional contact form (FormSubmit.co)
- Dark/cream palette toggle with persistence
- Strong SEO, structured data (LocalBusiness + FAQ), and modern `llms.txt`
- PWA-ready for installable/offline experience

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

## ✅ Recent Improvements (May 2026 Review)
- Added comprehensive README
- Implemented PWA manifest for installability
- Added category filters to gallery
- Enhanced lazy loading and accessibility
- Improved contact form UX and ARIA
- Minor code quality and SEO polish

## 📝 Editing
Edit files directly in the repo. All changes to `main` trigger an automatic deploy.

## 📄 License
© 2026 Michael Cedoz — Personal project. All rights reserved.

---

*Built with care in a red barn in Knox County, Ohio.*