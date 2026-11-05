# Prayansh – Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript. It has an iOS-inspired look with frosted-glass sections, light and dark themes, and a contact form. There are no frameworks and no build step.

## Features

- **Hero section** with a full-width background photo, a short intro and call-to-action buttons
- **About section** with a terminal-style card showing a file integrity scan
- **Skills and Projects** in frosted-glass cards with softly animated color blobs
- **Clickable project cards** that open the GitHub repo, plus a separate "Live demo" button
- **Contact form** that opens the visitor's email app with the details filled in
- **Light and dark theme** that follows the device setting, with a toggle that remembers the choice
- **Sticky navigation** that highlights the section you are viewing
- **Responsive layout** for desktop, tablet and phone
- **Reduced motion support** that turns animations off for visitors who prefer it

## Project structure

```
portfolio-site/
├── index.html   # Page content
├── style.css    # All styling
├── script.js    # Theme toggle, nav highlighting, contact form
├── hero.jpg     # Hero background photo (add this yourself)
└── README.md
```

## Getting started

1. Put `index.html`, `style.css`, `script.js` and `hero.jpg` in the same folder.
2. Open `index.html` in your browser. Nothing needs to be installed.

For live reload while editing, you can use any simple server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Customizing

### Content you need to replace

| What | Where |
| --- | --- |
| Email for the contact form | `var to='...'` in `script.js` |
| Email, phone, LinkedIn and GitHub shown on the page | Contact section in `index.html` |
| GitHub link of each project | `href="https://github.com/YOUR-USERNAME/REPO-NAME..."` in each project card |
| Live demo link of each project | `href="https://YOUR-DEPLOYED-SITE..."` in each project card |
| Project titles, descriptions and tags | Projects section in `index.html` (three cards are dummy content) |
| Hero background photo | `--hero-img` at the top of `style.css` (default `url(hero.jpg)`) |
| GitHub and LinkedIn links in the hero | `.soc` links in the hero section of `index.html` |

If a project has no live demo, delete its `<a class="glass-link">` line.

### Colors and theme

All colors are CSS variables at the top of `style.css`:

- `--accent` is the main accent color (iOS red by default)
- `--bg`, `--surface`, `--text` and `--muted` control the page colors
- Dark mode values are in the `prefers-color-scheme: dark` block and the `[data-theme="dark"]` rule

The glowing blobs in the glass sections use the classes `.b1`, `.b2` and `.b3`. Change their `background` colors to match a new palette.

### Adding a project

Copy one `<div class="glass">…</div>` card inside the Projects grid and edit its title, text, tags and links. The grid is two columns on desktop and one on phones.

## Deploying

Because the site is static, you can host it for free:

- **GitHub Pages:** push the folder to a repo, then enable Pages in the repo settings.
- **Netlify or Vercel:** drag and drop the folder, or connect the repo.

Make sure `hero.jpg` is uploaded along with the other files.

## Notes

- The contact form does not send email by itself. It opens the visitor's default email app (a `mailto:` link) with the message filled in. For a form that sends directly, connect a service such as Formspree or EmailJS.
- Fonts (Inter and JetBrains Mono) load from Google Fonts, so they need an internet connection. The page falls back to system fonts without it.
- The frosted-glass look uses `backdrop-filter` and `color-mix()`, which work in current versions of Chrome, Edge, Safari and Firefox.

## Tech

HTML5, CSS3 (custom properties, grid, flexbox, `backdrop-filter`), vanilla JavaScript.
