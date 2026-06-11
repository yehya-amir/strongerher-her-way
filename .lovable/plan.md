## Goal
Display the hero sales video (portrait orientation) without cropping, on both English and Arabic pages, on desktop and mobile.

## Problem
The hero video container currently uses `aspect-video` (16:9 landscape) with `object-cover`. Since the actual video is portrait (9:16), most of it is cropped and only a small middle band shows.

## Changes (src/LandingPage.tsx only)

1. **Switch container aspect ratio to portrait**
   - Replace `aspect-video` with `aspect-[9/16]` so the frame matches the video shape.
   - Constrain width so the tall frame doesn't dominate the screen: change `max-w-6xl` to `max-w-sm sm:max-w-md lg:max-w-lg` (roughly 384–512px wide), centered.

2. **Keep video filling the frame cleanly**
   - Keep `object-cover` (now a no-op since aspect matches) but ensure `w-full h-full` on both the `<video>` and the thumbnail `<img>`.
   - Apply the same portrait frame to the thumbnail/play-button overlay so the poster image isn't letterboxed.

3. **Minimum height safeguard**
   - Add `min-h-[480px] sm:min-h-[560px] lg:min-h-[640px]` on the video frame so the portrait video has real presence even on narrow screens, while still scaling with the aspect ratio.

4. **Apply identically to both languages**
   - The same hero block renders for `/` and `/ar`, so a single edit covers both. No i18n string changes.

## Out of scope
- No copy, layout, testimonial, countdown, form, or other section changes.
- No new assets; existing `sales-video-en.mp4`, `sales-video-ar.mp4`, and thumbnails remain.
