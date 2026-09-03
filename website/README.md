# Pitagorin website

This directory contains the static marketing site for GitHub Pages. It is intentionally dependency-free during the first scaffold so content and visual direction can evolve without adding a web toolchain to the iOS project.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000 --directory website
```

Then open <http://localhost:8000>.

## Publishing

`.github/workflows/deploy-pages.yml` publishes this directory to GitHub Pages whenever changes land on `master` or when the workflow is run manually.

Before launch, replace the temporary GitHub Pages canonical URL in the HTML, `robots.txt`, and `sitemap.xml` with the final custom domain (if one is selected), add the App Store URL, and review all product/legal copy.

## Content roadmap

- Connect the App Store listing and privacy policy.
- Add approved iPad and localized screenshot sets.
- Add FAQ, accessibility, and learning-method pages.
- Add JSON-LD organization/software-application metadata after the public brand details are confirmed.

## Discoverability

See [`AGENTS.md`](AGENTS.md) for the durable requirements for search ranking,
AI search visibility, and agent-friendly accessibility. The site intentionally
uses readable HTML, a sitemap, explicit crawler permissions, and structured
data that mirrors visible content.
