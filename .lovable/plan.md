All requested edits keep the site fully static (no backend needed). Here's what I'll do:

## 1. Hero section rebuild (mobile-first)
- Replace header wordmark with the StrongerHer logo image (purple LOGO-06).
- Make the Arabic language toggle a large, pill-shaped button (clearly visible on mobile, e.g. `العربية` with a globe icon, ~44px tall, bold).
- Add Instagram icon (lucide `Instagram`) before `@coachhebahsalem` in header.
- Remove the "Fitness • Nutrition • Lifestyle Coaching for Women" eyebrow.
- Below the headline "Feel proud of the woman you see in the mirror." add a **video placeholder** (responsive 16:9 black/branded box with play icon and "Sales video — coming soon"). Easy to swap later for YouTube embed or MP4.
- Below the video: the two description lines, then **JOIN STRONGERHER BOOTCAMP** button.
- Below the button: a bold **gold banner** "STRONGERHER BOOTCAMP STARTS JUNE 22, 2026".
- Below that: small "Bootcamp Starts In" label + existing countdown.
- Cut hero vertical padding so on a 390px viewport everything from logo → countdown fits with minimal scroll.

## 2. Content cleanup
- Delete the "Watch and Learn" section entirely.
- Remove all lavender eyebrow labels (`.eyebrow` chips above section headings) site-wide: Success Stories, Outcomes, Inside the 6-Week Program, etc.
- Testimonials section: keep only "Real Women. Real Progress." — remove the "See what real women…" subline.
- Remove standalone headings "Outcomes" and "Inside the 6-Week Program" (keep the content blocks underneath).
- Trim repetitive intro paragraphs above each section.

## 3. Spacing pass
- Reduce `.section-pad` from `5rem / 7rem` to `~3rem / 4.5rem` (≈35% less).
- Tighten internal gaps (`gap-*`, `mt-*`, `mb-*`) between headlines, paragraphs, buttons, cards across the page.
- Reduce hero top/bottom padding more aggressively for mobile.

## 4. Testimonials
- Parse `testimonials english.pdf` and replace the testimonial array verbatim (no rewriting). Keep current slider/modal design.

## 5. "Who Is This For?" image
- Upload `sitting at desk with fitness hijab.jpeg` as a Lovable Asset and use it as-is (no filters/crop beyond responsive `object-cover` framing already used). Ensure it looks good on mobile.

## 6. Other
- Keep all existing CTAs, Stripe link, WhatsApp floating button, FAQ accordion, i18n toggle behaviour, and #checkout anchor exactly as they are.
- Keep the Arabic translation working — Arabic strings for any new/changed copy will be added to `src/i18n.tsx`.

## Technical notes
- Files I'll touch: `src/LandingPage.tsx`, `src/i18n.tsx`, `src/styles.css`, `src/components/Countdown.tsx`, `src/components/TestimonialSlider.tsx`, possibly `src/components/StickyMobileCTA.tsx`. Add logo + desk image as `lovable-assets` pointers under `src/assets/`.
- No new dependencies. Output remains a pure static `dist/index.html` + `dist/assets/` bundle suitable for HostGator File Manager upload.

## What I won't do
- Won't embed a real video (you chose placeholder). When you have the YouTube/Vimeo URL or MP4, send it and I'll swap the placeholder in one quick edit.
