# Kafe Sərçə

Azerbaijani café website and QR-friendly digital menu. Next.js App Router, strict TypeScript, Tailwind CSS, Framer Motion and Lucide. Static export with locally optimized responsive WebP images; no external image hotlinks or backend.

## Run

- `npm ci`
- `npm run dev` — local server
- `npm run lint`
- `npm run typecheck`
- `npm test` — browser tests against the running development server; uses installed Chrome
- `npm run build` — production static output in `out/`
- `npm run images` — regenerate responsive images after replacing the source JPGs

## Owner updates

- `src/config/business.ts`: verified address, map URL, telephone, hours, official logo and founding year. Unknown values stay null. The founding-year badge is deliberately omitted until confirmed. Pet-friendly identity comes from the supplied brief.
- `src/data/menu.ts`: categories and menu records. Replace the clearly marked demonstration dataset and set `isDemo` to false only after owner verification. Prices are numbers in AZN; null means pending. Variants, allergens, tags, images and availability are supported. Unavailable items stay visible.
- `src/types/menu.ts`: record structure.
- `src/components/brand.tsx`: isolated temporary text wordmark. The favicon and social card are also temporary branding.
- `src/app/globals.css`: shared tokens and responsive layouts.
- `NEXT_PUBLIC_SITE_URL`: optional canonical origin override at build time.

Business details are not invented. Current item names and availability are demonstrations, not an actual café menu. No demonstration prices are published. Featured products remain a friendly pending state. Structured data contains only supplied facts; verified menu records are included only once demo mode is disabled.

## Photography

No local café assets were supplied and Instagram could not be accessed. Photos are locally stored illustrative stock images, visibly labeled; they do not depict Kafe Sərçə. Replace all three with owner-supplied photos before public launch. Free use/modification permitted under https://www.pexels.com/license/; no endorsement implied.

- Volkan Buyukvardar: https://www.pexels.com/photo/modern-green-interior-design-of-cafe-14614776/
- Hafize Balcı: https://www.pexels.com/photo/cappuccino-in-cup-on-saucer-19334822/
- Ebahir: https://www.pexels.com/photo/vintage-coffee-and-books-on-wooden-table-28571292/

## Verification

Browser suite covers 360, 390, 768, 1024 and 1440px on homepage and menu; no horizontal overflow; search transliteration and description search; every category; direct category URLs and reload; unavailable/empty states; mobile focus trap and Escape restoration; reduced motion; axe WCAG A/AA checks; custom 404. Screenshots are generated in ignored `test-results/`. These automated checks do not replace owner review of business content.

The site has no cart, payment, authentication, reservations or admin dashboard. Phone and map actions appear when verified values are supplied. Deployment is owner-private until public release is explicitly requested.
