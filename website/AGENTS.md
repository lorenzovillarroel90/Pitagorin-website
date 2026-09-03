# Website guidance

This is the public Pitagorin marketing website. Keep it optimized for both
traditional search ranking and AI-powered search and website agents.

## Content and SEO requirements

- Keep important product facts in readable HTML, not only in screenshots,
  canvas, or client-side JavaScript.
- Give every page one clear, descriptive `h1`, a useful title and description,
  a canonical URL, meaningful internal links, and a stable purpose.
- Write for real parent, learner, and teacher questions. Prefer specific,
  original explanations over keyword stuffing or generic generated copy.
- Use descriptive image alt text and preserve keyboard navigation, landmarks,
  labels, focus states, and responsive layouts. Agents benefit from the same
  semantic structure and accessibility that people do.
- Keep `robots.txt` and `sitemap.xml` valid. List only canonical, public URLs
  in the sitemap and update the canonical base URL when the final domain is
  selected.
- Add structured data only when it describes information visible on the page.
  Never invent ratings, reviews, prices, awards, or product claims.
- Link to authoritative first-party destinations such as the App Store listing,
  privacy policy, support, and official social or repository pages once those
  URLs are confirmed.
- Keep the site dependency-free unless a web toolchain is deliberately
  approved. Static, fast, crawlable HTML is the default.

## AI-agent discoverability

- Keep public pages crawlable by Googlebot, Bingbot, and `OAI-SearchBot`.
- Do not treat experimental files such as `llms.txt` as a replacement for
  normal SEO, a sitemap, accessible HTML, or trustworthy content.
- Make important actions understandable from their visible label and semantic
  element. Use ARIA only to improve semantics, not to hide content.
- When adding a page, update the navigation, sitemap, metadata, and relevant
  structured data together.

## Scope

Website work belongs in this worktree and should not modify the iOS app or its
ongoing refactor. Before launch, review all product, privacy, pricing, and
availability copy with the owner.
