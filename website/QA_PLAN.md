# Pitagorin website QA plan

This plan is written for independent Luna QA agents. QA agents are read-only:
they must not edit files, accept visual defects as “subjective,” or rely only on
source inspection when browser evidence is requested.

## Release candidate

- Repository: `/Users/lorenzov/Pitagorin-website`
- Served directory: `website/`
- Canonical production base:
  `https://lorenzovillarroel90.github.io/Pitagorin-website/`
- Pages in scope: home, features, app screens, family guide, FAQ, privacy, and
  the 404 page.
- Browser QA must use a local HTTP server, not `file://` URLs.

## Agent assignments

### Luna browser QA: responsive visual acceptance

Test every public HTML page at these exact viewports:

| Profile | Viewport |
| --- | --- |
| Small iPhone | 375 × 812 |
| Current iPhone | 390 × 844 |
| Large mobile | 430 × 932 |
| iPad portrait | 768 × 1024 |
| Laptop | 1280 × 800 |
| Desktop | 1440 × 900 |

For each viewport:

1. Load the page from a fresh navigation and wait for images and fonts.
2. Inspect the first viewport and then the full page.
3. Confirm there is no horizontal scrolling, clipped text, accidental overlap,
   blank section, distorted screenshot, or content hidden behind the sticky
   header.
4. Confirm headings wrap intentionally and never create a one-character line.
5. Confirm body text remains comfortably readable without zooming.
6. Confirm cards, screenshot frames, action groups, and footer links reflow
   cleanly at breakpoint boundaries.
7. On mobile, open the Menu and verify every public page plus the App Store
   destination is visible, legible, and tappable. Confirm the menu does not
   extend outside the viewport.
8. On desktop, confirm the complete primary navigation is visible and the
   mobile Menu control is hidden.
9. Verify visible focus treatment by keyboard-tabbing through navigation,
   buttons, FAQ accordions, policy links, and footer links.
10. Enable reduced motion and confirm no essential information depends on
    animation.

Capture full-page screenshots for home, features, app screens, family guide,
FAQ, and privacy at 390 × 844 and 1440 × 900. Name them
`<page>-mobile.jpg` and `<page>-desktop.jpg`. Report every defect with page,
viewport, location, reproduction steps, expected result, actual result, and a
severity of blocker, high, medium, or low.

### Luna validator: semantic, accessibility, and discoverability acceptance

Run the following checks over every HTML page:

1. Exactly one non-empty `h1` per indexable page.
2. Unique, descriptive `title` and meta description.
3. One absolute canonical URL matching the sitemap entry.
4. `html lang`, viewport metadata, and index/follow policy where appropriate.
5. A valid JSON-LD document whose claims are also visible in page content.
6. Descriptive alt text for informative images and empty alt text for
   intentionally decorative images.
7. Semantic landmarks: header/nav, main, section headings, and footer where
   applicable.
8. No broken relative links, missing images, duplicate IDs, or empty links.
9. No old Google Sites privacy URL, placeholder copy, localhost URL, or
   unpublished claim.
10. FAQ structured-data questions and answers exactly match visible FAQ
    content.
11. The 404 page is `noindex,follow`.
12. `robots.txt` allows Googlebot, Bingbot, and OAI-SearchBot and references
    the canonical sitemap.
13. `sitemap.xml` is valid XML and contains only canonical public HTML pages.
14. `llms.txt` contains only facts supported by the visible website and
    points to canonical HTML pages as authoritative.

Also request each local route and asset over HTTP. All public pages and assets
must return 200; one unknown path must return the custom 404 page when tested
in the GitHub Pages environment.

### Luna browser QA: interaction and content journey

Complete these user journeys on both 390 × 844 and 1440 × 900:

1. Home → Features → App screens → App Store.
2. Home → For families → Privacy.
3. Home → FAQ → expand every question → Privacy.
4. Privacy table of contents → each anchored section → Home.
5. Mobile Menu → each internal page → reopen Menu.

Acceptance criteria:

- Every internal destination is reachable in one interaction from primary or
  footer navigation.
- Every button label predicts its destination.
- External links navigate to the intended App Store, Google privacy, Apple
  privacy, or Apple terms URL.
- FAQ disclosure controls open with pointer and keyboard input.
- Privacy anchor links land with their heading visible below the sticky header.
- Browser console contains no error.

## Performance and asset checks

- No page depends on a third-party JavaScript or CSS runtime.
- The initial viewport must not load all full-resolution PNG screenshots.
- Below-the-fold screenshots use `loading="lazy"`.
- Images have intrinsic width and height to reduce layout shift.
- CSS and JavaScript are shared, cacheable static files.
- Test at a simulated slow mobile connection and confirm readable HTML appears
  before non-critical screenshots finish loading.

## Release gate

The release candidate passes only when:

- there are no blocker or high-severity defects;
- all medium defects affecting readability, navigation, responsiveness,
  semantics, or factual consistency are fixed;
- desktop and mobile screenshots have been reviewed by an independent agent;
- local link, metadata, JSON-LD, XML, and HTTP checks pass; and
- the parent agent has reproduced or reviewed every reported defect before
  accepting a fix.
