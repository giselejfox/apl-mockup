# APL-UW website prototype: static HTML

A clickable, static version of the APL-UW redesign mockups (direction B, light). Open `index.html` in any browser; no build step or server needed. It introduces the prototype, then links into the site, which starts at `home.html`.

## What's here

| Path | What it is |
|---|---|
| `index.html` | Intro for reviewers: what the prototype is, what works, what to expect, why the site is organized this way |
| `*.html` | One page per mockup, with real links between pages |
| `css/site.css` | Shared styles: palette variables, type, header, mega menus, footer, mobile menu, FAQ, pagination |
| `js/site.js` | Mega menus (click, Escape, click outside) and the mobile menu toggle |
| `icons/` | The five research theme icons as separate SVGs, plus `theme-icons-sprite.svg` |
| `styleguide-icons.html` | Icon library with sizes, usage and rules |
| `mobile-home.html`, `mobile-menu.html` | Reference mockups of the intended phone layout |

## Pages and content types

| Page | Content type | Main menu section |
|---|---|---|
| `home.html` | Homepage | — |
| `research.html` | Landing: Explore research | Explore research |
| `theme.html` | Research theme (template for all five) | Explore research |
| `browse-research.html` | Listing: projects, publications, reports, news, videos, seminars, inventions | Explore research |
| `project.html` | Project | Explore research |
| `technical-report.html` | Technical report | Explore research |
| `data-products.html` | Listing: data products | Explore research |
| `dataset.html` | Data product | Explore research |
| `work-with-us.html` | Landing: Work with us | Work with us |
| `find-an-expert.html` | Listing: people | Work with us |
| `profile.html` | Person / staff profile | Work with us |
| `facility.html` | Facility | Work with us |
| `join-us.html` | Landing: Join us (careers + education) | Join us |
| `program.html` | Program / opportunity | Join us |
| `about.html` | Landing: About | About |
| `department.html` | Department | About |
| `news.html` | Listing: news & stories | About |
| `story.html` | Story | About |
| `events.html` | Listing: events & seminars | About |
| `event.html` | Event | About |
| `annual-reports.html` | Listing: annual reports | About |
| `basic-page.html` | Basic page | About |
| `search.html` | Site search results | — |
| `404.html` | Page not found | — |

## Things to know

- **Header and footer are shared.** Every page uses the same header markup. The current section's menu item gets `.is-current`, and all four mega menus work on every page. Under 900px wide the menu collapses behind a Menu button.
- **Page bodies keep inline layout styles.** They came straight from the design canvas. All colors in them point at CSS variables in `site.css`, so palette changes happen in one place. Breaking them into components and classes is the next step for the real build.
- **One example per template.** Every theme link opens the polar theme, every project opens BICEP, and so on.
- **Placeholders.** Grey boxes are photo slots, and bracketed text like `[Job title]` is copy still to come.
- **Links left as `#` on purpose:**
  - publications and "In the News" items, which link out to the publisher or news site
  - PDFs and videos
  - calendar and subscribe buttons
  - pagination and filters
- **Records that link out.**
  - Job postings go to Workday (https://wd5.myworkdaysite.com/).
  - Publications go to the publisher's site.
  - Inventions go to the patent or a PDF.
- **Search forms don't search.** The 404 search and "Find an expert" forms go to the matching page, with no real results behind them.
