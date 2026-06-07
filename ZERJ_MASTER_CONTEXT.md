# ZERJ Magazine Master Context

Last updated: 2026-06-07

This file is the single source of truth for the ZERJ Magazine website project. Before making project changes or answering project-direction questions, review this file first and update it after major changes.

## 1. Project Vision

ZERJ Magazine is a luxury fashion and editorial publication created by photographer ZERJ, @shotbyzerj.

The site should feel like the digital home of a fashion magazine, not a photographer portfolio, startup landing page, generic blog, or business website.

The visual direction should feel closer to Vogue's magazine/archive presentation than to a photography portfolio:

- Clean, premium, high-end, minimal design.
- Mostly white or very light gray backgrounds.
- Black typography.
- Thin gray divider lines.
- Strong white space.
- Elegant, refined typography.
- Magazine-first presentation.
- Covers should be the primary visual focus.

The brand idea is that every cover, feature, editorial, runway image, and story is photographed through one consistent lens: ZERJ.

## 2. Website Goals

- Homepage inspired by Vogue Magazine's archive/page structure.
- Large but controlled `Z E R J` masthead.
- Small, clean uppercase navigation.
- `Magazine` page title under the nav.
- Current/latest issue strip and large latest issue visual.
- Magazine cover archive grid.
- Smaller typography than earlier versions.
- Better spacing between sections.
- Premium editorial layout.
- Easy browsing experience.
- Easy future editing for issues, model biographies, interviews, credits, and galleries.
- Separate photography page for work outside the magazine.

## 3. Design Decisions

### Approved Direction

- Vogue-like magazine archive layout is the primary homepage reference.
- Use `Z E R J`, not `ZERJ Magazine`, as the top masthead.
- Header should have:
  - Thin access bar.
  - Centered masthead row.
  - Clean uppercase navigation row.
  - Always-available hamburger icon.
- Always-available hamburger must be present on every page, not only the homepage.
- Hamburger icon should be three lines with no visible `MENU` text.
- Header should freeze/compact on scroll with `Z E R J` centered and hamburger still available.
- Footer should use a black luxury publication style inspired by Vogue's footer structure, but with ZERJ wording.
- Latest issue should be displayed large and wide, similar to a magazine feature image area.
- Issues archive area should use cool light gray, not cream/beige.
- Real issue covers should be used whenever available.

### Colors

- Main background: white, `#ffffff`.
- Archive gray background: `#f6f6f6`.
- Primary text: near-black, `#050505`.
- Divider lines: light gray, `#e3e3e3`, with slightly darker gray where needed.
- Warm placeholder background `--gold-soft` was changed to true white, `#ffffff`, during the Vogue-alignment pass.
- Gold/beige should be minimal. Earlier beige/gold-heavy direction was rejected.

### Typography

- Masthead uses a Bodoni/Didot-style stack:
  - `"Bodoni 72"`
  - `"Bodoni 72 Poster"`
  - `"Bodoni MT"`
  - `Didot`
  - `"Didot LT STD"`
  - `"Hoefler Text"`
  - `Georgia`
  - `"Times New Roman"`
  - `serif`
- Nav uses a refined sans-serif stack:
  - `Futura`
  - `"Avenir Next"`
  - `Avenir`
  - `"Helvetica Neue"`
  - `Arial`
  - `sans-serif`
- Typography should be smaller and calmer than previous attempts.
- Avoid giant marketing-style hero headlines.
- The `J` in the masthead has been optically nudged upward because the descender looked misaligned.

### Layout

- Homepage currently includes:
  - Header.
  - `Magazine` title.
  - Latest issue promo strip.
  - Large latest issue image.
  - Issues archive grid.
  - Featured models/index area.
  - Black publication-style footer.
- The website uses a shared data file, `data.js`, to manage issue content.
- Issue pages are rendered from shared data into `issue-001.html` through `issue-006.html`.
- Photography page uses category filters and lightbox behavior.

### Rejected / Do Not Repeat

- GTA/Rockstar-style neon cinematic direction.
- Dark neon hero image.
- `neon-city-hero.png` and generated placeholder assets.
- Oversized poster-like masthead that dominates too aggressively.
- Startup landing page style.
- Generic marketing hero copy.
- Blog-template article cards.
- Heavy beige/gold palette.
- Visible `MENU` word beside hamburger.
- Two-line hamburger icon.
- Search/account icons in header.
- Black `Subscribe` button in the masthead row.
- Large headline: `One photographer. Every cover. Every story. Every frame.`
- Phrase on homepage: `Fashion. Stories. Presence. Through the lens of ZERJ.` as a large hero/intro line.
- Phrase on homepage: `Cover features, model stories, and editorial issues photographed by ZERJ @shotbyzerj.`

## Homepage Visual Audit Against Vogue Magazine

Date: 2026-06-05

Reference: Vogue Magazine page at `https://www.vogue.com/magazine`, using the user's screenshots and the live page/search crawl as comparison context.

This audit is for decision-making only. No design implementation should happen until these differences are reviewed.

### Top 20 Visual Differences

1. Vogue's header feels flatter and lighter; ZERJ still has more custom spacing and heavier perceived presence in the masthead area.
2. Vogue uses true white page fields very consistently; ZERJ should be checked for any off-white/cream perception caused by shadows, image tones, or gray section backgrounds.
3. Vogue's masthead row is more compact vertically; ZERJ's masthead row still feels taller and more spacious.
4. Vogue's logo sits optically centered with less letter spacing tension; ZERJ's spaced letters can make the `J` alignment and overall word shape feel uneven.
5. Vogue's navigation typography is small, crisp, and light in weight; ZERJ navigation can still read too bold or too letter-spaced.
6. Vogue's navigation row has a low-height, thin-line rhythm; ZERJ's nav row currently has more visual weight and bigger gaps.
7. Vogue's top access row is quiet and promotional but not dominant; ZERJ's access text should remain similarly understated.
8. Vogue keeps the hamburger/menu control minimal and icon-forward; ZERJ should keep only the three-line icon with no `MENU`, search, account, or subscribe distractions.
9. Vogue's `Magazine` page title is elegant but not overly heavy; ZERJ's `Magazine` heading should be lighter in perceived weight and avoid a bold-looking fallback.
10. Vogue places more breathing room between the nav and `Magazine` title, then uses disciplined spacing into the issue promo strip; ZERJ spacing should be measured against this rhythm.
11. Vogue's latest issue promo strip is very simple: small cover thumbnail, sentence, black button, thin dividers; ZERJ should avoid adding extra decoration beyond a subtle thumbnail shadow if used.
12. Vogue's promo cover thumbnail has a small printed-magazine object feel; ZERJ's thumbnail needs shadow/depth but should stay small and refined.
13. Vogue's main feature image begins after a large, clean white gap; ZERJ should avoid crowding the large cover image too close to the promo strip.
14. Vogue's large feature visual is wide and archive-like, not a full marketing hero; ZERJ's latest issue image should feel like a magazine feature preview rather than a landing-page hero.
15. Vogue's article/page hierarchy is driven by editorial content blocks and thin separators; ZERJ still has sections such as Featured Models that may feel more like a custom site than Vogue's archive flow.
16. Vogue's archive/story cards use restraint: image, category, headline, byline; ZERJ cover cards need to stay editorial and avoid button-heavy or template-like treatments.
17. Vogue's typography hierarchy uses strong contrast between serif headlines and small sans labels; ZERJ should reduce heavy uppercase labels where they overpower cover imagery.
18. Vogue's gray divider lines are very thin and neutral; ZERJ should avoid warm beige/gold lines and keep dividers cool gray.
19. Vogue's footer is black, spacious, and uses real social icon marks; ZERJ footer should keep the black publication style but remove extra dropdown/action controls that feel copied without purpose.
20. Vogue's bottom legal row is compact uppercase text separated by vertical bars; ZERJ should replace the current footer navigation/country selector with a simpler legal-style row if the user approves.

## 4. Current Status

### Completed

- Static website structure exists.
- Shared issue data exists in `data.js`.
- Shared rendering logic exists in `main.js`.
- Homepage has Vogue-like archive direction.
- Header has three-row Vogue-like rhythm.
- Header has centered `Z E R J` masthead.
- Hamburger is always available across homepage, about, photography, and all issue pages.
- Hamburger is three lines.
- Header can compact/freeze on scroll.
- Footer has black luxury publication-style layout.
- Footer social row now uses inline SVG official-style marks instead of CSS-drawn/text placeholders.
- Dedicated `archive.html` page exists and renders all issues newest-first.
- Homepage issue archive renders the six most recent issues and links to the full archive.
- Homepage no longer includes the duplicate Featured Models section.
- Narrow and compact headers keep the announcement bar, then show the `Z E R J` masthead and hamburger icon while hiding the full nav row; full nav links remain inside the hamburger menu.
- Real covers are present for:
  - Issue 001
  - Issue 002
  - Issue 003
  - Issue 004
  - Issue 005
  - Issue 006
- Removed old generated placeholder assets from the project folder.

### Currently Being Worked On

- Implemented the approved correction pass: restored announcement bar in compact/narrow header states, kept nav links hidden only from the full nav row, refined the `Magazine` heading spacing, adjusted the latest issue thumbnail shadow, retained the six-issue homepage cap, kept Featured Models removed, optically centered ZERJ wordmarks, and updated footer description wording.
- Awaiting user visual review before additional design changes.

### Still Needs Improvement

- Visual QA in browser should be done manually by the user because the in-app browser connector has repeatedly failed from the assistant side.
- Header may need further pixel-level spacing adjustments based on screenshots.
- Header/nav/title were adjusted in a constrained pass and may need visual fine-tuning after user refresh.
- Sticky header now transitions height/opacity/transform/font-size over 300ms ease-out and respects `prefers-reduced-motion`.
- Announcement bar text reads `Be Featured in the Next Issue of ZERJ` with `Submit Now` retained and remains visible in compact/narrow header states.
- Latest issue large image may need crop/object-position tuning.
- Footer social icons are inline SVG marks and can be swapped for official brand asset files later if exact legal brand assets are provided.
- Issue pages may need deeper editorial layouts once more gallery/page images are provided.
- Issue/model story body text has been refined toward Vogue's reading texture: narrower text column, smaller high-contrast serif body type, calmer line-height, and a more integrated drop cap.

## 5. Open Tasks

1. Fine-tune header spacing against the Vogue reference screenshot.
2. Fine-tune masthead font if the exact cover font file becomes available.
3. Replace CSS-drawn footer social icons with official SVG/icon assets if exact brand marks are needed.
4. Add more gallery images for each issue when available.
5. Improve issue detail pages after homepage is finalized.
6. Continue checking mobile layout after every visual change.
7. Keep `ZERJ_MASTER_CONTEXT.md` updated after every major change.

## 6. Daily Change Log

### 2026-06-07

- Updated issue-page `From the Shoot` gallery:
  - Gallery now renders six image slots per issue.
  - Shoot gallery images use portrait `3:4` tiles, matching the photographer's usual format.
  - Current slots repeat available issue images until more shoot photos are added to each issue's `gallery` array.
- Saved a rollback backup before the cover/story cleanup pass:
  - Backup folder: `_backup-before-cover-story-cleanup-20260607-045455`.
  - Enlarged the desktop homepage latest cover again by changing `.latest-cover` to `max-width: min(88vw, 1280px)` and removing the desktop image max-height cap.
  - Left-aligned the issue-page `Cover Look` caption and removed the divider directly under the feature hero/caption area.
  - Removed the `Save This Story` button from issue/model pages.
  - Filtered `Location`, `Style`, and `Gear` out of the issue-page credits display.
- Saved a rollback backup before enlarging the desktop latest cover:
  - Backup folder: `_backup-before-desktop-cover-enlarge-20260607-044923`.
  - Increased the desktop homepage latest feature area from `min(88vw, 1180px)` to `min(88vw, 1500px)`.
  - Increased the desktop latest cover cap from `620px` to `860px` so the main cover reads larger and closer to Vogue's full-screen feature scale.
  - Mobile cover rules were left unchanged.

### 2026-06-06

- Fixed mobile hamburger horizontal drift on scroll:
  - The mobile header now pins `.nav-toggle-button` to the same right offset across normal, compact, announcement-hidden, and open-menu states.
  - Removed mobile right-position animation by limiting the button transition to vertical `top` movement only.
- Saved a rollback backup before aligning the issue-page cover/caption area:
  - Backup folder: `_backup-before-issue-caption-align-20260606-063000`.
  - Issue/model pages now keep the `Cover Look` text directly under the cover image in the same media column, aligned to the image width like the Vogue reference instead of as a detached centered block.
- Refined issue/model article typography only:
  - Narrowed the story reading column.
  - Reduced oversized article body text.
  - Increased line-height for a more polished editorial reading feel.
  - Reduced and repositioned the drop cap so it integrates more like the Vogue reference.
  - Slightly reduced the `Follow the Feature` pill scale so it does not overpower the article opening.
- Corrected the article typography pass after user review:
  - Fixed a later half-screen/tablet rule that was overriding the narrower story column back to a wider layout.
  - Reduced article body text further and switched to a softer editorial serif stack for a more professional reading feel.
  - Increased body line-height and adjusted the drop cap to feel more deliberate.
  - Changed the article action label from `Follow the Feature` to `Save This Story`.
- Refined the issue story page again from the user's side-by-side screenshot:
  - Made the `Cover Look` area caption-like with smaller Helvetica-style text and a narrow Vogue-like width.
  - Shortened and rewrote the generated cover look copy so it reads more like editorial credits/caption text.
  - Changed story copy generation to output real paragraphs instead of one long paragraph.
  - Changed the article body to a thinner Times-style serif and kept the reading column narrow across half-screen/mobile breakpoints.
- Restored the homepage latest cover presentation after user screenshot:
  - The homepage latest cover should not run edge-to-edge.
  - It should sit in a centered white image area with visible page margin/breathing room like the Vogue mobile magazine reference.
  - Removed a duplicate mobile rule that was resetting the latest cover width to full bleed.
- Removed homepage latest-issue duplication:
  - The featured/latest issue at the top should not appear again as the first card in the homepage issue grid.
  - Homepage grid should begin with the next newest issue while the full archive page still includes all issues newest-first.
- Refined the latest issue promo strip from the user's Vogue side-by-side:
  - Promo content should feel like one centered offer, not separated columns.
  - Thumbnail remains on the left with text/button grouped tightly on the right.
  - Thumbnail shadow should fall softly down and right so it feels like a physical magazine/booklet on paper.
- Reduced the blank scroll gap before the homepage latest cover:
  - The main cover should come closer under the sticky header after the promo strip scrolls away, similar to the Vogue reference.
  - The fix is the promo strip's bottom margin, not the header spacing.
- Further refined the scrolled homepage cover gap:
  - Added a compact-header-specific pull-up for `.latest-feature` so the cover sits closer under the sticky header only after scrolling.
  - Kept the pull-up scoped to the compact state instead of changing the normal page layout.
- Delayed desktop nav hiding on scroll:
  - Compact header can begin earlier, but the full nav row should remain visible longer like the Vogue reference.
  - Nav hiding is now controlled by `is-nav-hidden` at a deeper scroll point instead of immediately by `is-compact`.
  - Announcement hiding matches the later nav-hide point so the earlier scroll state retains the full publication header longer.
- Tightened deep-scroll mobile header spacing:
  - On 390px-430px screens, once the announcement is hidden, the ZERJ row becomes shorter and the latest cover is pulled higher.
  - This is intended to reduce the extra white space between the sticky header and image in the Vogue-like scrolled mobile view.
- Testing a Vogue-like mobile masthead layout:
  - Mobile only: ZERJ aligned left, black `MAGAZINE` button in the masthead row, hamburger on the right.
  - Desktop remains centered.
- Refined desktop-only latest issue promo layout:
  - On desktop/full screen, the promo should match Vogue's one-line structure: thumbnail, sentence, button.
  - Mobile keeps the stacked text/button arrangement.
- Refined homepage `Magazine` title typography:
  - The title should feel thinner, tighter, and closer to Vogue's high-contrast editorial serif.
  - Avoid wide tracking or bold-looking fallback behavior for the `Magazine` word.
- Corrected homepage `Magazine` title after user screenshot:
  - Negative letter spacing made the title look too close together and visually bolder.
  - Use subtle positive spacing and optical horizontal widening instead.
  - Avoid Georgia as the fallback for the homepage `Magazine` title because it reads too heavy/chunky.

### 2026-06-05

- Created `ZERJ_MASTER_CONTEXT.md` as the project source of truth.
- Documented the approved Vogue-like magazine archive direction.
- Documented rejected directions including GTA/neon, beige/gold-heavy styling, and generic landing page layouts.
- Documented current files and design decisions.
- Documented current open tasks and priorities.
- Standardized the always-available three-line hamburger navigation across all pages.
- Replaced footer social text placeholders with white CSS-drawn icon-style marks to better match the Vogue-like footer reference.
- Added a 20-point homepage visual audit comparing ZERJ's current homepage direction against Vogue's magazine page. Future design decisions should reference this audit before implementation.
- Implemented audit items 1-4 only:
  - Header flattened: masthead row `72px` to `68px`, compact row `67px` to `64px`, masthead size reduced to `clamp(42px, 4vw, 56px)`, compact masthead to `clamp(36px, 3.4vw, 50px)`.
  - Navigation refined: row `52px` to `48px`, font `14px/500/.13em` to `13px/400/.12em`, gap reduced to `clamp(26px, 3.2vw, 46px)`.
  - `Magazine` title lightened: `clamp(58px, 5.8vw, 88px)` to `clamp(50px, 5vw, 76px)`, explicit `font-weight: 400`, tighter line-height.
  - True-white surfaces reinforced: `html`, `body`, header, main, promo, latest feature, menu surfaces set to white; warm `--gold-soft` changed to `#ffffff`.
- Diagnosed remaining off-white/warm perception sources and made a minimal CSS-only correction:
  - Kept `--mist: #f6f6f6` only on the issues archive section/cards.
  - Changed the non-archive Featured Models band and model cells to true `#ffffff`.
  - Replaced warm brown menu drawer shadows with neutral black RGBA shadows.
- Implemented approved Vogue-benchmark refinements:
  - Added smooth sticky header transitions for header height, nav/header opacity, transforms, and masthead font sizing with `prefers-reduced-motion` support.
  - Added a subtle printed-magazine shadow to the latest issue promo thumbnail.
  - Added newest-first issue sorting in `main.js`; homepage now displays the six most recent issues only.
  - Added `archive.html` with a full newest-to-oldest issue archive.
  - Added `Browse the Full Archive ->` link below the homepage recent issue grid.
  - Updated all primary `Issues` nav links to point to `archive.html`.
  - Removed footer actions (`More from ZERJ`, `See more stories`) and the country selector from all pages.
  - Replaced footer social placeholders/CSS-drawn marks with smaller inline SVG official-style social marks.
  - Replaced footer navigation with `About ZERJ | Submissions | Contact` and `Privacy Policy | Accessibility`.
- Implemented the next approved five-item refinement pass:
  - Added a header-only `max-width: 980px` compact layout so narrow viewports show only the masthead and hamburger, with the full nav available in the drawer.
  - Updated all announcement bars from `Your All-Access Pass to ZERJ` to `Be Featured in the Next Issue of ZERJ`.
  - Adjusted latest issue promo thumbnail shadow to `7px 11px 18px rgba(0, 0, 0, .18), 2px 3px 5px rgba(0, 0, 0, .08)` for a softer down/right magazine-on-paper effect.
  - Confirmed homepage issue output remains capped to `issues.slice(0, 6)` in newest-first order.
  - Removed the homepage `Featured Models / Featured in ZERJ Magazine` section.
- Implemented approved correction/refinement pass:
  - Restored the announcement bar in compact and narrow header states; only the full nav row is hidden.
  - Kept `Submit Now` and announcement text as `Be Featured in the Next Issue of ZERJ`.
  - Refined only the `Magazine` heading spacing/letter spacing for a more airy editorial feel.
  - Adjusted latest issue thumbnail shadow to `8px 12px 22px rgba(0, 0, 0, .14), 2px 4px 8px rgba(0, 0, 0, .07)`.
  - Confirmed homepage issue output remains capped to six newest-first issues and full archive remains all issues newest-to-oldest.
  - Kept the duplicate Featured Models homepage section removed.
  - Added a small optical centering nudge to header and footer ZERJ wordmarks.
  - Changed footer description to remove `@shotbyzerj` and end with `through the lens of ZERJ.`
- Implemented missed-item-only fix pass:
  - Restored the real three-line hamburger button in the compact/minimized header state.
  - Added more vertical breathing room around only the homepage `Magazine` heading, especially below it before the promo strip.
  - Increased the header ZERJ masthead optical centering nudge so the `J` feels visually balanced without changing copy, footer, archive, issue grid, or images.
- Implemented screenshot bug-only CSS fix:
  - Restored the compact header hamburger by showing the header action/menu-line label in the minimized state.
  - Lightened only the compact header separator under the ZERJ masthead by removing the doubled shadow and using a paler border color.
  - Reduced the homepage `Magazine` title section height while loosening the title line-height/tracking.
  - Strengthened the latest-issue thumbnail shadow down and slightly right for a physical magazine-on-paper feel.
- Implemented follow-up visual cleanup:
  - Removed the visible hamburger button block/vignette by making the always-visible hamburger button transparent.
  - Matched all three hamburger strokes to the same weight and color.
  - Lightened the `brand-row` separator under the ZERJ masthead to a Vogue-like pale gray.
  - Updated the homepage `Magazine` title font stack to prefer Didot/Bodoni-style system serif faces.
  - Adjusted the latest issue thumbnail shadow to sit down and slightly right.
- Fixed sticky header jump:
  - Changed the header from relative/fixed switching to sticky/sticky behavior so the ZERJ masthead remains frozen at the top while scrolling.
- Added delayed announcement-bar scroll behavior:
  - Header still becomes compact after initial scroll.
  - The `Be Featured in the Next Issue of ZERJ / Submit Now` bar animates out after a deeper scroll point, leaving the sticky ZERJ masthead and hamburger visible.
- Fixed post-announcement hamburger alignment:
  - When the announcement bar is hidden, the hamburger moves up to remain centered on the same row as the ZERJ masthead.
- Corrected compact scrolled hamburger override:
  - Added a combined compact + hidden-announcement selector so the later compact `top: 49px` rule no longer pushes the hamburger below the ZERJ row after scroll.
- Restored compact header divider:
  - The compact ZERJ row keeps a thin pale-gray divider under the masthead like the Vogue reference.
- Added mobile-only responsive pass for 390px-430px screens:
  - Adjusted announcement wrapping, masthead/hamburger sizing and alignment, Magazine heading spacing, promo strip layout, latest cover crop, one-column issue stacks, button sizing, and footer spacing inside a narrow media query only.
- Replaced footer social icons:
  - Swapped simplified custom-looking footer social marks for cleaner brand-style inline SVG icons for Facebook, X, Pinterest, Instagram, and TikTok across all pages.
- Removed `Models` from primary navigation:
  - Models duplicated the issue/archive browsing concept, so it should not appear as a top-level nav item.
- Applied final Vogue-referenced homepage refinements:
  - Updated announcement copy to `Be Featured in the Next Issue` and `Submit Now`, balanced as equal-width halves.
  - Refined editorial serif typography for `Magazine` with thinner/high-contrast font preferences and lighter tracking.
  - Stabilized hamburger behavior by keeping the icon consistently visible and adding smooth top/right transitions instead of visibility toggles.
  - Reworked the latest issue promo so the thumbnail stays left and the text/button stack together on the right.
  - Removed banner-style cropping from the latest cover image so the full cover artwork displays with `object-fit: contain`.
  - Preserved the quiet white/black/thin-gray mobile magazine archive feel.
- Fixed mobile/half-screen navigation flash:
  - The closed off-canvas nav now uses `visibility: hidden`, `opacity: 0`, and `pointer-events: none` until the hamburger checkbox is opened.
  - The drawer only transitions into view when checked, preventing the one-second popup/flicker during scroll or viewport changes.
- Fixed mobile scrolled hamburger row alignment:
  - The hidden announcement bar now also sets `min-height: 0`, preventing the collapsed bar from still reserving mobile space and pushing the ZERJ masthead below the hamburger.
- Refined issue/model story pages toward the Vogue feature reference:
  - Issue pages now render an editorial lead with text/byline on one side and full cover artwork on the other instead of a banner-like cropped cover.
  - The lead uses a `Magazine` kicker, model/title hierarchy, issue/photography/model byline stack, and full cover image with `object-fit: contain`.
  - The article section now starts with `Cover Look`, the issue subtitle, and a more editorial serif story paragraph.
  - Announcement bar collapse animation was restored by adding transition coverage for `min-height`, padding, and border-color while keeping the hamburger aligned.
- Reworked issue/model pages again to more closely match the Vogue feature screenshot:
  - Added generated editorial headlines, byline/date stacks, full-width `Cover Look` copy, a centered `Follow the Feature` pill, and a drop-cap story body.
  - Mobile announcement animation uses a fixed 40px height instead of `auto` so the bar can animate closed smoothly.

### Earlier Project Changes

- Built and iterated multiple homepage concepts.
- Rejected GTA-style cinematic/neon direction.
- Rebuilt site around ZERJ Magazine as a luxury editorial publication.
- Added shared `data.js` and `main.js` for issue rendering.
- Added real issue covers for Issues 001-006.
- Added photography page with filters/lightbox.
- Added about/submissions/contact page.
- Added issue feature pages.
- Removed `neon-city-hero.png` and generated placeholder assets from the project folder and generated image cache.
- Updated header repeatedly toward a Vogue-like structure.
- Added compact/frozen header behavior on scroll.
- Added black luxury footer.
