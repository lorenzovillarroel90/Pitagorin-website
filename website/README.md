# Pitagorin website

This directory contains the static marketing site for GitHub Pages. It stays dependency-free so the public site can remain fast and crawlable without adding a web toolchain to the iOS project.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000 --directory website
```

Then open <http://localhost:8000>.

## Publishing

`.github/workflows/deploy-pages.yml` publishes this directory to GitHub Pages whenever changes land on `master` or when the workflow is run manually.

The current public destinations are the [App Store listing](https://apps.apple.com/gb/app/pitagorin/id6756659468), [Privacy Policy](https://sites.google.com/view/pitagorinmathapp/privacy-policy), and [Apple Terms of Use](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/). Update the canonical URL, sitemap, and metadata together if a custom domain is added.

## Content roadmap

- Add approved iPad and localized screenshot sets.
- Add accessibility and learning-method pages.

## Discoverability

See [`AGENTS.md`](AGENTS.md) for the durable requirements for search ranking,
AI search visibility, and agent-friendly accessibility. The site intentionally
uses readable HTML, a sitemap, explicit crawler permissions, and structured
data that mirrors visible content.
