# Pitagorin website

This directory contains the static marketing site for GitHub Pages. It stays dependency-free so the public site can remain fast and crawlable without adding a web toolchain to the iOS project.

The site is available in English, Spanish, German, French, and Italian. English
pages live at the root; translated pages are generated under `es/`, `de/`,
`fr/`, and `it/` with localized screenshots and reciprocal language metadata.
Run `python3 tools/build_locales.py` after editing translated copy.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000 --directory website
```

Then open <http://localhost:8000>.

## Publishing

`.github/workflows/deploy-pages.yml` publishes this directory to GitHub Pages whenever changes land on `master` or when the workflow is run manually.

The current public destinations are the [App Store listing](https://apps.apple.com/gb/app/pitagorin/id6756659468), [Privacy Policy](privacy.html), and [Apple Terms of Use](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/). Update the canonical URL, sitemap, and metadata together if a custom domain is added.

## Content roadmap

- Add approved iPad and localized screenshot sets.
- Add accessibility and learning-method pages.

## Discoverability

See [`AGENTS.md`](AGENTS.md) for the durable requirements for search ranking,
AI search visibility, and agent-friendly accessibility. The site intentionally
uses readable HTML, a sitemap, explicit crawler permissions, and structured
data that mirrors visible content. `llms.txt` provides a supplementary concise
product guide; canonical HTML remains authoritative.

## Quality assurance

See [`QA_PLAN.md`](QA_PLAN.md) for the desktop, mobile, accessibility,
discoverability, and independent Luna-agent release checks.
